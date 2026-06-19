---
name: analyse-codebase
description: Perform deep codebase analysis and generate a standalone HTML report in the project root. Covers tech stack, architecture, folder structure, data flow, key patterns, configuration, testing, and deployment. Use when the user wants a comprehensive overview of a project, onboarding documentation, or a visual codebase walkthrough.
---

# Analyse Codebase

Perform a thorough analysis of the target codebase and produce a self-contained HTML report (`CODEBASE_REPORT.html`) in the project root.

## When to Use

- User asks to "analyse", "document", "explain", or "summarise" a codebase
- Onboarding documentation is needed
- User wants a visual overview of project structure, tech stack, or architecture
- User wants to understand how a project works end-to-end

## Process

### 1. Discover

Systematically explore the codebase. Read these files and directories (when present):

**Project metadata**
- `package.json`, `pyproject.toml`, `Cargo.toml`, `go.mod`, `Gemfile`, `pom.xml`, `build.gradle`, `composer.json`, `*.csproj` — extract name, version, dependencies, scripts
- `.env.example`, `.env.local`, `.env` — environment variables and configuration shape
- `README.md`, `CONTRIBUTING.md`, `CHANGELOG.md` — existing documentation
- `Dockerfile`, `docker-compose.yml`, `Procfile`, `fly.toml`, `vercel.json`, `netlify.toml` — deployment targets

**Configuration**
- Linting: `.eslintrc*`, `biome.json`, `.prettierrc*`
- Build: `webpack.config.*`, `vite.config.*`, `next.config.*`, `tsconfig.json`, `babel.config.*`
- CI/CD: `.github/workflows/`, `.gitlab-ci.yml`, `Jenkinsfile`
- Testing: `jest.config.*`, `vitest.config.*`, `playwright.config.*`, `cypress.config.*`

**Source code**
- Walk the top-level directory tree to map folder structure
- Identify entry points (`src/index.*`, `src/main.*`, `app/`, `pages/`, `routes/`)
- Identify patterns: routing, state management, API layer, database layer, auth
- Read key files to understand data flow and architecture
- Note significant third-party integrations

**Infrastructure**
- Database migrations, schema files, ORM config
- Message queues, caching, external service integrations
- Monitoring, logging, error tracking setup

### 2. Analyse

Synthesize findings into these sections:

1. **Project Overview** — name, purpose, what it does in plain language
2. **Tech Stack** — languages, frameworks, runtime, database, key libraries with versions
3. **Folder Structure** — annotated tree showing what each directory contains
4. **Architecture** — how the codebase is organised (monolith, modular, microservices, etc.), key patterns (MVC, CQRS, hexagonal), layer responsibilities
5. **Data Flow** — how a request/action flows through the system, from entry point to response. Include a Mermaid diagram
6. **Key Modules** — most important files/directories with brief descriptions of their responsibility
7. **Configuration & Environment** — env vars, feature flags, config files, secrets management
8. **Database & Data Layer** — ORM, schema shape, migrations, seed data
9. **API Surface** — endpoints, GraphQL schemas, RPC definitions (if applicable)
10. **Testing** — frameworks, coverage approach, test locations, how to run tests
11. **Build & Deployment** — build commands, CI/CD pipeline, deployment targets
12. **Developer Workflow** — how to set up locally, key scripts, development conventions
13. **Notable Patterns & Decisions** — anything unusual, clever, or important that a new developer should know

### 3. Generate Report

Write a single self-contained HTML file to `<project_root>/CODEBASE_REPORT.html`.

Follow [HTML-REPORT.md](HTML-REPORT.md) for the scaffold, styling, and diagram guidance.

After writing the file, open it for the user:
- macOS: `open <path>`
- Linux: `xdg-open <path>`
- Windows: `start <path>`

Tell the user the absolute path to the file.

### 4. Follow-up

After generating the report, ask: _"Want me to dive deeper into any specific area?"_

Offer to:
- Expand any section with more detail
- Generate architecture decision records (ADRs)
- Produce a dependency graph
- Analyse test coverage gaps
- Document specific modules or APIs in more detail
