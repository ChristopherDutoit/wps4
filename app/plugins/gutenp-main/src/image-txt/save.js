import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';

export default function save( { attributes } ) {
	return (

<div class="favorite">
<div class="favorite__txt">
	<h2>{attributes?.title}</h2>
	<p>{attributes?.txt1}</p>
	<a class="pinklink" href='#' >DOWNLOAD OUR APPS</a>
</div>

	<img src="http://localhost:8000//app/uploads/2022/03/mobile.png"></img>


</div>

	);
}

