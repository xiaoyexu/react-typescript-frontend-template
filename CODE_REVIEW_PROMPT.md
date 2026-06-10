React Frontend Code Review Prompt
Project Context
We are reviewing a React.js codebase to ensure high-quality, maintainable, performant, and accessible UI components. The goal is to align with industry best practices and our team’s coding standards.

---

Review Scope
Please review the submitted code with the following focus areas:

1. Code Quality & Style
   • Is the code consistent with our ESLint/Prettier configuration?
   • Are naming conventions clear, descriptive, and consistent?
   • Is the code DRY (Don’t Repeat Yourself) without unnecessary duplication?
   • Are helper functions and utilities reusable and well-structured?
2. React Best Practices
   • Are components small, focused, and single-purpose?
   • Is state managed appropriately (local vs global vs derived state)?
   • Are hooks used correctly (useEffect, useMemo, useCallback) without unnecessary re-renders?
   • Is prop drilling avoided where Context, Redux, or other state solutions are more appropriate?
   • Are keys used correctly in lists to avoid rendering issues?
3. Performance Considerations
   • Are expensive computations memoized properly?
   • Are unnecessary re-renders minimized?
   • Is lazy loading implemented for routes or heavy components?
   • Are images and assets optimized?
4. Accessibility (a11y)
   • Do components support keyboard navigation?
   • Are semantic HTML elements used appropriately?
   • Are ARIA attributes applied correctly when needed?
   • Is color contrast sufficient for readability?
5. Responsiveness & Styling
   • Does the UI render correctly across screen sizes?
   • Are CSS/Styling approaches consistent (CSS Modules, Styled Components, Tailwind, etc.)?
   • Are magic numbers and hardcoded values avoided?
6. Testing & Reliability
   • Are unit tests provided for critical logic and components?
   • Do tests cover edge cases and user interactions?
   • Are mocks and test data realistic and maintainable?
7. Security & Data Handling
   • Are API calls handled securely?
   • Is sensitive data kept out of client-side state where possible?
   • Are inputs validated and sanitized to prevent XSS vulnerabilities?

---

Additional Notes
• Please highlight both positive aspects and areas for improvement.
• Suggest concrete refactoring examples where applicable.
• Prioritize feedback based on impact (critical > major > minor > nitpick).
• If relevant, mention alternative libraries or patterns that could improve the implementation.

---

✅ Goal: Ensure the code is production-ready, scalable, accessible, and easy for future developers to maintain.
