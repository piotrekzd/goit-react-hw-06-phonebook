import { createReducer } from "@reduxjs/toolkit";
import { addContact, delContact, setFilter } from "./actions";

const initialState = {
    contacts: {
        items: [
            { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
            { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
            { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
            { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
        ],
    },
};

const filterInitialState = '';

export const contactsReducer = createReducer(initialState.contacts, {
    [addContact]: (state, action) => {
        state.items.push(action.payload);
    },
    [delContact]: (state, action) => {
        return state.filter(contact => contact.id !== action.payload);
    },
});

export const filterReducer = createReducer(filterInitialState, {
    [setFilter]: (state, action) => (state = action.payload)
});