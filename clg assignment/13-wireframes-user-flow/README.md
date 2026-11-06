# Assignment 13 — Wireframes and User Flow

## Project concept
**StudyHub:** a responsive student task and study-progress dashboard.

## User requirements
- A student can view a summary of courses and progress.
- A student can see today's tasks.
- Navigation must work on mobile and desktop.
- Text and controls must remain readable on small screens.

## Desktop wireframe
```text
+--------------------------------------------------------------+
| STUDYHUB       Overview  Courses  Tasks  Progress      [AR]  |
+--------------------------------------------------------------+
| Good morning, Student                                        |
| +----------------+ +----------------+ +----------------+    |
| | Courses: 4     | | Tasks: 18      | | Study: 32h      |    |
| +----------------+ +----------------+ +----------------+    |
| Continue learning                                             |
| +------------------+ +------------------+ +----------------+ |
| | HTML & CSS       | | JavaScript       | | Python         | |
| | progress bar     | | progress bar     | | progress bar   | |
| +------------------+ +------------------+ +----------------+ |
| Today's focus: task list                                      |
+--------------------------------------------------------------+
```

## Mobile wireframe
```text
+----------------------------+
| STUDYHUB                   |
| Overview  Courses  Tasks   |
+----------------------------+
| Good morning, Student      |
| +------------------------+ |
| | Courses: 4             | |
| +------------------------+ |
| | Tasks: 18              | |
| +------------------------+ |
| | Study: 32h             | |
| +------------------------+ |
| Continue learning          |
| +------------------------+ |
| | HTML & CSS             | |
| | progress bar           | |
| +------------------------+ |
| Today's focus              |
+----------------------------+
```

## User flow
1. Student opens the dashboard.
2. Student sees the overview and current progress.
3. Student selects Courses to review learning cards.
4. Student selects Tasks to view today's focus list.
5. Student uses the responsive navigation on a phone or desktop.

## Acceptance criteria
- Layout has no horizontal overflow at 320px width.
- Navigation links have meaningful labels.
- Dashboard cards stack on narrow screens.
- Keyboard users can reach all links.
