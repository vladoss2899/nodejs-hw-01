import * as fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const removeAllContacts = async () => {
  try {
    await fs.writeFile(PATH_DB, JSON.stringify([]));
    console.log('✅ Усі контакти було успішно видалено!');
  } catch (error) {
    console.error('❌ Помилка при видаленні контактів:', error.message);
  }
};

// Виклик функції для перевірки
removeAllContacts();
