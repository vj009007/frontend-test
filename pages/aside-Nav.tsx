import { Box, Link } from "@mui/material";
import router, { useRouter } from "next/router";

export default function NewNav() {


    const router = useRouter();
    
  return (
    <>
      <Box className="aside-nav max-w-[246px] w-full">
        <ul className="menu-list">
          <li className={router.pathname == "/" ? "active" : ""}>
            <Link href="/">Dashboard</Link>
          </li>
          <li className={router.pathname == "/marketplace" ? "active" : ""}>
            <Link href="/marketplace">Marketplace</Link>
          </li>
          <li className={router.pathname == "/order" ? "active" : ""}>
            <Link href="/order">Order</Link>
          </li>
          <li className={router.pathname == "/payment" ? "active" : ""}>
            <Link href="/payment">Payment & Invoice</Link>
          </li>
          <li className={router.pathname == "/pricing" ? "active" : ""}>
            <Link href="/pricing">Live Pricing</Link>
          </li>
        </ul>
      </Box>
    </>
  );
}
