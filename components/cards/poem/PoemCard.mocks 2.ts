import { IPoemCard } from "./PoemCard";

// Mock props or fake data that matches the shape of the mock interface for testing

const base: IPoemCard = {
  id: "poem002",
  title: "lorem ipsum dolor sit amet lorem ipsum dolor",
  author: "John Doe",
  content:
    "lorem ipsum dolor sit amet lorem ipsum dolor<br/> sit ametlorem ipsum dolor sit<br/> ametlorem ipsum dolor sit<br/> ametlorem ipsum dolor sit ametlorem<br/> ipsum dolor sit<br/> ametlorem ipsum<br/> dolor sit<br/> ametlorem ipsum dolor<br/> sit ametlorem<br/> ipsum dolor<br/> sit ametlorem<br/> ipsum dolor<br/> sit ametlorem ipsum dolor<br/> sit ametlorem ipsum dolor sit<br/> ametlorem ipsum dolor<br/> sit ametlorem ipsum<br/> dolor sit ametlorem ipsum<br/> dolor sit ametlorem<br/> ipsum dolor sit ametlorem ipsum<br/> dolor sit ametlorem ipsum dolor sit amet",
  description: "",
  section: "where are we",
  imageID: "img005",
  link: "",
};

export const mockPoemCardProps = {
  base,
};
