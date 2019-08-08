$(function() {
    /*For Show and Hide Navbar */
    $('.menu-toggle, .fa-times').on('click', function() {
        $('nav').toggleClass('active');
        $('.overlay').toggleClass('menu-open');
    });

    $('overlay').on('click', function() {
        $('nav').removeClass('active');
        $(this).toggleClass('menu-open');
    });

    /* For scrollify*/
    /*
    $.scrollify({
         section: ".container-fluid",
         //  sectionName: "section-name",
         interstitialSection: "",
         easing: "easeOutExpo",
         scrollSpeed: 1100,
         offset: 0,
         scrollbars: false,
         standardScrollElements: "",
         setHeights: true,
         overflowScroll: true,
         updateHash: true,
         touchScroll: true,
         before: function() {},
         after: function() {},
         afterResize: function() {},
         afterRender: function() {}
     });
*/

    /*For change color of navbar when scrolling */

    $(window).scroll(function() {
        if ($(document).scrollTop() > 50) {
            $('#navbar').addClass('shrink');
        } else {
            $('#navbar').removeClass('shrink');
        }
    });
    /* For change color of page when scrolling

      var wHeight = $(window).height();
    $('.container-fluid')
        .height(wHeight)
        .scrollie({
            scrollOffset: -500,
            scrollingInView: function(elem) {
                var bgColor = elem.data('background');

                $('body').css('background-color', bgColor);
            }
        }); */

    const [red, green, blue] = [69, 111, 225]
    const body = document.querySelector('body')

    window.addEventListener('scroll', () => {
            const y = 1 + (window.scrollY || window.pageYOffset) / 500
            const [r, g, b] = [red / y, green / y, blue / y].map(Math.round)
            body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
        })
        /*For show and hide image*/

    var t1 = new TimelineMax({ onUpdate: updatePercentage });
    var t2 = new TimelineMax();
    const Controller = new ScrollMagic.Controller();

    t1.from('blockquote', 0.5, { x: 200, opacity: 0 });
    t1.from('span', 1.0, { width: 0 }, "=-0.5");
    t1.from('#flower', 1.0, { x: -200, opacity: 0, ease: Power4.easeInOut }, "=-1");
    t1.from('#fruits', 1.0, { x: 200, opacity: 0, ease: Power4.easeInOut }, "=-0.7");


    const scene = new ScrollMagic.Scene({
            triggerElement: "#page2",
            triggerHook: "onLeave",
            duration: "100%"
        })
        .setPin("#page2")
        .setTween(t1)
        .addTo(Controller);

    t2.from(".box", 1, { opacity: 0, scale: 0 });
    t2.to(".box", -5, {
        left: "38%",
        scale: 1.3,
        borderColor: 'rgba(149, 165, 166, .5)',
        borderWidth: 12,
        boxShadow: '1px 1px 0px 0px rgba(0,0,0,0.09)'
    })
    const scene2 = new ScrollMagic.Scene({
            triggerElement: "blockquote"
        })
        .setTween(t2)
        .addTo(Controller);

    function updatePercentage() {
        t1.progress();
        console.log(t1.progress());
    };

});