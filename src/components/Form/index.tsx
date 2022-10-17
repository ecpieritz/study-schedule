import React from "react";
import Button from "../Button";

class Form extends React.Component {
  render(): React.ReactNode {
    return (
      <div>
        <h1>Formulário</h1>
        <div>
          <label htmlFor="task">
            Type your daily task
          </label>
          <input type="text" name="task" id="task" placeholder="What do you want to study?" required />
        </div>
        <div>
          <label htmlFor="time">
            Time
          </label>
          <input type="time" step="1" name="time" id="time" min="00:00:00" max="02:30:00" required  />
        </div>

        <Button />
      </div>
    )
  }
}

export default Form;