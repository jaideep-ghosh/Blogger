/*
 Author: Jaideep Ghosh
 Template: Under-Construction
 Version: 1.s
 URL: https://jaideepghosh.blogspot.in/
 */


$(document).ready(function(){

    "use strict";


    /*
     ----------------------------------------------------------------------
     Preloader
     ----------------------------------------------------------------------
     */
    $(".loader").delay(400).fadeOut();
    $(".animationload").delay(400).fadeOut("fast");


    /*
     ----------------------------------------------------------------------
     Nice scroll
     ----------------------------------------------------------------------
     */
    $("html").niceScroll({
        cursorcolor: '#fff',
        cursoropacitymin: '0',
        cursoropacitymax: '1',
        cursorwidth: '2px',
        zindex: 999999,
        horizrailenabled: false,
        enablekeyboard: false
    });


    /*
     ----------------------------------------------------------------------
     Watch
     ----------------------------------------------------------------------
     */
    if($.find('#watch')[0]) {

        $('#watch').countDown({
            targetDate: {
                'day': 		23,
                'month': 	3,
                'year': 	2018,
                'hour': 	11,
                'min': 		13,
                'sec': 		0
            },
            omitWeeks: true
        });
        //enter the count down date using the format year, month, day, time: hour, min, sec

        if( $('.day_field .top').html() == "0" ) $('.day_field').css('display','none');

    }

}); // End $(document).ready(function(){





















