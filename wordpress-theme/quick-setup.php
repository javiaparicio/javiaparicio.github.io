<?php
/**
 * Quick Setup Script for Javi Aparicio Foto WordPress Theme
 * 
 * This script helps you quickly set up the theme after installation
 * Run this script once after activating the theme
 */

// Prevent direct access
if (!defined('ABSPATH')) {
    exit;
}

class JaviAparicioQuickSetup {
    
    public function __construct() {
        add_action('admin_menu', array($this, 'add_setup_menu'));
        add_action('wp_ajax_quick_setup', array($this, 'handle_quick_setup'));
    }
    
    public function add_setup_menu() {
        add_management_page(
            'Quick Setup',
            'Quick Setup',
            'manage_options',
            'quick-setup',
            array($this, 'setup_page')
        );
    }
    
    public function setup_page() {
        ?>
        <div class="wrap">
            <h1>🚀 Quick Setup - Javi Aparicio Foto Theme</h1>
            <p>This tool will help you quickly set up your WordPress photography portfolio.</p>
            
            <div class="setup-steps">
                <div class="step">
                    <h2>Step 1: Create Pages</h2>
                    <p>Create essential pages for your photography portfolio.</p>
                    <button id="create-pages" class="button button-primary">Create Pages</button>
                    <div id="pages-status"></div>
                </div>
                
                <div class="step">
                    <h2>Step 2: Set Up Menus</h2>
                    <p>Create and configure navigation menus.</p>
                    <button id="setup-menus" class="button button-primary">Setup Menus</button>
                    <div id="menus-status"></div>
                </div>
                
                
                <div class="step">
                    <h2>Step 3: Configure Theme</h2>
                    <p>Set up theme options and basic settings.</p>
                    <button id="configure-theme" class="button button-primary">Configure Theme</button>
                    <div id="theme-status"></div>
                </div>
            </div>
            
            <div class="setup-complete" id="setup-complete" style="display: none;">
                <h2>🎉 Setup Complete!</h2>
                <p>Your WordPress photography portfolio is ready. Here's what you can do next:</p>
                <ul>
                    <li><a href="<?php echo admin_url('edit.php?post_type=page'); ?>">Manage Pages</a></li>
                    <li><a href="<?php echo admin_url('customize.php'); ?>">Customize Theme</a></li>
                    <li><a href="<?php echo home_url(); ?>">View Your Site</a></li>
                </ul>
            </div>
        </div>
        
        <style>
        .setup-steps {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 20px;
            margin: 20px 0;
        }
        
        .step {
            background: #f9f9f9;
            padding: 20px;
            border-radius: 8px;
            border: 1px solid #ddd;
        }
        
        .step h2 {
            margin-top: 0;
            color: #333;
        }
        
        .step button {
            margin-top: 10px;
        }
        
        .status-success {
            color: #46b450;
            font-weight: bold;
        }
        
        .status-error {
            color: #dc3232;
            font-weight: bold;
        }
        </style>
        
        <script>
        jQuery(document).ready(function($) {
            let completedSteps = 0;
            const totalSteps = 4;
            
            function checkCompletion() {
                completedSteps++;
                if (completedSteps >= totalSteps) {
                    $('#setup-complete').show();
                }
            }
            
            $('#create-pages').click(function() {
                $(this).prop('disabled', true).text('Creating...');
                $.post(ajaxurl, {
                    action: 'quick_setup',
                    step: 'create_pages',
                    nonce: '<?php echo wp_create_nonce('quick_setup'); ?>'
                }, function(response) {
                    if (response.success) {
                        $('#pages-status').html('<p class="status-success">✓ ' + response.data.message + '</p>');
                        checkCompletion();
                    } else {
                        $('#pages-status').html('<p class="status-error">✗ Error: ' + response.data + '</p>');
                    }
                });
            });
            
            $('#setup-menus').click(function() {
                $(this).prop('disabled', true).text('Setting up...');
                $.post(ajaxurl, {
                    action: 'quick_setup',
                    step: 'setup_menus',
                    nonce: '<?php echo wp_create_nonce('quick_setup'); ?>'
                }, function(response) {
                    if (response.success) {
                        $('#menus-status').html('<p class="status-success">✓ ' + response.data.message + '</p>');
                        checkCompletion();
                    } else {
                        $('#menus-status').html('<p class="status-error">✗ Error: ' + response.data + '</p>');
                    }
                });
            });
            
            $('#import-content').click(function() {
                $(this).prop('disabled', true).text('Importing...');
                $.post(ajaxurl, {
                    action: 'quick_setup',
                    step: 'import_content',
                    nonce: '<?php echo wp_create_nonce('quick_setup'); ?>'
                }, function(response) {
                    if (response.success) {
                        $('#content-status').html('<p class="status-success">✓ ' + response.data.message + '</p>');
                        checkCompletion();
                    } else {
                        $('#content-status').html('<p class="status-error">✗ Error: ' + response.data + '</p>');
                    }
                });
            });
            
            $('#configure-theme').click(function() {
                $(this).prop('disabled', true).text('Configuring...');
                $.post(ajaxurl, {
                    action: 'quick_setup',
                    step: 'configure_theme',
                    nonce: '<?php echo wp_create_nonce('quick_setup'); ?>'
                }, function(response) {
                    if (response.success) {
                        $('#theme-status').html('<p class="status-success">✓ ' + response.data.message + '</p>');
                        checkCompletion();
                    } else {
                        $('#theme-status').html('<p class="status-error">✗ Error: ' + response.data + '</p>');
                    }
                });
            });
        });
        </script>
        <?php
    }
    
