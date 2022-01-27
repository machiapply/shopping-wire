import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import {
  BaseSection,
  ThemeNamesType,
} from '@applydigital/moderna-component-library';
import { Navigation, INavigation } from '.';

export default {
  title: 'Components/Navigation',
  component: Navigation,
  argTypes: {
    theme: {
      control: {
        type: 'select',
        options: ['blue', 'light'],
      },
    },
  },
} as Meta;

type NavigationStoryProps = INavigation & {
  theme: ThemeNamesType;
};

const Template: Story = ({ theme, ...args }: NavigationStoryProps) => (
  <BaseSection theme={theme}>
    <Navigation {...args} />
  </BaseSection>
);

export const Default = Template.bind({});

Default.args = {
  // TODO: add default values here eg ...defaultData
  // TODO: remove this if theme prop exists in this component
  theme: 'light', // just for storybook
};
