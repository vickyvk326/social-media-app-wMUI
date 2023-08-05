import { Box } from "@mui/material";
import Rightbar from "./righSidebar/Rightbar";

const RIghtsidebar = () => {
  return (
    <Box
      sx={{
        display: { xs: "none", sm: "block" },
      }}
      flex={2}
      p={2}
    >
      <Box position={"fixed"}>
        <Rightbar />
      </Box>
    </Box>
  );
};

export default RIghtsidebar;
