import $ from 'jquery';
import image from '../../images/room1.jpg';

export const roomsListItem = (room) => {
    const li = $(`<li class="list-group-item"></li>`);
    
    
    li.html(`<div class="container room-details">
        <figure>
	        <img src='${image}' class="img-fluid" alt="room1">
        </figure>
        <div class="card-footer">
            <div class="card-price">${room.price} zł/noc </div>
            <div class="card-content"> 
                <h1 class="room-name-headline">${room.name}</h1>
                <div class="card-content-details">
                    <div class="card-content-details-more"><img src="https://img.icons8.com/pastel-glyph/64/000000/person-male.png"> ${room.guests}</div>
                    <div class="card-content-details-more"><img src="https://img.icons8.com/small/64/000000/bed.png"> ${room.beds}</div>
                </div>
            </div>
            <button class="btn btn-dark shop-item-button">Zarezerwuj</button>
        </div>
    </div>`);
    return li;
};
