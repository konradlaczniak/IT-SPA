import $ from 'jquery';
import body from '../../images/body1.jpg';

export const treatmentsItem = (treatment) => {
    const div = $(`<div class="card"></div>`);

    div.html(`
    <div class="card-header" id="heading${treatment.id}">
                        <div class="treatments-direct-title">
                            <button id="button-trn" class="btn item-info" type="button" data-toggle="collapse" data-target="#collapse${treatment.id}"
                              aria-expanded="false" aria-controls="collapseMain${treatment.id}"> 
                                <div class="treatment-item-head">
                                    <h4 class="mb-0"> <span class="icon"></span><span class="treatmens-name"> ${treatment.name}</span></h4> 
                                    <div class="treatment-item-info">
                                        <div class="treatment-item-time">
                                            <span class="label"><i class="fas fa-clock"></i> Time: </span> <span class="value">${treatment.time} min</span>
                                        </div>
                                        <div class="treatment-item-price">
                                            <span class="label"><i class="fas fa-money-bill-alt"></i> Price: </span> <span class="value">${treatment.price} zl</span>
                                        </div>
                                    </div>
                                </div>
                            </button>
                        </div>
                    </div>
                    <div id="collapse${treatment.id}" class="collapse" aria-labelledby="heading${treatment.id}" data-parent="#accordionExample">
                        <div class="card-body">
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf
                            moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                            Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda
                            shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea
                            proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim
                            aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                        </div>
                    </div>`)
    
    return div;
};