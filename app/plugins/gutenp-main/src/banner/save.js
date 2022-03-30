import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';

export default function save( { attributes } ) {
	return (
		<div { ...useBlockProps.save() } className="discover" >
			<div className="discover__txt">
			<h1>{attributes?.title}</h1>
			<h4>{attributes?.txt1}</h4>
			<h4>{attributes?.txt2}</h4>
			<a class="pinklink" href={attributes?.lien}>{attributes?.btnValue}</a>
			</div>	
		</div>
	);
}

