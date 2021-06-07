let openModal = document.querySelectorAll(".openModal");
let closeModal = document.querySelector(".closeModal");
let modal = document.querySelector('.modal_body');
let overlay = document.querySelector('.overlay');

let openModal2 = document.querySelector(".openModal2");
let closeModal2 = document.querySelectorAll(".closeModal2");
let modal2 = document.querySelector('.modal_body.second');
let overlay2 = document.querySelector('.overlay.second');

document.addEventListener('click', function(e) {
    e.preventDefault();
	if ( e.target != modal  && e.target.closest(".modal_body") == null && e.target != document.querySelector('.call.openModal') && e.target != document.querySelector('.call1.openModal')) {
		console.log(e.target.closest(".modal_body"))
        modal.classList.remove("active");
		overlay.classList.remove('active');
    }
})

document.addEventListener('click', function(e) {
    e.preventDefault();
    if (e.target != modal2  && e.target.closest(".modal_body.second") == null && e.target != document.querySelector('.openModal2') && e.target != document.querySelector('.submit') && e.target != document.querySelector('.submitt')) {
        modal2.classList.remove("active");
		overlay2.classList.remove('active');
    };
})


for (let i = 0; i < openModal.length; i++) {
	openModal[i].addEventListener('click', function(e) {
        e.preventDefault();
		modal.classList.add("active");
        overlay.classList.add('active');
	})
}

closeModal.addEventListener("click", function(e) {
    e.preventDefault();
	modal.classList.remove("active");
	overlay.classList.remove('active');
});


openModal2.addEventListener("click", function(e) {
    e.preventDefault();
	modal2.classList.add("active");
    overlay2.classList.add("active");
    modal.classList.remove("active");
    overlay.classList.remove("active");
});

for (let i =0; i < closeModal2.length; i++) {
    closeModal2[i].addEventListener("click", function(e) {
        e.preventDefault();
        modal2.classList.remove("active");
        overlay2.classList.remove('active');
    });
}




if (window.matchMedia("(max-width: 575px)").matches) {
	document.querySelector(".call1").innerHTML = "Заказать";
} else {
	document.querySelector(".call1").innerHTML = "Заказать звонок";
}

let menu = document.querySelector(".navbar");
let ham = document.querySelector(".hamburger");

ham.addEventListener("click", toggleMenu);

function toggleMenu() {
	ham.classList.toggle('isactive');
	menu.classList.toggle('showMenu');
}


document.querySelector('.submit').addEventListener('click', function(e) {
    e.preventDefault();
	modal2.classList.add("active");
    overlay2.classList.add("active");
})

let open2 = document.querySelectorAll('.submit');

for (let i = 0; i < open2.length; i++) {
	open2[i].addEventListener('click', function() {
		modal2.classList.add("active");
		overlay2.classList.add("active");
	})
}


$(document).ready(function(){
    $(".refs").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});


$(document).ready(function(){
    $(".navbar").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});


$( ".more" ).click(function(e) {
    e.preventDefault();
    $('.works_items.second').removeClass( "hidden" );
    $(this).hide();
  });


$('.slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    centerMode: true,
    variableWidth: true,
    infinite: true,
    focusOnSelect: true,
    cssEase: 'linear',
    touchMove: true,
    swipe: false,
    prevArrow: $('.slider-prev'),
    nextArrow: $('.slider-next'),
});



$('.moree.first').click(function () {
    $('.overlay.first').fadeIn();
    $('.overlay.first > div').fadeIn();
});

$('.moree.secondd').click(function () {
    $('.overlay.secondd').fadeIn();
    $('.overlay.secondd > div').fadeIn();
});

$('.moree.third').click(function () {
    $('.overlay.third').fadeIn();
    $('.overlay.third > div').fadeIn();
});

$('.moree.fourth').click(function () {
    $('.overlay.fourth').fadeIn();
    $('.overlay.fourth > div').fadeIn();
});

$('.moree.fifth').click(function () {
    $('.overlay.fifth').fadeIn();
    $('.overlay.fifth > div').fadeIn();
});

let moree = document.querySelectorAll('.moree');

let closed = document.querySelectorAll('.modal_close');


for (let i= 0; i< closed.length; i++) {
    closed[i].onclick = function() {
        $(this).parents('.overlay').fadeOut();
        $(this).parents('.modal_body').fadeOut();
    }
}

let overlays = document.querySelectorAll('.overlay');


let order = document.querySelectorAll('.order');

let modals = document.querySelectorAll('.modal_body');


for (let i= 0; i< order.length; i++) {
    order[i].onclick = function() {
        $(this).parents('.overlay').fadeOut();
        $(this).parents('.modal_body').fadeOut();
        modal.classList.add("active");
        overlay.classList.add('active');  
        }
}
        




document.addEventListener('click', function(e) {
	if ( e.target != document.querySelector('.modal_body.first')  && e.target.closest(".modal_body.first") == null && e.target != document.querySelector('.moree.first')) {
        $('.modal_body.first').fadeOut();
        $('.overlay.first').fadeOut();
    }
})




document.addEventListener('click', function(e) {
	if ( e.target == document.querySelector('.overlay.secondd')) {
        $('.modal_body.secondd').fadeOut();
        $('.overlay.secondd').fadeOut();
    }
})


document.addEventListener('click', function(e) {
	if ( e.target == document.querySelector('.overlay.third')) {
        $('.modal_body.third').fadeOut();
        $('.overlay.third').fadeOut();
    }
})



document.addEventListener('click', function(e) {
	if ( e.target == document.querySelector('.overlay.fourth')) {
        $('.modal_body.fourth').fadeOut();
        $('.overlay.fourth').fadeOut();
    }
})

document.addEventListener('click', function(e) {
	if ( e.target == document.querySelector('.overlay.fifth')) {
        $('.modal_body.fifth').fadeOut();
        $('.overlay.fifth').fadeOut();
    }
})

$(document).ready(function(){
    if($( window ).width() < 767){
        $(".body_text_4 .call").text("Заказать");
    }else{
        $(".body_text_4 .call").text("Заказать наклейку");
    }
 });