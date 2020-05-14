import $ from "jquery";
import background from "../../images/background.jpg";
import background2 from "../../images/carousel1.jpg";
import background3 from "../../images/carousel2.jpg";

export const home = () => {
  window.scroll(0, 0);

  const fragment = $(new DocumentFragment());

  fragment.append(`
	<header class="home-header">
    	<div class="container-fluid">
	    	<div class="head_1">
				<h2 class="sub-headline">
					<span class="first-letter">W</span>elcome
				</h2>
				<h1 class="headline">IT SPA</h1>
				<div class="headline-description">
					<div class="separator">
						<div class="line line-left"></div>
						<div class="asterisk"><i class="fas fa-asterisk"></i></div>
						<div class="line line-right"></div>
					</div>
					<div class="single-animation">
						<h5>Ready to be booked</h5>
						<a href="#section-info" class="btn cta-btn">Explore</a>
					</div>
				</div>
				<section id="scroll-button" class="demo">
  					<a href="#section-info"><span></span></a>
				</section>
        	</div>
      	</div>
	</header>`).append(`<section id="section-info">
	<div class="container-fluid p-5">
		<div class="container-hotel-info">
			<div class="row p-3">
				<div class="col-lg-6 p-2 hotel-title">
					<h1>Hotel IT SPA</h1>
					<h4>Your chillout zone in Programowo</h4>
				</div>
				<div class="col-lg-6 p-2 features">
						<div class="icons">
							<div class="icon-item p-3">
								<div class="i-icon-pic"><img src="https://img.icons8.com/metro/52/000000/5-star-hotel.png"/></div>
								<h3 class="i-icon-title">Lorem ipsum dolor sit amet</h3>
							</div>
							<div class="icon-item p-3">
								<div class="i-icon-pic"><img src="https://img.icons8.com/wired/64/000000/bed.png"/></div>
								<h3 class="i-icon-title">Lorem ipsum dolor sit amet</h3>		
							</div>
							<div class="icon-item p-3">
								<div class="i-icon-pic"><img src="https://img.icons8.com/wired/64/000000/restaurant.png"/></div>
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
			<div class="row p-4">
				<div class="col-lg-12 p-2">
					<div id="slides_2" class="carousel slide" data-ride="carousel">
						<ul class="carousel-indicators">
							<li data-target="#slides_2" data-slide-to="0" class="active"></li>
							<li data-target="#slides_2" data-slide-to="1" ></li>
							<li data-target="#slides_2" data-slide-to="2" ></li>
						</ul>
						<div class="carousel-inner">
							<div class="carousel-item active">
								<img src ='${background}'class="img-fluid" alt ="background">
							</div>
							<div class="carousel-item">
								<img src='${background2}' class="img-fluid" alt="background">
							</div>
							<div class="carousel-item">
								<img src='${background3}' class="img-fluid" alt="background">
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
`).append(`<section>
	<div class="container-fluid p-5">
		<div class="row bg1">
			<div class="col-lg-6 p-2">
					<figure class="figure">
					  <img src='${background}' class="figure-img img-fluid" alt="Food">
					</figure>
			</div>
			<div class="col-lg-6 p-2">
				<h2>Restaurant</h2>
				<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime pariatur dignissimos placeat ducimus sint, assumenda consectetur itaque fugiat eos velit doloremque qui provident ipsum excepturi ipsam vero. Similique, odit voluptatibus?</p>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam ad dicta fugit enim molestiae nemo ratione excepturi sed eligendi culpa reiciendis ipsum, vel atque aut! Veniam minima repudiandae ipsam fugiat!</p>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente quam harum voluptate architecto laudantium alias est eos veniam ipsum, vitae veritatis quo necessitatibus voluptatem deserunt obcaecati aliquam sequi quaerat sint.</p>
				<br>
				<button class="btn btn-dark"data-toggle="modal" data-target="#moreRestaurantModal">Read more</button>
				<div class="modal fade" id="moreRestaurantModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalScrollableTitle" aria-hidden="true">
  					<div class="modal-dialog modal-dialog-scrollable" role="document">
   					 <div class="modal-content">
   					   <div class="modal-header">
   					     <h5 class="modal-title" id="exampleModalScrollableTitle"><b>Restaurant</b></h5>
   					     <button type="button" class="close" data-dismiss="modal" aria-label="Close">
   					       <span aria-hidden="true">&times;</span>
   					     </button>
   					   </div>
   					   <div class="modal-body">
   					    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus corporis culpa nisi molestiae adipisci perspiciatis.</p>
						<br>
						<ul>
						  <li>Lorem ipsum dolor sit amet consectetur.</li>
						  <li>Lorem ipsum dolor sit amet consectetur.</li>
						  <li>Lorem ipsum dolor sit amet consectetur.</li>
						</ul>
						<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit odit, tempora voluptate quia cumque ab
						  nostrum accusamus sapiente iusto ipsam, saepe quod debitis eos provident?</p>
						  <p><b>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, vel!</b></p>
						  <br>
						<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus corporis culpa nisi molestiae adipisci
						  perspiciatis.</p>
						<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus corporis culpa nisi molestiae adipisci
						  perspiciatis.</p>
   					   </div>
   					   <div class="modal-footer">
   					     <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
   					   </div>
   					 </div>
  					</div>
				</div>
			</div>
		</div>
		<div class="row mt-5 bg2" >
			<div class="col-lg-6 p-2 order_content">
				<h2>SPA & Wellness</h2>
				<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime pariatur dignissimos placeat ducimus sint, assumenda consectetur itaque fugiat eos velit doloremque qui provident ipsum excepturi ipsam vero. Similique, odit voluptatibus?</p>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam ad dicta fugit enim molestiae nemo ratione excepturi sed eligendi culpa reiciendis ipsum, vel atque aut! Veniam minima repudiandae ipsam fugiat!</p>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente quam harum voluptate architecto laudantium alias est eos veniam ipsum, vitae veritatis quo necessitatibus voluptatem deserunt obcaecati aliquam sequi quaerat sint.</p>
				<br>
				<button class="btn btn-dark btn-dark"data-toggle="modal" data-target="#moreSpaWellnessModal">Read more</button>
				<div class="modal fade" id="moreSpaWellnessModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalScrollableTitle" aria-hidden="true">
  					<div class="modal-dialog modal-dialog-scrollable" role="document">
   					 <div class="modal-content">
   					   <div class="modal-header">
   					     <h5 class="modal-title" id="exampleModalScrollableTitle"><b>SPA & Wellness</b></h5>
   					     <button type="button" class="close" data-dismiss="modal" aria-label="Close">
   					       <span aria-hidden="true">&times;</span>
   					     </button>
   					   </div>
   					   <div class="modal-body">
   					    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus corporis culpa nisi molestiae adipisci perspiciatis.</p>
						<br>
						<ul>
						  <li>Lorem ipsum dolor sit amet consectetur.</li>
						  <li>Lorem ipsum dolor sit amet consectetur.</li>
						  <li>Lorem ipsum dolor sit amet consectetur.</li>
						</ul>
						<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit odit, tempora voluptate quia cumque ab
						  nostrum accusamus sapiente iusto ipsam, saepe quod debitis eos provident?</p>
						  <p><b>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, vel!</b></p>
						  <br>
						<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus corporis culpa nisi molestiae adipisci
						  perspiciatis.</p>
						<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus corporis culpa nisi molestiae adipisci
						  perspiciatis.</p>
   					   </div>
   					   <div class="modal-footer">
   					     <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
   					   </div>
   					 </div>
  					</div>
				</div>
			</div>
			<div class="col-lg-6 p-2 order_img">
					<figure class="figure">
					  <img src='${background}' class="figure-img img-fluid" alt="Food">
					</figure>
			</div>
		</div>
	</div>
</section>
`);

  return fragment;
};
