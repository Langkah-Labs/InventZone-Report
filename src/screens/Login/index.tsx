import React, { useState } from "react";
// dependencies
import { useNavigate } from "react-router-dom";
// components
import Brands from "../../components/BrandsIcon";
// assets
import s from "./login.module.scss";

export interface FormData {
  username: string;
  password: string;
}

export default function Index() {
  const navigate = useNavigate();
  const [values, setValues] = useState<FormData>({
    username: "",
    password: "",
  } as FormData);

  const submitHandler = async (e: any) => {
    e.preventDefault();
    navigate("/");
  };
  
  return (
    <div className={`${s.login} h-screen flex justify-center items-center`}>
      <div className="flex justify-center">
        <div className={`${s.login_left} w-60 rounded-l-md`}></div>
        <div className="w-96 px-8 py-12 flex flex-col">
          <div className="ml-4">
            <Brands />
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
          <div className={`${s.login_form} flex flex-col justify-center my-12`}>
            <form onSubmit={submitHandler}>
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
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={values.password}
                  onChange={(e) =>
                    setValues({ ...values, password: e.target.value })
                  }
                />
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
  );
}
