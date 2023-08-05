import { Box } from "@mui/material";
import FeedContent from "./feed/FeedContent";
const feedImages = [
  {
    name: "Big temple, Thanjavur",
    date: "July 15,2023",
    description: "Wonderful view of historical temple of lord Brihadeeswara.",
    img: "https://gemootest.s3.us-east-2.amazonaws.com/s/res/514885813225336832/827f319f8639157491cefe9195a84542.jpg?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARLZICB6QQHKRCV7K%2F20230805%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20230805T094027Z&X-Amz-SignedHeaders=host&X-Amz-Expires=7200&X-Amz-Signature=65d0e87ee69010a77aab8839f7804da46f80dbec7fa2c19163006b8927aeca39",
  },
  {
    name: "Manikkampillai nagar,Sunnambukkara street",
    date: "August 8,2022",
    description: "A stunning night view from Guna's colony Roof top.",
    img: "https://gemootest.s3.us-east-2.amazonaws.com/s/res/514885813225336832/b57a7a56763d49a10125d06ac7820901.jpg?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARLZICB6QQHKRCV7K%2F20230805%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20230805T094027Z&X-Amz-SignedHeaders=host&X-Amz-Expires=7200&X-Amz-Signature=ac950f7da24b98379d83aff108470160cd609b2f5b494cd3f37150b757074b5b",
  },
  {
    name: "Big street,Pattukottai",
    date: "March 25,2023",
    description:
      "An awesome night steet photography of Big street, Pattukottai.",
    img: "https://gemootest.s3.us-east-2.amazonaws.com/s/res/514885813225336832/1683f4d190dc5fbe83760812c069befc.jpg?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARLZICB6QQHKRCV7K%2F20230805%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20230805T094027Z&X-Amz-SignedHeaders=host&X-Amz-Expires=7200&X-Amz-Signature=c515a3f84dabcda7516d5d7cfa5d666cf356264d7159a14eb8ebb9727525f026",
  },
  {
    name: "Harbour,Mallipattinam",
    date: "June 21,2023",
    description: "An average morning in the harbour of Mallipattinam.",
    img: "https://gemootest.s3.us-east-2.amazonaws.com/s/res/514885813225336832/b3bdc8bf770cbfe69a6ccaac02b574c6.jpg?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARLZICB6QQHKRCV7K%2F20230805%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20230805T094027Z&X-Amz-SignedHeaders=host&X-Amz-Expires=7200&X-Amz-Signature=0d109f3725250830a21aff51c7ff2352019c5c299b60b99546f6643af6f75f9e",
  },
  {
    name: "Nadiamman temple,Pattukkottai",
    date: "April 12,2023",
    description: "Nadiamman festival picture with crowd of Pattukkotai people.",
    img: "https://gemootest.s3.us-east-2.amazonaws.com/s/res/514885813225336832/d508efa917cf1e4ba6218c674e6f2d0c.jpg?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARLZICB6QQHKRCV7K%2F20230805%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20230805T094027Z&X-Amz-SignedHeaders=host&X-Amz-Expires=7200&X-Amz-Signature=59708396239d4d6e8448de3ac5314c9b890508685b10583e7fca986cc2e2ce21",
  },
  {
    name: "Light house, Manora",
    date: "January 1,2023",
    description:
      "The fort was built by Maratha ruler Serfoji II in 1814–1815 to commemorate the successful advance of the British over Napoléon Bonaparte. ",
    img: "https://gemootest.s3.us-east-2.amazonaws.com/s/res/514885813225336832/9ea22e3bd31f1f90ea82ac5e6f015b7f.jpg?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARLZICB6QQHKRCV7K%2F20230805%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20230805T094027Z&X-Amz-SignedHeaders=host&X-Amz-Expires=7200&X-Amz-Signature=69e90cb570b1157da6b35d7d430ccaa9a11d6a12c411d35d697ac7a248825a7c",
  },
];
const Feed = () => {
  return (
    <Box flex={4} p={2}>
      {feedImages.map((feedImage, index) => (
        <FeedContent image={feedImage} key={index} />
      ))}
    </Box>
  );
};

export default Feed;
