# An Next.js Application using React Hooks

This is an experimental project I've undertaken to hone my skills with various technologies of the Node.js front-end ecosystem, notably:

- Next.js React framework
- React Hooks
- Bulma Sass styling
- Markdown
- Immer for state immutability
- axios http w/ async/wait
- AVA and Jest for unit testing
- Cypress for integration and end-to-end testing

*Note:* This is just a simple demo application. It is not intended to be complete, nor useful except to present how the appied technologies can be utilized. The test coverage just provides a few examples of various test cases.

## Installation

```bash
git clone https://gitlab.com/mjbrown/nextjs-react-hooks-example.git
cd cnextjs-react-hooks-example
npm install
```

## Operation

### Production commands

#### Build application

```bash
npm run build
```

#### Start application

```bash
npm run start
```

#### Stop application

```bash
npm run stop
```

### Testing commands

#### Run all tests

```bash
npm run test
```

#### Run unit tests

```bash
npm run test-unit
```

#### Run unit tests under development

```bash
npm run test-unit-dev
```

Unit tests under development are distinguished by a `.test.js` filename suffix,
whereas completed test cases are denoted with a `.spec.js` filename suffix.


#### Run all unit tests

```bash
npm run test-unit-all
```

This will run tests with filenames suffixed `.spec.js` and `.test.js`.


#### Run integration and end-to-end tests

```bash
npm run test-int
```

#### Develop/debug integration and end-to-end tests

```bash
npm run test-int-dev
```

### Development commands

#### Clean cached data

```bash
npm run clean
```
#### Start application (foreground)

```bash
npm run dev
```

#### Debug application

```bash
npm run debug
```

#### Check programming style

```bash
npm run lint
```

#### Static type analysis

```bash
npm run flow
```

#### Generate stylesheets

```bash
npm run style
```

## Featured technologies

- [x] Node.js runtime
- [x] Next.js application
  - [x] file system routing (pages)
  - [x] API routing
  - [x] automatic Code Splitting
  - [x] server-side rendering (SSR) & caching
  - [x] hot module reloading (HMR)
  - [x] prefetching (via Web Worker)
  - [x] JSX styling using Sass w/ postcss
- [x] React front-end
  - [x] Components
  - [x] JSX syntax
  - [x] DOM (SSR)
  - [x] Hooks (class-free)
    - [x] local state
    - [x] context stores (shared state)
      - [x] action dispatching
      - [x] state reducers
    - [x] effects  
- [x] Utility libraries
  - [x] immer for immutability
  - [x] rambdax for default values
  - [x] axios for http
  - [x] rust-match for conditionals
- [x] Styling
  - [x] bulma framework
  - [x] next-sass
  - [x] postcss
- [x] Development
  - [x] babel transpiler
  - [x] eslint style checker
  - [x] flow static type checker
  - [x] node Javascript runtime
  - [x] nodemon app monitor
  - [x] webpack bundler
- [x] Testing
  - [x] AVA - logic unit tests
  - [x] Jest - JSX unit tests
  - [x] Cypress - integration & end-to-end tests
  - [x] concurrently
- [x] Production
  - [x] pm2 process manager

# License

The MIT License (MIT)

Copyright (c) 2019 Murray J Brown

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

