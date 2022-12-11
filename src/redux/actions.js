import { createAction } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

export const addContact = createAction(
    'contacts/addContact',
    (nameValue, numberValue) => {
        return {
            type: 'contacts/addContact',
            payload: {
                id: nanoid(),
                name: nameValue,
                number: numberValue
            },
        };
    },
);

export const delContact = createAction('contacts/delContact');
export const setFilter = createAction('contacts/setFilter');