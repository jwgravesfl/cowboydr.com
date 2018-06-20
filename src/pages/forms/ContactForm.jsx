import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createContact } from '../../actions/contactFormActions'


import styled from 'styled-components'

const ContactFormMainSection = styled.section `
      
      width: 40vw;
      
      margin-left: 5vw;
      margin-top: 1vh;
      margin-bottom: 1vh;
      border-radius: 1vh;

      .bookingForm {
        width: 100%;
        height: 100%;
      }

      .contactFormFormBody {
        padding-bottom: 2.5vh;
      }

      form {
        
      }

   
  }
`

class ContactForm extends Component {
  constructor(props) {
    super(props)
    this.onCreateContact = this.onCreateContact.bind(this)
  }

  onCreateContact(event) {
    this.props.onCreateContact(event.target.value)
  }

  render() {
    return(
      <ContactFormMainSection>
    <div className="bookingForm">
      <div className="contactFormHeading">
        Contact Cowboy Drive
      </div>
        <form>
          <input onChange={this.onCreateContact} />
          <input onChange={this.onCreateContact} />
          <input onChange={this.onCreateContact}/>
          <input onChange={this.onCreateContact} />
          <input onChange={this.onCreateContact} />
        </form>
        <div onClick={this.onCreateContact}>Create Contact</div>
    </div>
    <div className="contactFormOutput">
      {this.props.contact.name}
    </div>    
  </ContactFormMainSection>
    )
  }
}

const mapStateToProps = state => ({
  contact: state.contact
})

const mapActionsToProps = {
  onCreateContact: createContact
}

export default connect(mapStateToProps, mapActionsToProps)(ContactForm)