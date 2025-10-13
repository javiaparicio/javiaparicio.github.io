<?php
/**
 * WordPress Theme Installation Script
 * 
 * This script helps set up the Javi Aparicio Foto theme after installation
 */

// Prevent direct access
if (!defined('ABSPATH')) {
    exit;
}

class JaviAparicioThemeInstaller {
    
    public function __construct() {
        add_action('after_switch_theme', array($this, 'setup_theme'));
        add_action('admin_notices', array($this, 'installation_notice'));
    }
    
    public function setup_theme() {
        // Create default pages
        $this->create_default_pages();
        
        // Set up menus
        $this->setup_menus();
        
        // Set default options
        $this->set_default_options();
        
        // Create sample content
        $this->create_sample_content();
        
        // Flush rewrite rules
        flush_rewrite_rules();
    }
    
    private function create_default_pages() {
        $pages = array(
            array(
                'title' => 'Portraits',
                'slug' => 'portraits',
                'content' => '<h2>Portrait Photography</h2>
<p>Professional portrait photography that captures your personality and tells your story.</p>

<h3>Portrait Sessions</h3>
<p>I specialize in creating beautiful, natural portraits that reflect your true self. Each session is tailored to your individual style and preferences.</p>

<h3>What to Expect</h3>
<ul>
<li><strong>Consultation</strong> - We\'ll discuss your vision and goals</li>
<li><strong>Planning</strong> - Location, styling, and session details</li>
<li><strong>Photography</strong> - Professional session with guidance</li>
<li><strong>Editing</strong> - Careful post-processing for best results</li>
<li><strong>Delivery</strong> - High-resolution images in your preferred format</li>
</ul>

<p>Ready to create beautiful portraits? Contact me to book your session.</p>'
            ),
            array(
                'title' => 'Events',
                'slug' => 'events',
                'content' => '<h2>Event Photography</h2>
<p>Professional event photography that captures the special moments and emotions of your important occasions.</p>

<h3>Event Coverage</h3>
<p>From intimate gatherings to large celebrations, I document your events with a professional eye for detail and emotion.</p>

<h3>Services Available</h3>
<ul>
<li><strong>Weddings</strong> - Complete wedding day coverage</li>
<li><strong>Corporate Events</strong> - Business meetings, conferences, and celebrations</li>
<li><strong>Birthday Parties</strong> - Milestone celebrations and special occasions</li>
<li><strong>Anniversaries</strong> - Celebrating important milestones</li>
<li><strong>Custom Events</strong> - Any special occasion you want to remember</li>
</ul>

<p>Let\'s discuss your event photography needs. Get in touch for a personalized quote.</p>'
            ),
            array(
                'title' => 'Contact',
                'slug' => 'contact',
                'content' => '<h2>Get in Touch</h2>
<p>Ready to create something amazing together? Let\'s discuss your photography needs.</p>

<h3>Professional Photography Services</h3>
<p>I offer personalized photography services tailored to your specific needs and vision. Every project is unique, and so is my approach.</p>

<h3>Services Available</h3>
<ul>
<li><strong>Portrait Photography</strong> - Professional portrait sessions</li>
<li><strong>Event Photography</strong> - Weddings, corporate events, celebrations</li>
<li><strong>Commercial Photography</strong> - Business and product photography</li>
<li><strong>Custom Projects</strong> - Tailored solutions for your specific needs</li>
</ul>

<p>Get in touch to discuss your photography requirements and get a personalized quote.</p>'
            ),
            array(
                'title' => 'Pricing',
                'slug' => 'pricing',
                'content' => '<h2>Professional Photography Services</h2>
<p>Every project is unique, and so is my approach. I offer personalized photography services tailored to your specific needs and vision.</p>

<h3>Portrait Session</h3>
<p>Professional portrait photography session</p>
<ul>
<li>1-2 hour session</li>
<li>Professional editing</li>
<li>High-resolution digital files</li>
<li>Content management for portfolios</li>
</ul>
<p><strong>Starting from CHF 300</strong></p>

<h3>Event Photography</h3>
<p>Professional event documentation</p>
<ul>
<li>Full event coverage</li>
<li>Professional editing</li>
<li>High-resolution digital files</li>
<li>Quick turnaround</li>
</ul>
<p><strong>Starting from CHF 500</strong></p>

<h3>Custom Projects</h3>
<p>Tailored photography solutions</p>
<ul>
<li>Consultation and planning</li>
<li>Flexible scheduling</li>
<li>Custom deliverables</li>
<li>Ongoing support</li>
</ul>
<p><strong>Custom pricing</strong></p>'
            ),
            array(
                'title' => 'Legal',
                'slug' => 'legal',
                'content' => '<h2>Legal Information</h2>
<p>Legal information and terms for Javi Aparicio Foto services.</p>'
            ),
            array(
                'title' => 'Terms and Conditions',
                'slug' => 'terms-and-conditions',
                'content' => '<h2>Terms and Conditions</h2>
<p>Terms and conditions for photography services.</p>'
            ),
            array(
                'title' => 'Privacy Policy',
                'slug' => 'privacy-policy',
                'content' => '<h2>Privacy Policy</h2>
<p>Privacy policy and data protection information.</p>'
            )
        );
        
        foreach ($pages as $page) {
            $existing = get_page_by_path($page['slug']);
            if (!$existing) {
                $page_id = wp_insert_post(array(
                    'post_title' => $page['title'],
                    'post_name' => $page['slug'],
                    'post_type' => 'page',
                    'post_status' => 'publish',
                    'post_content' => $page['content']
                ));
                
            }
        }
    }
    
