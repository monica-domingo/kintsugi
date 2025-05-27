# Kintsugi Component Library

## Overview

Kintsugi is a React component library built with TypeScript, designed to provide a flexible and consistent foundation for building user interfaces. Our core philosophy is inspired by the Japanese art of Kintsugi, where broken pottery is repaired with lacquer dusted or mixed with powdered gold, silver, or platinum—a method of highlighting the "scars" as a valuable part of an object's history. Similarly, our components are crafted to be resilient, adaptable, and beautiful, embracing the idea that imperfections and iterations lead to stronger, more valuable products.

**Design Philosophy:**

*   **Modularity:** Components are designed to be granular and composable, allowing for maximum flexibility.
*   **Customizability:** While providing sensible defaults, components can be easily themed and customized to fit specific brand identities.
*   **Accessibility:** We strive to adhere to WCAG guidelines to ensure components are usable by everyone.
*   **Developer Experience:** With TypeScript and Storybook, we aim to provide a smooth and efficient development process.

**Benefits:**

*   **Accelerated Development:** Reusable components significantly speed up the UI development process.
*   **Consistency:** Ensures a consistent look and feel across applications.
*   **Quality:** Well-tested and maintained components reduce the likelihood of bugs.
*   **Collaboration:** A shared component library fosters better collaboration between designers and developers.

## Component Categories

Our components are organized based on the principles of Atomic Design, which helps in creating a scalable and maintainable system.

*   **Tokens (packages/lib/kintsugi/src/lib/tokens):** These are the foundational values of the design system, such as colors, typography, spacing, and animation. They are not components themselves but are used by components.
*   **Atoms (packages/lib/kintsugi/src/lib/atoms):** The smallest, indivisible UI elements, like buttons, inputs, labels, and icons. They serve as the basic building blocks.
*   **Molecules (packages/lib/kintsugi/src/lib/molecules):** Combinations of atoms that form more complex UI elements. Examples include a search form (input + button) or a navigation link with an icon.
*   **Organisms (packages/lib/kintsugi/src/lib/organisms):** More complex UI components made up of molecules and/or atoms. These could be headers, footers, or product cards.

## Contributing to Kintsugi

We welcome contributions to enhance and expand the Kintsugi library!

### Adding New Components

1.  **Identify the Category:** Determine if your new component is an Atom, Molecule, or Organism.
2.  **Create Component Files:**
    *   Navigate to the appropriate directory within `packages/lib/kintsugi/src/lib/` (e.g., `atoms`, `molecules`).
    *   Create a new directory for your component (e.g., `MyNewComponent`).
    *   Inside this directory, create the following files:
        *   `MyNewComponent.tsx`: The main component logic and JSX.
        *   `MyNewComponent.stories.tsx`: Storybook stories for different states and variations of your component.
        *   `MyNewComponent.spec.tsx`: Unit tests for your component.
        *   `MyNewComponent.styles.ts` (optional): If your component requires specific styled-components.
        *   `index.ts`: Export your component (e.g., `export * from './MyNewComponent';`).
3.  **Develop the Component:**
    *   Implement the component logic in `MyNewComponent.tsx`.
    *   Define props using TypeScript interfaces.
    *   Use styled-components for styling, leveraging tokens where possible.
4.  **Write Stories:**
    *   In `MyNewComponent.stories.tsx`, create stories to showcase all relevant variations, states (e.g., disabled, loading), and props of your component.
5.  **Write Unit Tests:**
    *   In `MyNewComponent.spec.tsx`, write comprehensive unit tests using Jest and React Testing Library to cover different functionalities and edge cases.
6.  **Export the Component:**
    *   Add an export for your new component in `packages/lib/kintsugi/src/index.ts`.
    *   Also, export it from the relevant category index file (e.g., `packages/lib/kintsugi/src/lib/atoms/index.ts`).
7.  **Build and Test:**
    *   Run `nx build kintsugi` to ensure your component builds correctly.
    *   Run `nx test kintsugi` to execute all unit tests.
    *   Run `nx run raku:storybook` to visually inspect your component in Storybook.
8.  **Submit a Pull Request:**
    *   Create a new branch for your feature.
    *   Commit your changes with clear and concise messages.
    *   Push your branch and open a pull request against the main repository.

### Running Unit Tests

To execute the unit tests for the Kintsugi library:

```bash
nx test kintsugi
```

This command will run all `*.spec.tsx` files within the `packages/lib/kintsugi` directory using Jest. Ensure all tests pass before submitting a pull request.

### Coding Standards

*   Follow the existing coding style and conventions.
*   Write clear and descriptive commit messages.
*   Ensure your code is well-documented with comments where necessary.
*   Update relevant documentation (like this README) if your changes impact it.

This library was generated with [Nx](https://nx.dev).
