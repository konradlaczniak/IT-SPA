import "bootstrap/dist/css/bootstrap.css";
import "./it-spa.scss";
import $ from "jquery";
import { Router } from "./router/router";
import { nav } from "./navigation/nav";
import { footer } from "./footer/footer";
import { itSpaCart } from "./cart/it-spa-cart";

const main = $("main");

const router = new Router();

router.mount(main);
window.onpopstate = function () {
  router.navigate(location.pathname);
};

router.init();

main.before(nav());
main.after(footer());
main.after(itSpaCart());
