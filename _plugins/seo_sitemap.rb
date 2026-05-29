# frozen_string_literal: true

require 'fileutils'

module Jekyll
  module SEOSitemap
    class << self
      def register!
        Jekyll::Hooks.register(:site, :post_write) do |site|
          next unless site.config['lang'] == site.config['languages'].last

          Writer.new(site).call
        end
      end
    end

    class Writer
      def initialize(site)
        @site = site
      end

      def call
        root = File.expand_path('_site', @site.source)
        pages = sitemap_pages

        @site.config['languages'].each do |lang|
          urls = pages.map { |page| page_loc(page, lang) }.compact.sort.uniq
          dest = dest_for_lang(root, lang, @site.config['default_lang'])
          FileUtils.mkdir_p(dest)
          File.write(File.join(dest, 'sitemap.xml'), render_urlset(urls))
        end

        write_sitemap_index(root)
      end

      private

      def sitemap_pages
        @site.pages.select do |page|
          page.data['namespace'] &&
            page.data['layout'] == 'default' &&
            page.data['sitemap'] != false &&
            page.data['noindex'] != true &&
            page.data['layout'] != 'forward'
        end
      end

      def dest_for_lang(root, lang, default_lang)
        lang == default_lang ? root : File.join(root, lang)
      end

      def page_loc(page, lang)
        base = @site.config['url'].to_s.chomp('/')
        prefix = lang == @site.config['default_lang'] ? '' : "/#{lang}"
        permalink = page.data["permalink_#{lang}"] || page.data['permalink']
        return nil if permalink.nil? || permalink.empty?

        path = permalink.start_with?('/') ? permalink : "/#{permalink}"
        "#{base}#{prefix}#{path}"
      end

      def render_urlset(urls)
        entries = urls.map do |loc|
          priority = loc.count('/') <= 4 ? '0.9' : '0.7'
          <<~XML.strip
            <url>
              <loc>#{loc}</loc>
              <changefreq>monthly</changefreq>
              <priority>#{priority}</priority>
            </url>
          XML
        end.join("\n")

        <<~XML
          <?xml version="1.0" encoding="UTF-8"?>
          <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
          #{entries}
          </urlset>
        XML
      end

      def write_sitemap_index(root)
        base = @site.config['url'].to_s.chomp('/')
        default_lang = @site.config['default_lang']

        entries = @site.config['languages'].map do |lang|
          path = lang == default_lang ? '/sitemap.xml' : "/#{lang}/sitemap.xml"
          "<sitemap><loc>#{base}#{path}</loc></sitemap>"
        end

        xml = <<~XML
          <?xml version="1.0" encoding="UTF-8"?>
          <sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
          #{entries.join("\n")}
          </sitemapindex>
        XML

        File.write(File.join(root, 'sitemap_index.xml'), xml)
      end
    end
  end
end

Jekyll::SEOSitemap.register!
