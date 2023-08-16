import { Box, Link } from "@mui/material";
import router, { useRouter } from "next/router";
import Image from "next/image";
import gridPic from "../public/grid.svg";
import BnakPic from "../public/bank.svg";
import orderPic from "../public/cart.svg";
import walletPic from "../public/wallet.svg";
import ChartPic from "../public/clipboard-data.svg";

export default function NewNav() {


    const router = useRouter();
    
  return (
    <>
      <Box className="aside-nav max-w-[246px] w-full">
        <ul className="menu-list">
          <li className={router.pathname == "/" ? "active" : ""}>
            <Link href="/">
            <Image src={gridPic} alt="Grid" />  Dashboard</Link>
          </li>
          <li className={router.pathname == "/marketplace" ? "active" : ""}>
            <Link href="/marketplace">
            <Image src={BnakPic} alt="BnakPic" /> Marketplace</Link>
          </li>
          <li className={router.pathname == "/order" ? "active" : ""}>
            <Link href="/order">
            <Image src={orderPic} alt="orderPic" /> Order</Link>
          </li>
          <li className={router.pathname == "/payment" ? "active" : ""}>
            <Link href="/payment">
            <Image src={walletPic} alt="walletPic" />   Payment & Invoice</Link>
          </li>
          <li className={router.pathname == "/pricing" ? "active" : ""}>
            <Link href="/pricing">
            <Image src={ChartPic} alt="ChartPic" /> Live Pricing</Link>
          </li>
        </ul>
      </Box>
    </>
  );
}
