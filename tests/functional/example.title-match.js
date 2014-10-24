describe('Functional testing', function() {
	before(function() {
		casper.start('dist/index.html');
	});

	it('Title matches', function() {
		casper.then(function() {
			'Home | Atomic Design Boilerplate'.should.matchTitle;
			
		});
	});

	/*before(function() {
		casper.start('output/index.html');
	});

	it('should greet with hello, yonas!', function() {
		casper.then(function() {
			'Home | Atomic Mockup Library'.should.matchTitle;
			'form[action="/search"]'.should.be.inDOM.and.be.visible;
			this.fill('form[action="/search"]', {
				q: 'casperjs'
			}, true);
			
		});

		casper.waitForUrl(/q=casperjs/, function() {
			(/casperjs/).should.matchTitle;
		});
		
	});
	*/	
});