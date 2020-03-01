import $ from 'jquery';
import image from '../../images/room1.jpg';

export const roomsListItem = (room) => {
    const li = $('<li class="list-group-item"></li>');
    
    
//     const photo = $(`<figure>
//     <a><img src="../../images/room1.jpg" alt="room1"></a>
// </figure>`)
    li.html( `<a><img src='${image}' alt="room1"></a> ` + room.name);
    return li;
};
