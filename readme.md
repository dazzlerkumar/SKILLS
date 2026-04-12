# AI-Driven Development Skills

A curated collection of specialized skills for AI-assisted development workflows. These skills provide structured guidance, best practices, and documentation standards optimized for AI agents and LLMs to maintain consistency, quality, and efficiency across software development projects.

## 🎯 Purpose

This repository contains reusable skill definitions that enhance AI-driven development by:
- Establishing consistent patterns and best practices
- Providing structured templates for documentation and specifications
- Offering domain-specific guidance for frontend, testing, and architecture
- Ensuring AI-generated code and documentation maintain high quality standards

## 📚 Skills Overview

### 1. **React Composition Patterns**
   - **Reference**: [composition-pattern/SKILL.md](composition-pattern/SKILL.md)
   - **Purpose**: Engineering patterns for building flexible, maintainable React components with compound components, state lifting, and composition principles
   - **Best for**: Designing scalable React architectures, avoiding prop proliferation, building reusable component systems
   - **Key Topics**: Component architecture, state management, React 19 APIs

### 2. **Create Document**
   - **Reference**: [create-document/SKILL.md](create-document/SKILL.md)
   - **Purpose**: Create well-structured documentation files optimized for AI consumption with clear requirements and constraints
   - **Best for**: Generating product documentation, feature specifications, and system documentation
   - **Best Practices**: Precise language, structured formatting, self-contained content, machine-readable structure

### 3. **Create Specification**
   - **Reference**: [create-specification/SKILL.md](create-specification/SKILL.md)
   - **Purpose**: Generate specification files that define requirements, constraints, and interfaces for solution components
   - **Best for**: Technical specifications, API design, architecture specs, process documentation
   - **Key Requirements**: Unambiguous language, distinction between requirements/constraints/recommendations, acronym definitions

### 4. **Create Task**
   - **Reference**: [create-task/SKILL.md](create-task/SKILL.md)
   - **Purpose**: Create task specification files following TDD methodology with clear acceptance criteria and implementation plans
   - **Best for**: Breaking down features into actionable tasks, test-driven development workflows
   - **Structure**: Story statements, business context, TDD phases (Red/Green/Refactor)

### 5. **Frontend Code Review**
   - **Reference**: [frontend-code-review/SKILL.md](frontend-code-review/SKILL.md)
   - **Purpose**: Systematic code review for frontend code (TypeScript, React, JavaScript) with quality, performance, and business logic checklists
   - **Best for**: Reviewing pending changes, ensuring code quality standards, catching performance issues
   - **Categories**: Code Quality, Performance, Business Logic
   - **Additional References**: 
     - [Code Quality Checklist](frontend-code-review/references/code-quality.md)
     - [Performance Checklist](frontend-code-review/references/performance.md)
     - [Business Logic Checklist](frontend-code-review/references/business-logic.md)

### 6. **Frontend Design**
   - **Reference**: [frontend-design/SKILL.md](frontend-design/SKILL.md)
   - **Purpose**: Create distinctive, production-grade frontend interfaces with intentional aesthetics and high design quality
   - **Best for**: Building web components, landing pages, dashboards, React applications with exceptional UX
   - **Design Focus**: Typography, color & theme, motion, spatial composition, visual details
   - **Key Principle**: Avoid generic "AI slop" aesthetics—commit to bold, intentional design directions

### 7. **Initialize Documentation**
   - **Reference**: [intialize-docs/SKILL.md](intialize-docs/SKILL.md)
   - **Purpose**: Scaffold standard documentation directory structure for projects
   - **Best for**: Setting up new projects with organized docs, teams using consistent documentation layouts
   - **Structure**: Creates `/docs/specs/`, `/docs/tasks/`, system design, architecture, and implementation plan templates
   - **Automation**: Includes `scaffold.cjs` script for automatic setup

### 8. **Playwright Test Generation**
   - **Reference**: [playwright-generate-test/SKILL.md](playwright-generate-test/SKILL.md)
   - **Purpose**: Generate Playwright tests based on scenarios using structured testing workflows
   - **Best for**: E2E testing, test-driven development, scenario-based test automation
   - **Workflow**: Step-by-step test generation, execution, and iteration until tests pass

## 🚀 How to Use

Each skill is self-contained and can be invoked by AI agents through dedicated prompts or skill files. To use these skills:

1. **Synchronously**: Load the appropriate SKILL.md file for your use case
2. **As References**: Link to skills in your agent configurations or custom instructions
3. **Templates**: Use the structured templates and best practices within each skill
4. **Chaining**: Combine multiple skills for comprehensive solutions (e.g., create-specification + create-task + frontend-design)

## 📋 Skill Categorization

| Category | Skills |
|----------|--------|
| **Architecture & Patterns** | React Composition Patterns |
| **Documentation** | Create Document, Create Specification, Create Task, Initialize Documentation |
| **Frontend Development** | Frontend Design, Frontend Code Review |
| **Quality Assurance** | Playwright Test Generation, Frontend Code Review |

## 🎓 Best Practices

- **Read Skills First**: Load the appropriate SKILL.md file before starting any task
- **Follow Templates**: Use provided templates and structures for consistency
- **AI-Optimized Content**: All documentation is optimized for AI agents to understand and follow
- **Iterative Refinement**: Use reviews and testing skills to refine output quality
- **Combine Skills**: Use multiple skills together for comprehensive solutions

## 📝 License

- **Frontend Design**: See [LICENSE.txt](frontend-design/LICENSE.txt)
- **Other Skills**: Standard project licenses

---

**Last Updated**: April 2026  
**Version**: 1.0.0
