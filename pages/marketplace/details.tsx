
import { Box } from "@mui/material";
import NewNav from "../aside-Nav";
import DetailsPage from "../components/details";
import NewHeader from "../newHeader";


export default function Details() {
  return (
    <>
      <main>
        <NewHeader />

        <Box className="flex items-start">
          <NewNav />

          <Box className="main-content w-full p-8 px-5 bg-[#f7f7f7] h-full">
            <Box className="maincontent">
              <DetailsPage />
            </Box>
          </Box>
        </Box>
      </main>
    </>
  );
}
