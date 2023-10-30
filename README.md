# Formal German Messages for React-Admin

Formal and informal German messages for [react-admin](https://github.com/marmelab/react-admin), the frontend framework for building admin applications on top of REST/GraphQL services.

[![react-admin-demo](https://marmelab.com/react-admin/img/react-admin-demo-still.png)](https://vimeo.com/268958716)

## Installation

```sh
npm install --save @haleos/ra-language-german
```

## Usage

```jsx
import { Admin } from "react-admin"
import {formalGermanMessages, informalGermanMessages} from "@haleos/ra-language-german"
import polyglotI18nProvider from "ra-i18n-polyglot"

const messages = {
    "de-formal": formalGermanMessages,
    "de-informal": informalGermanMessages
}
const i18nProvider = polyglotI18nProvider(locale => messages[locale]);

<Admin locale="de-informal" i18nProvider={i18nProvider}>
    ...
</Admin>
```

## License

This translation is licensed under the MIT License, and sponsored by [Haleos](https://haleos.de).
