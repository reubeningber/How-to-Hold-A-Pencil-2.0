$(document).ready(function() {
	$('.episode-img').unveil();
	$('.js-email').addClassWhenEmail({
			className: 'newsletter--active',
			email: 'input[type="email"]'
	});
});