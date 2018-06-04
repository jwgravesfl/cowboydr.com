import React from 'react'
import { reduxForm, Field } from 'redux-form'
import showResults from './showResults'

import styled from 'styled-components'

const ContactFormMainSection = styled.section `
      
      width: 40vw;
      height: 54vh;
      margin-left: 5vw;
      margin-top: 8vh;
      border-radius: 1vh;
      text-align: center;

      .bookingForm {
        width: 100%;
        height: 100%;
        text-align: center;
      }

      .contactFormFormBody {
        text-align: center;
        width: 100%;
        padding-bottom: 2.5vh;
      }

      form {
        
      }

      .contactFormDiv {
        padding-left: 2.3vw;
        padding-right: 2.4vw;
        padding-top: 2.5vh;
        padding-bottom: 0vh;
        text-align: center;
      }



      .contactFormHeading {
        text-align: center;
        font-family: 'Carter One', cursive;
        font-size: 3vw;
      }

      label {
        display: block;
        font-family: 'Carter One', cursive;
        font-size: 1.5vw;
      }

      input {
       width: 10vw;
      }

    .contactFormButton {
      float: left;
      margin-top: 5vh;
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
  <input { ...input } />
  {meta.error && 
    meta.touched &&
    <span>
      {meta.error}
    </span>}
  </div>

let ContactForm = ({ handleSubmit, submitting}) =>
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
          <Field name="referred" label="Referred By" component={renderInput} />
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