import {
  Box,
  Typography,
  FormControl,
  OutlinedInput,
  InputAdornment,
  TextField,
  Button,
  Menu,
  MenuItem,
} from "@mui/material";
import Link from "next/link";
import arrowDown from "../../public/chevron-down.svg";
import Image from "next/image";

import NewNav from "../aside-Nav";
import NewHeader from "../newHeader";
import React from "react";

export default function Request() {
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
      <main>
        <NewHeader />

        <Box className="flex items-start">
          <NewNav />

          <Box className="main-content w-full p-8 px-5 bg-[#f7f7f7] h-full">
            <Box className="maincontent">
              <Typography variant="h2" className="text-xl font-bold">
                Sample Form
              </Typography>
              <Box className="mt-10 md:max-w-xl form-style">
                <Box>
                  <label htmlFor="email">Email</label>
                  <TextField fullWidth id="email" placeholder="Email" />
                </Box>
                <Box className="mt-4">
                  <label htmlFor="Select">Select</label>
                  <Button
                    className="py-4 ps-3 pe-5 flex w-full justify-start items-center gap-1 min-w-0 normal-case border-[#6c757d] border border-solid"
                    id="basic-button"
                    aria-controls={open ? "basic-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    onClick={handleClick}
                  >
                    <Typography className="flex items-center gap-1 text-sm leading-none font-meduim text-[#6c757d]">
                      Select Style{" "}
                      <Image
                        src={arrowDown}
                        alt="arrowDown"
                        className=" max-h-3 h-3 w-3"
                      />
                    </Typography>
                  </Button>
                  <Menu
                    className="form-menu"
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
                </Box>

                <Box className="grid grid-cols-2 gap-5">
                  <Box className="mt-4 md:max-w-xl form-style">
                    <Box>
                      <label htmlFor="City">City</label>
                      <TextField fullWidth id="City" placeholder="City" />
                    </Box>
                  </Box>
                  <Box className="mt-4 md:max-w-xl form-style">
                    <Box>
                      <label htmlFor="State">State</label>
                      <TextField fullWidth id="State" placeholder="State" />
                    </Box>
                  </Box>
                </Box>
                <Box>
                  <Link href="./request" className="btn style2 mt-4">
                    Request Now
                  </Link>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </main>
    </>
  );
}
