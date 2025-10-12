<?php
/**
 * Content Import Script for Javi Aparicio Foto WordPress Theme
 * 
 * This script helps import content from the Jekyll site to WordPress
 * Run this script after setting up the WordPress theme
 */

// Prevent direct access
if (!defined('ABSPATH')) {
    exit;
}

class JaviAparicioContentImporter {
    
    public function __construct() {
        add_action('admin_menu', array($this, 'add_admin_menu'));
        add_action('wp_ajax_import_content', array($this, 'handle_import'));
    }
    
    public function add_admin_menu() {
        add_management_page(
            'Import Jekyll Content',
            'Import Jekyll Content',
            'manage_options',
            'import-jekyll-content',
            array($this, 'import_page')
        );
    }
    
    public function import_page() {
        ?>
        <div class="wrap">
            <h1>Import Jekyll Content</h1>
            <p>This tool will help you import content from your Jekyll site to WordPress.</p>
            
            <div class="import-section">
                <h2>Step 1: Import Portraits</h2>
                <p>Import portraits from your Jekyll data files.</p>
                <button id="import-portraits" class="button button-primary">Import Portraits</button>
                <div id="portraits-status"></div>
            </div>
            
            <div class="import-section">
                <h2>Step 2: Import Events</h2>
                <p>Import events from your Jekyll data files.</p>
                <button id="import-events" class="button button-primary">Import Events</button>
                <div id="events-status"></div>
            </div>
            
            <div class="import-section">
                <h2>Step 3: Create Pages</h2>
                <p>Create essential pages for your site.</p>
                <button id="create-pages" class="button button-primary">Create Pages</button>
                <div id="pages-status"></div>
            </div>
        </div>
        
        <script>
        jQuery(document).ready(function($) {
            $('#import-portraits').click(function() {
                importContent('portraits');
            });
            
            $('#import-events').click(function() {
                importContent('events');
            });
            
            $('#create-pages').click(function() {
                createPages();
            });
            
            function importContent(type) {
                $.post(ajaxurl, {
                    action: 'import_content',
                    type: type,
                    nonce: '<?php echo wp_create_nonce('import_content'); ?>'
                }, function(response) {
                    if (response.success) {
                        $('#' + type + '-status').html('<p style="color: green;">✓ ' + response.data.message + '</p>');
                    } else {
                        $('#' + type + '-status').html('<p style="color: red;">✗ Error: ' + response.data + '</p>');
                    }
                });
            }
            
            function createPages() {
                $.post(ajaxurl, {
                    action: 'create_pages',
                    nonce: '<?php echo wp_create_nonce('create_pages'); ?>'
                }, function(response) {
                    if (response.success) {
                        $('#pages-status').html('<p style="color: green;">✓ ' + response.data.message + '</p>');
                    } else {
                        $('#pages-status').html('<p style="color: red;">✗ Error: ' + response.data + '</p>');
                    }
                });
            }
        });
        </script>
        <?php
    }
    
    public function handle_import() {
        check_ajax_referer('import_content', 'nonce');
        
        $type = sanitize_text_field($_POST['type']);
        
        if ($type === 'portraits') {
            $this->import_portraits();
        } elseif ($type === 'events') {
            $this->import_events();
        }
    }
    
