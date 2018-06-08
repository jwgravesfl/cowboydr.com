import React from 'react'
import { reduxForm, Field } from 'redux-form'
import showResults from './showResults'

import styled from 'styled-components'

const ContactFormMainSection = styled.section `
      
      
      .bookingForm {
        width: 100%;
        height: 100%;
      }

      .contactFormFormBody {
        padding-bottom: 2.5vh;
      }

      form {
        
      }

      .contactFormHeading {
        text-align: center;
        font-family: 'Carter One', cursive;
        font-size: 8vw;
      }

      label {
        display: block;
        padding-top: 1vh;
        margin-left: 1vw;
        font-family: 'Carter One', cursive;
        font-size: 5.5vw;
        text-align: left;
      }

      input {
        width: 80%;
        border-radius: .5vw;
        font-size: 5vw;
        font-family: 'Russo One', cursive;

      }

    .contactFormButton {
      margin-top: 3vh;
      font-family: 'Carter One', cursive;
      font-size: 1.5vw;
    }
`

const validate = values => {
  const errors = {}
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
  <div className="contactFormDiv">
  <label>{label}</label>
  <input { ...input } placeholder={label} />
  {meta.error && 
    meta.touched &&
    <span>
      {meta.error}
    </span>}
  </div>

let ContactForm = ({ handleSubmit, submitting, label}) =>
  <ContactFormMainSection>
    <div className="bookingForm">
      <div className="contactFormHeading">
        Contact Cowboy Drive
      </div>
        <form onSubmit={handleSubmit(showResults)  }>
        
          <Field name="name" label="Name" component={renderInput} className="contactInput" />
          <Field name="phone" label="Phone Number" component={renderInput} />
          <Field name="email" label="Email" component={renderInput} />
          <Field name="cityst" label="City, St" component={renderInput} />
          <Field name="contactTime" label="Best Time to Contact" component={renderInput} />
        
          <button className="contactFormButton" type="submit" disabled={ submitting }>Submit</button>
        </form>
    </div>
  </ContactFormMainSection>

ContactForm = reduxForm({
  form: 'contact', 
  destroyOnUnmount: false,
  validate
})(ContactForm)

export default ContactForm