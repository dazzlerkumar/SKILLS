[![skills.sh](https://skills.sh/b/dazzlerkumar/skills)](https://skills.sh/dazzlerkumar/skills)

# AI-Driven Development Skills

A curated collection of specialized skills for AI-assisted development workflows. These skills provide structured guidance, best practices, and documentation standards optimized for AI agents and LLMs to maintain consistency, quality, and efficiency across software development projects.

## 🎯 Purpose

This repository contains reusable skill definitions that enhance AI-driven development by:
- Establishing consistent patterns and best practices
- Providing structured templates for documentation and specifications
- Offering domain-specific guidance for documentation, task management, and product walkthroughs
- Ensuring AI-generated code and documentation maintain high quality standards

## 📚 Skills Overview

### 1. **Create Document**
   - **Reference**: [create-document/SKILL.md](create-document/SKILL.md)
   - **Purpose**: Create well-structured documentation files optimized for AI consumption with clear requirements, constraints, and interfaces
   - **Best for**: Generating product documentation, feature specifications, and system documentation
   - **Structure**: Overview, key features, dependencies, error handling
   - **Best Practices**: Precise language, structured formatting, self-contained content, machine-readable structure

### 2. **Create Specification**
   - **Reference**: [create-specification/SKILL.md](create-specification/SKILL.md)
   - **Purpose**: Generate specification files that define requirements, constraints, and interfaces for solution components
   - **Best for**: Technical specifications, API design, architecture specs, process documentation
   - **Structure**: 11-section template covering purpose, definitions, requirements, interfaces, acceptance criteria, test automation strategy, dependencies, and more
   - **Key Requirements**: Unambiguous language, distinction between requirements/constraints/recommendations, acronym definitions

### 3. **Create Task**
   - **Reference**: [create-task/SKILL.md](create-task/SKILL.md)
   - **Purpose**: Create task specification files following TDD methodology with clear acceptance criteria and implementation plans
   - **Best for**: Breaking down features into actionable tasks, test-driven development workflows
   - **Structure**: Story statements, business context, TDD phases (Red/Green/Refactor), QA scenarios, Definition of Done

### 4. **Initialize Documentation**
   - **Reference**: [intialize-docs/SKILL.md](intialize-docs/SKILL.md)
   - **Purpose**: Scaffold standard documentation directory structure for projects
   - **Best for**: Setting up new projects with organized docs, teams using consistent documentation layouts
   - **Structure**: Creates `/docs/specs/`, `/docs/tasks/`, system design, architecture, implementation plan, and `GEMINI.md`
   - **Automation**: Includes [scaffold.cjs](intialize-docs/scripts/scaffold.cjs) script for automatic setup

### 5. **Software Tour**
   - **Reference**: [software-tour/SKILL.md](software-tour/SKILL.md)
   - **Purpose**: Generate a single, self-contained interactive HTML "software tour"—a scrollable walkthrough of a product with per-module screen walkthroughs and Mermaid relation/flow diagrams
   - **Best for**: Product walkthroughs, feature tours, onboarding demos, user-flow documentation, module relation diagrams
   - **Structure**: Converts modules and user flows into modules, per-module flow diagrams, and step-by-step screen walkthroughs
   - **Template**: Built from [assets/template.html](software-tour/assets/template.html)

## 🚀 How to Use

Each skill is self-contained and can be invoked by AI agents through dedicated prompts or skill files. To use these skills:

1. **Synchronously**: Load the appropriate SKILL.md file for your use case
2. **As References**: Link to skills in your agent configurations or custom instructions
3. **Templates**: Use the structured templates and best practices within each skill
4. **Chaining**: Combine multiple skills for comprehensive solutions (e.g., create-specification + create-task + software-tour)

## 📋 Skill Categorization

| Category | Skills |
|----------|--------|
| **Documentation** | Create Document, Create Specification, Create Task, Initialize Documentation |
| **Product Walkthroughs** | Software Tour |

## 🎓 Best Practices

- **Read Skills First**: Load the appropriate SKILL.md file before starting any task
- **Follow Templates**: Use provided templates and structures for consistency
- **AI-Optimized Content**: All documentation is optimized for AI agents to understand and follow
- **Iterative Refinement**: Use reviews and testing skills to refine output quality
- **Combine Skills**: Use multiple skills together for comprehensive solutions

## 📁 Repository Structure

```
SKILLS/
├── readme.md
├── create-document/          # Documentation file creation skill
│   └── SKILL.md
├── create-specification/     # Specification file creation skill
│   └── SKILL.md
├── create-task/              # TDD task specification creation skill
│   └── SKILL.md
├── intialize-docs/           # Documentation scaffolding skill
│   ├── SKILL.md
│   └── scripts/
│       └── scaffold.cjs
└── software-tour/            # Interactive HTML software tour skill
    ├── SKILL.md
    └── assets/
        └── template.html
```

## 📝 License

Refer to the project's license in the repository.

---

**Last Updated**: August 2026  
**Version**: 1.1.0