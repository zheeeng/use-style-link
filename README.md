# useStyleLink

A React hook for inserting the identical style link.

Support SSR scene.

## Install

```bash
yarn add use-style-link (or by npm)
```

## Usage

```ts
import { useStyleLink } from 'use-style-link'

const App = () => {
    useStyleLink('https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css')

    return (
        <div>Hello world</div>
    )
}
```

## Signature

```ts
const useStyleLink: (url: string, autoClear?: boolean, isSameLink?: (link1: string, link2: string) => boolean) => void
```

by default, it won't clear the inserted style link automatically for performance consideration.
