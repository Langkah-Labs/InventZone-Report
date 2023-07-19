import React from "react";
// dependencies
import { useLogin } from "./hooks";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
// components
import Spinner from "../../components/Spinner";
// assets
import s from "./login.module.scss";
import { icon_img } from "../../utils/constants";

export default function Index() {
  const {
    values,
    isLoading,
    passwordType,
    setValues,
    loginHandler,
    togglePassword,
  } = useLogin();

  return (
    <>
      {isLoading ? (
        <div className="h-screen flex justify-center items-center">
          <Spinner />
        </div>
      ) : (
        <div className={`${s.login} h-screen flex justify-center items-center`}>
          <div className="flex justify-center sm:flex-col xs:flex-col">
            <div className={`${s.login_left} w-60 rounded-l- sm:h-16 xs:h-16 sm:w-full xs:w-full`}></div>
            <div className="w-96 px-8 py-12 flex flex-col">
              <div className="p-0 w-2/5">
                <img src={icon_img} alt="invent-zone-icon" className="w-4/6" />
              </div>
              <div>
                <h2 className="text-primary text-[64px]">
                  <i>
                    <b>Hello!</b>
                  </i>
                </h2>
                <h5 className="text-tertiary text-[32px] p-0 m-0 tracking-wide">
                  <b>
                    Lets Introduce<span className="text-primary">.</span>
                  </b>
                </h5>
              </div>
              <div
                className={`${s.login_form} flex flex-col justify-center my-12`}
              >
                <form onSubmit={loginHandler}>
                  <div className="flex flex-col gap-8">
                    <input
                      type="text"
                      name="username"
                      placeholder="Username / Email"
                      value={values.username}
                      onChange={(e) =>
                        setValues({ ...values, username: e.target.value })
                      }
                    />
                    <div className="flex items-center">
                      <input
                        type={passwordType}
                        name="password"
                        placeholder="Password"
                        value={values.password}
                        onChange={(e) =>
                          setValues({ ...values, password: e.target.value })
                        }
                      />
                      <div>
                        <button
                          className="btn btn-outline-primary"
                          onClick={togglePassword}
                        >
                          {passwordType === "password" ? (
                            <AiOutlineEyeInvisible />
                          ) : (
                            <AiOutlineEye />
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex mt-8">
                    <button
                      type="submit"
                      className="flex justify-center text-soft rounded-md border border-primary text-[12px] px-4 py-2 hover:bg-primary hover:text-white transition"
                    >
                      SIGN IN
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
