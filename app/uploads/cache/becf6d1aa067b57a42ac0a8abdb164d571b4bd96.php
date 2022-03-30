<div class="victory">
	<h2>	<?php echo e($title); ?></h2>

	<div class="album">
		<?php while( $albums->have_posts()): ?> <?php $albums->the_post() ?>
		<div class="album__container">
            <?php the_post_thumbnail()?>
            <p><b style='color:black;'> <?php the_terms( get_the_id(), 'artist', "","," );?></b> <?php (the_title()); ?></p>
            <span class="album__container__date">2021</span>
            <p style='color:black;'><?php the_terms( get_the_id(), 'genre', "","," );?></p>
        </div>
			
		<?php endwhile; ?>
	</div>
	<a class="bluelink" href=<?php echo e($lien); ?>><?php echo e($btnValue); ?></a>
</div>