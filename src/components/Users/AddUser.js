import React, { useState } from "react";
import Card from "../UI/Card/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button/Button";

export default function AddUser(props) {
  const [enteredUsername, setEnterUsername] = useState("");

  const usernameChangeHandler = (event) => {
    setEnterUsername(event.target.value);
  };

  const [enteredAge, setEnterAge] = useState("");

  const ageChangeHandler = (event) => {
    setEnterAge(event.target.value);
  };

  const addUserHandler = (event) => {
    event.preventDefault();
    console.log(enteredUsername, enteredAge);
    setEnterUsername("");
    setEnterAge("");
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          onChange={usernameChangeHandler}
          value={enteredUsername} //clear form after submit
        ></input>
        <label htmlFor="age">Age</label>
        <input
          id="age"
          type="number"
          onChange={ageChangeHandler}
          value={enteredAge} //clear form after submit
        ></input>
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
}
