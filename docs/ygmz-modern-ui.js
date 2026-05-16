// 文件名: ygmz-modern-v2.js
(function() {
    const style = document.createElement('style');
    style.textContent = `
        /* ----- 重置 & 基础 ----- */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            background: #ffffff;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica Neue', sans-serif;
            color: #111111;
            line-height: 1.5;
            padding: 2rem 1rem;
            margin: 0 auto;
            max-width: 860px;
        }

        /* 暗色模式 */
        html[data-color-mode="dark"] body {
            background: #0a0a0a;
            color: #ededed;
        }

        /* ----- Header ----- */
        #header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding-bottom: 2rem;
            margin-bottom: 2rem;
            border-bottom: 1px solid #eaeaea;
        }

        html[data-color-mode="dark"] #header {
            border-bottom-color: #2a2a2a;
        }

        .title-left {
            display: flex;
            align-items: center;
            gap: 0.75rem;
        }

        .avatar {
            width: 44px;
            height: 44px;
            border-radius: 50%;
            transition: opacity 0.2s;
        }
        .avatar:hover {
            opacity: 0.8;
        }

        .blogTitle {
            font-size: 1.5rem;
            font-weight: 600;
            letter-spacing: -0.3px;
            color: inherit;
            text-decoration: none;
        }

        .title-right {
            display: flex;
            gap: 0.25rem;
        }

        .title-right .btn {
            padding: 8px 10px;
            border-radius: 8px;
            transition: background 0.2s;
            color: #555;
        }
        .title-right .btn:hover {
            background: #f0f0f0;
        }
        html[data-color-mode="dark"] .title-right .btn:hover {
            background: #2a2a2a;
        }

        /* 副标题 */
        #content > div:first-child {
            font-size: 0.95rem;
            color: #666;
            margin-bottom: 2.5rem;
            padding-left: 0;
            border-left: none;
            background: none;
        }
        html[data-color-mode="dark"] #content > div:first-child {
            color: #aaa;
        }

        /* 文章列表 — 干净清爽 */
        .SideNav {
            border: none;
            display: flex;
            flex-direction: column;
            gap: 0;
        }

        .SideNav-item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1.2rem 0;
            text-decoration: none;
            border-bottom: 1px solid #f0f0f0;
            transition: all 0.2s ease;
            gap: 1rem;
            flex-wrap: wrap;
        }

        html[data-color-mode="dark"] .SideNav-item {
            border-bottom-color: #1f1f1f;
        }

        .SideNav-item:hover {
            transform: translateX(4px);
            border-bottom-color: #ccc;
        }

        /* 左侧标题区域 */
        .d-flex {
            display: flex;
            align-items: center;
            gap: 12px;
            flex: 2;
            min-width: 200px;
        }

        .SideNav-icon {
            width: 20px;
            height: 20px;
            opacity: 0.5;
            flex-shrink: 0;
        }
        .SideNav-item:hover .SideNav-icon {
            opacity: 0.8;
        }

        .listTitle {
            font-size: 1rem;
            font-weight: 450;
            color: #111;
            transition: color 0.2s;
        }
        html[data-color-mode="dark"] .listTitle {
            color: #eee;
        }
        .SideNav-item:hover .listTitle {
            color: #000;
            font-weight: 500;
        }
        html[data-color-mode="dark"] .SideNav-item:hover .listTitle {
            color: #fff;
        }

        /* 右侧标签和时间 */
        .listLabels {
            display: flex;
            gap: 10px;
            align-items: center;
            font-size: 0.75rem;
        }

        .Label {
            background: none;
            padding: 2px 8px;
            border-radius: 20px;
            font-size: 0.7rem;
            font-weight: 400;
            color: #888;
            border: 1px solid #e0e0e0;
        }
        .Label a {
            color: #888 !important;
            text-decoration: none;
        }
        .Label a:hover {
            color: #111 !important;
        }
        .LabelTime {
            background: none;
            border: none;
            color: #aaa;
        }

        html[data-color-mode="dark"] .Label {
            border-color: #333;
            color: #aaa;
        }
        html[data-color-mode="dark"] .LabelTime {
            color: #666;
        }

        /* 分页 */
        .paginate-container {
            margin-top: 3rem;
        }
        .pagination {
            display: flex;
            justify-content: center;
            gap: 1rem;
        }
        .pagination a, .pagination span {
            background: transparent;
            padding: 0.5rem 1rem;
            border-radius: 0;
            font-size: 0.9rem;
            font-weight: 400;
            border: none;
            color: #333;
            text-decoration: none;
            transition: all 0.2s;
        }
        .pagination a:hover {
            background: #f5f5f5;
            color: #000;
        }
        html[data-color-mode="dark"] .pagination a, 
        html[data-color-mode="dark"] .pagination span {
            color: #ccc;
        }
        html[data-color-mode="dark"] .pagination a:hover {
            background: #1a1a1a;
            color: #fff;
        }
        .pagination .previous_page[aria-disabled="true"] {
            opacity: 0.4;
        }

        /* 页脚 */
        #footer {
            margin-top: 4rem;
            padding-top: 2rem;
            border-top: 1px solid #eaeaea;
            text-align: center;
            font-size: 0.75rem;
            color: #999;
        }
        html[data-color-mode="dark"] #footer {
            border-top-color: #1f1f1f;
        }
        #footer a {
            color: #555;
            text-decoration: none;
        }
        #footer a:hover {
            color: #000;
            text-decoration: underline;
        }
        html[data-color-mode="dark"] #footer a {
            color: #aaa;
        }

        /* 响应式 */
        @media (max-width: 640px) {
            body {
                padding: 1rem;
            }
            .SideNav-item {
                flex-direction: column;
                align-items: flex-start;
                gap: 0.5rem;
            }
            .blogTitle {
                font-size: 1.2rem;
            }
            .avatar {
                width: 32px;
                height: 32px;
            }
            .listLabels {
                margin-left: 32px;
            }
        }

        /* 辅助 */
        ::selection {
            background: #e0e0e0;
            color: #000;
        }
        html[data-color-mode="dark"] ::selection {
            background: #333;
            color: #fff;
        }
    `;
    document.head.appendChild(style);
    console.log("%c✓ 极简模式已启用 | 一个马扎", "color: #333; font-size: 12px;");
})();
