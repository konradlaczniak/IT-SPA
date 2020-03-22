import $ from 'jquery';
import background from '../../images/background.jpg';
import background2 from '../../images/background2.png';
import background3 from '../../images/background3.png';

export const home = () => {
  const fragment = $(new DocumentFragment());

  fragment
    .append(`<div id="slides" class="carousel slide" data-ride="carousel">
	<ul class="carousel-indicators">
		<li data-target="#slides" data-slide-to="0" class="active"></li>
		<li data-target="#slides" data-slide-to="1" ></li>
		<li data-target="#slides" data-slide-to="2" ></li>
	</ul>
	<div class="carousel-inner">
		<div class="carousel-item active">
			<img src = '${background}'alt = "background">
			<div class="carousel-caption">
				<h1 class="display-2">Bootstrap</h1>
				<h3>Complete Website Layout</h3>
				<button type="button" class="btn btn-outline-light btn-lg">View demo</button>
				<button class="btn btn-primary btn-lg">Get Started</button>
			</div>
		</div>
		<div class="carousel-item">
			<img src='${background2}' alt="background">
		</div>
		<div class="carousel-item">
			<img src='${background3}' alt="background">
		</div>
	</div>
</div>
`)
  

  return fragment;
};
