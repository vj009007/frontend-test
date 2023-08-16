import React from "react";
import {
  Box,
  Button,
  FormControl,
  InputAdornment,
  InputLabel,
  Link,
  Menu,
  MenuItem,
  OutlinedInput,
  Typography,
} from "@mui/material";
import Image from "next/image";
import searchIcon from "../../public/search.svg";
import tomato from "../../public/tomato.jpeg";
import FilterIcon from "../../public/sliders2-vertical.svg";

export default function MarketplacePage() {
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
      <Box className="flex justify-between">
        <Box>
          <Typography variant="h1" className="text-3xl font-bold">
            Marketplace Page
          </Typography>
          <Typography className="text-base text-[#6c757d] mt-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error,
            voluptatibus!
          </Typography>
        </Box>
        <Box className="flex items-center gap-4">
          <FormControl fullWidth className="search-input">
            <OutlinedInput
              placeholder="Search"
              id="outlined-adornment-weight"
              startAdornment={
                <InputAdornment position="start">
                  <Image src={searchIcon} alt="searchIcon" />
                </InputAdornment>
              }
              aria-describedby="outlined-weight-helper-text"
            />
          </FormControl>
          <div>
            <Button
              className="py-3 ps-3 pe-5 flex items-center gap-1 min-w-0 normal-case border-[#6c757d] border border-solid"
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              <Typography className="flex items-center gap-1 text-sm leading-none font-meduim text-[#6c757d]">
              <Image src={FilterIcon} alt="FilterIcon" className="w-3" />
                Filter
              </Typography>
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
      <Box className="mt-4 divider"></Box>
      <Box className="mt-10 grid grid-cols-4 gap-10">
        <Box className="items">
           <Link href="./marketplace/details"> <Image src={tomato} alt="searchIcon" /></Link>
          <Box className="wrapper px-2">
             <Link href="./marketplace/details" className="no-underline"> 
                <Typography variant="h2" className="text-lg font-semibold mt-2 text-black">Fresh Tomato</Typography>
              </Link>
              <Typography className="text-sm text-[#6c757d]">Product: Fresh Produce</Typography>
              <Typography variant="h3" className="font-semibold text-base text-black mt-1">₹ 100 - 200 /kg</Typography>
              <Link href="./marketplace/details" className="btn mt-2">View Details</Link>
          </Box>
         </Box>
         <Box className="items">
           <Link href="./marketplace/details"> <Image src={tomato} alt="searchIcon" /></Link>
          <Box className="wrapper px-2">
             <Link href="./marketplace/details" className="no-underline"> 
                <Typography variant="h2" className="text-lg font-semibold mt-2 text-black">Fresh Tomato</Typography>
              </Link>
              <Typography className="text-sm text-[#6c757d]">Product: Fresh Produce</Typography>
              <Typography variant="h3" className="font-semibold text-base text-black mt-1">₹ 100 - 200 /kg</Typography>
              <Link href="./marketplace/details" className="btn mt-2">View Details</Link>
          </Box>
         </Box>
         <Box className="items">
           <Link href="./marketplace/details"> <Image src={tomato} alt="searchIcon" /></Link>
          <Box className="wrapper px-2">
             <Link href="./marketplace/details" className="no-underline"> 
                <Typography variant="h2" className="text-lg font-semibold mt-2 text-black">Fresh Tomato</Typography>
              </Link>
              <Typography className="text-sm text-[#6c757d]">Product: Fresh Produce</Typography>
              <Typography variant="h3" className="font-semibold text-base text-black mt-1">₹ 100 - 200 /kg</Typography>
              <Link href="./marketplace/details" className="btn mt-2">View Details</Link>
          </Box>
         </Box>
         <Box className="items">
           <Link href="./marketplace/details"> <Image src={tomato} alt="searchIcon" /></Link>
          <Box className="wrapper px-2">
             <Link href="./marketplace/details" className="no-underline"> 
                <Typography variant="h2" className="text-lg font-semibold mt-2 text-black">Fresh Tomato</Typography>
              </Link>
              <Typography className="text-sm text-[#6c757d]">Product: Fresh Produce</Typography>
              <Typography variant="h3" className="font-semibold text-base text-black mt-1">₹ 100 - 200 /kg</Typography>
              <Link href="./marketplace/details" className="btn mt-2">View Details</Link>
          </Box>
         </Box>
         <Box className="items">
           <Link href="./marketplace/details"> <Image src={tomato} alt="searchIcon" /></Link>
          <Box className="wrapper px-2">
             <Link href="./marketplace/details" className="no-underline"> 
                <Typography variant="h2" className="text-lg font-semibold mt-2 text-black">Fresh Tomato</Typography>
              </Link>
              <Typography className="text-sm text-[#6c757d]">Product: Fresh Produce</Typography>
              <Typography variant="h3" className="font-semibold text-base text-black mt-1">₹ 100 - 200 /kg</Typography>
              <Link href="./marketplace/details" className="btn mt-2">View Details</Link>
          </Box>
         </Box>
         <Box className="items">
           <Link href="./marketplace/details"> <Image src={tomato} alt="searchIcon" /></Link>
          <Box className="wrapper px-2">
             <Link href="./marketplace/details" className="no-underline"> 
                <Typography variant="h2" className="text-lg font-semibold mt-2 text-black">Fresh Tomato</Typography>
              </Link>
              <Typography className="text-sm text-[#6c757d]">Product: Fresh Produce</Typography>
              <Typography variant="h3" className="font-semibold text-base text-black mt-1">₹ 100 - 200 /kg</Typography>
              <Link href="./marketplace/details" className="btn mt-2">View Details</Link>
          </Box>
         </Box>
         <Box className="items">
           <Link href="./marketplace/details"> <Image src={tomato} alt="searchIcon" /></Link>
          <Box className="wrapper px-2">
             <Link href="./marketplace/details" className="no-underline"> 
                <Typography variant="h2" className="text-lg font-semibold mt-2 text-black">Fresh Tomato</Typography>
              </Link>
              <Typography className="text-sm text-[#6c757d]">Product: Fresh Produce</Typography>
              <Typography variant="h3" className="font-semibold text-base text-black mt-1">₹ 100 - 200 /kg</Typography>
              <Link href="./marketplace/details" className="btn mt-2">View Details</Link>
          </Box>
         </Box>
         <Box className="items">
           <Link href="./marketplace/details"> <Image src={tomato} alt="searchIcon" /></Link>
          <Box className="wrapper px-2">
             <Link href="./marketplace/details" className="no-underline"> 
                <Typography variant="h2" className="text-lg font-semibold mt-2 text-black">Fresh Tomato</Typography>
              </Link>
              <Typography className="text-sm text-[#6c757d]">Product: Fresh Produce</Typography>
              <Typography variant="h3" className="font-semibold text-base text-black mt-1">₹ 100 - 200 /kg</Typography>
              <Link href="./marketplace/details" className="btn mt-2">View Details</Link>
          </Box>
         </Box>
         <Box className="items">
           <Link href="./marketplace/details"> <Image src={tomato} alt="searchIcon" /></Link>
          <Box className="wrapper px-2">
             <Link href="./marketplace/details" className="no-underline"> 
                <Typography variant="h2" className="text-lg font-semibold mt-2 text-black">Fresh Tomato</Typography>
              </Link>
              <Typography className="text-sm text-[#6c757d]">Product: Fresh Produce</Typography>
              <Typography variant="h3" className="font-semibold text-base text-black mt-1">₹ 100 - 200 /kg</Typography>
              <Link href="./marketplace/details" className="btn mt-2">View Details</Link>
          </Box>
         </Box>
         <Box className="items">
           <Link href="./marketplace/details"> <Image src={tomato} alt="searchIcon" /></Link>
          <Box className="wrapper px-2">
             <Link href="./marketplace/details" className="no-underline"> 
                <Typography variant="h2" className="text-lg font-semibold mt-2 text-black">Fresh Tomato</Typography>
              </Link>
              <Typography className="text-sm text-[#6c757d]">Product: Fresh Produce</Typography>
              <Typography variant="h3" className="font-semibold text-base text-black mt-1">₹ 100 - 200 /kg</Typography>
              <Link href="./marketplace/details" className="btn mt-2">View Details</Link>
          </Box>
         </Box>
         <Box className="items">
           <Link href="./marketplace/details"> <Image src={tomato} alt="searchIcon" /></Link>
          <Box className="wrapper px-2">
             <Link href="./marketplace/details" className="no-underline"> 
                <Typography variant="h2" className="text-lg font-semibold mt-2 text-black">Fresh Tomato</Typography>
              </Link>
              <Typography className="text-sm text-[#6c757d]">Product: Fresh Produce</Typography>
              <Typography variant="h3" className="font-semibold text-base text-black mt-1">₹ 100 - 200 /kg</Typography>
              <Link href="./marketplace/details" className="btn mt-2">View Details</Link>
          </Box>
         </Box>
         
      </Box>
    </>
  );
}
