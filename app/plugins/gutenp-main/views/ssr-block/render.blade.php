<div class="victory">
	<h2>	{{$title}}</h2>

	<div class="album">
		@while ( $albums->have_posts()) @php $albums->the_post() @endphp
		<div class="album__container">
            <?php the_post_thumbnail()?>
            <p><b style='color:black;'> <?php the_terms( get_the_id(), 'artist', "","," );?></b> @php(the_title())</p>
            <span class="album__container__date">2021</span>
            <p style='color:black;'><?php the_terms( get_the_id(), 'genre', "","," );?></p>
        </div>
			
		@endwhile
	</div>
	<a class="bluelink" href={{$lien}}>{{$btnValue}}</a>
</div>