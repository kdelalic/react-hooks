# react-hooks

`react-hooks` can be pulled into React projects as a submodule and used. Each file contains one React hook.

To pull `react-hooks` into your project as a submodule into the `src` directory with the name `hooks`:

```bash
git submodule add git@github.com:kdelalic/react-hooks.git src/hooks
```

## darkmode.js

Simple hook for keeping dark mode state. State is kept persistent through localstorage api.

### Usage

To initialize hook:

```javascript
const [isDarkMode, setDarkMode] = useDarkMode();
```

isDarkMode is a boolean. In order to toggle hook you can do this:

```javascript
setDarkMode(!isDarkMode)
```
