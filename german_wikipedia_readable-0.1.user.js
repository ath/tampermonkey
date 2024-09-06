// ==UserScript==
// @name         german_wikipedia_readable
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Wikipedia-Seite auf 60% der Bildschirmbreite reduzieren und zentrieren
// @match        https://de.wikipedia.org/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const css = `
        #content, #footer {
            width: 50% !important;
            margin-left: auto !important;
            margin-right: auto !important;
        }
        #mw-panel {
            left: calc(20% - 11em) !important;
        }
        .mw-body {
            margin-left: 11em !important;
        }
    `;

    const style = document.createElement('style');
    style.type = 'text/css';
    style.appendChild(document.createTextNode(css));
    document.head.appendChild(style);
})();