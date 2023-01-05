import React from "react";


const PaymentCard = ({
  cardEnding,
  expire,
  card,
  checked,
  onChange,
  name,
  label,
  checkedValue,
  onClick,
}) => {
  return (
    <div
      className={
        !checkedValue.includes(name)
          ? "bg-white  border-divider flex justify-between w-full p-4 items-start border rounded-lg cursor-pointer"
          : "bg-payment-bg  border-payment-card flex justify-between w-full p-4 items-start border rounded-lg cursor-pointer"
      }
      onClick={onClick}
    >
      <div className=" flex flex-1 gap-5">
        <img src={card} alt="card logo" className="w-[46px] h-[32px]" />

        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <p
              className={
                !checkedValue.includes(name)
                  ? " text-dashboard-link-text font-medium text-sm"
                  : "text-highlighted font-medium text-sm"
              }
            >
              {cardEnding}
            </p>

            <p
              className={
                !checkedValue.includes(name)
                  ? " text-search-text font-normal text-sm"
                  : "text-highlighted font-normal text-sm"
              }
            >
              {expire}
            </p>
          </div>

          <div className="flex gap-2 justify-start items-center">
            <p
              className={
                !checkedValue.includes(name)
                  ? " text-search-text font-medium text-sm"
                  : "text-highlighted font-medium text-sm"
              }
            >
              Set as default
            </p>
            <p
              className={
                !checkedValue.includes(name)
                  ? " font-medium text-sm text-aside-aside"
                  : "text-highlighted font-medium text-sm"
              }
            >
              Edit
            </p>
          </div>
        </div>
      </div>

      <label htmlFor={label}>
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
