import $ from 'jquery';
import { roomsList } from './rooms-list';

export const rooms = () => {
  const fragment = $(new DocumentFragment());

  fragment
    .append(`<div class="rooms">
        <header class="info-head">
            Pokoje ZDJECIE ZDJECIE ZDJECIE
        </header>
        <div class="info-rooms">
          <div class="info-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. At officia magni, iusto dolores optio adipisc.</div>
          <div class="info-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. At officia magni, iusto dolores optio adipisc.</div>
        </div>
    </div>`)
    .append(roomsList())
    .append('<p>Lorem ipsum <span> abcd </span> dolor sit amet...</p>');

  return fragment;
};


