import React from "react";

export default function CustomRadioButton({
  defaultChecked,
  label,
  onChange,
  name,
  checked,
  cls,
  containerCls,
  extraText,
  ...props
}) {
  return (
    <div className={containerCls}>
      <label
        className={`relative mb-0 h-auto shrink-0 cursor-pointer select-none pl-[30px]
			 ${cls ? cls : ""}`}
        aria-label={name}
        style={{
          WebkitUserSelect: "none",
          MozUserSelect: "none",
          msUserSelect: "none",
        }}
      >
        <input
          type="radio"
          id={name}
          name={name}
          defaultChecked={defaultChecked}
          onChange={onChange}
          checked={checked}
          className="peer absolute h-0 w-0 cursor-pointer align-super 
					opacity-0"
          {...props}
        />

        <span
          className="absolute top-[50%] left-0 h-[16px] w-[16px] translate-y-[-50%]
					rounded-[50%] border border-[#ccc] bg-white 
					after:absolute after:top-[50%] after:left-[50%]
					after:hidden after:h-[8px] after:w-[8px] 
					after:translate-x-[-50%] after:translate-y-[-50%] after:rounded-[50%] 
					after:bg-[#8D6BFA] peer-checked:border-[#8D6BFA] peer-checked:after:block"
        ></span>
        {label && (
          <span className="relative text-dashboard-link-text text-sm font-medium">
            {label}
          </span>
        )}
      </label>

      {extraText && (
        <label
          className="cursor-pointer pl-[30px] text-search-text font-normal text-sm"
          htmlFor={name}
        >
          {extraText}
        </label>
      )}
    </div>
  );
}
