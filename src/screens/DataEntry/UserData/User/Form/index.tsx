import React from "react";
// dependencies
import { NavLink } from "react-router-dom";
import { MdCancel } from "react-icons/md";
import { Button, Form, Input, Select, InputNumber } from "antd";
import { useUser } from "../hooks";
// components
import General from "../../../General";
import Spinner from "../../../../../components/Spinner";

export default function Index() {
  const {
    isLoading,
    values,
    listRolesValues,
    listTeamValues,
    form,
    setValues,
    submitHandler,
  } = useUser();
  const { Option } = Select;
  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 70 }}>
        <Option value="62">+62</Option>
      </Select>
    </Form.Item>
  );

  return (
    <>
      {isLoading ? (
        <div className="h-screen flex justify-center items-center">
          <Spinner />
        </div>
      ) : (
        <General title="User Data">
          <div>
            <Form
              form={form}
              name="basic"
              labelCol={{ span: 6 }}
              wrapperCol={{ span: 16 }}
              style={{ maxWidth: 600 }}
              initialValues={{ values, prefix: "62" }}
              onFinish={submitHandler}
            >
              <Form.Item name="team" label="Team" rules={[{ required: true }]}>
                <Select
                  placeholder="Select a team option"
                  onChange={(e) => setValues({ ...values, team: e })}
                  allowClear
                >
                  {listTeamValues.map((item: any, i: number) => (
                    <Option value={item.$id} key={i}>
                      {item.name}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
              <Form.Item name="role" label="Role" rules={[{ required: true }]}>
                <Select
                  placeholder="Select a role option"
                  onChange={(e) => setValues({ ...values, role: e })}
                  allowClear
                >
                  {listRolesValues.map((item: any, i: number) => (
                    <Option value={item.name} key={i}>
                      {item.name}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
              <Form.Item name="name" label="Name" rules={[{ required: true }]}>
                <Input allowClear />
              </Form.Item>
              <Form.Item
                name="email"
                label="Email"
                rules={[{ required: true, type: "email" }]}
              >
                <Input allowClear />
              </Form.Item>
              <Form.Item
                name="phoneNumber"
                label="Phone Number"
                rules={[
                  {
                    required: true,
                    message: "Please input your phone number!",
                    type: "number",
                  },
                ]}
              >
                <InputNumber
                  addonBefore={prefixSelector}
                  style={{ width: "100%" }}
                />
              </Form.Item>
              <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <div className="flex items-center gap-2">
                  <NavLink
                    to="/data-entry/user-data/user"
                    className="border-error px-4 py-1 border rounded text-error flex justify-center items-center gap-2 hover:bg-error hover:transition-opacity hover:text-white"
                  >
                    Cancel
                    <MdCancel />
                  </NavLink>
                  <Button htmlType="submit" type="default">
                    Submit
                  </Button>
                </div>
              </Form.Item>
            </Form>
          </div>
        </General>
      )}
    </>
  );
}
