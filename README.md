# storybook-react-boilerplate
Basic boilerplate for styleguides made with Storybook for React

Uses [Storybook](https://github.com/storybooks/storybook) as UI components visualizer.

There are two kind of components as example:
 * components/ButtonStateless.js 
 * components/Button.js 
 
 Button is a typical component with state.

 ButtonStateless is a functional stateless component declared as a plain JavaScript function with props. It's used for presentational components without state. 

 Both of them have defaultProps and propTypes defined and a callback function onClick.

 The way to style components with Sass is based in the architecture proposed in [Styling React Components in Sass](https://hugogiraudel.com/2015/06/18/styling-react-components-in-sass/) by David Khourshid.

 ## Installation

 ```
 yarn install
 ```

 ## Run Storybook

 ```
 yarn run storybook
```
