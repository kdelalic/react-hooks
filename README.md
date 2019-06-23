# react-hooks

`react-hooks` can be pulled into React projects as a submodule and used. Each file contains one React hook.

To pull `react-hooks` into your project as a submodule into the `src` directory with the name `hooks`:

```sh
git submodule add git@github.com:kdelalic/react-hooks.git src/hooks
```

## useDarkMode

This is a hook for keeping dark mode state. State is kept persistent through the localStorage api. When state is true, `className` is added to the body class list and the localStorage value for `isDarkMode` is updated.

### API

```js
useDarkMode(className)
```

- `className` __\<string\>__ Class name to add to body class list.
  - Default: `"dark"`
- Returns an array containing a stateful value, and a function to update it.

### Usage

To initialize hook:

```js
const [isDarkMode, setDarkMode] = useDarkMode("dark-mode");
```

isDarkMode is a boolean. In order to toggle hook you can do this:

```js
setDarkMode(!isDarkMode)
```

### Example

Use with Material UI switch component:

```jsx
<Switch
  checked={isDarkMode}
  onChange={() => setDarkMode(!isDarkMode)}
/>
```
