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
import { MdDomain, MdOutlineNfc } from "react-icons/md";
import { IoMdMenu, IoMdAttach } from "react-icons/io";
import { BsFillPeopleFill } from "react-icons/bs";
import { BiLogOut } from "react-icons/bi";
import { HiDotsVertical } from "react-icons/hi";
import { GrDatabase, GrStatusInfo } from "react-icons/gr";
import { AiOutlineBoxPlot } from "react-icons/ai";
import { RiTeamFill } from "react-icons/ri";

export default function Index() {
  const { collapseSidebar } = useProSidebar();

  return (
    <div className="flex h-screen text-[#0B4B31]">
      <Sidebar
        transitionDuration={800}
        style={{ height: "100vh" }}
        defaultCollapsed={false}
      >
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
          <SubMenu label="ODP Data" icon={<GrDatabase />}>
            <MenuItem
              icon={<MdOutlineNfc />}
              component={<NavLink to="/data-entry/field-data/nfc" />}
            >
              NFC
            </MenuItem>
            <MenuItem
              icon={<AiOutlineBoxPlot />}
              component={<NavLink to="/data-entry/field-data/odp" />}
            >
              ODP
            </MenuItem>
            <MenuItem
              icon={<IoMdAttach />}
              component={<NavLink to="/data-entry/field-data/odp-attached" />}
            >
              ODP Attached
            </MenuItem>
          </SubMenu>
          <SubMenu label="User Data" icon={<BsFillPeopleFill />}>
            <MenuItem
              icon={<RiTeamFill />}
              component={<NavLink to="/data-entry/user-data/team" />}
            >
              Team
            </MenuItem>
            <MenuItem
              icon={<GrStatusInfo />}
              component={<NavLink to="/data-entry/user-data/role" />}
            >
              Role
            </MenuItem>
            <MenuItem
              icon={<HiDotsVertical />}
              component={<NavLink to="/data-entry/user-data/user" />}
            >
              User
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
