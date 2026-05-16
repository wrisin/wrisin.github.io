// 文件名: ygmz-unified.js
// 用途: 同时美化首页列表 + 文章正文页
(function() {
    const style = document.createElement('style');
    style.textContent = `
        /* ===== 全局基础 ===== */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            background: #ffffff;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica Neue', sans-serif;
            color: #111111;
            line-height: 1.6;
            padding: 2rem 1rem;
            margin: 0 auto;
            max-width: 860px;
        }

        html[data-color-mode="dark"] body {
            background: #0a0a0a;
            color: #ededed;
        }

        /* ===== 头部（首页和文章页通用）===== */
        #header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            gap: 1rem;
            padding-bottom: 1.5rem;
            margin-bottom: 2rem;
            border-bottom: 1px solid #eaeaea;
        }

        html[data-color-mode="dark"] #header {
            border-bottom-color: #2a2a2a;
        }

        /* 首页：标题区 */
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
        }

        /* 文章页：大标题 */
        .postTitle {
            font-size: 2rem;
            font-weight: 600;
            letter-spacing: -0.02em;
            line-height: 1.3;
            margin: 0;
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

        /* ===== 首页：文章列表 ===== */
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

        .listTitle {
            font-size: 1rem;
            font-weight: 450;
            transition: color 0.2s;
        }

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
        .LabelTime {
            background: none;
            border: none;
            color: #aaa;
        }

        html[data-color-mode="dark"] .Label {
            border-color: #333;
            color: #aaa;
        }

        /* ===== 文章页：正文 ===== */
        .markdown-body {
            font-size: 1rem;
            line-height: 1.75;
            padding-bottom: 2rem;
            border-bottom: 1px solid #f0f0f0;
        }

        html[data-color-mode="dark"] .markdown-body {
            border-bottom-color: #1f1f1f;
        }

        .markdown-body p {
            margin-bottom: 1.5rem;
        }

        .markdown-body hr {
            margin: 2rem 0;
            border: none;
            border-top: 1px solid #eaeaea;
        }

        /* 评论按钮 */
        #cmButton {
            background: transparent;
            border: 1px solid #e0e0e0;
            padding: 0.75rem 1.5rem;
            font-size: 0.85rem;
            border-radius: 30px;
            cursor: pointer;
            transition: all 0.2s;
            margin-top: 2rem;
        }
        #cmButton:hover {
            background: #f5f5f5;
            border-color: #ccc;
        }
        html[data-color-mode="dark"] #cmButton {
            border-color: #333;
            color: #ccc;
        }
        html[data-color-mode="dark"] #cmButton:hover {
            background: #1a1a1a;
        }

        /* ===== 分页（首页）===== */
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
            font-size: 0.9rem;
            color: #333;
            text-decoration: none;
        }
        .pagination a:hover {
            background: #f5f5f5;
        }
        html[data-color-mode="dark"] .pagination a,
        html[data-color-mode="dark"] .pagination span {
            color: #ccc;
        }
        html[data-color-mode="dark"] .pagination a:hover {
            background: #1a1a1a;
        }

        /* ===== 页脚 ===== */
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

        /* ===== 响应式 ===== */
        @media (max-width: 640px) {
            body {
                padding: 1rem;
            }
            .postTitle {
                font-size: 1.6rem;
            }
            .blogTitle {
                font-size: 1.2rem;
            }
            .avatar {
                width: 32px;
                height: 32px;
            }
            .SideNav-item {
                flex-direction: column;
                align-items: flex-start;
            }
            .listLabels {
                margin-left: 32px;
            }
            .title-right {
                margin-left: auto;
            }
        }

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
    console.log("%c✓ 统一极简样式已加载（首页+文章页）", "color: #333; font-size: 12px;");
})();
