// ==UserScript==
// @name         123云盘分享页 - 隐藏背景图和广告
// @namespace    https://github.com/olose/WebPlusJS
// @version      1.0.0.1
// @description  精确隐藏123云盘分享页面的背景图和右上角广告图，但是超链接还在鼠标点击仍会跳转
// @author       anig.top
// @match        *://*.123pan.com/*
// @match        *://*.123pan.cn/*
// @match        *://*.123684.com/*
// @match        *://*.123865.com/*
// @match        *://*.123952.com/*
// @match        *://*.123912.com/*
// @grant        none
// @run-at       document-end
// @icon         data:image/x-icon;base64,AAABAAEAEBAAAAEAIABoBAAAFgAAACgAAAAQAAAAIAAAAAEAIAAAAAAAQAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/39bDvl6Vo36fFjm+3xY/ft8WP77fFj++nxY/vt8WP77fFj++3xY/vt8WP77fFjx+nxXrPh8VScAAAAA5X9MCvt8WMf8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/7fFjr+HxXKfp6VnD8fFj//HxY//x8Wf/8fFn//HxZ//x8WP/8fFj//HxY//x8WP/8fFj//HxZ//x8Wf/8fFj//HxY//p7V7T6fFi5+31Z//t9WP/7fVn/+31Z//t9Wf/7fVj//H1Z//t9Wf/7fVn/+31Y//x9Wf/7fVn/+31Z//t9Wf/6fFj2+3xYx/t7WKf6elg0+ntY0Pp9WTn6elg0+npYNPp6WDT7fVZB+3xX5vp9WTn6elg0+nhVOfp6WGj7fFfs+nxY/Pt7V8f5e1eRAAAAAPl7V8T/bUgH+3tXRvx8WH/8fFh/+3xYh/t7V+/7eleD+nxYf/x9V2b/f38C+ntWbfp7WPz5e1jH+XtXkQAAAAD7e1fI4nFVCfp8WHn7fFn/+3xZ//t8Wf/7fFn/+3xZ//t8Wf/6e1jx/3hQE/l7VVn6e1j8+3xYx/l8V5EAAAAA+3xY3Pp6VTbicVUJ+XpWMvt5VkH8e1es/H1Z//p8WLz7fVZB93dXIOV/TAr8fFjF+nxZ/Pt8V8f5fFeRAAAAAPp8V937fFjk+3tWivp7V3r4fFkl/39bDvt8WOz7fFjN/H1YcPt6WEv/f1UG/HxYqvp8WPz7fFjH+XxXkQAAAAD6fFfd/H1Z//x9Wf/8fVn/+3xWgQAAAAD7e1fa/H1Z//x9Wf/7fFj08H9VEvl5VVb6fFj8+3tYx/l7V5EAAAAA+3tX2vt9V0P6fVU5+n1WNf9/TAr4fFkl+3tY5/p7Vj76fVU5+HlSKAAAAAD7e1aQ+nxY/Pt7V8b8e1jE+n1ZePt7V+v6fFh/+n1ZePp7WXj7e1iI+3xX4Pt7WPX6e1h8+n1ZePp7V3r6e1il+3xY/Pt7WPv6fFes+31Z//t9WP/7fVj/+31Y//t9WP/7fVn/+31Y//t9WP/7fVn/+31Z//t9WP/7fVj/+31Y//t9WP/6fFjs+HpYUfp8WP78fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn/+XxXlP8AAAH7fFeS+ntY/vx8Wf/8fFn//HxZ//x8Wf/8fFn//HxZ//x8Wf/8fFn//HxZ//x8Wf/7fFn/+3tYxu9vTxAAAAAA/wAAAft8Vkr6fFii+nxXuvx8V7r8fFe6/HxXuvx8V7r8fFe6/HxXuvx8V7r6fFeu+npYaP9/XwgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==
// @updateURL    https://raw.githubusercontent.com/olose/WebPlusJS/main/123%E4%BA%91%E7%9B%98%E5%88%86%E4%BA%AB%E9%A1%B5%20-%20%E9%9A%90%E8%97%8F%E8%83%8C%E6%99%AF%E5%9B%BE%E5%92%8C%E5%B9%BF%E5%91%8A.js
// @downloadURL  https://raw.githubusercontent.com/olose/WebPlusJS/main/123%E4%BA%91%E7%9B%98%E5%88%86%E4%BA%AB%E9%A1%B5%20-%20%E9%9A%90%E8%97%8F%E8%83%8C%E6%99%AF%E5%9B%BE%E5%92%8C%E5%B9%BF%E5%91%8A.js
// @homepage     https://github.com/olose/WebPlusJS/
// @homepageURL  https://github.com/olose/WebPlusJS/
// ==/UserScript==

(function() {
    'use strict';

    // 精确清除背景图和广告的函数
    function cleanBackgroundAndAds() {
        console.log('开始清理123云盘背景图和广告...');

        // 1. 直接清除背景图 - 通过移除background-image样式
        const bgElements = document.querySelectorAll('.web-body.svip-body.backgroundImage');
        bgElements.forEach(element => {
            element.style.backgroundImage = 'none';
            element.style.background = 'none';
            console.log('已清除背景图:', element);
        });

        // 2. 隐藏右上角的广告图（bg_svip_block_ads）
        const adImg = document.querySelector('img.bg_svip_block_ads');
        if (adImg) {
            adImg.style.display = 'none';
            console.log('已隐藏广告图:', adImg);
        }

        // 3. 确保背景容器没有多余的样式
        const style = document.createElement('style');
        style.textContent = `
            /* 强制清除所有可能的背景 */
            .web-body.svip-body.backgroundImage,
            .svip-body,
            .backgroundImage {
                background-image: none !important;
                background: none !important;
            }

            /* 隐藏广告图 */
            img.bg_svip_block_ads {
                display: none !important;
            }

            /* 可选：添加自定义背景色 */
            .web-body.svip-body.backgroundImage {
                background-color: #f5f5f5 !important;
            }
        `;

        // 移除旧样式（避免重复添加）
        const oldStyle = document.getElementById('clean-background-style');
        if (oldStyle) {
            oldStyle.remove();
        }

        style.id = 'clean-background-style';
        document.head.appendChild(style);
    }

    // 页面加载完成后立即执行
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', cleanBackgroundAndAds);
    } else {
        cleanBackgroundAndAds();
    }

    // 监听DOM变化，防止动态加载
    const observer = new MutationObserver(function(mutations) {
        let shouldClean = false;
        mutations.forEach(function(mutation) {
            if (mutation.addedNodes && mutation.addedNodes.length > 0) {
                shouldClean = true;
            }
        });
        if (shouldClean) {
            cleanBackgroundAndAds();
        }
    });

    // 开始观察DOM变化
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });

    // 防抖处理，防止频繁执行
    let cleanupTimeout;
    function debouncedCleanup() {
        clearTimeout(cleanupTimeout);
        cleanupTimeout = setTimeout(cleanBackgroundAndAds, 300);
    }

    // 额外监听一些可能触发背景变化的操作
    window.addEventListener('resize', debouncedCleanup);
})();
