
import { db } from '../scenes/Login';

export const addItem = (item) => {
    db.ref('/items').push({
        name: item
    });
}