var homeJS = {
    initComponents: function () {
        $('.feature-slick').slick({
            fade:true,
            autoplay:true,
            speed:1000,
            autoplaySpeed: 5000
        });
        $('.testimonial-slick').slick({
            fade:true,
            autoplay:true,
            speed:500,
            autoplaySpeed: 5000
        });
    },
    // handleSomeBehaviors: function () {
    //     var startButton = jQuery('#start-button');

    //     startButton.click(function (e) {
    //         e.preventDefault();
    //         // Do something
    //     });
    // },
    init: function () {
        this.initComponents();
        // this.handleSomeBehaviors();
    }
};

$(function () {
    homeJS.init();
});