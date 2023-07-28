import React from "react";
// dependencies
import { NavLink } from "react-router-dom";
import { MdDomain, MdLogout } from "react-icons/md";
import { IoMdAttach } from "react-icons/io";
import { BsFillPeopleFill } from "react-icons/bs";
import { HiDotsVertical } from "react-icons/hi";
import { GrDatabase } from "react-icons/gr";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import { useNavigation } from "../hooks";

const items: MenuProps["items"] = [
  {
    label: <NavLink to="/">Main Menu</NavLink>,
    key: "mainMenu",
    icon: <MdDomain />,
  },
  {
    label: "General Report",
    key: "general",
    icon: <GrDatabase />,
    children: [
      {
        label: (
          <NavLink to="/report/general/installed-odp">Installed ODP</NavLink>
        ),
        key: "installed",
        icon: <IoMdAttach />,
      },
      {
        label: (
          <NavLink to="/report/general/dismantle-odp">Dismantle ODP</NavLink>
        ),
        key: "dismantle",
        icon: <MdLogout />,
      },
    ],
  },
  {
    label: "Field Data",
    key: "field",
    icon: <BsFillPeopleFill />,
    children: [
      {
        label: <NavLink to="/report/field-data/list-odp">List of ODP</NavLink>,
        key: "listODP",
        icon: <HiDotsVertical />,
      },
    ],
  },
];

const itemsMobile: MenuProps["items"] = [
  {
    label: "Menu",
    key: "mainMenu",
    icon: <MdDomain />,
    children: [
      {
        label: <NavLink to="/">Main Menu</NavLink>,
        key: "installed",
        icon: <MdDomain />,
      },
      {
        type: "group",
        label: "General Report",
        key: "general",
        children: [
          {
            label: (
              <NavLink to="/report/general/installed-odp">
                Installed ODP
              </NavLink>
            ),
            key: "installed",
            icon: <IoMdAttach />,
          },
          {
            label: (
              <NavLink to="/report/general/dismantle-odp">
                Dismantle ODP
              </NavLink>
            ),
            key: "dismantle",
            icon: <MdLogout />,
          },
        ],
      },
      {
        type: "group",
        label: "Field Data",
        key: "field",
        children: [
          {
            label: (
              <NavLink to="/report/field-data/list-odp">List of ODP</NavLink>
            ),
            key: "listODP",
            icon: <HiDotsVertical />,
          },
        ],
      },
    ],
  },
];

export default function Index() {
  const { current, onClick } = useNavigation();
  return (
    <>
      <div className="sm:hidden xs:hidden">
        <Menu
          onClick={onClick}
          selectedKeys={[current]}
          mode="horizontal"
          items={items}
        />
      </div>
      <div className="md:hidden lg:hidden">
        <Menu
          onClick={onClick}
          selectedKeys={[current]}
          mode="vertical"
          items={itemsMobile}
        />
      </div>
    </>
  );
}
