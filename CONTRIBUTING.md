# Contributing

First and foremost, we appreciate your interest in this project. This document contains essential information, should you want to contribute.

## Development discussion

For bugs, new features or improvements, open a new [issue](https://github.com/openseabrus/tamanna-weather/issues/new).

## Which Branch

Pull requests should always be done against the `main` branch.

## Coding Style

This project follows a slight customization of [Prettier](https://prettier.io) coding style guide. Please check the file .prettierrc.json to check the details.

[ESLint](https://eslint.org/) is used in the project to detect possible errors on the code.

## Committing to git

Each commit **MUST** have a proper message describing the work that has been done.
This is called [Semantic Commit Messages](https://seesparkbox.com/foundry/semantic_commit_messages).

Here's what a commit message should look like:

```txt
feat: implement new city UI
^--^ ^----------------------^
|    |
|    +-> Description of the work in the present tense.
|
+--------------------> Type: chore, docs, feat, fix, hack, refactor, style, or test.
```

## Branching strategy

We will be using the **branch-per-issue** workflow.

This means, that for each open [issue](https://github.com/openseabrus/tamanna-weather/issues), we'll create a corresponding **git** branch.

For instance, issue `#123` (new feature) should have a corresponding `feature/TAM-123-ShortTaskDescription` branch, which **MUST** branch off the latest code in `main`.
