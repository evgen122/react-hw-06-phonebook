export const contactsInitialState = () => {
  const savedContacts = localStorage.getItem('setContacts');
  if (savedContacts !== null) {
    return JSON.parse(savedContacts);
  }
  return [];
};

export const filterInitialState = () => {
  const savedFilter = localStorage.getItem('filter');
  if (savedFilter !== null) {
    return JSON.parse(savedFilter);
  }
  return '';
};

export const contactsFilter = (contacts, filters) => {
  return contacts.filter(item => {
    const hasContacts = item.name.toLowerCase().includes(filters.toLowerCase());
    if (filters === '') {
      return true;
    }
    return hasContacts;
  });
};
