# 2025-02-05 Props, useState och statefullness.

<details open>
<summary>Table of content</summary>

- [Props](#props)
  - [Pass down data](#pass-down-data)
  - [Pass down functions](#pass-down-functions)
- [useState](#usestate)
  - [Syntax](#syntax)
  - [Array destructuring](#array-destructuring)
  - [Update State](#update-state)
  - [Why regular variables doesn't work with React](#why-regular-variables-doesnt-work-with-react)
- [Stateful vs Stateless Component](#stateful-vs-stateless-component)

</details>

## Props

Props stands for "properties".

Props is the same as regular parameters for a normal JS function. See this example:

```js
function multiply(a, b) {
  const product = a * b;
  return `The product of a and b is ${product}`;
}
```

This function takes two arguemtns and returns something. Very similar to a React Component.

The corresponding component in react, would look something like this:

```jsx
const function Multiply (props) {
  const product = props.a * props.b

  return <p>The product of a and b is {product}. </p>
}
```

In short, props (short for "properties") are used to pass data from a parent component to a child component. Props make components reusable and allow dynamic content to be displayed. They are read-only, meaning that a component cannot modify the props it receives.

Props function similarly to regular parameters in JavaScript functions. When a component receives props, it is like a function receiving arguments. However, in React, props are essential for managing re-renders and ensuring the UI updates when data changes. This makes them a core part of React's component-based architecture.

[Back to top](#2025-02-05-props-usestate-och-statefullness)

### Pass down data

When passing data via props, a parent component provides values that the child component can access. This is useful for displaying dynamic content, such as user details or lists of items. The child component receives props as arguments and uses them to render content accordingly.

[Back to top](#2025-02-05-props-usestate-och-statefullness)

### Pass down functions

[Back to top](#2025-02-05-props-usestate-och-statefullness)

## useState

[Back to top](#2025-02-05-props-usestate-och-statefullness)

### Syntax

[Back to top](#2025-02-05-props-usestate-och-statefullness)

### Array destructuring

[Back to top](#2025-02-05-props-usestate-och-statefullness)

### Update State

[Back to top](#2025-02-05-props-usestate-och-statefullness)

### Why regular variables doesn't work with React

[Back to top](#2025-02-05-props-usestate-och-statefullness)

## Stateful vs Stateless Component

[Back to top](#2025-02-05-props-usestate-och-statefullness)

### Why favor stateless components?
