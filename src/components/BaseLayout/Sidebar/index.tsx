import React from "react";
// dependencies
import { NavLink } from "react-router-dom";
import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  useProSidebar,
} from "react-pro-sidebar";
import { MdDomain, MdLogout } from "react-icons/md";
import { IoMdMenu, IoMdAttach } from "react-icons/io";
import { BsFillPeopleFill } from "react-icons/bs";
import { BiLogOut } from "react-icons/bi";
import { HiDotsVertical } from "react-icons/hi";
import { GrDatabase } from "react-icons/gr";

export default function Index() {
  const { collapseSidebar } = useProSidebar();

  return (
    <div className="flex h-screen text-[#0B4B31]">
      <Sidebar breakPoint="sm" transitionDuration={800}>
        <Menu
          menuItemStyles={{
            button: ({ level, active, disabled }) => {
              if (level === 0) {
                return {
                  backgroundColor: active ? "#fff" : undefined,
                  "&:hover": {
                    backgroundColor: "#0B4B31 !important",
                    color: "white !important",
                    borderRadius: "8px !important",
                    fontWeight: "bold !important",
                  },
                };
              }
            },
          }}
          className="py-4"
        >
          <MenuItem
            icon={<IoMdMenu />}
            onClick={() => {
              collapseSidebar();
            }}
            style={{ textAlign: "center" }}
          >
            <h1 className="text-[24px]">
              <b>Menu</b>
            </h1>
          </MenuItem>
          <MenuItem
            icon={<MdDomain />}
            component={<NavLink to="/" />}
            style={{ marginTop: "20px" }}
          >
            Main menu
          </MenuItem>
          <SubMenu label="General Report" icon={<GrDatabase />}>
            <MenuItem
              icon={<IoMdAttach />}
              component={<NavLink to="/report/general/installed-odp" />}
            >
              Installed ODP
            </MenuItem>
            <MenuItem
              icon={<MdLogout />}
              component={<NavLink to="/report/general/dismantle-odp" />}
            >
              Dismantle ODP
            </MenuItem>
          </SubMenu>
          <SubMenu label="Field Data" icon={<BsFillPeopleFill />}>
            <MenuItem
              icon={<HiDotsVertical />}
              component={<NavLink to="/report/field-data/list-odp" />}
            >
              List of ODP
            </MenuItem>
          </SubMenu>
          <MenuItem
            icon={<BiLogOut />}
            style={{ marginTop: "40px" }}
            component={<NavLink to="/login" />}
          >
            Logout
          </MenuItem>
        </Menu>
      </Sidebar>
    </div>
  );
}
