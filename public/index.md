# Example Next.js Application using React Hooks

This is an experimental project for honing skills with various technologies of the Node.js front-end ecosystem, notably:

- Next.js React framework
- React Hooks
- JSX styling w/ Bulma Sass
- Markdown
- Immer for state immutability
- axios http w/ async/wait
- AVA and Jest for unit testing
- ARIA attributes for accessibilty & testing
- Cypress for integration and end-to-end testing

*Note:* This is just a simple demo application. It is not intended to be complete, nor useful except to present how the applied technologies can be utilized. The test coverage is not thorough, it provides just a few example cases of various kinds of tests.

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

#### Start application daemon via process manager

```bash
npm run start
```

#### Stop application daemon via process manager

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

The AVA test runner is used for JavaScript logical tests (i.e., files matching `*.js`).

The Jest test runner is used for JSX user interface tests (i.e., files matching `*.jsx`).

#### Run unit tests under development

```bash
npm run test-unit-dev
```

Unit tests under development are distinguished by a `.test.js` or `.test.jsx` filename suffix,
whereas working test cases are denoted with a `.spec.js` or `.spec.jsx` filename suffix.

#### Run all unit tests

```bash
npm run test-unit-all
```

This will run all tests for filenames with suffix matching `.(spec|test).js?(x)`.


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
#### Start application in foreground

```bash
npm run dev
```

#### Start application in foreground with trace warnings

```bash
npm run trace
```

#### Check programming style

```bash
npm run lint
```

#### Static type analysis

```bash
npm run flow
```

### Process manager commands

Refer to the PM2 command help or [online documentation](https://github.com/Unitech/pm2).
```bash
npx pm2 --help
```

#### Generate stylesheets

```bash
npm run style
```

## Configuration

The `config` folder contains files specifying default configuration settings and specific override settings for production and testing environments.

## Project Folder Organization

-  *.next* - generated Next.js files
-  **client** - client-side application & unit test cases
-  **config** - configuration files
-  **cypress** - integration & end-to-end test cases
-  *flow-typed* - flow type definitions
-  *logs* - log files
-  *node_modules* - Node.js modules
-  **pages** - Next.js routed pages
-  **public** - static web content
-  **server** - server-side application & unit test cases
-  **test** - test support files


## Featured technologies

- [x] Node.js runtime
- [x] Express application framework
  - [x] static routing
  - [x] helmet header security
  - [x] CORS
- [x] Next.js application framework
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

