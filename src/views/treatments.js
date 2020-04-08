import $ from 'jquery';
import body from '../../images/body1.jpg';
import { treatmentsListBody,treatmentsListFace,treatmentsListHAL  } from './treatments-list';
import { treatmentsArea } from './Treatments-area';

export const treatments = () => {
  const fragment = $(new DocumentFragment());

  fragment
    .append(`<header class="treatments-header">
    <div class="container-fluid">
	    <div class="head_2">
        <section id="scroll-button_1" class="demo_1">
            <a href="#"><span></span></a>
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
    </header>`)
    .append(`<section id="section-info">
	<div class="container-fluid p-5">
		<div class="container-hotel-info">
			<div class="row p-3">
				<div class="col-lg-6 p-2">
					<h1>IT Treatments</h1>
					<h4>Your moments of relax</h4>
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
		</div>
	</div>
</section>
`)
// .append(`
// <section class="treatments-categories">
//     <div class="accordion" id="accordionExample">
//         <div class="card m-auto w-75">
//             <img src='${body}' class="card-img main-treatment-card" alt="...">
//             <div class="card-header card-img-overlay" id="headingMainOne">
//                 <div class="treatments-tab-title">
//                     <button id="button-trn" class="btn" type="button" data-toggle="collapse" data-target="#collapseMainOne"
//                         aria-expanded="true" aria-controls="collapseOne">
//                         <h1 class="category-title"><span class="icon"></span> Body</h1>
//                     </button>
//                 </div>
//             </div>
//             <div id="collapseMainOne" class="collapse" aria-labelledby="headingMainOne">
//                 <div class="card">
//                     <div class="card-header" id="headingOne">
//                         <div class="treatments-direct-title">
//                             <button id="button-trn" class="btn item-info" type="button" data-toggle="collapse" data-target="#collapseOne"
//                               aria-expanded="false" aria-controls="collapseMainOne"> 
//                                 <div class="treatment-item-head">
//                                     <h4 class="mb-0"> <span class="icon"></span><span class="treatmens-name"> Massage</span></h4> 
//                                     <div class="treatment-item-info">
//                                         <div class="treatment-item-time">
//                                             <span class="label"><i class="fas fa-clock"></i> Time: </span> <span class="value"></span>
//                                         </div>
//                                         <div class="treatment-item-price">
//                                             <span class="label"><i class="fas fa-money-bill-alt"></i> Price: </span> <span class="value"></span>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </button>
//                         </div>
//                     </div>
//                     <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
//                         <div class="card-body">
//                             Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf
//                             moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
//                             Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda
//                             shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea
//                             proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim
//                             aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
//                         </div>
//                     </div>
//                 </div>
//                 <div class="card">
//                     <div class="card-header" id="headingTwo">
//                         <h2 class="mb-0">
//                             <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo"
//                                 aria-expanded="false" aria-controls="collapseTwo">
//                                 Collapsible Group Item #2
//                             </button>
//                         </h2>
//                     </div>
//                     <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
//                         <div class="card-body">
//                             Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf
//                             moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
//                             Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda
//                             shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea
//                             proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim
//                             aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
//                         </div>
//                     </div>
//                 </div>
//                 <div class="card">
//                     <div class="card-header" id="headingThree">
//                         <h2 class="mb-0">
//                             <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree"
//                                 aria-expanded="false" aria-controls="collapseThree">
//                                 Collapsible Group Item #3
//                             </button>
//                         </h2>
//                     </div>
//                     <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
//                         <div class="card-body">
//                             Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf
//                             moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
//                             Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda
//                             shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea
//                             proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim
//                             aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
// </section>`)
.append(`
<section class="treatments-categories">
    <div class="accordion treatments-categories-list" id="accordionExample">
    </div>
</section>
`)
.find('.treatments-categories-list').append(treatmentsArea())
.find('#collapseMainOne').append(treatmentsListBody())
.parent().next().find('#collapseMainTwo').append(treatmentsListFace())
.parent().next().find('#collapseMainThree').append(treatmentsListHAL())
// fragment.find('#collapseMainTwo').append(treatmentsListFace())
// fragment.find('#collapseMainThree').append(treatmentsListHAL())

  return fragment;
};
