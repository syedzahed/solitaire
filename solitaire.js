$(document).ready(function(){
	var div = $( '#cardDispatch' );
div.onclick = function() {alert("here");
	this.style.backgroundColor = 'green';
	var h2s = this.getElementsByTagName( 'h2' );
	h2s[0].style.backgroundColor = 'blue';
};
});
