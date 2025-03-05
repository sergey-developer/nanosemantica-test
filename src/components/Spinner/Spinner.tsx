import {FC} from 'react';

import {SpinnerProps} from "./types";
import './style.css';

const Spinner: FC<SpinnerProps> = ({size = 'md'}) => {
  return <div className={`spinner spinner--${size}`}/>;
};

export default Spinner;