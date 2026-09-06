# Dreamy Camp Foundation Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Give the static site a reusable light-mode RPG-menu visual system and turn the homepage into the “Camp” landing page.

**Architecture:** Keep the existing plain HTML structure and centralize the visual language in `styles.css`. Add homepage-only composition classes and use the existing navigation pattern, with relative links from subpages back to the homepage contact anchor.

**Tech Stack:** Semantic HTML and one shared CSS stylesheet; no JavaScript, libraries, external assets, or build tools.

---

### Task 1: Establish the shared visual system

**Files:**
- Modify: `styles.css`

**Step 1:** Define reusable paper, ink, amber, sage, blue, and violet tokens; type stacks; shadows; borders; and responsive layout rules.

**Step 2:** Style the shared sidebar, navigation states, panels, page typography, focus rings, and reduced-motion fallbacks.

**Step 3:** Verify the stylesheet is used by the homepage and every subpage.

### Task 2: Build the Camp homepage

**Files:**
- Modify: `index.html`

**Step 1:** Replace the generic introduction with the “Always Asking” / “Digital Dreamer” Camp composition.

**Step 2:** Add semantic decorative, discovery, and “Summon Me” sections with intentional contact placeholder copy.

**Step 3:** Ensure navigation and heading hierarchy remain accessible.

### Task 3: Normalize site navigation

**Files:**
- Modify: `index.html`
- Modify: `me/index.html`
- Modify: `project/index.html`
- Modify: `blog/index.html`
- Modify: `games/index.html`

**Step 1:** Apply Camp, Character, Crafted Items, Scrolls, Arcade, and Summon Me labels on every page.

**Step 2:** Keep existing destinations valid and route Summon Me to the homepage anchor.

### Task 4: Verify and commit

**Files:**
- Verify: all HTML files and `styles.css`

**Step 1:** Check that all local `href` targets resolve to files or the homepage anchor.

**Step 2:** Inspect the final diff and repository status.

**Step 3:** Commit the finished visual refresh with a descriptive message.
