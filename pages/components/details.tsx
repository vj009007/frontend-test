import {
  Box,
  Typography,
  FormControl,
  OutlinedInput,
  InputAdornment,
} from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import searchIcon from "../../public/search.svg";
import tomato from "../../public/tomato.jpeg";

export default function DetailsPage() {
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
        </Box>
      </Box>
      <Box className="mt-4 divider"></Box>
      <Box className="mt-10">
        <Box className="items-details">
          <Image src={tomato} alt="searchIcon" />
          <Box className="wrapper px-2 pt-3">
            <Typography className="text-sm text-[#6c757d]">
              Last update: 05 July 2023
            </Typography>
            <Typography
              variant="h2"
              className="text-[24px] mt-1 font-semibold text-black"
            >
              Fresh Tomato
            </Typography>

            <Typography className="text-sm mt-1 text-[#6c757d]">
              Product: Fresh Produce
            </Typography>
            <Typography
              variant="h3"
              className="font-semibold text-lg text-black mt-2"
            >
              ₹ 100 - 200 /kg
            </Typography>
            <Typography className="bg-[#f7f7f7] text-[#6c757d] px-2 py-3 text-base rounded-md mt-2">
              <span className="text-black font-medium">Quantity</span> : 630528 Quintal
            </Typography>
            <Link href="./request" className="btn style2 mt-2">
              Request Now
            </Link>
          </Box>
        </Box>
        <Box className="mt-10">
            <Typography variant="h2" className="text-lg mt-1 font-semibold text-black">
              Description
            </Typography>
             <Typography className=" mt-3 text-[#6c757d] md:w-2/4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo doloremque molestiae eligendi voluptate rerum facilis error quis maxime, commodi ullam, quos neque consectetur? Asperiores eos pariatur vel ut, magni corporis, eum dolorem ab dignissimos eius eaque consectetur hic. Cupiditate pariatur commodi culpa ullam unde quam dignissimos! Consectetur laudantium veniam esse!
             </Typography>
        </Box>
      </Box>
    </>
  );
}
