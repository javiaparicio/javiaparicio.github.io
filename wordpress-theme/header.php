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
        
        <ul class="language_selector" role="menubar" aria-label="Language selection">
            <?php
            // Get language options from customizer
            $languages = javi_aparicio_get_language_options();
            
            if (!empty($languages)) {
                foreach ($languages as $language) {
                    echo '<li role="none"><a href="' . esc_url($language['url']) . '" role="menuitem" aria-label="Switch to ' . esc_attr($language['name']) . ' language">' . esc_html($language['name']) . '</a></li>';
                }
            } else {
                // Fallback to default languages
                $default_languages = array('en' => 'EN', 'es' => 'ES', 'de' => 'DE');
                foreach ($default_languages as $lang_code => $lang_name) {
                    $lang_url = home_url('/');
                    if ($lang_code !== 'en') {
                        $lang_url = home_url('/' . $lang_code . '/');
                    }
                    echo '<li role="none"><a href="' . esc_url($lang_url) . '" role="menuitem" aria-label="Switch to ' . esc_attr($lang_name) . ' language">' . esc_html($lang_name) . '</a></li>';
                }
            }
            ?>
        </ul>
        
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
