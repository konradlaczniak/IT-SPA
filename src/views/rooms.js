import $ from 'jquery';
import { roomsList } from './rooms-list';
import background from '../../images/background.jpg';

export const rooms = () => {
  const fragment = $(new DocumentFragment());
  

  fragment
  .append(`<header class="room-header">
    <div class="container-fluid">
	    <div class="row room-head-bg">
        <section id="section04" class="demo">
          <a href="rooms#section-info"><span></span></a>
        </section>
        <div class="room-title">
          <hgroup>
            <h1> Pokoje </h1>
            <h5> Wygoda i komfort </h5>
            <h5> & </h5>
            <h5> Bogate wyposażenie </h5>
          </hgroup>
        </div>
      </div>
    </div>
    </header>`)
.append(`<section id="section-info">
	<div class="container-fluid p-5">
		<div class="container-hotel-info">
			<div class="row p-3">
				<div class="col-lg-6 p-2">
					<h1>Pokoje</h1>
					<h4>Twoje miejsce wypoczynku</h4>
				</div>
				<div class="col-lg-6 p-2">
						<figure class="figure">
						<img src='#' class="figure-img img-fluid" alt="Food">
						</figure>
				</div>
			</div>
			<div class="row p-3">
				<div class="col-lg-6 p-2">
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ipsa in fugiat incidunt sed perferendis delectus illum inventore necessitatibus eaque! Alias nemo sapiente, nihil quae iure provident. Exercitationem, placeat vel.</p>
				</div>
				<div class="col-lg-6 p-2">
						<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo velit labore consequatur alias dignissimos quaerat sequi omnis nihil eius. Officiis voluptatibus facilis aspernatur fugiat veritatis.</p>
				</div>
			</div>
      <div class="test row p-4">
      </div>
		</div>
	</div>
</section>
`).find('.test').append(roomsList())
// .append(`<section id="abc" class="rooms">
//         <div class="rooms-info col-sm-12">
//             <div class="head-left">
//             Pokoje 
//             </div>
//             <div class="head-right">
//               <figure>
// 							  <img src="https://img.icons8.com/carbon-copy/60/000000/balcony.png">
// 							  <figcaption>Apartament</figcaption>
//               </figure>
//               <figure>
// 							  <img src="https://img.icons8.com/pastel-glyph/60/000000/bed--v1.png">
// 							  <figcaption>Pokój dwuosobwy</figcaption>
//               </figure>
//               <figure>
// 							  <img src="https://img.icons8.com/pastel-glyph/60/000000/empty-bed.png">
// 							  <figcaption>Pokój jednoosobowy</figcaption>
//               </figure>
//             </div>
//         </div>
//         <div class="info-rooms">
//           <div class="info-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. At officia magni, iusto dolores optio adipisc.</div>
//           <div class="info-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. At officia magni, iusto dolores optio adipisc.</div>
//         </div>
//     </section>`)

  return fragment;
};


