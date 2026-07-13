# Task Plan

## Goal
Make the recipe count displayed in the homepage hero consistent with the actual recipe data rendered below.

## Phases
- [x] Start planning-with-files and inspect project structure.
- [x] Locate the hero count and determine the authoritative recipe count.
- [x] Patch the stale count or make it data-driven.
- [x] Verify the displayed count and publish according to project workflow.

## Decisions
- Prefer deriving the hero count from the `recipes` array to prevent future drift.
- Preserve the pre-existing untracked backup files (`index.html.bak2`, `sw.js.bak`) by excluding them from staging.

## Errors Encountered
| Error | Attempt | Resolution |
|-------|---------|------------|
| `rg` failed with Access denied | Search index.html with ripgrep | Use PowerShell `Select-String` instead |
| PowerShell rejected Bash heredoc syntax | Inline Python image check | Retry with `python -c` |
| Node syntax-check command had incorrectly escaped regex delimiters | Verify inline JavaScript | Retry using a PowerShell single-quoted Node command |
| Node command wrapper stripped its JavaScript string quotes | Verify inline JavaScript | Retry with a PowerShell double-quoted wrapper and JavaScript single-quoted literals |
| Syntax checker attempted to compile JSON-LD metadata as JavaScript | Verify inline JavaScript | Exclude `application/ld+json` script blocks from the check |
