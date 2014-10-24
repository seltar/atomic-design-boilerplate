requirejs.config({
	paths: {
		// short links
		atom: '../../components/atoms/',
		molecule: '../../components/molecules/',
		organism: '../../components/organisms/',
		template: '../../components/templates/',

		// vendor libraries
		vendor: '../../assets/js/vendor',
		jquery: '../../assets/js/vendor/jquery'
	},
	shim: {
		jquery: {
			exports: 'jQuery'
		}
	}
});