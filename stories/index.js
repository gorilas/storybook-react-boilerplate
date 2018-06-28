import React from 'react';
import { storiesOf } from '@storybook/react';

// import your components
import Button from '../components/Button';
import ButtonStateless from '../components/ButtonStateless';


storiesOf('Button', module)
  .add('with text', () => (
    <Button name='Mundo Mundial!'>Hello Button</Button>
  ))
  .add('with some emoji', () => (
    <Button name='Mundo Mundial!'><span role="img" aria-label="so cool">😀 😎 👍 💯</span></Button>
  ));

storiesOf('ButtonStateless', module)
  .add('with text', () => (
    <ButtonStateless name='Mundo Mundial!'>Hello Button</ButtonStateless>
  ))
  .add('with some emoji', () => (
    <ButtonStateless name='Mundo Mundial!'><span role="img" aria-label="so cool">😀 😎 👍 💯</span></ButtonStateless>
  ));