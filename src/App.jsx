import { Box, Stack } from "@mui/material";
import "./app.scss";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Rightsidebar from "./components/Rightsidebar";

const App = () => {
  return (
    <Box className="app">
      <Navbar />
      <Stack
        position={"relative"}
        sx={{ top: "65px" }}
        direction={"row"}
        spacing={2}
        display={"flex"}
        justifyContent={"space-between"}
      >
        <Sidebar />
        <Feed />
        <Rightsidebar />
      </Stack>
    </Box>
  );
};

export default App;
