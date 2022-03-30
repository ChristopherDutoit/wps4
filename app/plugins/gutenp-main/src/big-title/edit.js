import { __ } from '@wordpress/i18n';
import { PlainText, useBlockProps } from '@wordpress/block-editor';
import './editor.scss';

export default function Edit( { attributes, setAttributes } ) {
	return (
		<div { ...useBlockProps() }>
			<PlainText
				className={"block-editor-plain-text-title"}
				placeholder={__('Title')}
				value={attributes?.title}
				onChange={(title) => {
					setAttributes({ title })
				}}
			/>
		</div>
	);
}

