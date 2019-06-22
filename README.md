# react-hooks

This repository can be pulled into React projects as a submodule and used. Each file contains one React hook.

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
