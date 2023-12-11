import { StoryFn, Meta } from "@storybook/react";
import VideoCard, { IVideoCard } from "./VideoCard";
import { mockVideoCardProps } from "./VideoCard.mocks";

export default {
  title: "templates/VideoCard",
  component: VideoCard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as Meta<typeof VideoCard>;

// More on componenet templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof VideoCard> = (args) => <VideoCard {...args} />;

export const Base = Template.bind({});

Base.args = {
  ...mockVideoCardProps.base,
} as IVideoCard;
