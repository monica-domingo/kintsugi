# Kintsugi Component Library

## About

Kintsugi is a reusable React component library designed to accelerate UI development. It provides a collection of well-crafted, customizable, and accessible components that can be easily integrated into any React application. The project also includes a demonstration application called `raku`, which showcases how to use the `kintsugi` components in a real-world scenario. `raku` serves as both a testing ground for the components and a practical example for developers looking to implement `kintsugi` in their own projects.

## Project Structure

This project is a monorepo managed with Nx. The key directories are:

- `packages/lib/kintsugi`: Contains the source code for the Kintsugi component library. This is where all the reusable React components are developed and maintained.
- `packages/app/raku`: Contains the source code for the Raku application, which serves as a demonstration and testing environment for the Kintsugi components.
- `storybook-e2e`: Contains end-to-end tests for the Storybook documentation.

## Installation

1. Clone the repository: `git clone https://github.com/monicadomigop/kintsugi.git`
2. Install the dependencies: `npm install` or `yarn install`

## Usage

### Running the Demo Application (Raku)

To see the Kintsugi components in action within the Raku application:

> nx run raku:serve

Open your browser to the address indicated in the terminal (usually http://localhost:4200).

### Exploring Components with Storybook

Storybook provides an interactive environment to browse and test individual Kintsugi components:

> nx run raku:storybook

Open http://localhost:4400 in your browser to see the Storybook documentation.

### Using Kintsugi Components in Your Project

To use Kintsugi components in your own React project:

1.  **Build the Kintsugi library:**
    > nx build kintsugi
2.  **Pack the library:**
    > cd dist/packages/lib/kintsugi && npm pack
    This will create a `.tgz` file (e.g., `kintsugi-0.0.1.tgz`).
3.  **Install the packed library in your project:**
    In your project's root directory, run:
    > npm install /path/to/your/kintsugi-0.0.1.tgz
    (Replace `/path/to/your/` with the actual path to the `.tgz` file)
4.  **Import and use components:**
    ```javascript
    import { Button } from '@kintsugi/kintsugi';

    function MyApp() {
      return <Button label="Click Me" />;
    }
    ```

## Prerequisites

> Node Version: 18

[Node Version Manager (nvm)](https://github.com/nvm-sh/nvm) allows you to quickly install and use different
versions of node via the command line.

[Git Glossary](https://git-scm.com/docs/gitglossary) - If you are not familiar with Git terms you can check
a complete glossary.

## Technologies used

- React
- TypeScript
- Nx
- Storybook
- Styled-components

## Contributing

Fork the repository
Create a new branch for your feature
Make your changes
Submit a pull request

## License
This project is released under the MIT License.
