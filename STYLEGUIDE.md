# Women Techmakers Bamenda Community Frontend Coding Style Guide

Welcome to the Women Techmakers Bamenda (WTM Bamenda) community's frontend coding style guide. This document outlines the coding conventions and best practices to follow when contributing to our frontend projects. Consistency in coding style helps maintain code readability and makes collaboration smoother.

## Table of Contents
- [General Guidelines](#general-guidelines)
- [HTML](#html)
- [CSS](#css)
- [JavaScript](#javascript)
- [React](#react)
- [Version Control](#version-control)
- [Dependencies](#dependencies)
- [Additional Resources](#additional-resources)

## General Guidelines

- Write clean, readable, and maintainable code.
- Keep your code DRY (Don't Repeat Yourself) by reusing code when applicable.
- Use meaningful variable and function names.
- Avoid commented-out code in the repository; use version control for historical code.

## HTML

- Use semantic HTML elements for better accessibility and SEO.
- Maintain proper indentation and formatting.
- Include descriptive alt text for images.

   ```html
   <!-- Good -->
   <button type="submit">Submit</button>
   <img src="profile.jpg" alt="User Profile" />

   <!-- Avoid -->
   <div onclick="submitForm()">Submit</div>

## CSS

- Follow a consistent CSS naming convention such as BEM (Block, Element, Modifier).
- Use meaningful class names and IDs.
- Group related styles together in the stylesheet.

   ```css
      /* BEM Example */
   .profile-card {
     /* ... */
   }

   .profile-card__header {
     /* ... */
   }

   .profile-card--highlighted {
     /* ... */
   }

## JavaScript

- Follow [ESLint](https://eslint.org/) rules for JavaScript code quality.
- Use semicolons at the end of statements.
- Use single quotes for strings unless interpolating variables.
- Use `const` for variables that do not need reassignment, `let` for variables that do.
- Use arrow functions for concise anonymous functions.

   ```javascript
   // Good
   const age = 30;
   const name = 'Alice';

   // Avoid
   var x = 10;

## React

- Follow the [Airbnb React/JSX](https://github.com/airbnb/javascript/tree/master/react) Style Guide.
- Use functional components with hooks whenever possible.
- Keep components small and focused on a single responsibility.

   ```javascript
      // Functional Component
   function UserProfile(props) {
     // ...
   }

## Version Control

- Use [Git](https://git-scm.com/) for version control.
- Create feature branches for each new feature or bug fix.
- Write meaningful commit messages that summarize the changes.

## Dependencies

- Document and keep track of project dependencies in a `package.json` file.
- Regularly update dependencies to benefit from security patches and new features.

## Additional Resources

[Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)
[BEM - Block Element Modifier](http://getbem.com/)
[MDN Web Docs - HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
[MDN Web Docs - CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
[React Documentation](https://reactjs.org/docs/getting-started.html)

