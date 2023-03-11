# Accessible Menu

This is an implementation of the [Disclosure Navigation Menu with Top-Level Links](https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/examples/disclosure-navigation-hybrid/
) menu pattern with some changes to allow submenus to open on hover on desktop and to add a hamburger menu toggle for smaller screens.

## Installation

1. JS: Add `accessible-menu.js` to your project
1. CSS: Add the compiled CSS `accessible-menu.css` or the Sass partial `_accessible-menu.scss` to your project
1. Initialize your menu (see the examples below)

## Usage

### HTML Structure

Your menu should match the following structure:

```html
<nav id="menu" aria-label="Main navigation">
  <button id="menu-toggle" aria-expanded="false" aria-controls="menu-toggle-container">
    <svg height="32" width="32" viewBox="0 0 32 32" fill="currentColor" class="menu-toggle--icon">
      <path d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z"></path>
    </svg>
    <div class="menu-toggle--label">Menu</div>
  </button>

  <ul>
    <li><a href="#">Link 1</a></li>
    <li><a href="#">Link 2</a></li>

    <li class="menu-item-has-children">
      <a href="#">Link 3</a>
      <button class="submenu-toggle" aria-expanded="false"></button>

      <ul>
        <li><a href="#">Link 1</a></li>
        <li><a href="#">Link 2</a></li>
        <li><a href="#">Link 3</a></li>
      </ul>
    </li>

    <li class="menu-item-has-children">
      <a href="#">Link 43</a>
      <button class="submenu-toggle" aria-expanded="false"></button>

      <ul>
        <li><a href="#">Link 1</a></li>
        <li><a href="#">Link 2</a></li>
      </ul>
    </li>
  </ul>
</nav>
```

### Initialize

```js
new DisclosureNav({});
new MenuToggle({});
```

`DisclosureNav` parameters:

- `menuSelector` - CSS selector for the menu `<ul>`, default: `#menu > ul`
- `menuItemSelector` - CSS selector for top level nav items, default: `li.has-submenu`
- `menuLinkSelector` - CSS selector top level links, default: `a`
- `submenuSelector` - CSS selector for submenus, default: `ul`
- `submenuToggleSelector` - CSS selector for submenu toggle buttons, default: `button`

`Menu Toggle` parameters:

- `menuContainerSelector` - CSS selector for the , default: '#menu > ul',
- `toggleButtonSelector` - CSS selector for the menu toggle button, default: `"#menu-toggle",
- `menuContainerOpenClass` - CSS selector used to indicate if the menu container is open, default: 'is-active',

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

#### Templates
  - Add menu toggle button
  - Add submenu toggle buttons

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

#### Templates
  - Add menu toggle button
  - Add submenu toggle buttons

## Limitations

- Nested submenus aren't supported, only one submenu will work.
