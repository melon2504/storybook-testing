import type { Meta, StoryObj } from "@storybook/react";
import DeleteIcon from "@mui/icons-material/Delete";
import AlarmIcon from "@mui/icons-material/Alarm";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

import ButtonIcon from "./ButtonIcon";

const IconExample = () => <DeleteIcon />;
IconExample.displayName = "DeleteIcon";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Button/Icon",
  component: ButtonIcon,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes

  //   argTypes: {
  //     backgroundColor: { control: "color" },
  //   },
} satisfies Meta<typeof ButtonIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    icon: <IconExample />,
    label: "Delete Default Icon",
  },
};

export const Contained: Story = {
  args: {
    icon: <DeleteIcon />,
    label: "Delete Contained Icon",
  },
};
