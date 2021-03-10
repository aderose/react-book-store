import React from 'react';

import { Formik, Form, Field } from 'formik';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import { Select, TextField } from 'formik-material-ui';

import {
  FormBackground,
  FormContainer,
  FormSubmitButton,
  FormCancelButton,
  ActionButtons,
} from '../styles';

const BookForm = ({ addBook, hideForm }) => {
  return (
    <FormBackground>
      <Formik
        initialValues={{
          author: '',
          title: '',
          price: '',
          isRead: false,
          isBought: false,
        }}
        validate={(values) => {
          const errors = {};
          if (!values.author) {
            errors.author = 'Required';
          }
          if (!/^[\w'. ]+$/.test(values.author)) {
            errors.author = 'Enter a valid author name.';
          }
          if (!values.title) {
            errors.title = 'Required';
          }
          if (!/^[\w'. ]+$/.test(values.title)) {
            errors.title = 'Enter a valid book title.';
          }
          if (!values.price) {
            errors.price = 'Required';
          }
          if (!/^£?\d+(\.\d{2})?$/.test(values.price)) {
            errors.price = 'Enter a valid price.';
          }
          return errors;
        }}
        onSubmit={(
          { author, title, price, isRead, isBought },
          { setSubmitting },
        ) => {
          setSubmitting(false);

          const updatedPrice =
            (/£/.test(price) ? '' : '£') +
            price +
            (/\./.test(price) ? '' : '.00');
          addBook(author, title, updatedPrice, isRead, isBought);
          hideForm();
        }}
      >
        {({ submitForm, isSubmitting }) => (
          <FormContainer>
            <Typography variant="h5" component="h1" gutterBottom>
              Add New Book
            </Typography>
            <Form>
              <Field
                component={TextField}
                name="author"
                type="text"
                label="Author"
                autoComplete="off"
              />
              <Field
                component={TextField}
                name="title"
                type="text"
                label="Title"
                autoComplete="off"
              />
              <Field
                component={TextField}
                name="price"
                type="text"
                label="Price (£)"
                autoComplete="off"
              />
              <FormControl>
                <InputLabel htmlFor="isBought">
                  Do you own this book?
                </InputLabel>
                <Field
                  component={Select}
                  name="isBought"
                  disabled={isSubmitting}
                >
                  <MenuItem value={true}>Yes</MenuItem>
                  <MenuItem value={false}>No</MenuItem>
                </Field>
              </FormControl>
              <FormControl>
                <InputLabel htmlFor="isRead">Have you read it?</InputLabel>
                <Field component={Select} name="isRead" disabled={isSubmitting}>
                  <MenuItem value={true}>Yes</MenuItem>
                  <MenuItem value={false}>No</MenuItem>
                </Field>
              </FormControl>
              <ActionButtons>
                <FormSubmitButton disabled={isSubmitting} onClick={submitForm}>
                  Submit
                </FormSubmitButton>
                <FormCancelButton disabled={isSubmitting} onClick={hideForm}>
                  Cancel
                </FormCancelButton>
              </ActionButtons>
            </Form>
          </FormContainer>
        )}
      </Formik>
    </FormBackground>
  );
};

export default BookForm;