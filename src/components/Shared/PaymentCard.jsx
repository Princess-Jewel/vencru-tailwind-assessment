import React from "react";

const PaymentCard = ({
  cardEnding,
  expire,
  card,
  checked,
  onChange,
  name,
  label,

}) => {
  return (
    <div className=" flex justify-between w-full bg-white p-4 items-start border border-divider rounded-lg cursor-pointer ">
      <div className=" flex flex-1 gap-5">
        <img src={card} alt="card logo" className="w-[46px] h-[32px]" />

        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <p className="text-dashboard-link-text font-medium text-sm">
              {cardEnding}
            </p>
            <p className="font-normal text-sm text-search-text">{expire}</p>
          </div>

          <div className="flex gap-2 justify-start items-center">
            <p className="text-search-text font-medium text-sm">
              Set as default
            </p>
            <p className=" font-medium text-sm text-aside-aside">Edit</p>
          </div>
        </div>
      </div>

      <label for={label}>
        <input
          type="checkbox"
          name={name}
          onChange={onChange}
          checked={checked}
          id={name}
          className="w-[10px] h-[10px]"
        />
      </label>
    </div>
  );
};

export default PaymentCard;
