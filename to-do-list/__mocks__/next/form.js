// <rootDir>/__mocks__/next/form.js
const React = require("react");

// Mock FormData globally to prevent constructor errors in tests
global.FormData = class MockFormData {
  constructor(form) {
    this.data = new Map();

    // Handle form submission with proper button detection
    if (form && form.elements) {
      // First, add all non-button form data
      for (const element of form.elements) {
        if (
          element.name &&
          element.value !== undefined &&
          element.type !== "submit"
        ) {
          this.data.set(element.name, element.value);
        }
      }

      // Then find the clicked submit button and add its value
      // This simulates browser behavior where only the clicked button's value is included
      const submitButtons = Array.from(form.elements).filter(
        (el) => el.type === "submit" && el.name
      );

      // For testing, we'll assume the first submit button was clicked
      // In a real browser, this would be the actually clicked button
      if (submitButtons.length > 0) {
        const clickedButton = submitButtons[0];
        if (clickedButton.name && clickedButton.value !== undefined) {
          this.data.set(clickedButton.name, clickedButton.value);
        }
      }
    }
  }

  get(key) {
    return this.data.get(key) || null;
  }

  set(key, value) {
    this.data.set(key, value);
  }

  append(key, value) {
    if (this.data.has(key)) {
      const existing = this.data.get(key);
      this.data.set(
        key,
        Array.isArray(existing) ? [...existing, value] : [existing, value]
      );
    } else {
      this.data.set(key, value);
    }
  }

  delete(key) {
    this.data.delete(key);
  }

  has(key) {
    return this.data.has(key);
  }

  keys() {
    return this.data.keys();
  }

  values() {
    return this.data.values();
  }

  entries() {
    return this.data.entries();
  }

  forEach(callback) {
    this.data.forEach(callback);
  }
};

// Mock Next.js Form component
const Form = React.forwardRef((props, ref) => {
  const { children, action, ...rest } = props;

  return React.createElement(
    "form",
    {
      ref,
      action, // Pass action directly to form - let React handle it naturally
      ...rest,
    },
    children
  );
});

Form.displayName = "Form";

// Export as ES module for Next.js compatibility
module.exports = {
  __esModule: true,
  default: Form,
};
