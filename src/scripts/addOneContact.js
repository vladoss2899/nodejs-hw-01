import { writeContacts } from '../utils/writeContacts.js';
import { readContacts } from '../utils/readContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

export const addOneContact = async () => {
  try {
    const existingContacts = (await readContacts()) || [];
    const newContacts = createFakeContact();
    const updatedContacts = [...existingContacts, newContacts];
    await writeContacts(updatedContacts);

    console.log(`Successfully generated and added contacts.`);
  } catch (error) {
    console.error('Error generating contacts:', error);
  }
};

addOneContact();
