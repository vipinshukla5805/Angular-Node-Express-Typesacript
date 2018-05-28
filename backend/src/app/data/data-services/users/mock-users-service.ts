import { User } from '../../models';
import { UsersService } from './users-service';

export class MockUsersService implements UsersService {
  private userMap: Map<string, User>;
  private maxUserId: number = 0;
  private users: Array<User> = [];
  constructor(users: Array<User>) {
    this.userMap = this.populateUserMap(users);
    this.users = users;
    const userIds = Array.from(this.userMap.keys())
      .map(val => parseInt(val));

    this.maxUserId = Math.max(...userIds);
  }

  getAllLabels(language: string) {
    const data = {
      en: [
        { 'Family Name': 'Family Name' },
        { 'Booking Code': 'Family Name' },
        { 'Submit' : 'Submit' },
        { 'CHECK-IN': 'CHECK-IN' },
        { 'RETRIEVE YOUR BOOKING': 'ONTVANG UW RESERVERING' },
        { 'You can find your booking by filling out your family name and the booking code in your booking confirmation': 'You can find your booking by filling out your family name and the booking code in your booking confirmation' },
      ],
      du: [
        { 'Family Name' : 'Achternaam' },
        { 'Booking Code' : 'Boekingscode' },
        { 'Submit': 'voorleggen' },
        { 'CHECK-IN': 'CHECK IN' },
        { 'You can find your booking by filling out your family name and the booking code in your booking confirmation': 'U kunt uw boeking vinden door uw achternaam en de boekingscode in uw boekingsbevestiging in te vullen' },
      
      ]
    };
    let labels = [];
    switch (language) {
      case 'en-US,en;q=0.9':
        labels = data.en;
        break;
      case 'de-CH,de;q=0.9':
        labels = data.du;
        break;
      default:
      labels = data.du;
        break;
    }
    return Promise.resolve(labels);
  }

  validateCheckin(id: string, bookingid: string, familyname: string) {
    const user = this.users.find(x => x.id === id);
    return user && user.bookingid === bookingid && user.familyname === familyname ?
      Promise.resolve(true) : Promise.resolve(false);
  }

  /////////////////////

  private populateUserMap(users: Array<User>): Map<string, User> {
    const usersMap = new Map<string, User>();

    users.forEach((user) => usersMap.set(user.id, user));

    return usersMap;
  }
}