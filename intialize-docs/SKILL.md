---
name: intialize-docs
description: Scaffold a standard documentation directory structure for projects. Use when Gemini CLI needs to initialize a project's documentation, including a /docs folder with specs, tasks, and essential markdown files.
---

# Project Scaffolder

This skill helps you quickly set up a standard project documentation structure.

## Overview

The skill creates a `/docs` directory at the project root with the following structure:
- `/docs/specs/`
- `/docs/tasks/`
- `/docs/implementation-plan.md`
- `/docs/system-design.md`
- `/docs/readme.md`
- `/docs/architecture.md`
- `GEMINI.md` (at the root)

## Usage

Run the `scaffold.cjs` script to create the structure:

```bash
node ./scripts/scaffold.cjs
```

This will create any missing directories and files without overwriting existing ones.
