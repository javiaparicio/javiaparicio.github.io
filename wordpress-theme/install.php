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
        
        // Flush rewrite rules
        flush_rewrite_rules();
    }
    
    private function create_default_pages() {
        $pages = array(
            array(
                'title' => 'Contact',
                'slug' => 'contact',
                'template' => 'page-contact.php',
                'content' => 'Contact page content...'
            ),
            array(
                'title' => 'Pricing',
                'slug' => 'pricing',
                'template' => 'page-pricing.php',
                'content' => 'Pricing page content...'
            ),
            array(
                'title' => 'Legal',
                'slug' => 'legal',
                'content' => 'Legal information...'
            ),
            array(
                'title' => 'Terms and Conditions',
                'slug' => 'terms-and-conditions',
                'content' => 'Terms and conditions...'
            ),
            array(
                'title' => 'Privacy Policy',
                'slug' => 'privacy-policy',
                'content' => 'Privacy policy...'
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
                
                if (isset($page['template']) && $page_id) {
                    update_post_meta($page_id, '_wp_page_template', $page['template']);
                }
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
        set_theme_mod('contact_email', 'info@javiapariciofoto.ch');
        set_theme_mod('contact_phone', '+41 77 231 12 63');
        set_theme_mod('contact_address', 'Stauffacherstrasse 44, 3014 Bern, Switzerland');
        
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
