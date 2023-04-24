/**
 * what-input - A global utility for tracking the current input method (mouse, keyboard or touch).
 * @version v5.2.12
 * @link https://github.com/ten1seven/what-input
 * @license MIT
 */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("whatInput",[],t):"object"==typeof exports?exports.whatInput=t():e.whatInput=t()}(this,function(){return i={},n.m=o=[function(e,t){"use strict";e.exports=function(){if("undefined"==typeof document||"undefined"==typeof window)return{ask:function(){return"initial"},element:function(){return null},ignoreKeys:function(){},specificKeys:function(){},registerOnChange:function(){},unRegisterOnChange:function(){}};var t=document.documentElement,n=null,u="initial",s=u,o=Date.now(),i=!1,d=["button","input","select","textarea"],r=[],c=[16,17,18,91,93],w=[],p={keydown:"keyboard",keyup:"keyboard",mousedown:"mouse",mousemove:"mouse",MSPointerDown:"pointer",MSPointerMove:"pointer",pointerdown:"pointer",pointermove:"pointer",touchstart:"touch",touchend:"touch"},a=!1,f={x:null,y:null},l={2:"touch",3:"touch",4:"mouse"},m=!1;try{var e=Object.defineProperty({},"passive",{get:function(){m=!0}});window.addEventListener("test",null,e)}catch(e){}var h=function(){var e=!m||{passive:!0,capture:!0};document.addEventListener("DOMContentLoaded",v,!0),window.PointerEvent?(window.addEventListener("pointerdown",y,!0),window.addEventListener("pointermove",E,!0)):window.MSPointerEvent?(window.addEventListener("MSPointerDown",y,!0),window.addEventListener("MSPointerMove",E,!0)):(window.addEventListener("mousedown",y,!0),window.addEventListener("mousemove",E,!0),"ontouchstart"in window&&(window.addEventListener("touchstart",y,e),window.addEventListener("touchend",y,!0))),window.addEventListener(O(),E,e),window.addEventListener("keydown",y,!0),window.addEventListener("keyup",y,!0),window.addEventListener("focusin",L,!0),window.addEventListener("focusout",b,!0)},v=function(){if(i=!("false"===t.getAttribute("data-whatpersist")||"false"===document.body.getAttribute("data-whatpersist")))try{window.sessionStorage.getItem("what-input")&&(u=window.sessionStorage.getItem("what-input")),window.sessionStorage.getItem("what-intent")&&(s=window.sessionStorage.getItem("what-intent"))}catch(e){}g("input"),g("intent")},y=function(e){var t=e.which,n=p[e.type];"pointer"===n&&(n=S(e));var o=!w.length&&-1===c.indexOf(t),i=w.length&&-1!==w.indexOf(t),r="keyboard"===n&&t&&(o||i)||"mouse"===n||"touch"===n;if(M(n)&&(r=!1),r&&u!==n&&(x("input",u=n),g("input")),r&&s!==n){var a=document.activeElement;a&&a.nodeName&&(-1===d.indexOf(a.nodeName.toLowerCase())||"button"===a.nodeName.toLowerCase()&&!C(a,"form"))&&(x("intent",s=n),g("intent"))}},g=function(e){t.setAttribute("data-what"+e,"input"===e?u:s),k(e)},E=function(e){var t=p[e.type];"pointer"===t&&(t=S(e)),A(e),(!a&&!M(t)||a&&"wheel"===e.type||"mousewheel"===e.type||"DOMMouseScroll"===e.type)&&s!==t&&(x("intent",s=t),g("intent"))},L=function(e){e.target.nodeName?(n=e.target.nodeName.toLowerCase(),t.setAttribute("data-whatelement",n),e.target.classList&&e.target.classList.length&&t.setAttribute("data-whatclasses",e.target.classList.toString().replace(" ",","))):b()},b=function(){n=null,t.removeAttribute("data-whatelement"),t.removeAttribute("data-whatclasses")},x=function(e,t){if(i)try{window.sessionStorage.setItem("what-"+e,t)}catch(e){}},S=function(e){return"number"==typeof e.pointerType?l[e.pointerType]:"pen"===e.pointerType?"touch":e.pointerType},M=function(e){var t=Date.now(),n="mouse"===e&&"touch"===u&&t-o<200;return o=t,n},O=function(){return"onwheel"in document.createElement("div")?"wheel":void 0!==document.onmousewheel?"mousewheel":"DOMMouseScroll"},k=function(e){for(var t=0,n=r.length;t<n;t++)r[t].type===e&&r[t].fn.call(void 0,"input"===e?u:s)},A=function(e){f.x!==e.screenX||f.y!==e.screenY?(a=!1,f.x=e.screenX,f.y=e.screenY):a=!0},C=function(e,t){var n=window.Element.prototype;if(n.matches||(n.matches=n.msMatchesSelector||n.webkitMatchesSelector),n.closest)return e.closest(t);do{if(e.matches(t))return e;e=e.parentElement||e.parentNode}while(null!==e&&1===e.nodeType);return null};return"addEventListener"in window&&Array.prototype.indexOf&&(p[O()]="mouse",h()),{ask:function(e){return"intent"===e?s:u},element:function(){return n},ignoreKeys:function(e){c=e},specificKeys:function(e){w=e},registerOnChange:function(e,t){r.push({fn:e,type:t||"input"})},unRegisterOnChange:function(e){var t=function(e){for(var t=0,n=r.length;t<n;t++)if(r[t].fn===e)return t}(e);!t&&0!==t||r.splice(t,1)},clearStorage:function(){window.sessionStorage.clear()}}}()}],n.c=i,n.p="",n(0);function n(e){if(i[e])return i[e].exports;var t=i[e]={exports:{},id:e,loaded:!1};return o[e].call(t.exports,t,t.exports,n),t.loaded=!0,t.exports}var o,i});

