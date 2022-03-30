import { __ } from '@wordpress/i18n';
import { PlainText, useBlockProps } from '@wordpress/block-editor';
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

			<PlainText
				className={"block-editor-plain-text-title"}
				placeholder={__('Texte 2')}
				value={attributes?.txt2}
				onChange={(txt2) => {
					setAttributes({txt2})
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

		
		</div>
	);
}

