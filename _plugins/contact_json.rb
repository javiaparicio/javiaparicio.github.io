# frozen_string_literal: true

require 'json'

module Jekyll
  module ContactJson
    class << self
      def register!
        Jekyll::Hooks.register(:site, :post_write) do |site|
          next unless site.config['lang'] == site.config['languages'].last

          contact = site.data['contact']
          next unless contact.is_a?(Hash) && !contact.empty?

          root = File.expand_path('_site', site.source)
          File.write(File.join(root, 'contact.json'), "#{JSON.generate(contact)}\n")
        end
      end
    end
  end
end

Jekyll::ContactJson.register!