    private function setup_menus() {
        // Create primary menu
        $menu_id = wp_create_nav_menu('Primary Menu');
        
        if ($menu_id && !is_wp_error($menu_id)) {
            $menu_items = array(
                array('title' => 'Home', 'url' => home_url('/')),
                array('title' => 'Portraits', 'url' => get_post_type_archive_link('portraits')),
                array('title' => 'Events', 'url' => get_post_type_archive_link('events')),
                array('title' => 'Pricing', 'url' => get_permalink(get_page_by_path('pricing'))),
                array('title' => 'Contact', 'url' => get_permalink(get_page_by_path('contact')))
            );
            
            foreach ($menu_items as $item) {
                wp_update_nav_menu_item($menu_id, 0, array(
                    'menu-item-title' => $item['title'],
                    'menu-item-url' => $item['url'],
                    'menu-item-status' => 'publish'
                ));
            }
            
            // Set menu location
            $locations = get_theme_mod('nav_menu_locations');
            $locations['primary'] = $menu_id;
            set_theme_mod('nav_menu_locations', $locations);
        }
        
        // Create footer menu
        $footer_menu_id = wp_create_nav_menu('Footer Menu');
        
        if ($footer_menu_id && !is_wp_error($footer_menu_id)) {
            $footer_items = array(
                array('title' => 'Legal', 'url' => get_permalink(get_page_by_path('legal'))),
                array('title' => 'Terms and Conditions', 'url' => get_permalink(get_page_by_path('terms-and-conditions'))),
                array('title' => 'Privacy Policy', 'url' => get_permalink(get_page_by_path('privacy-policy'))),
                array('title' => 'Sitemap', 'url' => home_url('/sitemap.xml'))
            );
            
            foreach ($footer_items as $item) {
                wp_update_nav_menu_item($footer_menu_id, 0, array(
                    'menu-item-title' => $item['title'],
                    'menu-item-url' => $item['url'],
                    'menu-item-status' => 'publish'
                ));
            }
            
            // Set footer menu location
            $locations = get_theme_mod('nav_menu_locations');
            $locations['footer'] = $footer_menu_id;
            set_theme_mod('nav_menu_locations', $locations);
        }
    }
    
    private function set_default_options() {
        // Set default theme options
        
        // Set default image sizes
        update_option('thumbnail_size_w', 350);
        update_option('thumbnail_size_h', 350);
        update_option('medium_size_w', 600);
        update_option('medium_size_h', 400);
        update_option('large_size_w', 1200);
        update_option('large_size_h', 800);
    }
    
    public function installation_notice() {
        if (get_transient('javi_aparicio_theme_installed')) {
            ?>
            <div class="notice notice-success is-dismissible">
                <p><strong>Javi Aparicio Foto Theme</strong> has been installed successfully!</p>
                <p>Next steps:</p>
                <ul>
                    <li>Go to <a href="<?php echo admin_url('customize.php'); ?>">Appearance → Customize</a> to configure theme options</li>
                    <li>Visit <a href="<?php echo admin_url('edit.php?post_type=portraits'); ?>">Portraits</a> to add your portfolio</li>
                    <li>Visit <a href="<?php echo admin_url('edit.php?post_type=events'); ?>">Events</a> to add your events</li>
                    <li>Go to <a href="<?php echo admin_url('tools.php?page=import-jekyll-content'); ?>">Tools → Import Jekyll Content</a> to import existing content</li>
                </ul>
            </div>
            <?php
            delete_transient('javi_aparicio_theme_installed');
        }
    }
}

// Initialize the installer
new JaviAparicioThemeInstaller();

// Set installation flag
add_action('after_switch_theme', function() {
    set_transient('javi_aparicio_theme_installed', true, 60);
});
