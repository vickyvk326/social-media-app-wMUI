import {
  Avatar,
  AvatarGroup,
  Box,
  Divider,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";

const Rightbar = () => {
  return (
    <Box width={300}>
      <Box mt={1} mb={1}>
        <Typography variant="h6" fontWeight={100} fontSize={25}>
          Online friends
        </Typography>
      </Box>
      <Box mt={1} mb={1}>
        <AvatarGroup max={7}>
          <Avatar
            alt="Remy Sharp"
            src="vickyvk326.github.io\components\assets\hari.jpg"
          />
          <Avatar alt="Travis Howard" src="src\components\assets\guna.jpg" />
          <Avatar alt="Cindy Baker" src="src\components\assets\ini.jpg" />
          <Avatar alt="Agnes Walker" src="src\components\assets\vicky.jpg" />
          <Avatar
            alt="Trevor Henderson"
            src="src\components\assets\kishore.jpg"
          />
          <Avatar alt="Remy Sharp" src="src\components\assets\buvi.jpg" />
          <Avatar alt="Travis Howard" src="src\components\assets\kishore.jpg" />
          <Avatar alt="Cindy Baker" src="src\components\assets\kishore.jpg" />
          <Avatar alt="Agnes Walker" src="src\components\assets\kishore.jpg" />
        </AvatarGroup>
      </Box>
      <Box mt={1} mb={1}>
        <Typography variant="h6" fontWeight={100} fontSize={25}>
          Latest photos
        </Typography>
        <ImageList cols={4} rowHeight={80} gap={5}>
          <ImageListItem>
            <img
              src="https://scontent.fmaa14-1.fna.fbcdn.net/v/t1.6435-9/120189474_107092791162741_4871665961147387320_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=e3f864&_nc_ohc=IjtpHVBJ344AX8vCKhv&_nc_ht=scontent.fmaa14-1.fna&oh=00_AfB6hUN-P70m2Me_gLSfgEfd-bPA4COb8tISdz6cFrz0yQ&oe=64F58E24"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/9/90/Manora_renamed.jpg"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://img.dailythanthi.com/Articles/2022/Apr/202204150121528010_Pattukottai-Nadiamman-Temple-Therottam_SECVPF.gif"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://live.staticflickr.com/8302/7745118450_86c7e53151_b.jpg"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://live.staticflickr.com/8301/7815152536_508381d983.jpg"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://st.indiarailinfo.com/kjfdsuiemjvcya24/0/6/2/8/4276628/2/img201903290948341921793.jpg"
              alt=""
            />
          </ImageListItem>
        </ImageList>
      </Box>
      <Box mt={1} mb={1}>
        <Typography variant="h6" fontWeight={100} fontSize={25}>
          Latest conversations
        </Typography>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="src\components\assets\hari.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Hi bro!❤"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Gunaseelan P.S.
                  </Typography>
                  {" — Sollunga bro\nEpdi irukkinga"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Cindy Baker" src="src\components\assets\ini.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Enna bro pannuringa?"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Hariharan G.
                  </Typography>
                  {" — Groundla irukken bro basketball"}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Rightbar;
