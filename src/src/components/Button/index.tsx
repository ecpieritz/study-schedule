import React from "react";
import style from './Button.module.scss'

class Button extends React.Component {
  render(): React.ReactNode {
    return (
      <button className={style.button}>Add</button>
    )
  }
}

export default Button;