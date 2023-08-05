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
            src="https://gemootest.s3.us-east-2.amazonaws.com/s/res/514885813225336832/873a9d9a75681c1ce6cd69bd016150fd.jpg?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARLZICB6QQHKRCV7K%2F20230805%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20230805T101023Z&X-Amz-SignedHeaders=host&X-Amz-Expires=7200&X-Amz-Signature=c373c23b53e4ee2c8fe7665225a0aa3c49b0c01979b53d87b18336630f6c0515"
          />
          <Avatar
            alt="Travis Howard"
            src="https://gemootest.s3.us-east-2.amazonaws.com/s/res/514885813225336832/05311d5f830fe19e4075a6798e1f3504.jpg?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARLZICB6QQHKRCV7K%2F20230805%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20230805T101023Z&X-Amz-SignedHeaders=host&X-Amz-Expires=7200&X-Amz-Signature=ed27110fef67f67e3479059244880c91f3d94e41baf6a762f91049087ada6727"
          />
          <Avatar
            alt="Cindy Baker"
            src="https://gemootest.s3.us-east-2.amazonaws.com/s/res/514885813225336832/89458b94cc36e50ef8c0462f4bd96355.jpg?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARLZICB6QQHKRCV7K%2F20230805%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20230805T101022Z&X-Amz-SignedHeaders=host&X-Amz-Expires=7200&X-Amz-Signature=1ba1726a0b9cffc8801f0770a75b290e0ec08793554d87af2ec164c107592b1a"
          />
          <Avatar
            alt="Agnes Walker"
            src="https://gemootest.s3.us-east-2.amazonaws.com/s/res/514885813225336832/b258ec0beb5a9ae6ba6e21eb682e1c46.jpg?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARLZICB6QQHKRCV7K%2F20230805%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20230805T101023Z&X-Amz-SignedHeaders=host&X-Amz-Expires=7200&X-Amz-Signature=9983adb781ad4221d8f873b2dd52673e8632575e0f844a4801f4788eb93445da"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://gemootest.s3.us-east-2.amazonaws.com/s/res/514885813225336832/f13eb0fdaf2bb6ccdd305fa6f1362754.jpg?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARLZICB6QQHKRCV7K%2F20230805%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20230805T101023Z&X-Amz-SignedHeaders=host&X-Amz-Expires=7200&X-Amz-Signature=e704da28a5ffa3d6ce66bb9164eb8b0560477482faea4ff8292c9e0fd1243f40"
          />
          <Avatar
            alt="Remy Sharp"
            src="https://gemootest.s3.us-east-2.amazonaws.com/s/res/514885813225336832/4a33777f0eb380e68765683706ab0c61.jpg?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARLZICB6QQHKRCV7K%2F20230805%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20230805T101534Z&X-Amz-SignedHeaders=host&X-Amz-Expires=7200&X-Amz-Signature=e69a92daa6adddb991b1b79cea42e5f4e6d47e9f41fb1a8826a80dedea545e05"
          />
          <Avatar
            alt="Travis Howard"
            src="https://gemootest.s3.us-east-2.amazonaws.com/s/res/514885813225336832/4a33777f0eb380e68765683706ab0c61.jpg?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARLZICB6QQHKRCV7K%2F20230805%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20230805T101534Z&X-Amz-SignedHeaders=host&X-Amz-Expires=7200&X-Amz-Signature=e69a92daa6adddb991b1b79cea42e5f4e6d47e9f41fb1a8826a80dedea545e05"
          />
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
              <Avatar
                alt="Remy Sharp"
                src="https://gemootest.s3.us-east-2.amazonaws.com/s/res/514885813225336832/4a33777f0eb380e68765683706ab0c61.jpg?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARLZICB6QQHKRCV7K%2F20230805%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20230805T101534Z&X-Amz-SignedHeaders=host&X-Amz-Expires=7200&X-Amz-Signature=e69a92daa6adddb991b1b79cea42e5f4e6d47e9f41fb1a8826a80dedea545e05"
              />
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
              <Avatar
                alt="Cindy Baker"
                src="https://gemootest.s3.us-east-2.amazonaws.com/s/res/514885813225336832/873a9d9a75681c1ce6cd69bd016150fd.jpg?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARLZICB6QQHKRCV7K%2F20230805%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20230805T101023Z&X-Amz-SignedHeaders=host&X-Amz-Expires=7200&X-Amz-Signature=c373c23b53e4ee2c8fe7665225a0aa3c49b0c01979b53d87b18336630f6c0515"
              />
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
