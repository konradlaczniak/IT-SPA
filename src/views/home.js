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
	<section id="scroll-button" class="demo">
  		<a href="#section-info"><span></span>Przejdz dalej</a>
	</section>
</div>
`)
.append(`<section id="section-info">
	<div class="container-fluid p-5">
		<div class="container-hotel-info">
			<div class="row p-3">
				<div class="col-lg-6 p-2">
					<h1>Hotel IT SPA</h1>
					<h4>Twoja strefa chillout w Programowie</h4>
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
			<div class="row p-4">
				<div class="col-lg-12 p-2">
						<figure class="figure">
						<img src='${background}' class="figure-img img-fluid" alt="Food">
						</figure>
				</div>
			</div>
		</div>
	</div>
</section>
`)
.append(`<section>
	<div class="container-fluid p-5">
		<div class="row bg1">
			<div class="col-lg-6 p-2">
					<figure class="figure">
					  <img src='${background}' class="figure-img img-fluid" alt="Food">
					</figure>
			</div>
			<div class="col-lg-6 p-2">
				<h2>Restauracja</h2>
				<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime pariatur dignissimos placeat ducimus sint, assumenda consectetur itaque fugiat eos velit doloremque qui provident ipsum excepturi ipsam vero. Similique, odit voluptatibus?</p>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam ad dicta fugit enim molestiae nemo ratione excepturi sed eligendi culpa reiciendis ipsum, vel atque aut! Veniam minima repudiandae ipsam fugiat!</p>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente quam harum voluptate architecto laudantium alias est eos veniam ipsum, vitae veritatis quo necessitatibus voluptatem deserunt obcaecati aliquam sequi quaerat sint.</p>
				<br>
				<a href="#" class="btn btn-success">Dowiedz się więcej</a>
			</div>
		</div>
		<div class="row mt-5 bg2" >
			<div class="col-lg-6 p-2 ">
				<h2>Restauracja</h2>
				<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime pariatur dignissimos placeat ducimus sint, assumenda consectetur itaque fugiat eos velit doloremque qui provident ipsum excepturi ipsam vero. Similique, odit voluptatibus?</p>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam ad dicta fugit enim molestiae nemo ratione excepturi sed eligendi culpa reiciendis ipsum, vel atque aut! Veniam minima repudiandae ipsam fugiat!</p>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente quam harum voluptate architecto laudantium alias est eos veniam ipsum, vitae veritatis quo necessitatibus voluptatem deserunt obcaecati aliquam sequi quaerat sint.</p>
				<br>
				<a href="#" class="btn btn-success">Dowiedz się więcej</a>
			</div>
			<div class="col-lg-6 p-2">
					<figure class="figure">
					  <img src='${background}' class="figure-img img-fluid" alt="Food">
					</figure>
			</div>
		</div>
	</div>
</section>
`)
  
$(function () {
	$('a[href*=#]').on('click', function (e) {
		e.preventDefault();
		$('html, body').animate({
			scrollTop: $($(this).attr('href')).offset().top
		}, 500, 'linear');
	});
});


  return fragment;
};