    private function import_portraits() {
        // Real portrait data from your Jekyll site
        $portraits_data = array(
            array(
                'title_en' => 'Portrait of José.',
                'title_es' => 'Retrato de José.',
                'title_de' => 'Porträt von José.',
                'image' => 'portraits_002.webp'
            ),
            array(
                'title_en' => 'Portrait of José.',
                'title_es' => 'Retrato de José.',
                'title_de' => 'Porträt von José.',
                'image' => 'portraits_003.webp'
            ),
            array(
                'title_en' => 'Portrait of José.',
                'title_es' => 'Retrato de José.',
                'title_de' => 'Porträt von José.',
                'image' => 'portraits_004.webp'
            ),
            array(
                'title_en' => 'Portrait of José.',
                'title_es' => 'Retrato de José.',
                'title_de' => 'Porträt von José.',
                'image' => 'portraits_005.webp'
            ),
            array(
                'title_en' => 'Portrait of Christian.',
                'title_es' => 'Retrato de Christian.',
                'title_de' => 'Porträt von Christian.',
                'image' => 'portraits_006.webp'
            ),
            array(
                'title_en' => 'Portrait of Christian.',
                'title_es' => 'Retrato de Christian.',
                'title_de' => 'Porträt von Christian.',
                'image' => 'portraits_007.webp'
            ),
            array(
                'title_en' => 'Portrait of <a href="https://www.instagram.com/raulhuerta_palisandro/" target="_blank">Raul Huerta and Palisandro</a>.',
                'title_es' => 'Retrato de <a href="https://www.instagram.com/raulhuerta_palisandro/" target="_blank">Raul Huerta y Palisandro</a>.',
                'title_de' => 'Porträt von <a href="https://www.instagram.com/raulhuerta_palisandro/" target="_blank">Raul Huerta und Palisandro</a>.',
                'image' => 'portraits_009.webp'
            ),
            array(
                'title_en' => 'Portrait of Avelino.',
                'title_es' => 'Retrato de Avelino.',
                'title_de' => 'Porträt von Avelino.',
                'image' => 'portraits_010.webp'
            ),
            array(
                'title_en' => 'Portrait of Frank.',
                'title_es' => 'Retrato de Frank.',
                'title_de' => 'Porträt von Frank.',
                'image' => 'portraits_012.webp'
            ),
            array(
                'title_en' => 'Portrait of Nana.',
                'title_es' => 'Retrato de Nana.',
                'title_de' => 'Porträt von Nana.',
                'image' => 'portraits_014.webp'
            ),
            array(
                'title_en' => 'Portrait of Mirta.',
                'title_es' => 'Retrato de Mirta.',
                'title_de' => 'Porträt von Mirta.',
                'image' => 'portraits_015.webp'
            ),
            array(
                'title_en' => 'Self-portrait.',
                'title_es' => 'Autoretrato.',
                'title_de' => 'Selbstporträt.',
                'image' => 'portraits_016.webp'
            ),
            array(
                'title_en' => 'Portrait of José.',
                'title_es' => 'Retrato de José.',
                'title_de' => 'Porträt von José.',
                'image' => 'portraits_017.webp'
            ),
            array(
                'title_en' => 'Portrait of Kathy.',
                'title_es' => 'Retrato de Kathy.',
                'title_de' => 'Porträt von Kathy.',
                'image' => 'portraits_019.webp'
            ),
            array(
                'title_en' => 'Self-portrait.',
                'title_es' => 'Autorretrato.',
                'title_de' => 'Selbstporträt.',
                'image' => 'portraits_020.webp'
            ),
            array(
                'title_en' => 'Self-portrait.',
                'title_es' => 'Autorretrato.',
                'title_de' => 'Selbstporträt.',
                'image' => 'portraits_021.webp'
            ),
            array(
                'title_en' => 'Portrait of Robert.',
                'title_es' => 'Retrato de Robert.',
                'title_de' => 'Porträt von Robert.',
                'image' => 'portraits_022.webp'
            ),
            array(
                'title_en' => 'Portrait of Leiba.',
                'title_es' => 'Retrato de Leiba.',
                'title_de' => 'Porträt von Leiba.',
                'image' => 'portraits_023.webp'
            ),
            array(
                'title_en' => 'Portrait of José.',
                'title_es' => 'Retrato de José.',
                'title_de' => 'Porträt von José.',
                'image' => 'portraits_024.webp'
            ),
            array(
                'title_en' => 'Portrait of <a href="https://www.instagram.com/joseditionvisual/" target="_blank">José</a>.',
                'title_es' => 'Retrato de <a href="https://www.instagram.com/joseditionvisual/" target="_blank">José</a>.',
                'title_de' => 'Porträt von <a href="https://www.instagram.com/joseditionvisual/" target="_blank">José</a>.',
                'image' => 'portraits_025.webp'
            ),
            array(
                'title_en' => 'Portrait of <a href="https://www.instagram.com/jeya.artmodel/" target="_blank">Evgenia</a>.',
                'title_es' => 'Retrato de <a href="https://www.instagram.com/jeya.artmodel/" target="_blank">Evgenia</a>.',
                'title_de' => 'Porträt von <a href="https://www.instagram.com/jeya.artmodel/" target="_blank">Evgenia</a>.',
                'image' => 'portraits_027.webp'
            ),
            array(
                'title_en' => 'Self-portrait.',
                'title_es' => 'Autorretrato.',
                'title_de' => 'Selbstporträt.',
                'image' => 'portraits_028.webp'
            ),
            array(
                'title_en' => 'Portrait of <a href="https://www.instagram.com/jlzyu/" target="_blank">Julia</a>.',
                'title_es' => 'Retrato de <a href="https://www.instagram.com/jlzyu/" target="_blank">Julia</a>.',
                'title_de' => 'Porträt von <a href="https://www.instagram.com/jlzyu/" target="_blank">Julia</a>.',
                'image' => 'portraits_029.webp'
            ),
            array(
                'title_en' => 'Portrait of <a href="https://www.mioneo.ch/" target="_blank">MioNeo</a>.',
                'title_es' => 'Retrato de <a href="https://www.mioneo.ch/" target="_blank">MioNeo</a>.',
                'title_de' => 'Porträt von <a href="https://www.mioneo.ch/" target="_blank">MioNeo</a>.',
                'image' => 'portraits_030.webp'
            ),
            array(
                'title_en' => 'Portrait of <a href="https://www.instagram.com/demifrayy/" target="_blank">Demmi Fray</a>.',
                'title_es' => 'Retrato de <a href="https://www.instagram.com/demifrayy/" target="_blank">Demmi Fray</a>.',
                'title_de' => 'Porträt von <a href="https://www.instagram.com/demifrayy/" target="_blank">Demmi Fray</a>.',
                'image' => 'portraits_031.webp'
            ),
            array(
                'title_en' => 'Portrait of <a href="https://irynaberdnyk.com/" target="_blank">Iryna Berdnyk</a>.',
                'title_es' => 'Retrato de <a href="https://irynaberdnyk.com/" target="_blank">Iryna Berdnyk</a>.',
                'title_de' => 'Porträt von <a href="https://irynaberdnyk.com/" target="_blank">Iryna Berdnyk</a>.',
                'image' => 'portraits_032.webp'
            ),
            array(
                'title_en' => 'Portrait of <a href="https://www.instagram.com/travelmodel.s/" target="_blank">Alessandra</a>.',
                'title_es' => 'Retrato de <a href="https://www.instagram.com/travelmodel.s/" target="_blank">Alessandra</a>.',
                'title_de' => 'Porträt von <a href="https://www.instagram.com/travelmodel.s/" target="_blank">Alessandra</a>.',
                'image' => 'portraits_033.webp'
            ),
            array(
                'title_en' => 'Portrait of <a href="https://www.instagram.com/sofia_mdprofessional/" target="_blank">Sofia</a>.',
                'title_es' => 'Retrato de <a href="https://www.instagram.com/sofia_mdprofessional/" target="_blank">Sofia</a>.',
                'title_de' => 'Porträt von <a href="https://www.instagram.com/sofia_mdprofessional/" target="_blank">Sofia</a>.',
                'image' => 'portraits_034.webp'
            ),
            array(
                'title_en' => 'Portrait of Juan.',
                'title_es' => 'Retrato de Juan.',
                'title_de' => 'Porträt von Juan.',
                'image' => 'portraits_035.webp'
            ),
            array(
                'title_en' => 'Portrait of Laura.',
                'title_es' => 'Retrato de Laura.',
                'title_de' => 'Porträt von Laura.',
                'image' => 'portraits_036.webp'
            ),
            array(
                'title_en' => 'Portrait of <a href="https://www.instagram.com/ilonychkaa/" target="_blank">Ilonka</a>.',
                'title_es' => 'Retrato de <a href="https://www.instagram.com/ilonychkaa/" target="_blank">Ilonka</a>.',
                'title_de' => 'Porträt von <a href="https://www.instagram.com/ilonychkaa/" target="_blank">Ilonka</a>.',
                'image' => 'portraits_037.webp'
            )
        );
        
        $imported = 0;
        foreach ($portraits_data as $portrait) {
            $post_id = wp_insert_post(array(
                'post_title' => $portrait['title_en'],
                'post_type' => 'portraits',
                'post_status' => 'publish',
                'post_content' => ''
            ));
            
            if ($post_id) {
                update_post_meta($post_id, '_portrait_title_en', $portrait['title_en']);
                update_post_meta($post_id, '_portrait_title_es', $portrait['title_es']);
                update_post_meta($post_id, '_portrait_title_de', $portrait['title_de']);
                $imported++;
            }
        }
        
        wp_send_json_success(array('message' => "Imported {$imported} portraits successfully."));
    }
    
