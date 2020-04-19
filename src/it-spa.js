import 'bootstrap/dist/css/bootstrap.css';
import './it-spa.scss';
import $ from 'jquery';
import { Router } from './router/router';
import { nav } from './navigation/nav';
import {calendarRestriction,reservationDetails} from './views/booking'
import {itSpaCart} from './cart/it-spa-cart';


const main = $('main');

const router = new Router();

router.mount(main);

router.init();

main.before(nav());

calendarRestriction();
reservationDetails();
itSpaCart();

// Nawigacja przejscie

$(function () {
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 10) {
            $('.navbar').addClass('active');
        } else {
            $('.navbar').removeClass('active');
        }
    });
});




