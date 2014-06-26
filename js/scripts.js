$(document).ready(function() {
	$('.episode-img').unveil();
	$('.js-email').addClassWhenEmail({
			className: 'newsletter--active',
			email: 'input[type="email"]'
	});

	var POP_UP_WIDTH = 700,
		POP_UP_HEIGHT = 500;

    $(document).on('click', '.js-share-pop-up', function(e) {
        e.preventDefault();

        var $this = $(this),
			shareURL = $this.data('shareUrl'),
			popUpWidth = $this.data('popUpWidth'),
			popUpHeight = $this.data('popUpHeight');
			        
        openSharePopUp(shareURL, popUpWidth, popUpHeight);
    });

	function openSharePopUp(shareURL, popUpWidth, popUpHeight) {
	    popUpWidth = popUpWidth || POP_UP_WIDTH;
	    popUpHeight = popUpHeight || POP_UP_HEIGHT; 

		window.open(shareURL, '', 'width='+ popUpWidth + ', height=' + popUpHeight + ', menubar=no, toolbar=no');
	}
});