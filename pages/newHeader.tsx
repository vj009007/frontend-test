import { Box, Button, Typography, Menu, MenuItem } from "@mui/material";
import React from "react";
import logo from "../public/logo.png";
import bell from "../public/bell.svg";
import arrowDown from "../public/chevron-down.svg";
import ProfilePic from "../public/profile-pic.png";
import Image from "next/image";

export default function NewHeader() {

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
      };

    return (
      <>
        <header className="header flex items-center justify-between px-12 bg-white pt-[10px]">
          <Box className="logo">
            <Image src={logo} alt="logo" className="block img-full mx-auto" />
          </Box>
          <Box className="flex items-center gap-4">
            <Button className="bg-[#f5f5f9] min-w-[40px] h-10 rounded-full p-0">
              <Image src={bell} alt="Bell" />
            </Button>
            <Box className="profile-dropdown">
              <div>
                <Button
                  className="p-0 min-w-0 normal-case"
                  id="basic-button"
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                >
                  <Image
                    src={ProfilePic}
                    alt="Bell"
                    className=" max-h-10 h-10 w-10"
                  />
                  <Box className="ps-5 text-left">
                    <span className="text-[#01a053] text-xs leading-none">
                      Buyer
                    </span>
                    <Typography className="flex items-center gap-1 text-sm text-black leading-none font-semibold">
                      Md Rizwan{" "}
                      <Image src={arrowDown} alt="arrowDown" className="w-3" />{" "}
                    </Typography>
                  </Box>
                </Button>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                >
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={handleClose}>My account</MenuItem>
                  <MenuItem onClick={handleClose}>Logout</MenuItem>
                </Menu>
              </div>
            </Box>
          </Box>
        </header>
      </>
    )
  }