/**
 * accessible-menu - Library for creating accessible dropdown menus.
 *
 * @version v0.1.0
 * @link https://github.com/devcollaborative/accessible-menu
 *
 * This software or document includes material copied from or derived from
 * Example Disclosure Navigation Menu with Top-Level Links
 * (https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/examples/disclosure-navigation-hybrid/).
 * Copyright © 2023 World Wide Web Consortium. https://www.w3.org/Consortium/Legal/2023/doc-license
 */
class DisclosureNav {
  constructor({
    menuSelector = '#menu > ul',
    menuItemSelector = "li.menu-item-has-children",
    menuLinkSelector = "a",
    submenuSelector = "ul",
    submenuToggleIcon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="20"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="M112 184l144 144 144-144"/></svg>',
  }) {
    this.rootNode = document.querySelector(menuSelector);
    this.controlledNodes = [];
    this.openIndex = null;
    this.useArrowKeys = true;
    this.topLevelNodes = [
      ...this.rootNode.querySelectorAll(
        `:scope > ${menuItemSelector} > ${menuLinkSelector}`
      ),
    ];

    this.topLevelNodes.forEach((node) => {
      // handle button + menu
      const menu = node.parentNode.querySelector(submenuSelector);

      if (menu) {
        const uniqueID = this.uniqueID();

        // save ref controlled menu
        this.controlledNodes.push(menu);

        // dynamically add submenu toggle button
        let submenuToggle = document.createElement('button');
        submenuToggle.innerHTML = `<button aria-label="${node.textContent}" class="submenu-toggle" aria-expanded="false" aria-controls="${uniqueID}">${submenuToggleIcon}</button>`;
        submenuToggle = submenuToggle.firstElementChild;
        node.insertAdjacentElement('afterend', submenuToggle);

        // attach submenu toggle button listeners
        submenuToggle.addEventListener('click', this.onButtonClick.bind(this));
        submenuToggle.addEventListener('keydown', this.onButtonKeyDown.bind(this));

        // Link submenu & submenu toggle with aria-controls
        menu.setAttribute('id', uniqueID);

        // collapse menus
        this.toggleMenu(menu, false);

        // attach link event listeners
        menu.addEventListener('keydown', this.onMenuKeyDown.bind(this));
        node.addEventListener('keydown', this.onLinkKeyDown.bind(this));
        node.addEventListener('click', this.onLinkClick.bind(this));
      }
    });

    this.rootNode.addEventListener('focusout', this.onBlur.bind(this));
  }

  uniqueID() {
    return Math.floor(Math.random() * Date.now()).toString(16);
  }

  controlFocusByKey(keyboardEvent, nodeList, currentIndex) {
    switch (keyboardEvent.key) {
      case 'ArrowUp':
      case 'ArrowLeft':
        keyboardEvent.preventDefault();
        if (currentIndex > -1) {
          var prevIndex = Math.max(0, currentIndex - 1);
          nodeList[prevIndex].focus();
        }
        break;
      case 'ArrowDown':
      case 'ArrowRight':
        keyboardEvent.preventDefault();
        if (currentIndex > -1) {
          var nextIndex = Math.min(nodeList.length - 1, currentIndex + 1);
          nodeList[nextIndex].focus();
        }
        break;
      case 'Home':
        keyboardEvent.preventDefault();
        nodeList[0].focus();
        break;
      case 'End':
        keyboardEvent.preventDefault();
        nodeList[nodeList.length - 1].focus();
        break;
    }
  }

  // public function to close open menu
  close() {
    this.toggleExpand(this.openIndex, false);
  }

  onBlur(event) {
    var menuContainsFocus = this.rootNode.contains(event.relatedTarget);
    if (!menuContainsFocus && this.openIndex !== null) {
      this.toggleExpand(this.openIndex, false);
    }
  }

  onButtonClick(event) {
    var button = event.target;
    var buttonIndex = this.topLevelNodes.indexOf(button.previousSibling);
    var buttonExpanded = button.getAttribute('aria-expanded') === 'true';
    this.toggleExpand(buttonIndex, !buttonExpanded);
  }

