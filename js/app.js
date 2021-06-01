document.addEventListener( 'DOMContentLoaded', function () {
    new Splide( '.splide' ).mount();
} );

new Splide( '.splide', {
	direction: 'ttb',
	height   : '1rem',
    autoWidth: true,
} ).mount();