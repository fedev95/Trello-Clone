/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        "cc-base": "rgba(var(--base))",
        "cc-surface": "rgba(var(--surface))",
        "cc-overlay": "rgba(var(--overlay))",
        "cc-border": "rgba(var(--border))",
        "cc-shadow": "rgba(var(--shadow))",
        "cc-menu": "rgba(var(--menu))",
        "cc-menu-item-hover": "rgba(var(--menu-item-hover))",
        "cc-board-settings": "rgba(var(--board-settings))",
        "cc-text": "rgba(var(--text))",
        "cc-subtle": "rgba(var(--subtle))",
        "cc-accent": "rgba(var(--accent))",
        "cc-accent-muted": "rgba(var(--accent-muted))",
        "cc-accent-highlight": "rgba(var(--accent-highlight))",
        "cc-scrollbar-track": "rgba(var(--scrollbar-track))",
        "cc-scrollbar-thumb": "rgba(var(--scrollbar-thumb))",
        "cc-danger-red": "rgba(var(--danger-red))",
        "cc-boardpage-nav-text": "rgba(var(--boardpage-nav-text))",
        "cc-boardpage-nav-bg": "rgba(var(--boardpage-nav-bg))",
        "cc-boardpage-menu-hover": "rgba(var(--boardpage-menu-hover))",
        "cc-boardpage-menu-active": "rgba(var(--boardpage-menu-active))",
        "cc-boardpage-menu-text-active": "rgba(var(--boardpage-menu-text-active))",
        "cc-boardpage-accent-menu": "rgba(var(--boardpage-accent-menu))",
        "cc-boardpage-accent-menu-text": "rgba(var(--boardpage-accent-menu-text))",
        "cc-boardpage-accent-menu-hover": "rgba(var(--boardpage-accent-menu-hover))",
        "cc-boardpage-accent-menu-expanded": "rgba(var(--boardpage-accent-menu-expanded))",
        "cc-board-filter": "rgba(var(--board-filter))",
        "cc-board-sidebar": "rgba(var(--board-sidebar))",
        "cc-board-sidebar-collapse": "rgba(var(--board-sidebar-collapse))",
        "cc-board-sidebar-text": "rgba(var(--board-sidebar-text))",
        "cc-task-list": "rgba(var(--task-list))",
        "cc-task-list-btn": "rgba(var(--task-list-btn))",
        "cc-task-list-scrollbar-track": "rgba(var(--task-list-scrollbar-track))",
        "cc-task-list-scrollbar-thumb": "rgba(var(--task-list-scrollbar-thumb))",
        "cc-task-card": "rgba(var(--task-card))",
      }
    },
  },
  plugins: [],
}

