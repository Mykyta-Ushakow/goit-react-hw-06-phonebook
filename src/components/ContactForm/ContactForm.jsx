import { useDispatch, useSelector } from 'react-redux';
import { addContactAction } from 'redux/slices/contacts/slice.js';

export const ContactForm = props => {
  const contactsState = useSelector(state => state.contacts.contacts);
  const dispatch = useDispatch();

  const onSubmit = e => {
    e.preventDefault();

    const name = e;

    dispatch(addContactAction());
    // props.handleSubmit({ number, name });
  };

  console.log(contactsState);

  return (
    <form onSubmit={onSubmit}>
      <label>Name</label>
      <input type="text" name="name" required />

      <label>Number</label>
      <input type="tel" name="number" required />
      <button type="submit">Add Contact</button>
    </form>
  );
};
