import { BsFillPersonFill } from "react-icons/bs";
import { FaPhone } from "react-icons/fa6";
import css from "./Contact.module.css";

export const Contact = ({ contact, onDeleteContact }) => {
  const handleDeleteContact = () => {
    onDeleteContact(contact.id);
  };
  return (
    <li className={css.listItem}>
      <div className={css.itemCont}>
        <p className={css.par}>
          <BsFillPersonFill /> {contact.name}
        </p>
        <p className={css.par}>
          {" "}
          <FaPhone /> {contact.number}
        </p>
      </div>
      <div className={css.btnCont}>
        <button className={css.btn} onClick={handleDeleteContact}>
          Delete
        </button>
      </div>
    </li>
  );
};
