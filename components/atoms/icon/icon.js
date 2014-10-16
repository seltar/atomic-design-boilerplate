define([],  function(){

	return {
		greet: function(name){
			if(!name){
				name = "world";
			}
			return 'hello, '+name+'!';
		}
	};
	
});