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

This function takes two arguments and returns something. Very similar to a React Component.

The corresponding component in react, would look something like this:

```jsx
const function Multiply (props) {
  const product = props.a * props.b

  return <p>The product of a and b is {product}.</p>
}
```

In short, props (short for "properties") are used to pass data from a parent component to a child component. Props make components reusable and allow dynamic content to be displayed. They are read-only, meaning that a component cannot modify the props it receives.

Props function similarly to regular parameters in JavaScript functions. When a component receives props, it is like a function receiving arguments. However, in React, props are essential for managing re-renders and ensuring the UI updates when data changes. This makes them a core part of React's component-based architecture.

[Back to top](#2025-02-05-props-usestate-och-statefullness)

### Pass down data

When passing data via props, a parent component provides values that the child component can access. This is useful for displaying dynamic content, such as user details or lists of items. The child component receives props as arguments and uses them to render content accordingly.

In the test folder in this repo you can find examples that shows this. In short, the `App.jsx` is the 'owner' of the data, containg of an array of links and a logo text property.

_App.jsx_

```jsx
export function App() {
  const logoText = 'The perfect website';

  const links = [
    {
      id: 1,
      name: 'home',
      icon: 'home',
    },
    {
      id: 2,
      name: 'about',
      icon: 'info',
    },
    {
      id: 3,
      name: 'contact',
      icon: 'contact_page',
    },
    {
      id: 4,
      name: 'other',
      icon: 'more_horiz',
    },
  ];

  return (
    <>
      <Navbar logo={logoText} links={links} />
      <MainContent />
      <Footer />
    </>
  );
}
```

This data is being passed down as props to the `Navbar.jsx` which in turn renders some JSX that displays this data. Remember the two props _( attributes )_ from above that is being passed down to the `Navbar.jsx` is being gathered in a `props` object that the `Navbar.jsx` can use.

_Navbar.jsx_

```jsx
import { Button } from './Button';
import { Link } from './Link';

export const Navbar = (props) => {
  console.log(props);

  return (
    <nav className="navbar">
      <h2 className="logo">{props.logo}</h2>
      <div className="links">
        {props.links.map((link) => {
          return <Link key={link.id} link={link} />;
        })}
        <Button text="Search" />
      </div>
    </nav>
  );
};
```

The `Navbar.jsx` also maps through the array of links and renders a `Link.jsx`-component for each element in the list and passes down the object that is currently be iterated over. The `Link.jsx` will in turn use that link object and render some data.

_Link.jsx_

```jsx
export function Link({ link }) {
  return (
    <div className="link">
      <span className="material-symbols-outlined">{link.icon}</span>
      <span>{link.name}</span>
    </div>
  );
```

[Back to top](#2025-02-05-props-usestate-och-statefullness)

### Pass down functions

We will address this in a later lecture.

[Back to top](#2025-02-05-props-usestate-och-statefullness)

## useState

We will address this in a later lecture.


[Back to top](#2025-02-05-props-usestate-och-statefullness)

### Syntax

We will address this in a later lecture.


[Back to top](#2025-02-05-props-usestate-och-statefullness)

### Array destructuring

We will address this in a later lecture.


[Back to top](#2025-02-05-props-usestate-och-statefullness)

### Update State

We will address this in a later lecture.


[Back to top](#2025-02-05-props-usestate-och-statefullness)

### Why regular variables doesn't work with React

We will address this in a later lecture.


[Back to top](#2025-02-05-props-usestate-och-statefullness)

## Stateful vs Stateless Component

A **stateful component** manages its own state, using `useState` or other state management techniques. It can store and modify data, making it more interactive.

A **stateless component** does not have its own state. It relies entirely on props and does not change data within itself. Stateless components are simpler and easier to test since they do not manage dynamic data internally.

[Back to top](#2025-02-05-props-usestate-och-statefullness)

### Why favor stateless components?

In general, it is best to favor stateless components whenever possible. Stateless components are:

- **Easier to maintain** – They do not manage state, which reduces complexity and makes debugging simpler.
- **More reusable** – They can be used in multiple places without worrying about unexpected behavior due to state.
- **Better performance** – Stateless components do not trigger unnecessary re-renders, leading to more efficient applications.

Stateful components should be used when interaction and data changes are necessary. However, keeping stateful components at a minimum and managing state at higher levels (such as in container components) ensures better separation of concerns and a more predictable application structure.
