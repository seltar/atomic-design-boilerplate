define(['./icon'], function(icon) {

	describe('Test icon atom', function() {
		it('should greet with hello, yonas!', function() {
			icon.greet("yonas").should.equal("hello, yonas!");
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
});