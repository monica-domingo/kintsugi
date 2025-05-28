# Button Component

The `Button` component is a fundamental interactive element used to trigger actions and events within an application. It is designed to be versatile, customizable, and accessible.

## Purpose

-   **Trigger Actions:** Used for user-initiated actions like submitting forms, opening dialogs, navigating, or initiating processes.
-   **User Interaction:** Provides clear visual feedback and interaction points for users.
-   **Consistency:** Ensures a consistent button appearance and behavior across the application.

## Props

The `Button` component accepts the following props as defined in `interfaces.ts` and standard HTML button attributes:

| Prop          | Type                          | Optional | Default   | Description                                                                 |
| ------------- | ----------------------------- | -------- | --------- | --------------------------------------------------------------------------- |
| `children`    | `ReactNode`                   | Yes      | -         | The content to be displayed inside the button (e.g., text, icon, or both).  |
| `variant`     | `'primary'` \| `'secondary'`  | Yes      | `'primary'` | Defines the visual style of the button.                                     |
| `size`        | `'mini'` \| `'large'`         | Yes      | `'large'`   | Defines the size of the button.                                             |
| `data-testid` | `string`                      | Yes      | -         | Custom `data-testid` attribute for testing purposes.                        |
| `onClick`     | `(event: React.MouseEvent<HTMLButtonElement>) => void` | Yes      | -         | Function to be executed when the button is clicked.                         |
| `disabled`    | `boolean`                     | Yes      | `false`   | If `true`, the button will be non-interactive and visually styled as disabled. |
| `type`        | `'button'` \| `'submit'` \| `'reset'` | Yes      | `'button'`| The default behavior of the button.                                         |
| `aria-label`  | `string`                      | Yes      | -         | Defines a string value that labels the current element for accessibility.   |

*Note: `onClick`, `disabled`, `type`, and `aria-label` are standard HTML attributes for a button element. While `interfaces.ts` might not explicitly list all standard HTML attributes, they are generally supported by underlying native button elements.*

## Usage Examples

Here are some examples of how to use the `Button` component in a TypeScript/JSX environment:

### Basic Button

```tsx
import { Button } from '@kintsugi/kintsugi'; // Adjust import path as necessary

const MyComponent = () => (
  <Button onClick={() => alert('Button clicked!')}>
    Click Me
  </Button>
);
```

### Primary Button (Default)

```tsx
import { Button } from '@kintsugi/kintsugi';

const MyComponent = () => (
  <Button variant="primary" onClick={() => console.log('Primary action')}>
    Primary Button
  </Button>
);
```

### Secondary Button

```tsx
import { Button } from '@kintsugi/kintsugi';

const MyComponent = () => (
  <Button variant="secondary" onClick={() => console.log('Secondary action')}>
    Secondary Button
  </Button>
);
```

### Mini Button

```tsx
import { Button } from '@kintsugi/kintsugi';

const MyComponent = () => (
  <Button size="mini" onClick={() => console.log('Mini button clicked')}>
    Mini Button
  </Button>
);
```

### Large Button (Default)

```tsx
import { Button } from '@kintsugi/kintsugi';

const MyComponent = () => (
  <Button size="large" onClick={() => console.log('Large button clicked')}>
    Large Button
  </Button>
);
```

### Disabled Button

```tsx
import { Button } from '@kintsugi/kintsugi';

const MyComponent = () => (
  <Button disabled onClick={() => console.log('This will not fire')}>
    Disabled Button
  </Button>
);
```

### Submit Button

```tsx
import { Button } from '@kintsugi/kintsugi';

const MyForm = () => (
  <form onSubmit={(e) => { e.preventDefault(); alert('Form submitted!'); }}>
    {/* other form fields */}
    <Button type="submit">Submit Form</Button>
  </form>
);
```

### Button with an Icon (Illustrative)

This example assumes you have an `Icon` component.

```tsx
import { Button } from '@kintsugi/kintsugi';
// import { YourIconComponent } from './path/to/icon-component'; // Example import

const MyComponent = () => (
  <Button onClick={() => console.log('Button with icon clicked')} aria-label="Submit data">
    {/* <YourIconComponent /> */}
    Submit
  </Button>
);
```

## Accessibility Considerations

-   **Descriptive Text:** Always provide meaningful text content within the `children` prop. If the button contains only an icon or its purpose isn't clear from the visible text, use the `aria-label` prop to provide a descriptive label for screen readers. For example, for a button with an "X" icon to close a dialog, use `aria-label="Close dialog"`.
-   **Keyboard Navigability:** Ensure buttons are focusable and operable via keyboard. Standard HTML buttons are focusable by default. Avoid practices that remove focus outlines unless a clear, accessible alternative is provided.
-   **`type` Attribute:** Use the `type` attribute appropriately. The default is `type="button"`. Use `type="submit"` for buttons that submit forms and `type="reset"` for buttons that reset form fields.
-   **Disabled State:** The `disabled` prop makes the button non-interactive and should be perceivable by assistive technologies. Browsers typically handle `aria-disabled` for native disabled buttons.

## Styling Customization

The `Button` component is styled using `styled-components`. While it comes with predefined styles for `variant` and `size`, further customization can be achieved:

1.  **Theming:** The Kintsugi library might support a `ThemeProvider` from `styled-components`. If so, the button can be designed to consume theme variables (e.g., colors, fonts, spacing). This is the recommended way for broad, consistent customizations. Refer to the main Kintsugi documentation for theming capabilities.
2.  **Styled Wrapper:** For one-off customizations or component-specific overrides, you can wrap the `Button` component using `styled()` from `styled-components`:

    ```tsx
    import { Button } from '@kintsugi/kintsugi'; // Adjust import path
    import styled from 'styled-components';

    const MyCustomButton = styled(Button)`
      background-color: rebeccapurple;
      color: white;
      border-radius: 8px;

      &:hover {
        background-color: darkorchid;
      }
    `;

    const MyComponent = () => (
      <MyCustomButton onClick={() => alert('Custom button!')}>
        My Purple Button
      </MyCustomButton>
    );
    ```

When customizing, always ensure that style changes maintain readability, contrast, and overall accessibility.
