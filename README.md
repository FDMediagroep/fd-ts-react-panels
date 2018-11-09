[![Build Status](https://travis-ci.org/FDMediagroep/fd-ts-react-panels.svg?branch=master)](https://travis-ci.org/FDMediagroep/fd-ts-react-panels)
[![Coverage Status](https://coveralls.io/repos/github/FDMediagroep/fd-ts-react-panels/badge.svg?branch=master)](https://coveralls.io/github/FDMediagroep/fd-ts-react-panels?branch=master)
[![npm version](https://badge.fury.io/js/%40fdmg%2Ffd-panels.svg)](https://badge.fury.io/js/%40fdmg%2Ffd-panels)
[![Greenkeeper badge](https://badges.greenkeeper.io/FDMediagroep/fd-ts-react-panels.svg)](https://greenkeeper.io/)

# fd-panels
FD-themed panels

# Installation
* Run `npm i -D @fdmg/fd-panels`

# Demo
To run the demo, check-out this repository and run `npm run build-demo`.
After the build succeeded you can open `dist/demo.html` with your webbrowser.
* [Demo](http://static.fd.nl/react/panels/demo.html)

# Props
```
export interface Props {
    /**
     * Optional set a box-shadow. This effect replaces the default 1 pixel border.
     */
    boxShadow?: boolean;
}
```

# Usage
```
import Panel from '@fdmg/fd-panels';
...
<Panel boxShadow={true}>
    <h2>Volg dit nieuwsverhaal</h2>
    <p>Ontvang een update wanneer we een vervolgartikel plaatsen.</p>
</Panel>
```
