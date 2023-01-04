import React from "react";
import { BILLING_HISTORY, IMAGE_ARRAY } from "../lib/consts/billing-history";

const Settings = () => {
  return (
    <div className="font-display">
      {/* HEADER */}
      <div className="flex justify-start flex-col">
        <h2 className="text-3xl font-medium text-aside-text">Settings</h2>
        <p className="text-search-text text-base font-normal mt-1">
          Manage your team and preferences here.
        </p>
      </div>

      {/* TABS */}
      <div className="grid grid-cols-8 divide-x-2 divide-search-border-200 cursor-pointer border border-search-border rounded-lg mt-6 mb-8 text-sm font-medium text-center text-dashboard-link-text w-[769px] ">
        <p className=" py-2.5 hover:bg-white">Profile</p>
        <p className=" py-2.5 hover:bg-white">Password</p>
        <p className=" py-2.5 hover:bg-white">Team</p>
        <p className=" py-2.5 hover:bg-white">Plan</p>
        <p className=" py-2.5 hover:bg-white">Billing</p>
        <p className=" py-2.5 hover:bg-white">Notifications</p>
        <p className=" py-2.5 hover:bg-white">Integrations</p>
        <p className=" py-2.5 hover:bg-white">API</p>
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
      {/*  FORM */}
      {/* <div className=" border-b border-t border-divider pb-5 pt-5 flex gap-5">
        <div className="">
          <h4 className="text-sm font-medium text-dashboard-link-text">
            Contact email
          </h4>
          <p className="text-search-text font-normal text-sm">
            Where should invoices be sent?
          </p>
        </div>

        <div className=" flex justify-start flex-col">
         
          <div className="flex justify-start items-start gap-2 ">
            <input
              id="published"
              className="cursor-pointer"
              type="radio"
              name="status"
            />
            <div className="flex flex-col">
            <label for="published" className="">
              Send to my account email
            </label>
            <br />
            <span>olivia@untitledui.com</span>
            </div>
          </div>

         
          <div className="flex justify-start">
            <input
              id="published"
              className="cursor-pointer"
              type="radio"
              name="status"
            />
            <div className="flex flex-col justify-start items-start">
            <label for="published" className="">
              Send to an alternative email
            </label>
            <input id="email" className="" type="email" name="email" />
            </div>
          </div>
        </div>
      </div> */}

      {/* BILLING HISTORY */}
      <div className="">
        {/* HEADER */}
        <div className="flex">
          <h2 className="flex-1 text-lg font-medium text-aside-text">
            Billing history
          </h2>
          <button class="flex gap-2 items-start justify-start shadow shadow-shadow px-4 py-2.5 text-sm text-dashboard-link-text font-medium rounded-lg w-[146px] h[40px] border border-search-border bg-white cursor-pointer focus:outline-none hover:bg-dashboard-link-bg ">
            <img
              src="https://res.cloudinary.com/dpqxraalv/image/upload/v1672774421/Icon_1_p6dna9.svg"
              alt="download button"
              className="w-[20px] h-[20px]"
            />
            Download all
          </button>
        </div>

        {/* MAIN TABLE */}
        <div>
          <table className="table-auto w-full ">
            <thead>
              <tr className="  text-start">
                <th className="flex gap-3 text-xs font-medium text-search-text items-center text-start px-6 py-3">
                  <input type="checkbox" className="w-[20px] h-[20px] rounded-md bg-white border border-search-border" />
                  Invoice
                  <img
                    src="https://res.cloudinary.com/dpqxraalv/image/upload/v1672778103/Icon_2_xlwo0f.svg"
                    alt="arrow"
                    className="w-[9.33px] h-[9.33px]"
                  />
                </th>
                <th className="text-xs font-medium text-search-text text-start px-6 py-3">
                  Amount
                </th>
                <th className="text-xs font-medium text-search-text text-start px-6 py-3">
                  Date
                </th>
                <th className="text-xs font-medium text-search-text text-start px-6 py-3 ">
                  Status
                </th>
                <th className="text-xs font-medium text-search-text text-start px-6 py-3">
                  Users on plan
                </th>
              </tr>
            </thead>
            <tbody className=" items-start text-start divide-y divide-divider">
              {BILLING_HISTORY.map(link => (
                <tr className="" key={link.id}>
                  <td className="flex gap-3 px-6 py-4 whitespace-nowrap text-sm font-medium text-aside-text">
                    
                    <input type="checkbox" className="w-[20px] h-[20px]  rounded-md bg-white border border-search-border" />
                    {link.invoice}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-xs font-medium text-search-text">
                    {link.amount}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-xs font-medium text-search-text">
                    {link.date}
                  </td>
                  <td className="px-1.5 py-0.5 whitespace-nowrap text-xs font-medium text-status flex justify-end items-end text-end gap-1 rounded-2xl bg-status-bg w-[55px] h-[22px]">
                    {link.status === "paid" && (
                      <img
                        src="https://res.cloudinary.com/dpqxraalv/image/upload/v1672785978/check_naysrm.svg"
                        alt="check icon"
                        className="w-[12px] h-[12px]"
                      />
                    )}
                    {link.status}
                  </td>
                  <td className=" overflow-hidden px-6 py-4 whitespace-nowrap -space-x-1">
                    {IMAGE_ARRAY.map((el, i) => (
                      <img
                        key={i}
                        src={el}
                        alt="profile"
                        className="inline-block h-[24px] w-[20px] rounded-full ring-2 ring-white"
                      />
                    ))}
                  </td>
                  <img
                    src="https://res.cloudinary.com/dpqxraalv/image/upload/v1672774421/Icon_1_p6dna9.svg"
                    alt="download icon"
                  />
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
