import React from 'react';
import { storiesOf } from '@storybook/react';

// import your components
import ButtonES6 from '../components/ButtonES6';
import ButtonStateless from '../components/ButtonStateless';


storiesOf('ButtonES6', module)
  .add('with text', () => (
    <ButtonES6 name='Mundo Mundial!'>Hello Button</ButtonES6>
  ))
  .add('with some emoji', () => (
    <ButtonES6 name='Mundo Mundial!'><span role="img" aria-label="so cool">😀 😎 👍 💯</span></ButtonES6>
  ));

storiesOf('ButtonStateless', module)
  .add('with text', () => (
    <ButtonStateless name='Mundo Mundial!'>Hello Button</ButtonStateless>
  ))
  .add('with some emoji', () => (
    <ButtonStateless name='Mundo Mundial!'><span role="img" aria-label="so cool">😀 😎 👍 💯</span></ButtonStateless>
  ));