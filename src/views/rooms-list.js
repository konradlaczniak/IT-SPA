import $ from 'jquery';
import { roomsService } from '../common/rooms-service';
import { roomsListItem } from './rooms-list-item';

export const roomsList = () => {
  const ul = $(`<div class="room-list"><ul class="list-group"></ul></div>`);

  // doczepia liste pokoi, gdy tylko przyjdzie z serwera
  roomsService.getRooms()
    .then(rooms => {
      console.log(rooms);
      return rooms.map(room => roomsListItem(room))})
    .then(roomsListItems => {
          console.log(roomsListItems);
      ul.find('ul').append(roomsListItems)});

  return ul;
};
