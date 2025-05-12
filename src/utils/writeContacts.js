import * as fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const writeContacts = async (contacts) => {
  try {
    // Прямо записуємо масив контактів, не додаючи до існуючих
    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2), {
      encoding: 'utf-8',
    });
    console.log('Contacts have been written successfully.');
  } catch (error) {
    console.error('Error writing contacts:', error);
  }
};

