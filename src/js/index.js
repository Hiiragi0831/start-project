// Main js file
// see more: https://github.com/vedees/webpack-template/blob/master/README.md#import-js-files

var Swiper = require("swiper/swiper-bundle.min");
var $ = require("jquery");
var jQuery = require("jquery");

document.addEventListener(
    "DOMContentLoaded", () => {


        let Slider = document.querySelector('.swiper-container');
        if (Slider) {
            Slider = new Swiper(Slider, {
                spaceBetween: 5,
                slidesPerView: 1,
            });
        }


    }
);
