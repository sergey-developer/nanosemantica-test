import {FC} from "react";

import {ButtonProps} from "./types";
import {Spinner} from "../Spinner";
import './style.css'

const Button: FC<ButtonProps> = ({children, loading, variant = 'primary', ...props}) => {
  return (
    <button {...props} className={`button button--${variant}`}>
      {children}
      {loading && <Spinner size='sm'/>}
    </button>
  )
}

export default Button