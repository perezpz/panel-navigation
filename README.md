<div align="center">
<article style="display: flex; flex-direction: column; align-items: center; justify-content: center;">
    <h1 style="width: 100%; text-align: center;">Panel-Navigation</h1>
    <p>
        A component that provides navigation for pages. Quickly build beautiful React apps.
    </p>
</article>

<div align="center">

![npm](https://img.shields.io/npm/v/panel-navigation)
![NPM](https://img.shields.io/npm/l/panel-navigation)
![Codecov branch](https://img.shields.io/codecov/c/github/perezpz/panel-navigation/main)

[license-url]: https://github.com/perezpz/panel-navigation/blob/main/LICENSE.md

</div>
</div>

# 🎉 Features

- Written in Typescript, Friendly Static Type Support.

# 🔥 Demo

Live demo: [panel-navigation](https://panel-navigation.vercel.app/)

# 🔥 Install

```sh
# with npm
npm install panel-navigation

```

# 👍 Usage

Here is a quick example to get you started, it's all you need:

```jsx live=true dir="column"
import React, { useState } from "react";
import { createRoot } from 'react-dom/client';
import { Navigation, Item, Panel } from 'panel-navigation';
import 'panel-navigation/lib/index.css';

const App = () => {
  return (
    <Navigation>
      <Panel itemKey="0" content={<About />}>
        <span>About Us</span>
      </Panel>
      <Panel itemKey="1" content={<Services />}>
        <span>Services</span>
      </Panel>
      <Item isSubPage={true}>
        <a>Studies</a>
      </Item>
      <Item>
        <a>News</a>
      </Item>
    </Navigation>
});

createRoot(document.getElementById('root')).render(<App />);
```

## How to import

```jsx
import { Navigation, Item, Panel } from 'panel-navigation';
import 'panel-navigation/lib/index.css';
```

## Eases

Component uses a default ease of "expo.out". You can easily overwrite this by setting the ease property to another (valid) ease value.

- `none.none`
- `power1.out`
- `circ.out`
- `power4.out`

## API Reference

| Properties    | Description                                           | Type              | Default        |
| ------------- | ----------------------------------------------------- | ----------------- | -------------- |
| visible       | control visible state                                 | boolean           | true           |
| ease          | ease property                                         | string            | expo.out       |
| duration      | the duration of the transition, in milliseconds       | number            | 600            |
| onEntered     | callback fired after the "entered" status is applied. | function(e) => {} | () => {}       |
| onExited      | callback fired after the "exited" status is applied.  | function(e) => {} | () => {}       |
| htmlClassName | add className to html tag                             | string            | scrollDisabled |

### Panel

| Properties | Description         | Type      | Default |
| ---------- | ------------------- | --------- | ------- |
| itemKey    | key of the panel    | string    |         |
| isSubPage  | set a special style | boolean   | false   |
| content    | panel content       | ReactNode |         |

### Item

| Properties | Description            | Type    | Default |
| ---------- | ---------------------- | ------- | ------- |
| isSubPage  | set some special style | boolean | false   |

# 🎈 License

React Navigation is [MIT Licensed](LICENSE)
