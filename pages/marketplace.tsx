
import { Box } from "@mui/material";
import NewNav from "./aside-Nav";
import NewHeader from "./newHeader";
import MarketplacePage from "./components/marketplace";

export default function Marketplace() {
  return (
    <>
      <main>
        <NewHeader />

        <Box className="flex items-start">
          <NewNav />

          <Box className="main-content w-full p-8 px-5 bg-[#f7f7f7] h-full">
            <Box className="maincontent">
              <MarketplacePage />
            </Box>
          </Box>
        </Box>
      </main>
    </>
  );
}
