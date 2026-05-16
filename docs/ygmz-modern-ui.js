// 文件名: ygmz-retro.js
// 风格: 老式博客/打字机风格 · 极朴素质感
(function() {
    const style = document.createElement('style');
    style.textContent = `
        /* ---------- 复古基调 ---------- */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            background: #fdf8ed;  /* 旧纸色 */
            color: #2c2418;
            font-family: 'Courier New', 'Fira Code', 'Menlo', 'Consolas', monospace;
            font-size: 15px;
            line-height: 1.65;
            padding: 2rem 1.5rem;
            margin: 0 auto;
            max-width: 860px;
            box-shadow: none;
        }

        /* 暗色模式保留一点旧感（深色纸） */
        html[data-color-mode="dark"] body {
            background: #1a1612;
            color: #d9cdb0;
        }

        /* ---------- 头部 ---------- */
        #header {
            display: flex;
            justify-content: space-between;
            align-items: baseline;
            flex-wrap: wrap;
            gap: 1rem;
            padding-bottom: 1rem;
            margin-bottom: 2rem;
            border-bottom: 3px double #b87c4f;
        }
        html[data-color-mode="dark"] #header {
            border-bottom-color: #7e5a3e;
        }

        /* 首页标题区 */
        .title-left {
            display: flex;
            align-items: center;
            gap: 0.6rem;
        }

        .avatar {
            width: 48px;
            height: 48px;
            border-radius: 0;     /* 不要圆角 */
            border: 2px solid #b87c4f;
            padding: 2px;
            transition: none;
        }
        .avatar:hover {
            opacity: 0.9;
            transform: none;
        }

        .blogTitle, .postTitle {
            font-family: 'Courier New', monospace;
            font-weight: bold;
            letter-spacing: -0.3px;
            text-decoration: none;
            font-size: 1.6rem;
        }
        .blogTitle { font-size: 1.5rem; }
        .postTitle { font-size: 1.8rem; margin: 0; }

        /* 右侧按钮组 */
        .title-right {
            display: flex;
            gap: 0.25rem;
        }
        .title-right .btn {
            padding: 6px 8px;
            border: 1px solid #b87c4f;
            background: #fdf3e0;
            border-radius: 0;
            transition: background 0.1s;
        }
        .title-right .btn:hover {
            background: #e6d5b8;
        }
        html[data-color-mode="dark"] .title-right .btn {
            background: #2c2418;
            border-color: #7e5a3e;
        }
        html[data-color-mode="dark"] .title-right .btn:hover {
            background: #3f3322;
        }

        /* ---------- 首页文章列表（极简线条）---------- */
        .SideNav {
            border: none;
        }

        .SideNav-item {
            display: flex;
            justify-content: space-between;
            align-items: baseline;
            flex-wrap: wrap;
            gap: 0.5rem;
            padding: 0.9rem 0;
            text-decoration: none;
            border-bottom: 1px dotted #c9af8b;
            transition: none;
        }
        html[data-color-mode="dark"] .SideNav-item {
            border-bottom-color: #5e4b32;
        }

        .SideNav-item:hover {
            background: #f4ecdb;
            padding-left: 8px;
        }
        html[data-color-mode="dark"] .SideNav-item:hover {
            background: #2f281e;
        }

        .d-flex {
            display: flex;
            align-items: center;
            gap: 10px;
            flex: 2;
        }

        .SideNav-icon {
            width: 18px;
            height: 18px;
            opacity: 0.7;
        }

        .listTitle {
            font-size: 0.95rem;
            font-weight: normal;
            font-family: monospace;
        }

        .listLabels {
            display: flex;
            gap: 12px;
            font-size: 0.7rem;
            font-family: monospace;
        }

        .Label {
            background: none;
            border: 1px solid #c9af8b;
            padding: 2px 8px;
            border-radius: 0;
            font-size: 0.65rem;
            color: #7a5a3a;
        }
        .Label a { color: #7a5a3a !important; }
        .LabelTime {
            border: none;
            color: #9b7e5c;
        }
        html[data-color-mode="dark"] .Label {
            border-color: #7e5a3e;
            color: #c2a16b;
        }
        html[data-color-mode="dark"] .Label a { color: #c2a16b !important; }

        /* ---------- 文章正文（打字机风格）---------- */
        .markdown-body {
            font-family: 'Courier New', monospace;
            font-size: 0.95rem;
            line-height: 1.7;
            padding-bottom: 1rem;
            border-bottom: 1px dotted #c9af8b;
        }
        .markdown-body p {
            margin-bottom: 1.2rem;
        }
        .markdown-body hr {
            border: none;
            border-top: 2px dashed #c9af8b;
            margin: 2rem 0;
        }

        /* 评论按钮 */
        #cmButton {
            background: #fdf3e0;
            border: 2px solid #b87c4f;
            padding: 0.5rem 1.2rem;
            font-family: monospace;
            font-size: 0.8rem;
            border-radius: 0;
            cursor: pointer;
            margin-top: 2rem;
        }
        #cmButton:hover {
            background: #e6d5b8;
        }
        html[data-color-mode="dark"] #cmButton {
            background: #2c2418;
            border-color: #7e5a3e;
            color: #d9cdb0;
        }

        /* ---------- 分页 ---------- */
        .pagination {
            display: flex;
            justify-content: center;
            gap: 1rem;
            margin-top: 2rem;
        }
        .pagination a, .pagination span {
            background: none;
            border: 1px solid #b87c4f;
            padding: 4px 12px;
            font-family: monospace;
            font-size: 0.8rem;
            text-decoration: none;
            color: #5e3e22;
        }
        .pagination a:hover {
            background: #e6d5b8;
        }
        html[data-color-mode="dark"] .pagination a,
        html[data-color-mode="dark"] .pagination span {
            border-color: #7e5a3e;
            color: #c2a16b;
        }

        /* ---------- 页脚 ---------- */
        #footer {
            margin-top: 3rem;
            padding-top: 1.5rem;
            border-top: 1px dotted #c9af8b;
            text-align: center;
            font-size: 0.7rem;
            font-family: monospace;
            color: #8e6d48;
        }
        #footer a {
            color: #5e3e22;
            text-decoration: underline;
        }
        html[data-color-mode="dark"] #footer a {
            color: #c2a16b;
        }

        /* ---------- 响应式 ---------- */
        @media (max-width: 640px) {
            body { padding: 1rem; }
            .blogTitle, .postTitle { font-size: 1.2rem; }
            .SideNav-item { flex-direction: column; }
            .listLabels { margin-left: 28px; }
        }

        /* 选中文本 */
        ::selection {
            background: #dac29c;
            color: #2c2418;
        }
        html[data-color-mode="dark"] ::selection {
            background: #5e4b32;
            color: #eeddbb;
        }
    `;
    document.head.appendChild(style);
    console.log("%c↻ 复古打字机样式已加载", "color: #b87c4f; font-size: 12px; font-family: monospace");
})();
