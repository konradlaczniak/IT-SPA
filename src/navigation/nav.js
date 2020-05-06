import $ from "jquery";
import { routeChange } from "../router/route-change";
import { routes } from "../router/routes";
import { navItem } from "./nav-item";
import { itSpaCart } from "../cart/it-spa-cart";

export const nav = () => {

  $(function () {
    $(window).on("scroll", function () {
      if ($(window).scrollTop() > 10) {
        $(".navbar").addClass("active");
      } else {
        $(".navbar").removeClass("active");
      }
    });
  });


  const navbar = $(`
    <nav class="navbar navbar-expand-md fixed-top ">
      <span class="navbar-brand">IT SPA</span>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ml-auto"></ul>
      </div>
    </nav>
  `);

  const cart = $(`<div id="cart-info" class="nav-info align-items-center cart-info d-flex justify-content-between mx-lg-5">
            <span class="cart-info__icon mr-lg-3"><i class="fas fa-shopping-cart"></i></span>
            <p class="mb-0 text-capitalize"><span id="item-count"></span><span class="cart-start">Add something!</span><span class="item-total"></span></p>
          </div>
  `);

  // chcemy zbudowac tablice elementow navItem z odpowiednimi nazwami i callbackami
  const navItems = routes.map((route) => {
    const { name, path } = route;
    return navItem(name, () => navbar.trigger(routeChange, { path: path }));
  });

  navbar.find("ul").append(navItems).append(cart);

  return navbar;



  
};
