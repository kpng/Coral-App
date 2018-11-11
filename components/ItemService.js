import { db } from '../constants/ApiKeys';

export const addItem = (item) => {
    db.ref('/items').push({
        name: item
    });
}