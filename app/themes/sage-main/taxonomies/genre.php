<?php

/**
 * Registers the `genre` taxonomy,
 * for use with 'album'.
 */
function genre_init() {
	register_taxonomy( 'genre', [ 'album' ], [
		'hierarchical'          => false,
		'public'                => true,
		'show_in_nav_menus'     => true,
		'show_ui'               => true,
		'show_admin_column'     => false,
		'query_var'             => true,
		'rewrite'               => true,
		'capabilities'          => [
			'manage_terms' => 'edit_posts',
			'edit_terms'   => 'edit_posts',
			'delete_terms' => 'edit_posts',
			'assign_terms' => 'edit_posts',
		],
		'labels'                => [
			'name'                       => __( 'Genres', 'sage-main' ),
			'singular_name'              => _x( 'Genre', 'taxonomy general name', 'sage-main' ),
			'search_items'               => __( 'Search Genres', 'sage-main' ),
			'popular_items'              => __( 'Popular Genres', 'sage-main' ),
			'all_items'                  => __( 'All Genres', 'sage-main' ),
			'parent_item'                => __( 'Parent Genre', 'sage-main' ),
			'parent_item_colon'          => __( 'Parent Genre:', 'sage-main' ),
			'edit_item'                  => __( 'Edit Genre', 'sage-main' ),
			'update_item'                => __( 'Update Genre', 'sage-main' ),
			'view_item'                  => __( 'View Genre', 'sage-main' ),
			'add_new_item'               => __( 'Add New Genre', 'sage-main' ),
			'new_item_name'              => __( 'New Genre', 'sage-main' ),
			'separate_items_with_commas' => __( 'Separate genres with commas', 'sage-main' ),
			'add_or_remove_items'        => __( 'Add or remove genres', 'sage-main' ),
			'choose_from_most_used'      => __( 'Choose from the most used genres', 'sage-main' ),
			'not_found'                  => __( 'No genres found.', 'sage-main' ),
			'no_terms'                   => __( 'No genres', 'sage-main' ),
			'menu_name'                  => __( 'Genres', 'sage-main' ),
			'items_list_navigation'      => __( 'Genres list navigation', 'sage-main' ),
			'items_list'                 => __( 'Genres list', 'sage-main' ),
			'most_used'                  => _x( 'Most Used', 'genre', 'sage-main' ),
			'back_to_items'              => __( '&larr; Back to Genres', 'sage-main' ),
		],
		'show_in_rest'          => true,
		'rest_base'             => 'genre',
		'rest_controller_class' => 'WP_REST_Terms_Controller',
	] );

}

add_action( 'init', 'genre_init' );

/**
 * Sets the post updated messages for the `genre` taxonomy.
 *
 * @param  array $messages Post updated messages.
 * @return array Messages for the `genre` taxonomy.
 */
function genre_updated_messages( $messages ) {

	$messages['genre'] = [
		0 => '', // Unused. Messages start at index 1.
		1 => __( 'Genre added.', 'sage-main' ),
		2 => __( 'Genre deleted.', 'sage-main' ),
		3 => __( 'Genre updated.', 'sage-main' ),
		4 => __( 'Genre not added.', 'sage-main' ),
		5 => __( 'Genre not updated.', 'sage-main' ),
		6 => __( 'Genres deleted.', 'sage-main' ),
	];

	return $messages;
}

add_filter( 'term_updated_messages', 'genre_updated_messages' );
