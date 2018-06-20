export const CREATE_CONTACT = 'contacts: createContact'

export function createContact(newContact) {
    return {
        type: CREATE_CONTACT,
        payload: {
            contact: newContact
        }
    }
}