    public function handle_quick_setup() {
        check_ajax_referer('quick_setup', 'nonce');
        
        $step = sanitize_text_field($_POST['step']);
        
        switch ($step) {
            case 'create_pages':
                $this->create_pages();
                break;
            case 'setup_menus':
                $this->setup_menus();
                break;
            case 'import_content':
                $this->import_content();
                break;
            case 'configure_theme':
                $this->configure_theme();
                break;
            default:
                wp_send_json_error('Invalid step');
        }
    }
    
    private function create_pages() {
        $pages = array(
            array('title' => 'Contact', 'slug' => 'contact'),
            array('title' => 'Pricing', 'slug' => 'pricing', 'template' => 'page-pricing.php'),
            array('title' => 'Legal', 'slug' => 'legal'),
            array('title' => 'Terms and Conditions', 'slug' => 'terms-and-conditions'),
            array('title' => 'Privacy Policy', 'slug' => 'privacy-policy')
        );
        
        $created = 0;
        foreach ($pages as $page) {
            $existing = get_page_by_path($page['slug']);
            if (!$existing) {
                $page_id = wp_insert_post(array(
                    'post_title' => $page['title'],
                    'post_name' => $page['slug'],
                    'post_type' => 'page',
                    'post_status' => 'publish',
                    'post_content' => 'Content for ' . $page['title']
                ));
                
                if (isset($page['template']) && $page_id) {
                    update_post_meta($page_id, '_wp_page_template', $page['template']);
                }
                $created++;
            }
        }
        
        wp_send_json_success(array('message' => "Created {$created} pages successfully."));
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
            
            $locations = get_theme_mod('nav_menu_locations');
            $locations['primary'] = $menu_id;
            set_theme_mod('nav_menu_locations', $locations);
        }
        
        wp_send_json_success(array('message' => 'Menus created and configured successfully.'));
    }
    
    private function import_content() {
        // Content import is no longer needed - using regular pages
        wp_send_json_success(array('message' => 'Content setup completed. Portraits and Events are now regular pages.'));
    }
    
    private function configure_theme() {
        // Set default theme options
        
        // Set default language options
        set_theme_mod('language_1_name', 'EN');
        set_theme_mod('language_1_url', home_url('/'));
        set_theme_mod('language_2_name', 'ES');
        set_theme_mod('language_2_url', home_url('/es/'));
        set_theme_mod('language_3_name', 'DE');
        set_theme_mod('language_3_url', home_url('/de/'));
        
        // Create default social links menu
        $menu_id = wp_create_nav_menu('Social Links');
        
        if (!is_wp_error($menu_id)) {
            // Add social links to the menu
            $social_links = array(
                array('title' => 'Pixelfed', 'url' => 'https://pixelfed.social/javifoto', 'classes' => array('iconlocal-pixelfed')),
                array('title' => 'Instagram', 'url' => 'https://instagram.com/javiapariciofoto', 'classes' => array('icon-instagram')),
                array('title' => 'Telegram', 'url' => 'https://t.me/javiapariciofoto', 'classes' => array('icon-telegram')),
                array('title' => 'Whatsapp', 'url' => 'https://wa.me/+41772311263', 'classes' => array('icon-whatsapp')),
            );
            
            foreach ($social_links as $link) {
                wp_update_nav_menu_item($menu_id, 0, array(
                    'menu-item-title' => $link['title'],
                    'menu-item-url' => $link['url'],
                    'menu-item-classes' => implode(' ', $link['classes']),
                    'menu-item-status' => 'publish'
                ));
            }
            
            // Assign the menu to the social location
            $locations = get_theme_mod('nav_menu_locations');
            $locations['social'] = $menu_id;
            set_theme_mod('nav_menu_locations', $locations);
        }
        
        wp_send_json_success(array('message' => 'Theme configured with default settings including language and social options.'));
    }
}

// Initialize the quick setup
new JaviAparicioQuickSetup();
