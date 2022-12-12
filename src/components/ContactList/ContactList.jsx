import { useSelector, useDispatch } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { delContact } from 'redux/actions';
import propTypes from 'prop-types';
import style from './ContactList.module.css'


export const ContactList = () => {

    const contacts = useSelector(getContacts);
    const filter = useSelector(getFilter);
    const dispatch = useDispatch();

    const filterContacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter)
    );

    const del = contactId => {
        return dispatch(delContact(contactId));
    };

    return (
        <div>
            {filterContacts > 0 ? (
                <ul className={style.list}>
                    {filterContacts.map(contact => {
                        return (
                            <li className={style.listItem} key={contact.id}>
                                {contact.name}: {contact.number}
                                <button className={style.btn} type="button" onClick={() => del(contact.id)}>
                                    Delete
                                </button>
                            </li>
                        );
                    })};
                </ul>
            ) : (
                <p className={style.paragraph}>There are no contacts on your list yet</p>
            )}
        </div>
    );
};

ContactList.propTypes = {
    contacts: propTypes.arrayOf(
        propTypes.exact({
            id: propTypes.string.isRequired,
            name: propTypes.string.isRequired,
            number: propTypes.string.isRequired,
        })
    ),
};