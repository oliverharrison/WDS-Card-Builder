/**
 * EDIT: WDS Card Builder
 */
import { RichText } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';


const Edit = ( props ) => {
	const {
		attributes: {
			content,
		},
		className,
		setAttributes,
	} = props;

	// Update field content on change.
	const onChangeContent = ( newContent ) => {
		setAttributes( { content: newContent } );
	};

	return (
		<RichText
			tagName="p"
			className={ className }
			onChange={ onChangeContent }
			value={ content }
			placeholder={ __( 'WDS Card Builder Demo...', 'card-builder' ) }
		/>
	);
};

export default Edit;
