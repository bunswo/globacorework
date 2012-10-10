/* Author:

*/

var count = 0;

$(document).ready(function(){
	
	var media = $('img, video');
	media.each(function() {
		var $this = $(this);
		var curSrc = $this.attr('src').replace("~BLOCK~", '');
		
		if(curSrc) {
			console.log("removing source: "+curSrc);
			$this.data('deck-src', curSrc).attr('src', '');
		}
	});
	
	
	var titleImages = $('img.title-slide');
	titleImages.each(function() {
		var $this = $(this), originalSrc = $this.data('deck-src');
		console.log("adding source: "+originalSrc);
		if (originalSrc) {
			$this.attr('src', originalSrc);
		}
	});
	
	// Image dimensions
	var images = $('img');
	images.each(function(index, element) {
        var $image = $(this);
		if (!$image.hasClass('title-slide')){
			$image.width("480px");
			$image.height("320px");
		}
    });
	
	updateOrientation();
	
	// Menu
	$("#menu-mobile").click(function(event){
		$.deck('go', 'slide-mobile');	
	});
	$("#menu-web").click(function(event){
		$.deck('go', 'slide-web');	
	});
	$("#menu-electronics").click(function(event){
		$.deck('go', 'slide-electronics');	
	});
	$("#menu-games").click(function(event){
		$.deck('go', 'slide-games');
	});
	$("#menu-multitouch").click(function(event){
		$.deck('go', 'slide-multitouch');	
	});
	$("#menu-touchscreen").click(function(event){
		$.deck('go', 'slide-touchscreen');
	});
	$("#view-reel").click(function(event){
		$.deck('go', 'slide-reel');
	});
	
	$(document).bind('deck.change', function(event, from, to) {
	   //alert('Moving from slide ' + from + ' to ' + to);
	   $slide = $.deck('getSlide', to);
	   $video = $.deck('getSlide', from).find(".video:first");
	   if ($video.length > 0){
		   $video.get(0).pause();
	   }
	   if ($slide.hasClass('back-to-menu')){
		   event.preventDefault();
		   $.deck('go', 'title-slide');
	   }
	});
	
})

function updateOrientation(){
	/*
	$body = $('html:first');
	var bodyWidth = $body.innerWidth();
	var bodyHeight = $body.innerHeight();
	debug(bodyWidth+"x"+bodyHeight);
	$('#video').width(bodyWidth);
	$('#video').height(bodyHeight);'
	*/
}

function debug(msg){
	$('#debug').html(msg);
}


