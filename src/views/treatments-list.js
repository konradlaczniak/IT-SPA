import $ from 'jquery';
import { treatmentsService } from '../common/treatments-service';
import { treatmentsItem } from './treatments-list-item';

export const treatmentsListBody = () => {

   const newFragment = $(`<div class='allcards'><div class="card-group-body"></div></div>`);

    treatmentsService.getTreatments()
        .then(treatments => 
        { console.log(treatments);
        return treatments
        .filter(treatment => treatment.area=="body")
        .map(treatment => {console.log(treatment)
           return treatmentsItem(treatment)})})
        .then(treatmentsItem =>
            {console.log(treatmentsItem)
        newFragment.find('.card-group-body').append(treatmentsItem)
        });

    console.log(newFragment);
    return newFragment;

}

export const treatmentsListFace = () => {

    const newFragment = $(`<div class='allcards'><div class="card-group-face"></div></div>`);

    treatmentsService.getTreatments()
        .then(treatments => treatments
            .filter(treatment => treatment.area == "face")
            .map(treatment => treatmentsItem(treatment)))
        .then(treatmentsItem => newFragment.find('.card-group-face').append(treatmentsItem));
    return newFragment;
}

export const treatmentsListHAL = () => {

    const newFragment = $(`<div class='allcards'><div class="card-group-hal"></div></div>`);

    treatmentsService.getTreatments()
        .then(treatments => treatments
                .filter(treatment => treatment.area == "hands&legs")
                .map(treatment => treatmentsItem(treatment)))
        .then(treatmentsItem => newFragment.find('.card-group-hal').append(treatmentsItem)
        );
    return newFragment;

}