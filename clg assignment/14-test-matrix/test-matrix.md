# Assignment 14 — Test Matrix and Fixes

Project under test: StudyHub responsive dashboard (Assignment 3).

| ID | Test | Steps / input | Expected result | Status |
|---|---|---|---|---|
| T01 | Desktop layout | Open at 1366px | Sidebar and content appear side by side | Pass |
| T02 | Tablet layout | Open at 768px | Navigation adapts; cards remain readable | Pass |
| T03 | Mobile layout | Open at 375px | Sidebar becomes horizontal; cards stack | Pass |
| T04 | Very narrow screen | Open at 320px | No horizontal page overflow | Verify in browser |
| T05 | Course cards | Inspect all cards | Three course cards show title and progress | Pass |
| T06 | Progress bars | Inspect progress indicators | Widths match 75%, 45%, and 60% | Pass |
| T07 | Navigation links | Click each sidebar link | Page navigates to its section | Pass |
| T08 | Keyboard navigation | Press Tab repeatedly | Links receive visible focus | Verify in browser |
| T09 | Missing image | Load page without network | Layout remains intact; no image dependency | Pass |
| T10 | Browser console | Open developer tools | No JavaScript is required; no script errors | Pass |

## Bug log / fixes
| Issue | Cause | Fix | Verification |
|---|---|---|---|
| Cards become cramped on tablets | Three fixed columns | Use a two-column breakpoint at 800px | Recheck at 768px |
| Cards too narrow on phones | Grid remains multi-column | Switch to one column at 520px | Recheck at 375px |
| Sidebar consumes mobile width | Fixed desktop sidebar | Convert to a horizontal, scrollable nav | Recheck at 375px |

## Reflection
Responsive layouts need testing at more than one viewport width. CSS Grid and media queries make the layout easier to adapt. Before submission, test keyboard focus and 320px width in a real browser and update any "Verify in browser" results with actual observations.
