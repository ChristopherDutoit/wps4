import { __ } from '@wordpress/i18n';
import {
	MediaUpload, MediaPlaceholder, MediaUploadCheck, InspectorControls,
	useBlockProps, RichText, URLInputButton,PlainText } from '@wordpress/block-editor';
import { BaseControl, Button } from '@wordpress/components';

import './editor.scss';

export default function Edit( { attributes, setAttributes } ) {
	return (
		<div { ...useBlockProps() } className="banner">
			<PlainText
				className={"block-editor-plain-text-title"}
				placeholder={__('Title')}
				value={attributes?.title}
				onChange={(title) => {
					setAttributes({ title })
				}}
			/>


			<PlainText
				className={"block-editor-plain-text-title"}
				placeholder={__('Texte 1')}
				value={attributes?.txt1}
				onChange={(txt1) => {
					setAttributes({txt1})
				}}
			/>


			<div class ="bouton">
			<PlainText
				className={"block-editor-plain-text-title"}
				placeholder={__('lien')}
				value={attributes?.lien}
				onChange={(lien) => {
					setAttributes({lien})
				}}
			/>

			<PlainText
				className={"block-editor-plain-text-title"}
				placeholder={__('btn value')}
				value={attributes?.btnValue}
				onChange={(btnValue) => {
					setAttributes({btnValue})
				}}
			/>

			</div>
*
			{attributes?.imageUrl ? (
				<img src={attributes?.imageUrl} alt="" />
 			) : (
				<MediaPlaceholder
					onSelect={(media) => setAttributes({ imageUrl: media.url, imageId: media.id })}
					allowedTypes={['image']}
					multiple={false}
					labels={{ title: __('The Image') }}
				/>
			)}
		
		
		
		</div>
	);
}

