# Accessible Menu

This is an implementation of the [Disclosure Navigation Menu with Top-Level Links](https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/examples/disclosure-navigation-hybrid/
) menu pattern with some changes to allow submenus to open on hover on desktop and to add a hamburger menu toggle for smaller screens.

## Installation

1. JS: Add `accessible-menu.js` to your project
1. CSS: Add the compiled CSS `accessible-menu.css` or the Sass partial `_accessible-menu.scss` to your project
1. Initialize your menu (see the examples below)

## Usage

### Initialize

```js
new DisclosureNav({});
new MenuToggle({});
```

`DisclosureNav` parameters:

- `menuSelector` - CSS selector for the menu `<ul>`, default: `#menu > ul`
- `menuItemSelector` - CSS selector for top level nav items, default: `li.menu-item-has-children`
- `menuLinkSelector` - CSS selector top level links, default: `a`
- `submenuSelector` - CSS selector for submenus, default: `ul`
- `submenuToggleIcon` - SVG for submenu toggle button, default: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="20"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="M112 184l144 144 144-144"/></svg>`

`Menu Toggle` parameters:

- `menuContainerSelector` - CSS selector for the container that will be toggled when clicking the menu button, default: `#menu`,
- `menuContainerOpenClass` - CSS selector used to indicate if the menu container is open, default: `is-active`,
- `toggleButtonLabel` - Text to display on the mobile menu toggle button, default: `Menu`,
- `toggleButtonIcon` - SVG icon for submenu toggle button, default: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="32"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M80 160h352M80 256h352M80 352h352"/></svg>`,

### WordPress Example

#### JS
```js
new DisclosureNav({
  menuSelector: '#site-navigation > ul',
  menuItemSelector: 'li.menu-item-has-children',
});

new MenuToggle({
  menuContainerSelector: '#site-navigation',
});
```

#### CSS
  - Find & replace `#menu` with the menuSelector: `#site-navigation > ul`

### Drupal Example
#### JS
```js
new DisclosureNav({
  menuSelector: '#block-navigation #menu',
  menuItemSelector: 'li.menu-item--expanded',
});

new MenuToggle({
  menuContainerSelector: '#block-navigation',
});
```
#### CSS
  - Find & replace `#menu` with the menuSelector: `#block-navigation #menu`
  - Find & replace `li.menu-item-has-children` with the menuSelector: `li.menu-item--expanded`

## Limitations

- Nested submenus aren't supported, only one submenu level will work.
