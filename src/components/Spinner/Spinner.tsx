import {FC} from 'react';

import {SpinnerProps} from "./types";
import './style.css';

const Spinner: FC<SpinnerProps> = ({size = 'md', centered= false}) => {
  return <div
    className={`spinner spinner--${size}${centered ? ' spinner--centered' : ''}`}
  />;
};

export default Spinner;