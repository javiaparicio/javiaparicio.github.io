<?php
/**
 * The template for displaying portraits archive
 *
 * @package JaviAparicioFoto
 */

get_header(); ?>

<main id="main" class="site-main">
    <header class="page-header">
        <h1 class="page-title"><?php _e('Portraits', 'javi-aparicio-foto'); ?></h1>
    </header>

    <div class="portraits-gallery">
        <?php if (have_posts()) : ?>
            <div class="gallery">
                <?php while (have_posts()) : the_post(); ?>
                    <?php if (has_post_thumbnail()) : ?>
                        <?php
                        $localized_title = javi_aparicio_get_localized_title(get_the_ID(), 'portraits');
                        $thumbnail_id = get_post_thumbnail_id();
                        $image_url = wp_get_attachment_image_url($thumbnail_id, 'gallery-large');
                        $image_alt = get_post_meta($thumbnail_id, '_wp_attachment_image_alt', true);
                        ?>
                        <img
                            data-src="<?php echo esc_url($image_url); ?>"
                            alt="<?php echo esc_attr($image_alt ?: $localized_title); ?>"
                            class="gallery-image lazy"
                            data-title="<?php echo esc_attr($localized_title); ?>"
                        >
                    <?php endif; ?>
                <?php endwhile; ?>
            </div>

            <div class="lightbox" id="lightbox">
                <span class="nav" id="prev" aria-label="<?php _e('Previous', 'javi-aparicio-foto'); ?>"></span>
                <img id="lightbox-img">
                <div id="lightbox-caption" class="lightbox-caption"></div>
                <span class="nav" id="next" aria-label="<?php _e('Next', 'javi-aparicio-foto'); ?>"></span>
                <span class="close" id="close" aria-label="<?php _e('Close', 'javi-aparicio-foto'); ?>"></span>
                <span class="fullscreen" id="fullscreen">
                    <i aria-label="<?php _e('Enter fullscreen', 'javi-aparicio-foto'); ?>">⛶</i>
                </span>
            </div>
        <?php else : ?>
            <p><?php _e('No portraits found.', 'javi-aparicio-foto'); ?></p>
        <?php endif; ?>
    </div>
</main>

<?php get_footer(); ?>
