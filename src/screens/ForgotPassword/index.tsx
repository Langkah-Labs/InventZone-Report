import React, { useState } from "react";
// dependencies
import { NavLink } from "react-router-dom";
import { EnvelopeIcon } from "@heroicons/react/20/solid";
// assets
import { icon_img } from "../../utils/constants";
import { useForm, SubmitHandler } from "react-hook-form";
import DotsSpinner from "../../components/DotsSpinner";
import swal from "sweetalert";
import { sendPasswordResetEmail } from "supertokens-web-js/recipe/emailpassword";

interface ForgotPasswordInput {
  email: string;
}

export default function Index() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { register, handleSubmit } = useForm<ForgotPasswordInput>();

  const onSubmitResetPassword: SubmitHandler<ForgotPasswordInput> = async (
    data
  ) => {
    console.log(data);

    try {
      setIsLoading(true);

      let response = await sendPasswordResetEmail({
        formFields: [
          {
            id: "email",
            value: data.email,
          },
        ],
      });

      if (response.status === "FIELD_ERROR") {
        // one of the input formFields failed validaiton
        swal({
          title: "Failed!",
          text: "Oops, submit form failed please check your fields",
          icon: "error",
        });
      } else if (response.status === "PASSWORD_RESET_NOT_ALLOWED") {
        // this can happen due to automatic account linking. Please read our account linking docs
        swal({
          title: "Failed!",
          text: "Oops, failed to reset your password",
          icon: "error",
        });
      } else {
        // reset password email sent.

        swal({
          title: "Success!",
          text: "Please check your email for the password reset link",
          icon: "success",
        });
      }

      setIsLoading(false);
    } catch (err) {
      console.error(err);
      setIsLoading(false);
      swal({
        title: "Failed!",
        text: "Oops, something went wrong",
        icon: "error",
      });
    }
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center items-center lg:px-8 bg-gray-100 h-screen">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img className="mx-auto w-1/6" src={icon_img} alt="Your Company" />
        <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Reset your password
        </h2>
      </div>

      <div className="mt-8 w-4/12 sm:mx-auto sm:w-full sm:max-w-sm">
        <form
          className="space-y-4"
          onSubmit={handleSubmit(onSubmitResetPassword)}
        >
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
                {...register("email")}
                type="email"
                id="email"
                className="block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="you@example.com"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-[#113A5D] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              {isLoading ? <DotsSpinner /> : "Submit"}
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
