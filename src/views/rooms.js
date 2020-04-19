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
						<div class="icons">
							<div class="icon-item p-3">
								<div class="i-icon-pic"><img src="https://img.icons8.com/pastel-glyph/64/000000/bed--v1.png"/></div>
								<h3 class="i-icon-title">Lorem ipsum dolor sit amet</h3>
							</div>
							<div class="icon-item p-3">
								<div class="i-icon-pic"><img src="https://img.icons8.com/pastel-glyph/64/000000/room-service.png"/></div>
								<h3 class="i-icon-title">Lorem ipsum dolor sit amet</h3>		
							</div>
							<div class="icon-item p-3">
								<div class="i-icon-pic"><img src="https://img.icons8.com/ios/50/000000/hotel-changing-room.png"/></div>
								<h3 class="i-icon-title">Lorem ipsum dolor sit amet</h3>
							</div>
						</div>
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
      <div class="rooms-group row p-4">
      </div>
		</div>
	</div>
</section>
`).find('.rooms-group').append(roomsList())

  return fragment;
};


