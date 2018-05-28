import { User } from '../models';

const MOCK_USERS: Array<User> = [
    new User({
        id: '1', firstName: 'Andre', lastName: 'Giannico', email: 'andre.giannico@bleh.com',
        bookingid:'test123@',familyname: 'test'
    }),
    new User({
        id: '2', firstName: 'Charlie', lastName: 'Winslow', email: 'charlie.winslow@gmail.com',
        bookingid:'npmtest@',familyname: 'test'
    }),
    new User({
        id: '3', firstName: 'John', lastName: 'Edson', email: 'john.edson@yahoo.com',
         bookingid:'npmtest@@',familyname: 'test'
    }),
    new User({
        id: '4', firstName: 'Mack', lastName: 'Clark', email: 'mclark@yahoo.com',
         bookingid:'npmtest12@',familyname: 'test'
    }),
    new User({
        id: '5', firstName: 'Timmy', lastName: 'Rodrigues', email: 'timrod@aol.com',
        bookingid:'123',familyname: 'test'
    })
];

export { MOCK_USERS };