import css from "./SearchBox.module.css";

export const SearchBox = ({ value, onChange }) => {
  return (
    <>
      <p className={css.text}>Find contacts by name</p>
      <input
        className={css.search}
        type="text"
        placeholder="Search by name"
        value={value}
        onChange={onChange}
      />
    </>
  );
};
