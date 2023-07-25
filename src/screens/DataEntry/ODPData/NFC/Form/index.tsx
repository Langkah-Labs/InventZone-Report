import React from "react";
// dependencies
import { NavLink } from "react-router-dom";
import { MdCancel } from "react-icons/md";
import { Button, Form, Input, Select } from "antd";
import { useNFC } from "../hooks";
// components
import General from "../../../General";
import Spinner from "../../../../../components/Spinner";

export default function Index() {
  const { isLoading, values, isDisabled, form, setValues, submitHandler } =
    useNFC();
  const { Option } = Select;

  return (
    <>
      {isLoading ? (
        <div className="h-screen flex justify-center items-center">
          <Spinner />
        </div>
      ) : (
        <General title="Tags Data">
          <div>
            {/* <div className="text-[12px]">
              <h2>
                <b>How to get your NFC ID</b>
              </h2>
              <li>Prepare your NFC</li>
              <li>Scan your NFC using your NFC reader</li>
              <li>Get the NFC Serial Number</li>
              <li>Write the NFC Serial Number</li>
            </div> */}
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
              <Form.Item name="id" label="ID" rules={[{ required: true }]}>
                <Input allowClear disabled={isDisabled} />
              </Form.Item>
              <Form.Item
                name="type"
                label="Tags Type"
                rules={[{ required: true }]}
              >
                <Select
                  placeholder="Select a tags type option"
                  onChange={(e) => setValues({ ...values, type: e })}
                  allowClear
                  disabled={isDisabled}
                >
                  <Option value="Barcode">Barcode</Option>
                  <Option value="QR Code">QR Code</Option>
                  <Option value="NFC">NFC</Option>
                </Select>
              </Form.Item>
              <Form.Item name="description" label="Tags Description">
                <Input.TextArea allowClear />
              </Form.Item>
              <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <div className="flex items-center gap-2">
                  <NavLink
                    to="/data-entry/field-data/nfc"
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
