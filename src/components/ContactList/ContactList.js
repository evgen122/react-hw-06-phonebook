import { ItemContact } from 'components/ItemContact/ItemContact';
import { ItemList } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { contactsFilter } from 'redux/functions';

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

  const filters = contactsFilter(contacts, filter);
  return (
    <ul>
      {filters.map(i => (
        <ItemList key={i.id}>
          <ItemContact item={i} />
        </ItemList>
      ))}
    </ul>
  );
};
