import { ContactItem } from 'components/ContactItem/ContactItem';

export const ContactsList = ({ contacts, onDelete }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id}>
          <ContactItem contact={contact} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
};