    private function import_events() {
        // Real event data from your Jekyll site
        $events_data = array(
            array(
                'title_en' => 'Concert by Raul Huerta and Palisandro at the bar of Hotel Ibis Bern Center.',
                'title_es' => 'Concierto de Raul Huerta y Palisandro en el bar del Hotel Ibis Bern Center.',
                'title_de' => 'Konzert von Raul Huerta und Palisandro in der Bar des Hotel Ibis Bern Center.',
                'image' => 'events_001.webp'
            ),
            array(
                'title_en' => 'Concert by Raul Huerta and Palisandro at the bar of Hotel Ibis Bern Center.',
                'title_es' => 'Concierto de Raul Huerta y Palisandro en el bar del Hotel Ibis Bern Center.',
                'title_de' => 'Konzert von Raul Huerta und Palisandro in der Bar des Hotel Ibis Bern Center.',
                'image' => 'events_002.webp'
            ),
            array(
                'title_en' => '45th International Balloon Festival - Château-D\'Oex.',
                'title_es' => '45e Festival Internacional de Globos - Château-D\'Oex.',
                'title_de' => '45. Internationales Ballon-Festival - Château-D\'Oex.',
                'image' => 'events_003.webp'
            ),
            array(
                'title_en' => '45th International Balloon Festival - Château-D\'Oex.',
                'title_es' => '45e Festival Internacional de Globos - Château-D\'Oex.',
                'title_de' => '45. Internationales Ballon-Festival - Château-D\'Oex.',
                'image' => 'events_004.webp'
            ),
            array(
                'title_en' => 'Ceviche Mixto concert at Lakelive.',
                'title_es' => 'Concierto Ceviche Mixto - Lakelive.',
                'title_de' => 'Konzert Ceviche Mixto - Lakelive.',
                'image' => 'events_005.webp'
            ),
            array(
                'title_en' => 'Ceviche Mixto concert at Lakelive.',
                'title_es' => 'Concierto Ceviche Mixto - Lakelive.',
                'title_de' => 'Konzert Ceviche Mixto - Lakelive.',
                'image' => 'events_006.webp'
            ),
            array(
                'title_en' => '30th Anniversary of Ceviche Mixto at Kulturhof im Schloss Köniz.',
                'title_es' => '30 aniversario Ceviche Mixto - Kulturhof im Schloss Köniz.',
                'title_de' => '30. Jubiläum Ceviche Mixto - Kulturhof im Schloss Köniz.',
                'image' => 'events_007.webp'
            ),
            array(
                'title_en' => '30th Anniversary of Ceviche Mixto at Kulturhof im Schloss Köniz.',
                'title_es' => '30 aniversario Ceviche Mixto - Kulturhof im Schloss Köniz.',
                'title_de' => '30. Jubiläum Ceviche Mixto - Kulturhof im Schloss Köniz.',
                'image' => 'events_008.webp'
            ),
            array(
                'title_en' => '30th Anniversary of Ceviche Mixto at Kulturhof im Schloss Köniz.',
                'title_es' => '30 aniversario Ceviche Mixto - Kulturhof im Schloss Köniz.',
                'title_de' => '30. Jubiläum Ceviche Mixto - Kulturhof im Schloss Köniz.',
                'image' => 'events_009.webp'
            ),
            array(
                'title_en' => '30th Anniversary of Ceviche Mixto at Kulturhof im Schloss Köniz.',
                'title_es' => '30 aniversario Ceviche Mixto - Kulturhof im Schloss Köniz.',
                'title_de' => '30. Jubiläum Ceviche Mixto - Kulturhof im Schloss Köniz.',
                'image' => 'events_010.webp'
            ),
            array(
                'title_en' => 'Los Vacíos de Charly · Before the show at Casino Burgdorf.',
                'title_es' => 'Los Vacíos de Charly · Antes del concierto en el Casino de Burgdorf.',
                'title_de' => 'Los Vacíos de Charly · Vor dem Konzert im Casino Burgdorf.',
                'image' => 'events_011.webp'
            ),
            array(
                'title_en' => 'Ceviche Mixto.',
                'title_es' => 'Ceviche Mixto.',
                'title_de' => 'Ceviche Mixto.',
                'image' => 'events_012.webp'
            ),
            array(
                'title_en' => 'Sol Family.',
                'title_es' => 'Sol Family.',
                'title_de' => 'Sol Family.',
                'image' => 'events_013.webp'
            )
        );
        
        $imported = 0;
        foreach ($events_data as $event) {
            $post_id = wp_insert_post(array(
                'post_title' => $event['title_en'],
                'post_type' => 'events',
                'post_status' => 'publish',
                'post_content' => ''
            ));
            
            if ($post_id) {
                update_post_meta($post_id, '_event_title_en', $event['title_en']);
                update_post_meta($post_id, '_event_title_es', $event['title_es']);
                update_post_meta($post_id, '_event_title_de', $event['title_de']);
                $imported++;
            }
        }
        
        wp_send_json_success(array('message' => "Imported {$imported} events successfully."));
    }
    
