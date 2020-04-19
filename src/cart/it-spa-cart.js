import $ from 'jquery';
import { Cart } from "./cart";

export const itSpaCart = () => {
  const cart = new Cart();
  const fragment = $(new DocumentFragment());

  // cookieStore.addEventListener('change', (event) => {
  //     // jesli zaistniala zmiana w cookies,
  //     // ponownie pobieram zawartosc kosza
  //     const nowaZawartosc = cart.get();

  //     // ...i poprawiam wyswietlane przez kosz informacje
  //     // TODO: zaktualizuj to co wyswietla obecnie koszyk
  // });

  $(function() { 
  const removeCartItemButtons = $('.btn-danger');
  console.log(removeCartItemButtons);

  for (let i=0; i<removeCartItemButtons.length; i++) {
    const button = removeCartItemButtons[i];
    button.addEventListener('click', removeCartItem)
  }
  setTimeout(function(){
  const addToCartButtons = $('.shop-item-button')
   console.log(addToCartButtons);
  for (let i = 0; i < addToCartButtons.length; i++) {
    const button = addToCartButtons[i]
    button.addEventListener('click', addToCartClicked)
  }
},500);

  function removeCartItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
  }

  function addToCartClicked(event) {
    const button = event.target;
    const shopItem = button.parentElement.parentElement;
    var title = shopItem.getElementsByClassName('room-name-headline')[0].innerText
    var price = shopItem.getElementsByClassName('card-price')[0].innerText
    addItemToCart(title,price);
  }
  // return fragment;

  function addItemToCart(title,price,sleep) {

    const item = $(`<div class="cart-row">
                    <div class="cart-item cart-column">
                        <img class="cart-item-image mx-3" src='${sleep}' width="100" height="100">
                        <span class="cart-item-title">${title}</span>
                    </div>
                    <span class="cart-price cart-column">${price}</span>
                    <div class="cart-delete cart-column">
                        <button class="btn btn-danger" type="button">REMOVE</button>
                    </div>
                </div>`)

    const cartItems = $('.cart-items');
    cartItems.append(item);
    console.log(cartItems)
  }

  });
};
