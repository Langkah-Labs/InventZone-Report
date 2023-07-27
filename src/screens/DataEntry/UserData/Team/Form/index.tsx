import React from "react";
// dependencies
import { NavLink } from "react-router-dom";
import { MdCancel } from "react-icons/md";
import { Button, Form, Input } from "antd";
import { useTeam } from "../hooks";
// components
import General from "../../../General";
import Spinner from "../../../../../components/Spinner";

export default function Index() {
  const { isLoading, values, form, submitHandler } = useTeam();
  return (
    <>
      {isLoading ? (
        <div className="h-screen flex justify-center items-center">
          <Spinner />
        </div>
      ) : (
        <General title="Team Data">
          <div>
            <Form
              form={form}
              name="basic"
              labelCol={{ span: 6 }}
              wrapperCol={{ span: 16 }}
              style={{ maxWidth: 600 }}
              initialValues={values}
              onFinish={submitHandler}
            >
              <Form.Item name="name" label="Team Name" rules={[{ required: true }]}>
                <Input allowClear />
              </Form.Item>
              <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <div className="flex items-center gap-2">
                  <NavLink
                    to="/data-entry/user-data/team"
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