  onButtonKeyDown(event) {
    var targetButtonIndex = this.topLevelNodes.indexOf(document.activeElement);

    // close on escape
    if (event.key === 'Escape') {
      this.toggleExpand(this.openIndex, false);
    }

    // move focus into the open menu if the current menu is open
    else if (
      this.useArrowKeys &&
      this.openIndex === targetButtonIndex &&
      event.key === 'ArrowDown'
    ) {
      event.preventDefault();
      this.controlledNodes[this.openIndex].querySelector('a').focus();
    }

    // handle arrow key navigation between top-level buttons, if set
    else if (this.useArrowKeys) {
      this.controlFocusByKey(event, this.topLevelNodes, targetButtonIndex);
    }
  }

  onLinkKeyDown(event) {
    var targetLinkIndex = this.topLevelNodes.indexOf(document.activeElement);

    // handle arrow key navigation between top-level buttons, if set
    if (this.useArrowKeys) {
      this.controlFocusByKey(event, this.topLevelNodes, targetLinkIndex);
    }
  }

  onLinkClick(event) {
   if (whatInput.ask() === 'touch') {
      var targetLinkIndex = this.topLevelNodes.indexOf(event.target);
      var buttonIndex = targetLinkIndex + 1;
      var button = this.topLevelNodes[buttonIndex];
      var buttonExpanded = button.getAttribute('aria-expanded') === 'true';

      if (!buttonExpanded) {
        event.preventDefault();
        this.toggleExpand(buttonIndex, !buttonExpanded);
      }
    }
  }

  onMenuKeyDown(event) {
    if (this.openIndex === null) {
      return;
    }

    var menuLinks = Array.prototype.slice.call(
      this.controlledNodes[this.openIndex].querySelectorAll('a')
    );
    var currentIndex = menuLinks.indexOf(document.activeElement);

    // close on escape
    if (event.key === 'Escape') {
      this.topLevelNodes[this.openIndex].focus();
      this.toggleExpand(this.openIndex, false);
    }

    // handle arrow key navigation within menu links, if set
    else if (this.useArrowKeys) {
      this.controlFocusByKey(event, menuLinks, currentIndex);
    }
  }

  toggleExpand(index, expanded) {
    // close open menu, if applicable
    if (this.openIndex !== index) {
      this.toggleExpand(this.openIndex, false);
    }

    // handle menu at called index
    if (this.topLevelNodes[index]) {
      this.openIndex = expanded ? index : null;
      this.topLevelNodes[index].nextSibling.setAttribute('aria-expanded', expanded);
      this.toggleMenu(this.controlledNodes[index], expanded);
    }
  }

  toggleMenu(domNode, show) {
    if (domNode) {
      domNode.style.display = show ? 'block' : 'none';
    }
  }

  updateKeyControls(useArrowKeys) {
    this.useArrowKeys = useArrowKeys;
  }
}

class MenuToggle {
  constructor({
    menuContainerSelector = '#menu',
    menuContainerOpenClass = 'is-active',
    toggleButtonLabel = 'Menu',
    toggleButtonOpenIcon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="32"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M80 160h352M80 256h352M80 352h352"/></svg>',
    toggleButtonCloseIcon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="32"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M368 368L144 144M368 144L144 368"/></svg>',
    toggleButtonContent = `<span class="menu-toggle--button__open">${toggleButtonOpenIcon}</span> <span class="menu-toggle--button__close">${toggleButtonCloseIcon}</span> <div class="menu-toggle--label">${toggleButtonLabel}</div>`,
    mobileBreakpoint = '768px',
  }) {

    // dynamically create menu toggle button
    this.toggleButton = document.createElement('button');
    this.toggleButton.innerHTML = `<button id="menu-toggle" class="menu-toggle--button" aria-expanded="false" aria-controls="${menuContainerSelector}">${toggleButtonContent}</button>`;
    this.toggleButton = this.toggleButton.firstElementChild;
    this.toggleButton.addEventListener('click', this.onClick.bind(this));

    // initialize menu container & add menu toggle button to the DOM
    this.menuContainerOpenClass = menuContainerOpenClass;
    this.container = document.querySelector(menuContainerSelector);
    this.container.insertAdjacentElement('afterbegin', this.toggleButton);


    // Set aria-controls attribute.
    if (this.container.id) {
      this.toggleButton.setAttribute('aria-controls', this.container.id);
    } else {
      this.container.setAttribute('id', 'menu-toggle-container');
      this.toggleButton.setAttribute('aria-controls', 'menu-toggle-container');
    }

    // close mobile menu when screen is larger than mobile breakpoint
    matchMedia(`(min-width: ${mobileBreakpoint})`).addEventListener('change', this.handleBreakpoint.bind(this));
  }

  onClick() {
    document.body.classList.toggle(`menu-${this.menuContainerOpenClass}`);
    this.container.classList.toggle(this.menuContainerOpenClass);
    this.toggleButton.setAttribute('aria-expanded', this.toggleButton.getAttribute('aria-expanded') === 'true' ? 'false' : 'true');
  }

  handleBreakpoint(e) {
    if (e.matches) {
      document.body.classList.remove(`menu-${this.menuContainerOpenClass}`);
      this.container.classList.remove(this.menuContainerOpenClass);
      this.toggleButton.setAttribute('aria-expanded', 'false');
    }
  }
}
