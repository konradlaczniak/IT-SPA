import $ from 'jquery';
import { roomsList } from './rooms-list';

export const rooms = () => {
  const fragment = $(new DocumentFragment());

  fragment
    .append(`<div class="rooms">
        <header class="info-head col-sm-12">
            <div class="head-left">
            Pokoje 
            </div>
            <div class="head-right">
              <figure>
							  <img src="https://img.icons8.com/carbon-copy/60/000000/balcony.png">
							  <figcaption>Apartament</figcaption>
              </figure>
              <figure>
							  <img src="https://img.icons8.com/pastel-glyph/60/000000/bed--v1.png">
							  <figcaption>Pokój dwuosobwy</figcaption>
              </figure>
              <figure>
							  <img src="https://img.icons8.com/pastel-glyph/60/000000/empty-bed.png">
							  <figcaption>Pokój jednoosobowy</figcaption>
              </figure>
            </div>
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


