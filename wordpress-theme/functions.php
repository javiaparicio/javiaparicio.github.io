<?php
/**
 * Javi Aparicio Foto Theme Functions
 *
 * @package JaviAparicioFoto
 */

// Prevent direct access
if (!defined('ABSPATH')) {
    exit;
}

// Theme setup
function javi_aparicio_theme_setup() {
    // Add theme support for various features
    add_theme_support('post-thumbnails');
    add_theme_support('title-tag');
    add_theme_support('html5', array(
        'search-form',
        'comment-form',
        'comment-list',
        'caption',
    ));
    add_theme_support('custom-logo');
    add_theme_support('customize-selective-refresh-widgets');
    
    // Add support for wide and full alignment
    add_theme_support('align-wide');
    
    // Add support for responsive embeds
    add_theme_support('responsive-embeds');
    
// Register navigation menus
register_nav_menus(array(
    'primary' => __('Primary Menu', 'javi-aparicio-foto'),
    'footer' => __('Footer Menu', 'javi-aparicio-foto'),
    'social' => __('Social Links', 'javi-aparicio-foto'),
));
    
    // Add image sizes
    add_image_size('about-image', 300, 300, true);
}
add_action('after_setup_theme', 'javi_aparicio_theme_setup');

// Enqueue scripts and styles
function javi_aparicio_scripts() {
    // Main stylesheet
    wp_enqueue_style('javi-aparicio-style', get_stylesheet_uri(), array(), '1.0.0');
    wp_enqueue_style('javi-aparicio-main', get_template_directory_uri() . '/assets/css/main.css', array(), '1.0.0');
    
    // Fonts
    wp_enqueue_style('javi-aparicio-fonts', 'https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300;400;500&display=swap', array(), null);
    
    // JavaScript
    wp_enqueue_script('javi-aparicio-main', get_template_directory_uri() . '/assets/js/script.js', array(), '1.0.0', true);
    
}
add_action('wp_enqueue_scripts', 'javi_aparicio_scripts');

// Add favicon support
function javi_aparicio_favicon() {
    $favicon_url = get_template_directory_uri() . '/favicon.ico';
    echo '<link rel="shortcut icon" href="' . esc_url($favicon_url) . '" />' . "\n";
}
add_action('wp_head', 'javi_aparicio_favicon');




// Customizer settings are now in customizer.php








// Add theme support for WPML
function javi_aparicio_wpml_support() {
    if (function_exists('icl_register_string')) {
        icl_register_string('javi-aparicio-foto', 'Site Title', get_bloginfo('name'));
        icl_register_string('javi-aparicio-foto', 'Site Description', get_bloginfo('description'));
    }
}
add_action('init', 'javi_aparicio_wpml_support');

// Include installation script
require_once get_template_directory() . '/install.php';

// Include quick setup script
require_once get_template_directory() . '/quick-setup.php';

// Include customization options
require_once get_template_directory() . '/customizer.php';

// Accessibility Walker for navigation menus
class Accessibility_Walker extends Walker_Nav_Menu {
    
    function start_lvl(&$output, $depth = 0, $args = null) {
        $indent = str_repeat("\t", $depth);
        $output .= "\n$indent<ul class=\"sub-menu\" role=\"menu\">\n";
    }
    
    function end_lvl(&$output, $depth = 0, $args = null) {
        $indent = str_repeat("\t", $depth);
        $output .= "$indent</ul>\n";
    }
    
    function start_el(&$output, $item, $depth = 0, $args = null, $id = 0) {
        $indent = ($depth) ? str_repeat("\t", $depth) : '';
        
        $classes = empty($item->classes) ? array() : (array) $item->classes;
        $classes[] = 'menu-item-' . $item->ID;
        
        $class_names = join(' ', apply_filters('nav_menu_css_class', array_filter($classes), $item, $args));
        $class_names = $class_names ? ' class="' . esc_attr($class_names) . '"' : '';
        
        $id = apply_filters('nav_menu_item_id', 'menu-item-'. $item->ID, $item, $args);
        $id = $id ? ' id="' . esc_attr($id) . '"' : '';
        
        $output .= $indent . '<li' . $id . $class_names . ' role="none">';
        
        $attributes = ! empty($item->attr_title) ? ' title="'  . esc_attr($item->attr_title) .'"' : '';
        $attributes .= ! empty($item->target)     ? ' target="' . esc_attr($item->target     ) .'"' : '';
        $attributes .= ! empty($item->xfn)        ? ' rel="'    . esc_attr($item->xfn        ) .'"' : '';
        $attributes .= ! empty($item->url)        ? ' href="'   . esc_attr($item->url        ) .'"' : '';
        
        // Add role and aria attributes for accessibility
        $attributes .= ' role="menuitem"';
        if ($item->target === '_blank') {
            $attributes .= ' aria-label="' . esc_attr($item->title) . ' (opens in new tab)"';
        }
        
        $item_output = isset($args->before) ? $args->before : '';
        $item_output .= '<a' . $attributes .'>';
        $item_output .= (isset($args->link_before) ? $args->link_before : '') . apply_filters('the_title', $item->title, $item->ID) . (isset($args->link_after) ? $args->link_after : '');
        $item_output .= '</a>';
        $item_output .= isset($args->after) ? $args->after : '';
        
        $output .= apply_filters('walker_nav_menu_start_el', $item_output, $item, $depth, $args);
    }
    
    function end_el(&$output, $item, $depth = 0, $args = null) {
        $output .= "</li>\n";
    }
}
