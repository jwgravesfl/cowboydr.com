import React from 'react'
import { reduxForm, Field } from 'redux-form'
import showResults from './showResults'

import styled from 'styled-components'

const ContactFormMainSection = styled.section `
      background: white;
      width: 40vw;
      height: 54vh;
      margin-left: 5vw;
      margin-top: 8vh;
      box-shadow: 1vh 1vh #000000;
      border-radius: 1vh;
      text-align: left;

      label {
        display: block;
      }

      .emailList {
        padding-top: 3vh;
      }

      .bookingForm {
        padding-top: 3vh;
      }
`

const validate = values => {
  const errors = {}
  if(!values.emailListEmail) {
    errors.emailListEmail = 'Required'
  }
  if(!values.name) {
    errors.name = 'Required'
  }
  if(!values.phone) {
    errors.phone = 'Required'
  }
  if(!values.phone) {
    errors.phone = 'Required'
  }
  return errors
}

const renderInput = ({ input, meta, label }) => 
  <div>
  <label>{label}</label>
  <input { ...input } />
  {meta.error && 
    meta.touched &&
    <span>
      {meta.error}
    </span>}
  </div>

let ContactForm = ({ handleSubmit, submitting}) =>
  <ContactFormMainSection>
    <div className="emailList">
      <form onSubmit={handleSubmit(showResults)  }>
        <Field name="emailListEmail" label="Get on the Party Wagon"  component={renderInput} />
        <button type="submit" disabled={ submitting }>Submit</button>
      </form>
    </div>
    <div className="bookingForm">
      <form onSubmit={handleSubmit(showResults)  }>
        <Field name="name" label="Name" component={renderInput} />
        <Field name="phone" label="Phone Number" component={renderInput} />
        <Field name="contactTime" label="Best Time to Contact" component={renderInput} />
        <button type="submit" disabled={ submitting }>Submit</button>
      </form>
    </div>
  </ContactFormMainSection>

ContactForm = reduxForm({
  form: 'contact', 
  destroyOnUnmount: false,
  validate
})(ContactForm)

export default ContactForm