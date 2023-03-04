export function getContacts(): ContactType[] {
  return [
    { id: 1, name: "Your Name" },
    { id: 2, name: "hoge" },
    { id: 3, name: "hage" },
    { id: 4, name: "hige" },
  ];
}

export function getContact(contactId: number) {
  const contacts = getContacts();
  const found = contacts.find((contact) => {
    return contact.id == contactId;
  });

  if (found === null) return { id: 0, name: "Unknown" };
  else return found;
}
