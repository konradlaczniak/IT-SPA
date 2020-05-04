import 'bootstrap/dist/css/bootstrap.css';
import './it-spa.scss';
import $ from 'jquery';
import { Router } from './router/router';
import { nav } from './navigation/nav';
import { footer } from './footer/footer';
import {calendarRestriction,reservationDetails} from './cart/booking-logic'
import {itSpaCart} from './cart/it-spa-cart';


const main = $('main');

const router = new Router();

router.mount(main);

router.init();

main.before(nav());
main.after(footer());




// calendarRestriction();
// reservationDetails();
itSpaCart();

// Nawigacja przejscie






