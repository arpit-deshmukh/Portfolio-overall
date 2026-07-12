# Contributing

Thanks for helping improve this portfolio project. Please check [existing issues](https://github.com/arpit-deshmukh/Portfolio-overall/issues) before opening a new one.

## Setup

1. **Fork** the repository on GitHub.
2. **Clone** your fork:
   ```bash
   git clone https://github.com/<your-username>/Portfolio-overall.git
   cd Portfolio-overall
   ```
3. **Install** frontend dependencies:
   ```bash
   cd client
   npm install
   ```
4. **Run** locally:
   ```bash
   npm run dev
   ```
5. Optional production build check:
   ```bash
   npm run build
   ```

Project layout: `/client` (React + Vite + Tailwind) · `/server` (Express, ready for API work).

## Workflow

1. Create a branch from `main` (or the default branch):
   - Features: `feature/short-name`
   - Fixes: `fix/short-name`
2. Make focused changes (one concern per PR when possible).
3. Commit with clear messages (what + why).
4. Push your branch and open a **Pull Request** against the upstream default branch.
5. Describe what you changed, how to test it, and link any related issue.

## Guidelines

- Prefer small, reviewable diffs over large refactors.
- Match existing style in nearby files (React components, Tailwind usage).
- Do not commit secrets, `.env` files, or `node_modules`.
- Keep the UI accessible and responsive when you touch presentation code.
- Be respectful in issues and PR discussion.

## Questions

Open an issue with a clear title and steps to reproduce (for bugs) or a short proposal (for features).
