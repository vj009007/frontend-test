import { Box } from "@mui/material";
import NewNav from "./aside-Nav";
import NewHeader from "./newHeader";
import PricingPage from "./components/pricing";

export default function Pricing() {
  return (
    <>
      <main>
        <NewHeader />

        <Box className="flex items-start">
          <NewNav />

          <Box className="main-content w-full p-8 px-5 bg-[#f7f7f7] h-full">
            <Box className="maincontent">
              <PricingPage />
            </Box>
          </Box>
        </Box>
      </main>
    </>
  );
}
