# Article Preview Component

A responsive **article preview card** with a **social share popup** that adapts beautifully between **desktop** and **mobile**. Built with **vanilla HTML, CSS, and JavaScript** — no frameworks!

Live Demo: [https://your-username.github.io/article-preview-component](https://your-username.github.io/article-preview-component)  
Frontend Mentor Challenge: [@frontendmentor](https://www.frontendmentor.io/challenges/article-preview-component)

---

## Features

- **Responsive Design**

  - Desktop: Share tooltip appears above the button with a triangle pointer
  - Mobile: Full-width share bar replaces the author info

- **Interactive Share Button**

  - One click opens the share menu
  - Second click (or click on mobile share button) closes it

- **Smooth State Management**

  - Author info hides on mobile when sharing
  - Original share button hides and reappears cleanly

- **Clean, Semantic HTML & Modern CSS**

---

## Preview

| Desktop                                                                | Mobile                                                               |
| ---------------------------------------------------------------------- | -------------------------------------------------------------------- |
| ![Desktop View](https://via.placeholder.com/600x400?text=Desktop+View) | ![Mobile View](https://via.placeholder.com/300x500?text=Mobile+View) |

---

## Tech Stack

- **HTML5**
- **CSS3** (Flexbox, Media Queries, `position: absolute`)
- **Vanilla JavaScript** (DOM manipulation, event listeners)

---

## How It Works

### Desktop

- Clicking the share icon toggles the `.active` class on `.active-share`
- `position: absolute` + `top`/`right` positions the tooltip
- `::before` creates the downward arrow

### Mobile

- Clicking the share icon:
  - Adds `.active` to `.active-share-mobile`
  - Adds `.hide` to `.presentation-name` and `#click-share`
- Clicking the share icon **inside the bar** reverses the action

---

## Project Structure
