import React from "react";
// dependencies
import { useLogin } from "./hooks";
import { Button, Form, Input } from "antd";
// components
import Spinner from "../../components/Spinner";
// assets
import s from "./login.module.scss";
import { icon_img } from "../../utils/constants";

export default function Index() {
  const { isLoading, loginHandler } = useLogin();

  return (
    <>
      {isLoading ? (
        <div className="h-screen flex justify-center items-center">
          <Spinner />
        </div>
      ) : (
        <div className={`${s.login} h-screen flex justify-center items-center`}>
          <div className="flex justify-center sm:flex-col xs:flex-col">
            <div
              className={`${s.login_left} w-60 rounded-l- sm:h-16 xs:h-16 sm:w-full xs:w-full`}
            ></div>
            <div className="w-96 px-8 py-12 flex flex-col">
              <div className="p-0 w-2/5">
                <img src={icon_img} alt="invent-zone-icon" className="w-4/6" />
              </div>
              <div>
                <h2 className="text-[#113A5D] text-[64px]">
                  <i>
                    <b>Hello!</b>
                  </i>
                </h2>
                <h5 className="text-[32px] text-gray-400 p-0 m-0 tracking-wide">
                  <b>
                    Lets Introduce<span className="text-[#113A5D]">.</span>
                  </b>
                </h5>
              </div>
              <div
                className={`${s.login_form} flex flex-col justify-center my-12`}
              >
                <Form
                  name="basic"
                  labelCol={{ span: 8 }}
                  wrapperCol={{ span: 16 }}
                  style={{ maxWidth: 600 }}
                  initialValues={{ remember: true }}
                  onFinish={loginHandler}
                  autoComplete="off"
                >
                  <Form.Item
                    label="Username"
                    name="username"
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>

                  <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <Input.Password />
                  </Form.Item>

                  <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button htmlType="submit" type="default">
                      Submit
                    </Button>
                  </Form.Item>
                </Form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
