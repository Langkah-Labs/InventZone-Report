import React from "react";
// dependencies
import { useRegister } from "./hooks";
import { NavLink } from "react-router-dom";
import {
  EnvelopeIcon,
  LockClosedIcon,
  UserCircleIcon,
  BuildingOfficeIcon,
  PhoneIcon,
} from "@heroicons/react/20/solid";
// assets
import { icon_img } from "../../utils/constants";

export default function Index() {
  const {
    passwordVisibility,
    registerHandler,
    protectedPassword,
    showPassword,
  } = useRegister();
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center items-center lg:px-8 bg-gray-100 h-screen">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img className="mx-auto w-1/6" src={icon_img} alt="Your Company" />
        <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Register your account
        </h2>
      </div>

      <div className="mt-8 w-4/12 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-4" onSubmit={registerHandler}>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email
            </label>
            <div className="relative mt-1 rounded-md shadow-sm">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <EnvelopeIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </div>
              <input
                type="email"
                name="email"
                id="email"
                className="block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="you@example.com"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Password
            </label>
            <div className="relative mt-1 rounded-md shadow-sm">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <LockClosedIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </div>
              <input
                type={protectedPassword(passwordVisibility.password)}
                id="password"
                className="block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="at least 8 characters"
                aria-describedby="password"
                required
              />
              <button
                type="button"
                onClick={() => showPassword("password")}
                className="absolute inset-y-0 right-0 flex items-center pr-4"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                >
                  <path
                    fill="#6D8098"
                    d="M24 12.425v-.572C20.735 7.446 16.75 5.16 12.044 5c-.015 0-.03 0-.046.002C7.133 5.188 3.134 7.492 0 11.913v.572c3.265 4.408 7.25 6.692 11.956 6.853h.042c4.866-.184 8.866-2.489 12.002-6.913Zm-6.835-.256c0 1.416-.505 2.625-1.513 3.627-1.009 1.001-2.226 1.502-3.652 1.502-1.426 0-2.643-.5-3.652-1.502-1.009-1.002-1.513-2.211-1.513-3.627s.504-2.625 1.513-3.626C9.357 7.54 10.574 7.04 12 7.04c1.426 0 2.643.5 3.652 1.503 1.008 1.001 1.513 2.21 1.513 3.626Zm-3.223-1.924a2.652 2.652 0 0 0-1.94-.797c-.757 0-1.404.265-1.94.797a2.615 2.615 0 0 0-.803 1.926c0 .754.268 1.397.804 1.929a2.652 2.652 0 0 0 1.94.798c.757 0 1.403-.266 1.939-.798a2.614 2.614 0 0 0 .806-1.929c0-.752-.269-1.394-.806-1.926Z"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Name
            </label>
            <div className="relative mt-1 rounded-md shadow-sm">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <UserCircleIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </div>
              <input
                type="text"
                name="name"
                id="name"
                className="block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="full name"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="company"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Company Name
            </label>
            <div className="relative mt-1 rounded-md shadow-sm">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <BuildingOfficeIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </div>
              <input
                type="text"
                name="company"
                id="company"
                className="block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Company name"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="phoneNumber"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Phone Number
            </label>
            <div className="relative mt-1 rounded-md shadow-sm">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <PhoneIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </div>
              <input
                type="text"
                name="phoneNumber"
                id="phoneNumber"
                className="block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="+62xxxx"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-[#113A5D] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign up
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Have an account?
          <NavLink
            to="/login"
            className="font-semibold leading-6 text-[#167AFF] hover:opacity-80"
          >
            &nbsp;Login
          </NavLink>
        </p>
      </div>
    </div>
  );
}
