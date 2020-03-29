import $ from 'jquery';
import image from '../../images/room1.jpg';

export const roomsListItem = (room) => {
    const li = $(`<li class="list-group-item"></li>`);
    
    
//     const photo = $(`<figure>
//     <a><img src="../../images/room1.jpg" alt="room1"></a>
// </figure>`)
    li.html( `<div class="room-details">
        <figure>
	        <img src='${image}' alt="room1">
        </figure>
        <div class="card-footer">
            <div class="card-price">${room.price} zł/noc
            </div>
            <div class="card-content"> 
                <h1>${room.name}</h2>
                <div class="card-content-details">
                    <div class="card-content-details-more"><img src="https://img.icons8.com/pastel-glyph/64/000000/person-male.png"> ${room.guests}</div>
                    <div class="card-content-details-more"><img src="https://img.icons8.com/small/64/000000/bed.png"> ${room.beds}</div>
                </div>
            </div>
            <button class=""></button>
        </div>
    </div>`);
    return li;
};
