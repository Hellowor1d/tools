// ==UserScript==
// @name         闲鱼搜索框
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  重新展示闲鱼搜索框，方便PC端网页搜索
// @author       HelloWor1d
// @match        https://2.taobao.com/*
// @match        https://s.2.taobao.com/*
// @match        https://trade.2.taobao.com/*
// @match	     http://s.ershou.taobao.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    let search = `
<div class="idle-search">
<form method="get" action="//s.2.taobao.com/list/list.htm" name="search" target="_top">
<input class="input-search" id="J_HeaderSearchQuery" name="q" type="text" value="" placeholder="搜闲鱼" />
<input type="hidden" name="search_type" value="item" autocomplete="off" />
<input type="hidden" name="app" value="shopsearch" autocomplete="off" />
<button class="btn-search" type="submit"><i class="iconfont">&#xe602;</i><span class="search-img"></span></button>
</form>
</div>`;
    document.getElementById('J_IdleHeader').insertAdjacentHTML('beforeend',search);
})();
