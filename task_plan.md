# Task Plan

## Goal
Fix the image shown to the left of the "麻薯食谱" site title so it uses the correct logo image from the page/footer assets.

## Phases
- [x] Start planning-with-files and inspect project structure.
- [x] Locate header brand image and correct logo asset.
- [x] Patch the page with the correct image reference.
- [x] Verify the change and publish according to project workflow.

## Decisions
- Use existing project assets where possible.
- Top nav now uses `images/麻薯菜谱logo2.png`, with the existing footer logo URL as fallback.

## Errors Encountered
| Error | Attempt | Resolution |
|-------|---------|------------|
| `rg` failed with Access denied | Search index.html with ripgrep | Use PowerShell `Select-String` instead |
| PowerShell rejected Bash heredoc syntax | Inline Python image check | Retry with `python -c` |
