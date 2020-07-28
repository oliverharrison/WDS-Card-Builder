/**
 * REGISTER: WDS Card Builder.
 */
import edit from './edit';
import save from './save';

import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';

registerBlockType( 'wds/card-builder', {
	title: __( 'WDS Card Builder', 'card-builder' ),
	icon: 'edit',
	category: 'common',
	keywords: [
		__( 'WDS', 'card-builder' ),
		__( 'CardBuilder', 'card-builder' ),
	],
	attributes: {
		content: {
			type: 'array',
			source: 'children',
			selector: 'p',
		},
	},
	edit,
	save,
} );
