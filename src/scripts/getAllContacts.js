import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
  try {
    const constacts = await readContacts();

    return constacts;
  } catch (error) {
    console.error('Error generating contacts:', error);
  }
};

console.log(await getAllContacts());
