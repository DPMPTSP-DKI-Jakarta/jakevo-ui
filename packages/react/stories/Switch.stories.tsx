import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Switch } from '../src';

const meta: Meta = {
  title: 'Switch',
  component: Switch,
  argTypes: {
    onChange: { action: 'changed' },
    onClick: { action: 'clicked' },
    enabled: {
      control: {
        type: 'boolean',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story = (args: any) => <Switch {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {
  enabled: true,
};
