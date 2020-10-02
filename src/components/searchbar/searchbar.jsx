import React, { useRef } from "react";
import styles from "./searchbar.module.css";

const Searchbar = ({ onSearch }) => {
  const inputRef = useRef();
  const handleSearch = () => {
    const value = inputRef.current.value;
    onSearch(value);
  };
  const onClick = () => {
    handleSearch();
  };

  const onKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <header className={styles.container}>
      <div className={styles.logo}>
        <img className={styles.img} src="/images/logo.png" alt="logo" />
        <h1 className={styles.title}>Youtube</h1>
      </div>
      <input
        className={styles.searchbar}
        type="search"
        placeholder="search"
        onKeyPress={onKeyPress}
        ref={inputRef}
      />
      <button className={styles.button} type="submit" onClick={onClick}>
        검색
      </button>
    </header>
  );
};
export default Searchbar;
