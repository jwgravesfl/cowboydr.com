import { CREATE_CONTACT } from '../actions/contactFormActions'

export default function contactFormReducer(state = '', {type, payload }) {
        switch (type) {
            case CREATE_CONTACT:
                return payload;
            default:
                return state;
    }
}