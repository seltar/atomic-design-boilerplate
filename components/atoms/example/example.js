// > define dependencies
define(['base'],  function(Base){

	// > example
	function Example(){}

	Example.prototype = new Base();

	Example.prototype.greet = function(){
		return "hello";
	};

	// > return the component
	return Example;
});