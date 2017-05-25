function loadSite() {
    "use strict";

    //preloader
   	setTimeout(function() {
        $('#preloader').fadeOut('slow', function() {
        });
    }, 300);

    // Counter
	$(function ($) {
	    animatecounters();
	});

	//typed
	$(".element").typed({
      strings: ["Web Developer.", "SEO Expert"],
      typeSpeed: 100,
	  backDelay: 900,
	  loop: true,
	  cursorChar: "",
	  loopCount: false
    });

	function animatecounters() {
	    $('.counter-value').each(count);
	    function count(options) {
	        var $this = $(this);
	        options = $.extend({}, options || {}, $this.data('countToOptions') || {});
	        $this.countTo(options);
	    }
	}

	// SmoothScroll
	$('.scroll-sub').smoothScroll({
		speed: 900,
		offset: 0,
		zoom: {
			enabled: true,
			duration: 300,
			easing: 'ease-in-out'
		}
	});

	// Contact Form
	$("#success-alert").hide();
	$("#success-contact").hide();

	$('body').on('click', '#contact-submit', function(){
		var error = CFValidate();
		if (error) {
			$.ajax({
				type: "POST",
				url: "contact.php",
				data: $("#contact-form").serialize(),
				success: function (result) {
					$('input[type=text],textarea').each(function () {
						$(this).val('');
					})
					$("#success-alert").html(result);
					$("#success-alert").fadeIn("slow");
					$('#success-alert').delay(5000).fadeOut("slow");
				}
			});
		}
	});
	function CFValidate() {
		var error = true;
		$('#contact-form input[type=text]').each(function (index) {
			if (index == 0) {
				if ($(this).val() == null || $(this).val() == "") {
					$("#contact-form").find("input:eq(" + index + ")").addClass("required-error");
					error = false;
				}
				else {
					$("#contact-form").find("input:eq(" + index + ")").removeClass("required-error");
				}
			}
			else if (index == 1) {
				if (!(/(.+)@(.+){2,}\.(.+){2,}/.test($(this).val()))) {
					$("#contact-form").find("input:eq(" + index + ")").addClass("required-error");
					error = false;
				} else {
					$("#contact-form").find("input:eq(" + index + ")").removeClass("required-error");
				}
			}

		});
		return error;
	}

	//right navigation
	function handler1() {
		if($(window).width() > 1120){
			document.getElementById("mySidenav").style.width = "50%";
	    	document.getElementById("main").style.marginRight = "50%";
		}
		else{
			document.getElementById("mySidenav").style.width = "100%";
	    	document.getElementById("main").style.marginRight = "100%";
		}
    	
	    document.getElementById("main").style.right = "0";
	    document.getElementById("main").style.left = "auto";
	    $('body').toggleClass('overflowy-hidden');
	    $('.sidenavRight').toggleClass('overflowy-auto');
    	$(this).one("click", handler2);
    	$('.cbright').one("click", handler2);
    	$('.skillbar').each(function(){
			$(this).find('.skillbar-bar').animate({
				width:jQuery(this).attr('data-percent')
			},2000);
		});
	}

	function handler2() {
	    document.getElementById("mySidenav").style.width = "0";
	    document.getElementById("main").style.marginRight = "0";
	    $('body').removeClass('overflowy-hidden');
	    $('.sidenavRight').removeClass('overflowy-auto');
	    $(this).one("click", handler1);
	}
	$("#about-activate").one("click", handler1);

	//left navigation
	function handler3() {
		if($(window).width() > 1120){
			document.getElementById("mySidenavLeft").style.width = "50%";
	    	document.getElementById("main").style.marginLeft = "50%";
		}
		else {
			document.getElementById("mySidenavLeft").style.width = "100%";
	    	document.getElementById("main").style.marginLeft = "100%";
		}
    	
	    document.getElementById("main").style.left = "0";
	    document.getElementById("main").style.right = "auto";
	    $('body').toggleClass('overflowy-hidden');
	    $('.sidenavLeft').toggleClass('overflowy-auto');
    	$(this).one("click", handler4);
    	$('.cbleft').one("click", handler4);
	}

	function handler4() {
	    document.getElementById("mySidenavLeft").style.width = "0";
	    document.getElementById("main").style.marginLeft = "0";
	    $('body').removeClass('overflowy-hidden');
	    $('.sidenavLeft').removeClass('overflowy-auto');
	    $(this).one("click", handler3);
	}
	$("#mail-activate").one("click", handler3);

};

// LoadSite
$(window).load(function(){
    loadSite();
});