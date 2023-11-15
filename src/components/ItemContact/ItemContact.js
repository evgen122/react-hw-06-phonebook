import { useDispatch, useSelector } from 'react-redux';
import { ButtonDelete } from './ItemContact.stuled';
import { deleteContact } from 'redux/contactsSlice';

export const ItemContact = ({ item: { id, name, number } }) => {
  const dispatch = useDispatch();
  const handleDelete = id => dispatch(deleteContact(id));
  console.log();
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
