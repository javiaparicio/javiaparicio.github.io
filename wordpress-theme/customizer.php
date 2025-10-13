<?php
/**
 * Theme Customizer Options
 * 
 * @package JaviAparicioFoto
 */

// Prevent direct access
if (!defined('ABSPATH')) {
    exit;
}

/**
 * Add customizer options
 */
function javi_aparicio_customize_register($wp_customize) {
    
    // Add Theme Options Section
    $wp_customize->add_section('javi_aparicio_options', array(
        'title' => __('Theme Options', 'javi-aparicio-foto'),
        'description' => __('Configure basic theme settings.', 'javi-aparicio-foto'),
        'priority' => 29,
    ));
    
    
    // Add Language Selection Section
    $wp_customize->add_section('javi_aparicio_languages', array(
        'title' => __('Language Selection', 'javi-aparicio-foto'),
        'description' => __('Configure the language selection menu in the sidebar.', 'javi-aparicio-foto'),
        'priority' => 30,
    ));
    
    // Language 1
    $wp_customize->add_setting('language_1_name', array(
        'default' => 'EN',
        'sanitize_callback' => 'sanitize_text_field',
    ));
    
    $wp_customize->add_control('language_1_name', array(
        'label' => __('Language 1 Name', 'javi-aparicio-foto'),
        'description' => __('Display name for the first language (e.g., EN, English)', 'javi-aparicio-foto'),
        'section' => 'javi_aparicio_languages',
        'type' => 'text',
    ));
    
    $wp_customize->add_setting('language_1_url', array(
        'default' => home_url('/'),
        'sanitize_callback' => 'esc_url_raw',
    ));
    
    $wp_customize->add_control('language_1_url', array(
        'label' => __('Language 1 URL', 'javi-aparicio-foto'),
        'description' => __('URL for the first language', 'javi-aparicio-foto'),
        'section' => 'javi_aparicio_languages',
        'type' => 'url',
    ));
    
    // Language 2
    $wp_customize->add_setting('language_2_name', array(
        'default' => 'ES',
        'sanitize_callback' => 'sanitize_text_field',
    ));
    
    $wp_customize->add_control('language_2_name', array(
        'label' => __('Language 2 Name', 'javi-aparicio-foto'),
        'description' => __('Display name for the second language (e.g., ES, Español)', 'javi-aparicio-foto'),
        'section' => 'javi_aparicio_languages',
        'type' => 'text',
    ));
    
    $wp_customize->add_setting('language_2_url', array(
        'default' => home_url('/es/'),
        'sanitize_callback' => 'esc_url_raw',
    ));
    
    $wp_customize->add_control('language_2_url', array(
        'label' => __('Language 2 URL', 'javi-aparicio-foto'),
        'description' => __('URL for the second language', 'javi-aparicio-foto'),
        'section' => 'javi_aparicio_languages',
        'type' => 'url',
    ));
    
    // Language 3
    $wp_customize->add_setting('language_3_name', array(
        'default' => 'DE',
        'sanitize_callback' => 'sanitize_text_field',
    ));
    
    $wp_customize->add_control('language_3_name', array(
        'label' => __('Language 3 Name', 'javi-aparicio-foto'),
        'description' => __('Display name for the third language (e.g., DE, Deutsch)', 'javi-aparicio-foto'),
        'section' => 'javi_aparicio_languages',
        'type' => 'text',
    ));
    
    $wp_customize->add_setting('language_3_url', array(
        'default' => home_url('/de/'),
        'sanitize_callback' => 'esc_url_raw',
    ));
    
    $wp_customize->add_control('language_3_url', array(
        'label' => __('Language 3 URL', 'javi-aparicio-foto'),
        'description' => __('URL for the third language', 'javi-aparicio-foto'),
        'section' => 'javi_aparicio_languages',
        'type' => 'url',
    ));
    
}
add_action('customize_register', 'javi_aparicio_customize_register');


/**
 * Get language options from customizer
 */
function javi_aparicio_get_language_options() {
    $languages = array();
    
    for ($i = 1; $i <= 3; $i++) {
        $name = get_theme_mod("language_{$i}_name", '');
        $url = get_theme_mod("language_{$i}_url", '');
        
        if (!empty($name) && !empty($url)) {
            $languages[] = array(
                'name' => $name,
                'url' => $url,
            );
        }
    }
    
    return $languages;
}

