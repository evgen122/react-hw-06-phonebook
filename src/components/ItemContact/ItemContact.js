import { useDispatch } from 'react-redux';
import { ButtonDelete } from './ItemContact.stuled';
import { deleteContact } from 'redux/contactsSlice';

export const ItemContact = ({ item: { id, name, number } }) => {
  const dispatch = useDispatch();
  const handleDelete = id => dispatch(deleteContact(id));

  return (
    <div>
      {name}: {number}
      <ButtonDelete
        onClick={() => {
          dispatch(() => handleDelete(id));
        }}
        type="button"
      >
        Delete
      </ButtonDelete>
    </div>
  );
};
