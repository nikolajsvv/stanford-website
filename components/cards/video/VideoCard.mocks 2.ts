import { IVideoCard } from "./VideoCard";

// Mock props or fake data that matches the shape of the mock interface for testing

const base: IVideoCard = {
  id: "",
  title: "Real Decay in a Synthetic World",
  author: "Rellie Liu, Tianshu Luo, Grace Wanrong Tan",
  description:
    "This multimedia project with a living (in fact, decaying) display, a voiceover video, and a written commentary presents the audience with a compelling narrative of climate change, engaging all of their five senses concurrently. The visual display combines synthetic and natural materials in a dissonant manner, viscerally demonstrating the status quo of an invasive artificiality in nature. The creators hope that this project will bring an emotional impact to the viewer, reminding the viewer of the importance to respect and conserve nature.",
  type: "video",
  section: "how do we make sense of it all",
  image: "",
  url: "https://www.youtube.com/watch?v=fyeWXx3_qVU",
};

export const mockVideoCardProps = {
  base,
};
