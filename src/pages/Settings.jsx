import React, { useState } from "react";
import { BILLING_HISTORY, IMAGE_ARRAY } from "../lib/consts/billing-history";
import CustomRadioButton from "../components/Shared/CustomRadioButton";
import PaymentCard from "../components/Shared/PaymentCard";
import { CARD_DETAILS } from "../lib/consts/card-details";

const TABS = [
  "My details",
  "Profile",
  "Password",
  "Team",
  "Plan",
  "Billing",
  "Notifications",
  "Integrations",
  "API",
];

const Settings = () => {
  const [checked, setChecked] = useState(false);
  const [checkedValue, setCheckedValue] = useState([]);

  const handleCheck = name => {
    let updatedList = [...checkedValue];
    if (checkedValue.includes(name)) {
      updatedList = updatedList.filter(item => item !== name);
    } else {
      updatedList = [...checkedValue, name];
    }
    setCheckedValue(updatedList);
  };

  return (
    <div className="font-display">
      {/* HEADER */}
      <div className="flex justify-start flex-col">
        <h2 className="md:text-3xl text-2xl font-medium text-aside-text">
          Settings
        </h2>
        <p className="text-search-text text-base font-normal mt-1">
          Manage your team and preferences here.
        </p>
      </div>

      {/* TABS */}
      <div className="overflow-x-auto mb-8">
        <div
          className="flex divide-x-2 divide-search-border-200 cursor-pointer border border-search-border rounded-lg mt-6 text-sm font-medium text-center text-dashboard-link-text w-[769px] 
			"
        >
          {TABS.map(tab => (
            <Tab key={tab} title={tab} />
          ))}
        </div>
      </div>

      {/* PAYMENT METHOD */}
      <div className="pb-5">
        <h2 className="text-lg font-medium text-aside-text pb-1">
          Payment method
        </h2>
        <p className="text-search-text font-normal text-sm">
          Update your billing details and address.
        </p>
      </div>

      {/* CONTACT EMAIL */}
      <div className=" border-b border-t border-divider pb-5 pt-5 flex gap-4 md:gap-9 flex-col md:flex-row">
        <div>
          <h4 className="text-sm font-medium text-dashboard-link-text">
            Contact email
          </h4>
          <p className="text-search-text font-normal text-sm md:whitespace-nowrap">
            Where should invoices be sent?
          </p>
        </div>
        <div className="wrapper flex justify-start flex-col items-start">
          <CustomRadioButton
            checked={checked}
            name="contactEmail"
            onChange={() => setChecked(true)}
            label="Send to my account email"
            extraText="olivia@untitledui.com"
            containerCls="mb-3 flex flex-col"
          />

          <CustomRadioButton
            checked={!checked}
            name="contactEmail"
            onChange={() => setChecked(false)}
            label="Send to an alternative email"
          />

          <input
            type="text"
            className="ml-[30px] mt-[10px] bg-white rounded-lg text-base text-search-text font-normal border border-search-border w-[270px] md:w-[488px] h-[44px] pl-3 shadow shadow-shadow"
          />
        </div>
      </div>

      {/* CARD DETAILS*/}
      <div className=" pb-5 pt-5 flex gap-5 md:gap-9 flex-col md:flex-row ">
        <div>
          <h4 className="text-sm font-medium text-dashboard-link-text">
            Card details
          </h4>
          <p className="text-search-text font-normal text-sm md:whitespace-nowrap">
            Select default payment method.
          </p>
        </div>

        <div className="flex justify-between w-full  items-start  rounded-lg flex-col gap-3 ">
          {CARD_DETAILS.map(link => (
            <PaymentCard
              key={link.id}
              cardEnding={link.cardEnding}
              expire={link.expire}
              card={link.card}
              onChange={() => handleCheck(link.id)}
              label={link.cardName}
              name={link.id}
              checkedValue={checkedValue}
              onClick={() => handleCheck(link.id)}
              checked={checkedValue.includes(link.id)}
            />
          ))}

          <div className="flex gap-2 justify-start items-center cursor-pointer">
            <img
              src="https://res.cloudinary.com/dpqxraalv/image/upload/v1672841193/Icon_3_kmtpkd.svg"
              className="w-[11.67px] h-[11.67px]"
              alt="plus icon"
            />
            <p className="text-sm font-medium text-search-text mt-1">
              Add new payment method
            </p>
          </div>
        </div>
      </div>

      {/* BILLING HISTORY DESKTOP VIEW*/}
      <div className="hidden md:block">
        {/* HEADER */}
        <div className="flex">
          <h2 className="flex-1 text-lg font-medium text-aside-text">
            Billing history
          </h2>
          <button className="flex gap-2 items-start justify-start shadow shadow-shadow px-4 py-2.5 text-sm text-dashboard-link-text font-medium rounded-lg w-[146px] h[40px] border border-search-border bg-white cursor-pointer focus:outline-none hover:bg-dashboard-link-bg ">
            <img
              src="https://res.cloudinary.com/dpqxraalv/image/upload/v1672774421/Icon_1_p6dna9.svg"
              alt="download button"
              className="w-[20px] h-[20px]"
            />
            Download all
          </button>
        </div>

        {/* MAIN TABLE DESKTOP VIEW*/}
        <div>
          <table className="table-auto w-full border border-divider rounded-lg shadow-lg mt-[25px]">
            <thead>
              <tr>
                <th className="flex gap-3 text-xs font-medium text-search-text items-center text-center px-6 py-3">
                  <input
                    type="checkbox"
                    className="w-[20px] h-[20px] rounded-md bg-white border border-search-border"
                  />
                  Invoice
                  <img
                    src="https://res.cloudinary.com/dpqxraalv/image/upload/v1672778103/Icon_2_xlwo0f.svg"
                    alt="arrow"
                    className="w-[9.33px] h-[9.33px]"
                  />
                </th>
                <th className="text-xs font-medium text-search-text text-center px-6 py-3">
                  Amount
                </th>
                <th className="text-xs font-medium text-search-text text-center px-6 py-3">
                  Date
                </th>
                <th className="text-xs font-medium text-search-text text-center px-6 py-3 ">
                  Status
                </th>
                <th className="text-xs font-medium text-search-text text-center px-6 py-3">
                  Users on plan
                </th>
              </tr>
            </thead>
            <tbody className="bg-white items-start text-start divide-y divide-divider">
              {BILLING_HISTORY.map(link => (
                <tr className="" key={link.id}>
                  <td className="flex gap-3 px-6 text-center py-4 whitespace-nowrap text-sm font-medium text-aside-text hover:bg-dashboard-link-bg">
                    <input
                      type="checkbox"
                      className="w-[20px] h-[20px]  rounded-md bg-white border border-search-border"
                    />
                    {link.invoice}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center text-xs font-medium text-search-text hover:bg-dashboard-link-bg">
                    {link.amount}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center text-xs font-medium text-search-text hover:bg-dashboard-link-bg">
                    {link.date}
                  </td>
                  <td className="px-6 py-4 hover:bg-dashboard-link-bg text-center">
                    <span className="px-1.5 py-0.5 whitespace-nowrap text-center text-xs mx-auto font-medium text-status flex justify-center items-center  gap-1 rounded-2xl bg-status-bg w-[55px] h-[22px] ">
                      {link.status === "Paid" && (
                        <img
                          src="https://res.cloudinary.com/dpqxraalv/image/upload/v1672785978/check_naysrm.svg"
                          alt="check icon"
                          className="w-[12px] h-[12px]"
                        />
                      )}
                      {link.status}
                    </span>
                  </td>
                  <td className="  text-center overflow-hidden px-6 py-4 whitespace-nowrap -space-x-1 hover:bg-dashboard-link-bg">
                    {IMAGE_ARRAY.map((el, i) => (
                      <img
                        key={i}
                        src={el}
                        alt="profile"
                        className="inline-block h-[24px] w-[20px] rounded-full ring-2 ring-white"
                      />
                    ))}
                  </td>
                  <td className="hover:bg-dashboard-link-bg text-center px-6">
                    <div className="flex items-center justify-center">
                      <img
                        src="https://res.cloudinary.com/dpqxraalv/image/upload/v1672774421/Icon_1_p6dna9.svg"
                        alt="download icon"
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* BILLING HISTORY MOBILE VIEW*/}
      <div className="block md:hidden">
        <div className="flex flex-col md:flex-row gap-3">
          <h2 className="flex-1 text-lg font-medium text-aside-text">
            Billing history
          </h2>
          <button className="flex gap-2 items-start justify-start shadow shadow-shadow px-4 py-2.5 text-sm text-dashboard-link-text font-medium rounded-lg w-[146px] h[40px] border border-search-border bg-white cursor-pointer focus:outline-none hover:bg-dashboard-link-bg ">
            <img
              src="https://res.cloudinary.com/dpqxraalv/image/upload/v1672774421/Icon_1_p6dna9.svg"
              alt="download button"
              className="w-[20px] h-[20px]"
            />
            Download all
          </button>
        </div>

        <div>
          <table className="table-auto w-full shadow-lg border border-divider rounded-lg mt-[25px]">
            <thead>
              <tr className=" ">
                <th className="flex gap-3 text-xs font-medium text-search-text items-center text-center px-6 py-3">
                  <input
                    type="checkbox"
                    className="w-[20px] h-[20px] rounded-md bg-white border border-search-border"
                  />
                  Invoice
                  <img
                    src="https://res.cloudinary.com/dpqxraalv/image/upload/v1672778103/Icon_2_xlwo0f.svg"
                    alt="arrow"
                    className="w-[9.33px] h-[9.33px]"
                  />
                </th>
                <th className="text-xs font-medium text-search-text text-center px-6 py-3">
                  Amount
                </th>
              </tr>
            </thead>
            <tbody className="bg-white items-start text-start divide-y divide-divider">
              {BILLING_HISTORY.map(link => (
                <tr className="" key={link.id}>
                  <td className="flex gap-3 px-6 text-center py-4 whitespace-nowrap text-sm font-medium text-aside-text hover:bg-dashboard-link-bg">
                    <input
                      type="checkbox"
                      className="w-[20px] h-[20px]  rounded-md bg-white border border-search-border"
                    />
                    {link.invoice}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center text-xs font-medium text-search-text hover:bg-dashboard-link-bg">
                    {link.amount}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Settings;

// Tabs Component
const Tab = ({ title, cls = "" }) => {
  return (
    <p
      className={`py-2.5 px-1.5 hover:bg-white first-of-type:hover:rounded-lg last-of-type:hover:rounded-lg last-of-type:hover:rounded-l-none flex-1 ${cls}`}
    >
      {title}
    </p>
  );
};
