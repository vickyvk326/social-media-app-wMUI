import { Box } from "@mui/material";
import SidebarList from "./list/SidebarList";
const Sidebar = () => {
  return (
    <Box
      sx={{
        display: { xs: "none", sm: "block" },
      }}
      flex={1}
      p={2}
    >
      <Box position={"fixed"}>
        <SidebarList />
      </Box>
    </Box>
  );
};

export default Sidebar;
