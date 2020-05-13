import $ from "jquery";
import {
  treatmentsListBody,
  treatmentsListFace,
  treatmentsListHAL,
} from "./treatments-list";
import { treatmentsArea } from "./Treatments-area";
import { treatmentBook } from "../cart/booking-logic";
import { showTotals } from "../cart/booking-logic";
import { addItemToCart } from "../cart/booking-logic";

export const treatments = () => {
  window.scroll(0, 0);

  const fragment = $(new DocumentFragment());

  fragment
    .append(
      `<header class="treatments-header">
    <div class="container-fluid">
	    <div class="head_2">
        <section id="scroll-button_1" class="demo_1">
            <a href="treatments#section-info"><span></span></a>
				</section>
        <div class="treatments-title">
          <hgroup>
            <h1> Treatments </h1>
            <h5> Let's forget about coding </h5>
            <h5> & </h5>
            <h5> start thinking about relaxing </h5>
          </hgroup>
        </div>
      </div>
    </div>
    </header>`
    )
    .append(
      `<section id="section-info">
	<div class="container-fluid p-5">
		<div class="container-hotel-info">
			<div class="row p-3">
				<div class="col-lg-6 p-2">
					<h1>IT Treatments</h1>
					<h4>Your moments of relax</h4>
				</div>
				<div class="col-lg-6 p-2">
					<div class="icons">
						<div class="icon-item p-3">
							<div class="i-icon-pic"><img src="https://img.icons8.com/wired/64/000000/spa.png"/></div>
							<h3 class="i-icon-title">Lorem ipsum dolor sit amet</h3>
						</div>
						<div class="icon-item p-3">
							<div class="i-icon-pic"><img src="https://img.icons8.com/ios-filled/50/000000/therapy.png"/></div>
							<h3 class="i-icon-title">Lorem ipsum dolor sit amet</h3>		
						</div>
						<div class="icon-item p-3">
							<div class="i-icon-pic"><img src="https://img.icons8.com/pastel-glyph/64/000000/spa-care.png"/></div>
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
		</div>
	</div>
</section>
`
    )

    .append(
      `
<section class="treatments-categories">
	<div class="accordion treatments-categories-list" id="accordionExample">
	
    </div>
</section>

`
    )
    .find(".treatments-categories-list")
    .append(treatmentsArea())
    .find("#collapseMainOne")
    .append(treatmentsListBody())
    .parent()
    .next()
    .find("#collapseMainTwo")
    .append(treatmentsListFace())
    .parent()
    .next()
    .find("#collapseMainThree")
    .append(treatmentsListHAL());
  // fragment.find('#collapseMainTwo').append(treatmentsListFace())
  // fragment.find('#collapseMainThree').append(treatmentsListHAL())

  setTimeout(function () {
    treatmentBook(showTotals, addItemToCart);
  }, 1000);

  return fragment;
};
