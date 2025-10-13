<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="profile" href="https://gmpg.org/xfn/11">
    
    <!-- Favicon -->
    <link rel="icon" type="image/x-icon" href="<?php echo get_template_directory_uri(); ?>/favicon.ico">
    <link rel="icon" type="image/png" sizes="96x96" href="<?php echo get_template_directory_uri(); ?>/favicon-96x96.png">
    <link rel="icon" type="image/svg+xml" href="<?php echo get_template_directory_uri(); ?>/favicon.svg">
    <link rel="apple-touch-icon" href="<?php echo get_template_directory_uri(); ?>/apple-touch-icon.png">
    
    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<div class="container">
    <!-- Skip to main content link -->
    <a href="#content" class="skip-link">Skip to main content</a>
    
    <!-- Hamburger Icon (Visible on Mobile) -->
    <button class="hamburger" id="hamburger" aria-label="Toggle navigation menu" aria-expanded="false" aria-controls="sidebar">
        <span class="hamburger-icon" aria-hidden="true">&#9776;</span>
        <span class="sr-only">Menu</span>
    </button>

    <!-- Sidebar -->
    <nav class="sidebar" id="sidebar" role="navigation" aria-label="Main navigation">
        <div class="sidebar-logo">
            <?php
            $custom_logo_id = get_theme_mod('custom_logo');
            if ($custom_logo_id) {
                echo wp_get_attachment_image($custom_logo_id, 'full', false, array('alt' => get_bloginfo('name')));
            } else {
                echo '<img src="' . get_template_directory_uri() . '/assets/images/javiAparicioFotoLogo.webp" alt="' . get_bloginfo('name') . '">';
            }
            ?>
        </div>
        
        <ul class="menu-list" role="menubar">
            <?php
            wp_nav_menu(array(
                'theme_location' => 'primary',
                'container' => false,
                'items_wrap' => '%3$s',
                'walker' => new Accessibility_Walker(),
            ));
            ?>
        </ul>
        
        <?php
        // Check if Polylang integration is enabled
        $polylang_enabled = get_theme_mod('polylang_enabled', false);
        
        if ($polylang_enabled && function_exists('pll_the_languages')) {
            // Use Polylang for language selector
            $flag_display = get_theme_mod('polylang_flag_display', 'names');
            $display_format = get_theme_mod('polylang_display_format', 'slug');
            $hide_current = get_theme_mod('polylang_hide_current', false);
            $hide_no_translation = get_theme_mod('polylang_hide_no_translation', false);
            $force_home = get_theme_mod('polylang_force_home', false);
            
            // Configure flags and names based on dropdown selection
            $show_flags = ($flag_display === 'flags' || $flag_display === 'flags_names');
            $show_names = ($flag_display === 'names' || $flag_display === 'flags_names');
            
            // Get languages as array for proper loop handling
            $languages_array = pll_the_languages(array(
                'show_flags' => $show_flags,
                'show_names' => $show_names,
                'display_names_as' => $display_format,
                'hide_if_empty' => false,
                'force_home' => $force_home,
                'hide_if_no_translation' => $hide_no_translation,
                'hide_current' => $hide_current,
                'post_id' => null,
                'raw' => true,
                'echo' => false
            ));
            
            
            if ($languages_array && is_array($languages_array)) {
                echo '<ul class="language_selector ' . esc_attr($flag_display) . '" role="menubar" aria-label="Language selection">';
                
                $total_languages = count($languages_array);
                $current_index = 0;
                
                foreach ($languages_array as $language) {
                    echo '<li role="none"><a href="' . esc_url($language['url']) . '" role="menuitem" aria-label="Switch to ' . esc_attr($language['name']) . ' language">';
                    
                    // Add flag if enabled
                    if ($show_flags) {
                        // Polylang provides the flag as complete HTML img tag
                        if (!empty($language['flag'])) {
                            // Extract the src from the HTML img tag
                            if (preg_match('/src=["\']([^"\']+)["\']/', $language['flag'], $matches)) {
                                $flag_url = $matches[1];
                                echo '<img src="' . $flag_url . '" alt="' . esc_attr($language['name']) . '" width="16" height="12" style="margin-right: 5px; vertical-align: middle;">';
                            }
                        }
                    }
                    
                    // Add name if enabled
                    if ($show_names) {
                        echo esc_html($language['name']);
                    }
                    
                    echo '</a></li>';
                    
                    $current_index++;
                }
                
                echo '</ul>';
            } else {
                // Fallback if Polylang returns empty
                javi_aparicio_language_selector_fallback();
            }
        } else {
            // Use customizer language options or fallback
            $languages = javi_aparicio_get_language_options();
            
            if (!empty($languages)) {
                echo '<ul class="language_selector" role="menubar" aria-label="Language selection">';
                foreach ($languages as $language) {
                    echo '<li role="none"><a href="' . esc_url($language['url']) . '" role="menuitem" aria-label="Switch to ' . esc_attr($language['name']) . ' language">' . esc_html($language['name']) . '</a></li>';
                }
                echo '</ul>';
            } else {
                // Fallback to default languages
                javi_aparicio_language_selector_fallback();
            }
        }
        ?>
        
        <?php
        // Display social links menu
        if (has_nav_menu('social')) {
            $menu_items = wp_get_nav_menu_items(get_nav_menu_locations()['social']);
            if ($menu_items) {
                echo '<ul class="socials" role="menubar" aria-label="Social media links">';
                foreach ($menu_items as $item) {
                    // Get icon from CSS classes
                    $icon = '';
                    $classes = $item->classes;
                    
                    // Look for icon classes in the menu item classes
                    foreach ($classes as $class) {
                        if (strpos($class, 'icon-') === 0 || strpos($class, 'iconlocal-') === 0) {
                            $icon = $class;
                            break;
                        }
                    }
                    
                    // If no icon class found, try to extract from title
                    if (empty($icon)) {
                        $title = strtolower($item->title);
                        if (strpos($title, 'instagram') !== false) {
                            $icon = 'icon-instagram';
                        } elseif (strpos($title, 'pixelfed') !== false) {
                            $icon = 'iconlocal-pixelfed';
                        } elseif (strpos($title, 'telegram') !== false) {
                            $icon = 'icon-telegram';
                        } elseif (strpos($title, 'whatsapp') !== false) {
                            $icon = 'icon-whatsapp';
                        } elseif (strpos($title, 'facebook') !== false) {
                            $icon = 'icon-facebook';
                        } elseif (strpos($title, 'twitter') !== false) {
                            $icon = 'icon-twitter';
                        } elseif (strpos($title, 'linkedin') !== false) {
                            $icon = 'icon-linkedin';
                        } elseif (strpos($title, 'youtube') !== false) {
                            $icon = 'icon-youtube';
                        } else {
                            $icon = 'icon-link'; // Default icon
                        }
                    }
                    
                    echo '<li class="socials_item" role="none">';
                    echo '<a href="' . esc_url($item->url) . '" target="_blank" class="socials_item_link" role="menuitem" aria-label="Visit our ' . esc_attr($item->title) . ' page (opens in new tab)">';
                    echo '<span class="' . esc_attr($icon) . '" aria-hidden="true"></span>';
                    echo '<span class="sr-only">' . esc_html($item->title) . '</span>';
                    echo '</a>';
                    echo '</li>';
                }
                echo '</ul>';
            } else {
                // No social menu items found
                echo '<p>' . __('Please set up your social links menu in Appearance → Menus', 'javi-aparicio-foto') . '</p>';
            }
        } else {
            // No social menu assigned
            echo '<p>' . __('Please assign a social links menu in Appearance → Menus', 'javi-aparicio-foto') . '</p>';
        }
        ?>
    </nav>

    <!-- Content -->
    <div class="content" id="content">
