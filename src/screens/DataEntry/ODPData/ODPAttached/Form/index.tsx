import React from "react";
// dependencies
import { NavLink } from "react-router-dom";
import { MdCancel } from "react-icons/md";
import { useODPAttached } from "../hooks";
import { Button, Form, Input, Select } from "antd";
// components
import General from "../../../General";
import Spinner from "../../../../../components/Spinner";

export default function Index() {
  const {
    isLoading,
    values,
    listNFCValues,
    listODPValues,
    isDisabled,
    form,
    setValues,
    submitHandler,
  } = useODPAttached();
  const { Option } = Select;

  return (
    <>
      {isLoading ? (
        <div className="h-screen flex justify-center items-center">
          <Spinner />
        </div>
      ) : (
        <General title="ODP - Attached Data">
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
              <Form.Item
                name="nfcId"
                label="Tags Type"
                rules={[{ required: true }]}
              >
                <Select
                  placeholder="Select a Tags Id option"
                  onChange={(e) => setValues({ ...values, nfcId: e })}
                  allowClear
                  disabled={isDisabled}
                >
                  {listNFCValues.map((item: any, i: number) => (
                    <Option value={item.$id} key={i}>
                      {item.type} - {item.id}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
              <Form.Item
                name="name"
                label="ODP Name"
                rules={[{ required: true }]}
              >
                <Select
                  placeholder="Select a ODP Name option"
                  onChange={(e) => setValues({ ...values, name: e })}
                  allowClear
                  disabled={isDisabled}
                >
                  {listODPValues.map((item: any, i: number) => (
                    <Option value={item.$id} key={i}>
                      {item.name}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
              <Form.Item name="desc" label="ODP Description">
                <Input.TextArea allowClear />
              </Form.Item>
              <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <div className="flex items-center gap-2">
                  <NavLink
                    to="/data-entry/field-data/odp-attached"
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
