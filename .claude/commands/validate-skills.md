---
description: Validate links and references in all SKILL.md files
allowed-tools: Bash, Read, Glob, Task, AskUserQuestion, Edit
---

# Validate Skills

Run the `umbraco-skill-validator` skill to check all SKILL.md files for broken links, missing references, and invalid paths.

## Workflow

1. **Run the validation script**
   ```bash
   cd .claude/skills/umbraco-skill-validator/scripts
   npm install --silent
   npx tsx validate-links.ts
   ```

2. **Read the JSON output** and format as a markdown report

3. **If issues are found**, spawn the `skill-content-fixer` agent to suggest fixes:
   - Pass the validation report as context
   - Request fix suggestions with diffs for each issue

4. **Present the fix plan** to the user using AskUserQuestion:
   - Show each proposed fix with before/after diff
   - Allow user to select which fixes to apply

5. **Execute only approved fixes** using the Edit tool

## Report Format

Display the report like this:

```markdown
# Skill Validation Report

## Summary
- Skills scanned: X
- Issues found: Y

## Issues by Skill

### `skill-name` (path/to/SKILL.md)

| Line | Type | Issue | Status |
|------|------|-------|--------|
| 45 | Broken URL | https://... returns 404 | :x: |
| 72 | Missing skill | `umbraco-foo` not found | :x: |

## Statistics
- External URLs checked: X (Y broken)
- Skill references checked: X (Y missing)
- File paths checked: X (Y invalid)
```

## Fix Approval

When presenting fixes, use AskUserQuestion with options like:
- "Apply all fixes"
- "Apply selected fixes" (then list each fix)
- "Skip fixes, show report only"

Only execute fixes the user explicitly approves.
