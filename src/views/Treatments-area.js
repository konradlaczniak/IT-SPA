import $ from 'jquery';
import body from '../../images/body1.jpg';

export const treatmentsArea = () => {

    const categories= ["Body","Face","Hands and legs"];
    const iterations = ["One","Two","Three"];

    let area = ``;

    for (let i=0; i<categories.length; i++) {
        area += `
        <div class="card mb-4 mx-auto  w-75 treatmentsCategory">
            <img src='${body}' class="card-img main-treatment-card" alt="...">
            <div class="card-header card-img-overlay" id="headingMain${iterations[i]}">
                <div class="treatments-tab-title">
                    <button id="button-trn" class="btn" type="button" data-toggle="collapse" data-target="#collapseMain${iterations[i]}"
                        aria-expanded="true" aria-controls="collapseOne">
                        <h1 class="category-title"><span class="icon"></span> ${categories[i]}</h1>
                    </button>
                </div>
            </div>
            <div id="collapseMain${iterations[i]}" class="collapse" aria-labelledby="headingMain${iterations[i]}">
            </div>
        </div>`
    }
    return area;
}