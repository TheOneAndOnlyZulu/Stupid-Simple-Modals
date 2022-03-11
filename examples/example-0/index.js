import SuperSimpleModal from '../node_modules/super-simple-modals/dist/index.js';

(function () {

	'use strict';

	// Check if ssm is defined.
	if ( 'undefined' !== typeof SuperSimpleModal ) {

		// Check if the open modal button exists.
		const openModal = document.getElementById( 'open-modal' );
		if ( openModal ) {

			// Initiate the ssm class.
			const modal = new SuperSimpleModal();

			// Click handler 
			openModal.addEventListener( 'click', (e) => {
				e.preventDefault();

				// Generates a modal.
				modal.generate({
					title: '<script>alert("world");</script>My modal title',
					description: '<script>console.log( "here" )</script>My modal description...',
					addText: 'Accept & Submit',
					initiatorButton: e.target,
					callback: possitiveAction,
					willAnimate: true,
					params: {
						originalButton: e.target,
					}
				});
			});

			// The action taken when you click the positive action button.
			const possitiveAction = ({originalButton}) => {
				
				// Callback is hit when the user selects the right hand button.
				console.log( 'Possitive action taken.' );

				// Remove the modal & return the focus to the original button.
				modal.remove( originalButton );
			};
		}
	}
})();