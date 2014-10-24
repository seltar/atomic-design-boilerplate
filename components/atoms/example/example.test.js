// > include the example component
define(['./example'], function(example) {
	// > describe a test
	describe('Test example atom', function() {
		// > specify what it should do
		it('should greet with hello, yonas!', function() {
			example.greet("yonas").should.equal("hello, yonas!");
		});
	});
});