import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';

export const readContacts = async () => {
  try {
    const FS = await fs.readFile(PATH_DB, { encoding: 'utf-8' });
    return JSON.parse(FS);
  } catch (error) {
    console.log('Помилка при читанні контактів:', error);
    return [];
  }
};
