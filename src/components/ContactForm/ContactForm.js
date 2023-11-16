import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import React from 'react';
import { ButAdd, StyledForm, StyledInput } from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactsSlice';
import Notiflix from 'notiflix';

const phoneRegex = RegExp(/^\(?([0-9]{3})[-. ]?([0-9]{2})[-. ]?([0-9]{2})$/);

const formShema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too short!')
    .max(50, 'Too Long!')
    .required('This field is required!'),
  number: Yup.string()
    .matches(phoneRegex, 'Invalid phone')
    .required('Phone is required'),
});

export const ContactForm = () => {
  const contacts = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  const examinationAdd = values => {
    let flag = 0;

    // eslint-disable-next-line array-callback-return
    contacts.map(i => {
      if (i.name === values.name) {
        return (flag = 1);
      }
    });

    if (flag === 1) {
      return Notiflix.Notify.warning(
        `${values.name}
        is already in contacts`
      );
    }
    dispatch(addContact(values));
  };

  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={formShema}
      onSubmit={(values, actions) => {
        dispatch(() => examinationAdd(values, contacts));
        actions.resetForm();
      }}
    >
      <StyledForm>
        <label htmlFor="name">Name</label>
        <StyledInput id="name" name="name" />
        <ErrorMessage name="name" />

        <label htmlFor="number">Number</label>
        <StyledInput id="number" name="number" placeholder="111-11-11" />
        <ErrorMessage name="number" />

        <ButAdd type="submit">Add contact</ButAdd>
      </StyledForm>
    </Formik>
  );
};
