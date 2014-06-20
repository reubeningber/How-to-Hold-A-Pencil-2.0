$(document).ready(function() {
	$('.episode-img').unveil(function() {
  		$(this).load(function() {
    		this.style.opacity = 1;
  		});
  	});
});