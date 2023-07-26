import React from "react";
// dependencies
import { NavLink } from "react-router-dom";
import { MdCancel } from "react-icons/md";
import { Button, Form, Input } from "antd";
import { useRole } from "../hooks";
// components
import General from "../../../General";
import Spinner from "../../../../../components/Spinner";

export default function Index() {
  const { isLoading, values, form, submitHandler } = useRole();
  return (
    <>
      {isLoading ? (
        <div className="h-screen flex justify-center items-center">
          <Spinner />
        </div>
      ) : (
        <General title="Role Data">
          <div>
            {/* <form onSubmit={submitHandler}>
              <div className="flex flex-col gap-4 mb-16">
                <input
                  type="text"
                  name="roleName"
                  placeholder="Role Name"
                  className="w-4/5 h-[44px] px-3 py-4 text-[14px] rounded-md border"
                  value={values.roleName}
                  onChange={(e) =>
                    setValues({ ...values, roleName: e.target.value })
                  }
                />
                <textarea
                  name="roleDesc"
                  placeholder="Role Description"
                  className="w-4/5 h-[80px] px-3 py-4 text-[14px] rounded-md border"
                  value={values.roleDesc}
                  onChange={(e) =>
                    setValues({ ...values, roleDesc: e.target.value })
                  }
                />
              </div>
              <hr />
              <div className="flex justify-start items-center gap-1">
                <NavLink
                  to="/data-entry/user-data/role"
                  className="bg-error px-4 py-1 rounded text-white flex justify-center items-center gap-2 mt-4 hover:opacity-75 hover:transition-opacity"
                >
                  Cancel
                  <MdCancel />
                </NavLink>
                <button
                  type="submit"
                  className="bg-primary px-4 py-1 rounded text-white flex justify-center items-center gap-2 mt-4 hover:opacity-75 hover:transition-opacity"
                >
                  Submit
                  <BsBoxArrowInRight />
                </button>
              </div>
            </form> */}
            <Form
              form={form}
              name="basic"
              labelCol={{ span: 6 }}
              wrapperCol={{ span: 16 }}
              style={{ maxWidth: 600 }}
              initialValues={values}
              onFinish={submitHandler}
            >
              <Form.Item label="status" name="status" hidden={true}>
                <Input />
              </Form.Item>
              <Form.Item name="name" label="Role Name" rules={[{ required: true }]}>
                <Input allowClear />
              </Form.Item>
              <Form.Item name="desc" label="Role Description">
                <Input.TextArea allowClear />
              </Form.Item>
              <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <div className="flex items-center gap-2">
                  <NavLink
                    to="/data-entry/user-data/role"
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
