const menubtn = document.querySelector('.menu-btn');
const navigation = document.querySelector('.navigation');
const home = document.querySelector('.active');
const checkbox = document.querySelector('.form-check-input');
const submit = document.querySelector('.sum');


let menuopen = false;
menubtn.addEventListener('click', () => {
    if(!menuopen){
        menubtn.classList.add('open');
        navigation.classList.add('navback');
        home.classList.add('active-on');
        menuopen = true;
    } else {
        menubtn.classList.remove('open');
        navigation.classList.remove('navback');
        home.classList.remove('active-on');
        menuopen = false
    }
});

$(window).scroll(function(){

    $('nav').toggleClass('scrolled',$(this).scrollTop()>50);
});

function sendMail() {
    var link = 'mailto:ebukajefferson16@gmail.com?subject=Message from '
        + document.getElementById('email_address').value
        + '&body=' + document.getElementById('email_address').value;
    window.location.href = link;
}

let check = false;
checkbox.addEventListener('click', () => {
    if(!check){
        submit.classList.remove('submit-opacity');
        check = true;
    } else {
        submit.classList.add('submit-opacity');
        check = false;
    }
});

(function($){
  'use strict';
    $(window).on('load', function () {
        if ($(".pre-loader").length > 0)
        {
            $(".pre-loader").fadeOut("slow");
        }
    });
})(jQuery)

window.addEventListener('scroll', reveal);

function reveal() {
    var reveals = document.querySelectorAll('.reveal');

    for(var i = 0; i < reveals.length; i++){
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if(revealtop < windowheight - revealpoint){
            reveals[i].classList.add('activated');
        } else {
            reveals[i].classList.remove('activated');
        }
    }
}