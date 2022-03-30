import { __ } from '@wordpress/i18n';
import { PlainText, useBlockProps } from '@wordpress/block-editor';
import './editor.scss';

export default function Edit( { attributes, setAttributes } ) {
	return (
		<div { ...useBlockProps() }>
			<PlainText
				keepplaceholderonfocus='true'
				placeholder={__('Title')}
				value={attributes?.title}
				onChange={(newTitle) => {
					setAttributes({ title: newTitle })
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
