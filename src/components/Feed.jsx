import { Box } from "@mui/material";
import FeedContent from "./feed/FeedContent";
const feedImages = [
  {
    name: "Big temple, Thanjavur",
    date: "July 15,2023",
    description: "Wonderful view of historical temple of lord Brihadeeswara.",
    img: "https://live.staticflickr.com/65535/53095389541_471b8cc02b.jpg",
  },
  {
    name: "Manikkampillai nagar,Sunnambukkara street",
    date: "August 8,2022",
    description: "A stunning night view from Guna's colony Roof top.",
    img: "https://live.staticflickr.com/65535/53094823787_aa20d4dee3_z.jpg",
  },
  {
    name: "Big street,Pattukottai",
    date: "March 25,2023",
    description:
      "An awesome night steet photography of Big street, Pattukottai.",
    img: "https://live.staticflickr.com/65535/53094823782_ba57aa8d39_w.jpg",
  },
  {
    name: "Harbour,Mallipattinam",
    date: "June 21,2023",
    description: "An average morning in the harbour of Mallipattinam.",
    img: "https://live.staticflickr.com/65535/53095389566_b1aee69b46.jpg",
  },
  {
    name: "Nadiamman temple,Pattukkottai",
    date: "April 12,2023",
    description: "Nadiamman festival picture with crowd of Pattukkotai people.",
    img: "https://live.staticflickr.com/65535/53094823792_32dec1932b_w.jpg",
  },
  {
    name: "Light house, Manora",
    date: "January 1,2023",
    description:
      "The fort was built by Maratha ruler Serfoji II in 1814–1815 to commemorate the successful advance of the British over Napoléon Bonaparte. ",
    img: "https://live.staticflickr.com/65535/53095567024_4bb0086740_w.jpg",
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
