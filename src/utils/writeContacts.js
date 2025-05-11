import { readContacts } from '../utils/readContacts.js';
import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';

export const writeContacts = async (updatedContacts) => {
  try {
    const existingContacts = await readContacts();
    if (existingContacts) {
      existingContacts.push(...updatedContacts);
      await fs.writeFile(PATH_DB, JSON.stringify(existingContacts, null, 2), {
        encoding: 'utf-8',
      });
      console.log('Contacts have been written successfully.');
    } else {
      console.error('No existing contacts to update.');
    }
  } catch (error) {
    console.error('Error writing contacts:', error);
  }
};
