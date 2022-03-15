import { tw } from 'twind';
import React, { useState } from 'react';

function Toggle({ className = '', defaultChecked = false, name = '', onChange = () => {}, ...newProps }) {
  const [checked, setChecked] = useState(false);
  let finalClass = `${className} relative w-12 h-6 flex select-none cursor-pointer`;
  let togglerClass = 'h-6 w-6 border-2 absolute z-10 rounded-full bg-white transition-transform duration-300 ease-in-out flex justify-center items-center';
  let backgroundClass = 'absolute left-0 top-0 h-full w-full bg-gray-200 rounded-full';
  if (checked) {
    backgroundClass += ' bg-yellow-500';
    togglerClass += ' transform translate-x-full border-yellow-500';
  } else {
    backgroundClass += ' bg-gray-200';
    togglerClass += ' border-gray-200';
  }
  return (
    <div className="flex items-center">
      <input type="checkbox" name={name} defaultChecked={defaultChecked} onChange={onChange} className={tw(`hidden`)} />
      <label
        className={tw(`${finalClass}`)}
        htmlFor={name}
        onClick={() => {
          setChecked(!checked);
        }}
        {...newProps}
      >
        <span className={tw(`${backgroundClass}`)} />
        <span className={tw(`${togglerClass}`)} />
      </label>
    </div>
  );
}

export default Toggle;
