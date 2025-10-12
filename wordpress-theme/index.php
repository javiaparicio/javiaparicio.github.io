<?php
/**
 * The main template file
 *
 * @package JaviAparicioFoto
 */

get_header(); ?>

<main id="main" class="site-main">
    <?php if (have_posts()) : ?>
        <?php while (have_posts()) : the_post(); ?>
            <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
                <header class="entry-header">
                    <?php the_title('<h1 class="entry-title">', '</h1>'); ?>
                </header>

                <div class="entry-content">
                    <?php
                    the_content();
                    
                    wp_link_pages(array(
                        'before' => '<div class="page-links">' . __('Pages:', 'javi-aparicio-foto'),
                        'after'  => '</div>',
                    ));
                    ?>
                </div>
            </article>
        <?php endwhile; ?>
    <?php else : ?>
        <div class="no-content">
            <h1><?php _e('Welcome to Javi Aparicio Foto', 'javi-aparicio-foto'); ?></h1>
            <p><?php _e('Every portrait has a story — let\'s tell yours.', 'javi-aparicio-foto'); ?></p>
            <p><?php _e('As a portrait photographer, I\'m passionate about capturing the real you. Whether it\'s a family moment, a professional headshot, or a creative project, I focus on creating images that reflect your unique personality.', 'javi-aparicio-foto'); ?></p>
            <p><?php _e('What makes my work special isn\'t just the photos—it\'s the experience. I take the time to get to know you, creating a relaxed environment where your true self can shine. The result? Portraits that you\'ll love and moments you\'ll want to revisit again and again.', 'javi-aparicio-foto'); ?></p>
            <p><?php _e('Take a look at my', 'javi-aparicio-foto'); ?> <a href="<?php echo esc_url(get_post_type_archive_link('portraits')); ?>"><?php _e('portfolio', 'javi-aparicio-foto'); ?></a>, <?php _e('and let\'s make something amazing together.', 'javi-aparicio-foto'); ?></p>
            <p><?php _e('Javi Aparicio', 'javi-aparicio-foto'); ?></p>
        </div>
    <?php endif; ?>
</main>

<?php get_footer(); ?>