    public function create_pages() {
        check_ajax_referer('create_pages', 'nonce');
        
        $pages = array(
            array(
                'title' => 'Contact',
                'slug' => 'contact',
                'content' => 'Contact page content...'
            ),
            array(
                'title' => 'Pricing',
                'slug' => 'pricing',
                'content' => 'Pricing page content...'
            ),
            array(
                'title' => 'Legal',
                'slug' => 'legal',
                'content' => 'Legal page content...'
            ),
            array(
                'title' => 'Terms and Conditions',
                'slug' => 'terms-and-conditions',
                'content' => 'Terms and conditions content...'
            ),
            array(
                'title' => 'Privacy Policy',
                'slug' => 'privacy-policy',
                'content' => 'Privacy policy content...'
            )
        );
        
        $created = 0;
        foreach ($pages as $page) {
            $existing = get_page_by_path($page['slug']);
            if (!$existing) {
                wp_insert_post(array(
                    'post_title' => $page['title'],
                    'post_name' => $page['slug'],
                    'post_type' => 'page',
                    'post_status' => 'publish',
                    'post_content' => $page['content']
                ));
                $created++;
            }
        }
        
        wp_send_json_success(array('message' => "Created {$created} pages successfully."));
    }
}

// Initialize the importer
new JaviAparicioContentImporter();
