import { StoryFn, Meta } from "@storybook/react";
import PoemCard, { IPoemCard } from "./PoemCard";
import { mockPoemCardProps } from "./PoemCard.mocks";

export default {
  title: "templates/PoemCard",
  component: PoemCard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as Meta<typeof PoemCard>;

// More on componenet templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof PoemCard> = (args) => <PoemCard {...args} />;

export const Base = Template.bind({});

Base.args = {
  ...mockPoemCardProps.base,
} as IPoemCard;
