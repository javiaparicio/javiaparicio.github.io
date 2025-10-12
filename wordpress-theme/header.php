<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="profile" href="https://gmpg.org/xfn/11">
    
    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<div class="container">
    <!-- Hamburger Icon (Visible on Mobile) -->
    <div class="hamburger" id="hamburger">&#9776;</div>

    <!-- Sidebar -->
    <nav class="sidebar" id="sidebar">
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
        
        <ul class="menu-list">
            <?php
            wp_nav_menu(array(
                'theme_location' => 'primary',
                'container' => false,
                'items_wrap' => '%3$s',
                'fallback_cb' => 'javi_aparicio_fallback_menu',
            ));
            ?>
        </ul>
        
        <ul class="language_selector">
            <?php
            // Language switcher - you can integrate with WPML or Polylang here
            $languages = array('en' => 'EN', 'es' => 'ES', 'de' => 'DE');
            $current_lang = get_locale();
            
            foreach ($languages as $lang_code => $lang_name) {
                $lang_url = home_url('/');
                if ($lang_code !== 'en') {
                    $lang_url = home_url('/' . $lang_code . '/');
                }
                echo '<li><a href="' . esc_url($lang_url) . '">' . esc_html($lang_name) . '</a></li>';
            }
            ?>
        </ul>
        
        <ul class="socials">
            <?php
            $social_links = array(
                array('name' => 'Pixelfed', 'url' => 'https://pixelfed.social/javifoto', 'icon' => 'iconlocal-pixelfed'),
                array('name' => 'Instagram', 'url' => 'https://instagram.com/javiapariciofoto', 'icon' => 'icon-instagram'),
                array('name' => 'Telegram', 'url' => 'https://t.me/javiapariciofoto', 'icon' => 'icon-telegram'),
                array('name' => 'Whatsapp', 'url' => 'https://wa.me/+41772311263', 'icon' => 'icon-whatsapp'),
            );
            
            foreach ($social_links as $social) {
                echo '<li class="socials_item">';
                echo '<a href="' . esc_url($social['url']) . '" target="_blank" class="socials_item_link" title="' . esc_attr($social['name']) . '">';
                echo '<span class="' . esc_attr($social['icon']) . '" aria-hidden="true"></span>';
                echo '</a>';
                echo '</li>';
            }
            ?>
        </ul>
    </nav>

    <!-- Content -->
    <div class="content" id="content">
