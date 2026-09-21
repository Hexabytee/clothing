# Contributing to Anon Clothing Store

Thank you for your interest in contributing! This document provides guidelines and instructions for contributing.

## How to Contribute

### Reporting Bugs

1. Check [existing issues](https://github.com/Hexabytee/clothing/issues) to avoid duplicates.
2. Open a new issue using the **Bug Report** template.
3. Include steps to reproduce, expected behavior, and actual behavior.

### Suggesting Features

1. Check [existing issues](https://github.com/Hexabytee/clothing/issues) and [discussions](https://github.com/Hexabytee/clothing/discussions).
2. Open a new issue using the **Feature Request** template.

### Submitting Changes

1. Fork the repository.
2. Create a feature branch from `main`:
   ```bash
   git checkout -b feat/your-feature-name
   ```
3. Make your changes following the code style guidelines below.
4. Test your changes in multiple browsers and screen sizes.
5. Commit using [Conventional Commits](https://www.conventionalcommits.org/):
   ```bash
   git commit -m "feat: add new feature description"
   ```
6. Push to your fork and open a Pull Request.

## Commit Convention

We use [Conventional Commits](https://www.conventionalcommits.org/). Format:

```
<type>(<scope>): <description>

[optional body]

[optional footer(s)]
```

### Types

| Type | Description |
|------|-------------|
| `feat` | New feature |
| `fix` | Bug fix |
| `docs` | Documentation changes |
| `style` | Code style changes (formatting, semicolons, etc.) |
| `refactor` | Code refactoring without feature changes |
| `perf` | Performance improvements |
| `test` | Adding or updating tests |
| `chore` | Build process, dependencies, or tooling changes |

### Examples

```bash
git commit -m "feat: add product search functionality"
git commit -m "fix: resolve mobile menu overlay not closing"
git commit -m "docs: update README with installation steps"
git commit -m "style: fix CSS indentation in header component"
```

## Code Style

### HTML

- Use semantic HTML5 elements.
- Use 2-space indentation.
- All images must have descriptive `alt` attributes.

### CSS

- Use CSS custom properties for colors, spacing, and typography.
- Use 2-space indentation.
- Follow BEM-like naming for component classes.
- Use `var()` references for all design tokens.

### JavaScript

- Use ES6+ features.
- Use `'use strict';` at the top of each file.
- Use `const` and `let`, never `var` for new code.
- Use descriptive variable and function names.
- Add event listeners only to existing elements.

## Pull Request Guidelines

- Keep PRs focused on a single change.
- Reference related issues (e.g., `Closes #123`).
- Include screenshots for visual changes.
- Ensure the site works in Chrome, Firefox, Safari, and Edge.
- Test responsive behavior at all breakpoints.

## Questions?

Open a discussion at [GitHub Discussions](https://github.com/Hexabytee/clothing/discussions) or contact [@Hexabytee](https://github.com/Hexabytee) on GitHub.
