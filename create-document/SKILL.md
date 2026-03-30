---
name: create-document
description: "Create a new specification file for the solution, optimized for Generative AI consumption."
---

# Create Documentation Specification

Your goal is to create a new documentation file for `${input:DocPurpose}`.

The documentation file must define the requirements, constraints, and interfaces for the solution components in a manner that is clear, unambiguous, and structured for effective use by Generative AIs. Follow established documentation standards and ensure the content is machine-readable and self-contained.

## Best Practices for AI-Ready Documentation

- Use precise, explicit, and unambiguous language.
- Clearly distinguish between requirements, constraints, and recommendations.
- Use structured formatting (headings, lists, tables) for easy parsing.
- Avoid idioms, metaphors, or context-dependent references.
- Define all acronyms and domain-specific terms.
- Include examples and edge cases where applicable.
- Ensure the document is self-contained and does not rely on external context.

The documentation should be saved in the [docs/](docs/) directory and named according to the following convention: `[a-z0-9-].md`, where the name should be descriptive of the documentation's content and starting with the highlevel purpose, which is one of [schema, tool, data, infrastructure, process, architecture, or design].

The documentation file must be formatted in well formed Markdown.

Documentation files must follow the template below, ensuring that all sections are filled out appropriately. The front matter for the markdown should be structured correctly as per the example following:

```md
---# [Feature/Component Name]

    description of the feature/component, its purpose, and its role within the larger system.

## Overview

- **Location**: ``[Path to the relevant code files or modules]``
- **Purpose**: [Briefly describe the purpose of this feature/component and how it fits into the overall user flow or system architecture.]
- **Pre-requisites**: [List any necessary pre-requisites, such as user actions, system states, or dependencies that must be in place for this feature/component to function correctly.]

## Key Features

### 1. [Feature Name]

- **Description**: [Describe the feature in detail, including its functionality and how it interacts with other components.]
- **User Interaction**: [Explain how users interact with this feature, including any UI elements]



## Dependencies

### Hooks


### Services



## Error Handling


```
