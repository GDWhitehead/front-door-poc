import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";

const meta: Meta<typeof Button> = {
  component: Button,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Playground: Story = {
  args: {
    variant: "contained",
    size: "medium",
    color: "primary",
  },
  argTypes: {
    variant: {
      options: ["text", "contained", "outlined"],
      control: { type: "select" },
      description: "The type of button",
      defaultValue: { summary: "text" },
    },
    size: {
      options: ["small", "medium", "large"],
      control: { type: "select" },
      description: "The size of button",
      defaultValue: { summary: "medium" },
    },
    color: {
      options: ["primary", "secondary", "success", "error"],
      control: { type: "select" },
      description: "The color of button",
      defaultValue: { summary: "primary" },
    },
  },
  render: (args) => (
    <Button variant={args.variant} size={args.size} color={args.color}>
      Button
    </Button>
  ),
};

export const Variant: Story = {
  render: () => (
    <Stack spacing={2} direction="row">
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </Stack>
  ),
};

export const Color: Story = {
  render: () => (
    <Stack spacing={2} direction="row">
      <Button variant="contained">Primary</Button>
      <Button variant="contained" color="secondary">
        Secondary
      </Button>
      <Button variant="contained" color="success">
        Success
      </Button>
      <Button variant="contained" color="error">
        Error
      </Button>
    </Stack>
  ),
};

export const Size: Story = {
  render: () => (
    <Box sx={{ "& button": { m: 1 } }}>
      <div>
        <Button size="small">Small</Button>
        <Button size="medium">Medium</Button>
        <Button size="large">Large</Button>
      </div>
      <div>
        <Button variant="outlined" size="small">
          Small
        </Button>
        <Button variant="outlined" size="medium">
          Medium
        </Button>
        <Button variant="outlined" size="large">
          Large
        </Button>
      </div>
      <div>
        <Button variant="contained" size="small">
          Small
        </Button>
        <Button variant="contained" size="medium">
          Medium
        </Button>
        <Button variant="contained" size="large">
          Large
        </Button>
      </div>
    </Box>
  ),
};

export const WithIcon: Story = {
  name: "With Icon",
  render: () => (
    <Stack direction="row" spacing={2}>
      <Button variant="outlined" startIcon={<DeleteIcon />}>
        Delete
      </Button>
      <Button variant="contained" endIcon={<SendIcon />}>
        Send
      </Button>
    </Stack>
  ),
};
