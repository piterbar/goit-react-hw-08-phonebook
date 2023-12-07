export const getItems = state => state.phonebook.items.contacts;
export const getIsLoading = state => state.phonebook.items.isLoading;
export const getFilter = state => state.phonebook.filter.value;

export const getVisibleContacts = state => {
  const allContacts = getItems(state);
  const contactsFilter = getFilter(state);

  return allContacts.filter(contact =>
    contact.name.toLowerCase().includes(contactsFilter.toLowerCase())
  );
};
