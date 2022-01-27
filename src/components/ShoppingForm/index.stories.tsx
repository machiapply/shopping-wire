import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import {
  BaseSection,
  ThemeNamesType,
} from '@applydigital/moderna-component-library';
import { ShoppingForm, IShoppingForm } from '.';

export default {
  title: 'Components/ShoppingForm',
  component: ShoppingForm,
  argTypes: {
    theme: {
      control: {
        type: 'select',
        options: ['blue', 'light'],
      },
    },
  },
} as Meta;

type ShoppingFormStoryProps = IShoppingForm & {
  theme: ThemeNamesType;
};

const Template: Story = ({ theme, ...args }: ShoppingFormStoryProps) => (
  <BaseSection theme={theme}>
    <ShoppingForm {...args} />
  </BaseSection>
);

export const Default = Template.bind({});

Default.args = {
  // TODO: add default values here eg ...defaultData
  // TODO: remove this if theme prop exists in this component
  theme: 'light', // just for storybook
};
