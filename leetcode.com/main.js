// ==UserScript==
// @name         leetcode.com
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  阻止自动跳转中国区
// @author       You
// @match        http*://leetcode.com/*
// @grant        GM_addStyle
// @grant        GM_webRequest
// @webRequest   [{"selector":"http*://assets.leetcode-cn.com/*","action":"cancel"}]
// ==/UserScript==

(function () {
  "use strict";
  GM_addStyle("#region_switcher { display: none !important}");
})();
