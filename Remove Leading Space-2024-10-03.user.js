// ==UserScript==
// @name         Remove Leading Space
// @namespace    http://tampermonkey.net/
// @version      2024-10-03
// @description  Remove space in front of transcribed text.
// @author       André Thieme
// @match        https://console.groq.com/playground?model=whisper-large-v3
// @icon         https://www.google.com/s2/favicons?sz=64&domain=groq.com
// @grant        none
// ==/UserScript==

///*
(function() {
    'use strict';

    const SELECTOR = 'div.absolute.px-4.py-6.inset-0.overflow-auto:not(:empty)';

    document.addEventListener('click', function(event) {
        const targetDiv = document.querySelector(SELECTOR);
        if (!targetDiv) return;

        if (event.target.tagName === 'BUTTON') {
            if (targetDiv && (event.target.textContent.trim() === 'Text')) {
                setTimeout(() => { targetDiv.textContent = targetDiv.innerText.trim(); }, 0);
            }
            else if (event.target.textContent.includes('Copy Text')) {
                event.preventDefault();
                event.stopPropagation();
                const textWithoutLeadingSpace = targetDiv.innerText.trimStart();
                navigator.clipboard.writeText(textWithoutLeadingSpace);
            }
        }
    }, true);
})();
//*/
