import React from "react";
import Button from "../Button";
import style from './Form.module.scss'

class Form extends React.Component {
  render(): React.ReactNode {
    return (
      <form className={style.newTask}>
        <div>
        <h1>Form</h1>
        <div className={style.inputContainer}>
          <label htmlFor="task">
            Type your daily task
          </label>
          <input type="text" name="task" id={style.task} placeholder="What do you want to study?" required />
        </div>
        <div className={style.inputContainer}>
          <label htmlFor="time">
            Time
          </label>
          <input type="time" step="1" name="time" id="time" min="00:00:00" max="02:30:00" required  />
        </div>

        <Button />
      </div>
      </form>
    )
  }
}

export default Form;