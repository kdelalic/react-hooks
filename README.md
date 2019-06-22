# react-hooks

`react-hooks` can be pulled into React projects as a submodule and used. Each file contains one React hook.

To pull `react-hooks` into your project as a submodule into the `src` directory with the name `hooks`:

```bash
git submodule add git@github.com:kdelalic/react-hooks.git src/hooks
```

## darkmode.js

This is a hook for keeping dark mode state. When state is true, `className` is added to the body class list. State is kept persistent through localStorage api.

### API

```javascript
useDarkMode(className)
```

- `className` __\<string\>__ Class name to add to body class list. Default: `'dark'`
- Returns a stateful value, and a function to update it.

### Usage

To initialize hook:

```javascript
const [isDarkMode, setDarkMode] = useDarkMode("dark-mode");
```

isDarkMode is a boolean. In order to toggle hook you can do this:

```javascript
setDarkMode(!isDarkMode)
```
