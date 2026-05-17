// 文件名: loadtheme.js
// 功能: Typecho 风格极简主题 - 亮色/暗色模式
(function() {
    if (window.__YgmzTypechoThemeLoaded) return;
    window.__YgmzTypechoThemeLoaded = true;

    console.log("🎨 Ygmz Typecho 主题加载中...");

    // 主题颜色配置
    const themeConfig = {
        light: {
            bodyBg: "#ffffff",
            bodyText: "#1a1a1a",
            headerBorder: "#eaeaea",
            cardBg: "#ffffff",
            cardBorder: "#eaeaea",
            cardHoverBorder: "#d4d4d4",
            titleColor: "#111111",
            metaColor: "#8b8b8b",
            excerptColor: "#555555",
            statsColor: "#9a9a9a",
            tagBg: "#f5f5f5",
            tagColor: "#555555",
            footerBorder: "#eaeaea",
            footerText: "#8b8b8b",
            linkColor: "#1a1a1a",
            linkHover: "#3b82f6"
        },
        dark: {
            bodyBg: "#0d0d0d",
            bodyText: "#e5e5e5",
            headerBorder: "#2a2a2a",
            cardBg: "#0d0d0d",
            cardBorder: "#2a2a2a",
            cardHoverBorder: "#404040",
            titleColor: "#ffffff",
            metaColor: "#6b6b6b",
            excerptColor: "#a0a0a0",
            statsColor: "#6b6b6b",
            tagBg: "#1f1f1f",
            tagColor: "#aaaaaa",
            footerBorder: "#2a2a2a",
            footerText: "#6b6b6b",
            linkColor: "#e5e5e5",
            linkHover: "#60a5fa"
        }
    };

    // 获取当前主题模式
    function getCurrentMode() {
        const mode = document.documentElement.getAttribute("data-color-mode");
        if (mode === "light" || mode === "dark") return mode;
        if (mode === "auto") {
            return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
        }
        return "light";
    }

    // 应用主题
    function applyTheme() {
        const mode = getCurrentMode();
        const config = themeConfig[mode];

        // 应用全局样式变量
        document.documentElement.style.setProperty("--ygmz-body-bg", config.bodyBg);
        document.documentElement.style.setProperty("--ygmz-body-text", config.bodyText);
        document.documentElement.style.setProperty("--ygmz-header-border", config.headerBorder);
        document.documentElement.style.setProperty("--ygmz-card-bg", config.cardBg);
        document.documentElement.style.setProperty("--ygmz-card-border", config.cardBorder);
        document.documentElement.style.setProperty("--ygmz-card-hover-border", config.cardHoverBorder);
        document.documentElement.style.setProperty("--ygmz-title-color", config.titleColor);
        document.documentElement.style.setProperty("--ygmz-meta-color", config.metaColor);
        document.documentElement.style.setProperty("--ygmz-excerpt-color", config.excerptColor);
        document.documentElement.style.setProperty("--ygmz-stats-color", config.statsColor);
        document.documentElement.style.setProperty("--ygmz-tag-bg", config.tagBg);
        document.documentElement.style.setProperty("--ygmz-tag-color", config.tagColor);
        document.documentElement.style.setProperty("--ygmz-footer-border", config.footerBorder);
        document.documentElement.style.setProperty("--ygmz-footer-text", config.footerText);
        document.documentElement.style.setProperty("--ygmz-link-color", config.linkColor);
        document.documentElement.style.setProperty("--ygmz-link-hover", config.linkHover);
    }

    // 注入样式
    const style = document.createElement("style");
    style.textContent = `
        /* ============================================
           Ygmz Typecho 极简主题
           兼容 Primer.css，覆盖默认样式
        ============================================ */

        /* ----- 全局基础 ----- */
        body {
            background-color: var(--ygmz-body-bg, #ffffff) !important;
            color: var(--ygmz-body-text, #1a1a1a) !important;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Helvetica Neue", sans-serif !important;
            font-size: 15px !important;
            line-height: 1.6 !important;
            padding: 2rem 1rem !important;
            max-width: 720px !important;
            margin: 0 auto !important;
        }

        /* ----- 头部 ----- */
        #header {
            border-bottom: 1px solid var(--ygmz-header-border, #eaeaea) !important;
            padding-bottom: 1.5rem !important;
            margin-bottom: 2rem !important;
            background: transparent !important;
        }

        .postTitle, .blogTitle {
            font-size: 1.6rem !important;
            font-weight: 500 !important;
            letter-spacing: -0.3px !important;
            color: var(--ygmz-title-color, #111111) !important;
        }

        /* ----- 副标题描述 ----- */
        #content > div:first-child {
            color: var(--ygmz-meta-color, #8b8b8b) !important;
            font-size: 0.85rem !important;
            margin-bottom: 2rem !important;
        }

        /* ----- 文章列表（Typecho 风格卡片）----- */
        .SideNav, [class*="post-list"] {
            display: flex !important;
            flex-direction: column !important;
            gap: 2rem !important;
        }

        .SideNav-item {
            display: block !important;
            background: var(--ygmz-card-bg, #ffffff) !important;
            border: none !important;
            border-bottom: 1px solid var(--ygmz-card-border, #eaeaea) !important;
            padding: 1rem 0 1.5rem 0 !important;
            transition: border-color 0.2s ease !important;
            text-decoration: none !important;
        }

        .SideNav-item:hover {
            border-bottom-color: var(--ygmz-card-hover-border, #d4d4d4) !important;
        }

        /* 文章标题 */
        .listTitle {
            font-size: 1.2rem !important;
            font-weight: 500 !important;
            color: var(--ygmz-title-color, #111111) !important;
            margin-bottom: 0.5rem !important;
            display: block !important;
            line-height: 1.4 !important;
        }

        .SideNav-item:hover .listTitle {
            color: var(--ygmz-link-hover, #3b82f6) !important;
        }

        /* 文章摘要/描述 */
        .list-description, .post-excerpt {
            color: var(--ygmz-excerpt-color, #555555) !important;
            font-size: 0.85rem !important;
            margin: 0.5rem 0 !important;
            line-height: 1.5 !important;
        }

        /* 元数据行（标签 + 日期 + 浏览数） */
        .listLabels, .post-meta {
            display: flex !important;
            flex-wrap: wrap !important;
            align-items: center !important;
            gap: 0.75rem !important;
            margin-top: 0.5rem !important;
        }

        /* 标签样式 */
        .Label {
            background: var(--ygmz-tag-bg, #f5f5f5) !important;
            color: var(--ygmz-tag-color, #555555) !important;
            padding: 0.2rem 0.6rem !important;
            border-radius: 4px !important;
            font-size: 0.7rem !important;
            font-weight: normal !important;
            border: none !important;
        }

        /* 日期 */
        .LabelTime {
            color: var(--ygmz-meta-color, #8b8b8b) !important;
            font-size: 0.7rem !important;
            background: transparent !important;
        }

        /* 浏览数/统计 */
        .post-stats, .list-stats {
            color: var(--ygmz-stats-color, #9a9a9a) !important;
            font-size: 0.7rem !important;
            margin-left: auto !important;
        }

        /* ----- 文章正文 ----- */
        .markdown-body {
            color: var(--ygmz-body-text, #1a1a1a) !important;
            line-height: 1.75 !important;
        }

        .markdown-body h1 {
            font-size: 1.8rem !important;
            font-weight: 500 !important;
            margin: 1.5rem 0 1rem !important;
        }

        .markdown-body h2 {
            font-size: 1.4rem !important;
            font-weight: 500 !important;
            margin: 1.5rem 0 0.75rem !important;
        }

        .markdown-body p {
            margin-bottom: 1.25rem !important;
        }

        .markdown-body a {
            color: var(--ygmz-link-hover, #3b82f6) !important;
            text-decoration: none !important;
        }

        .markdown-body a:hover {
            text-decoration: underline !important;
        }

        /* 代码块 */
        .markdown-body pre {
            background: #f5f5f5 !important;
            border-radius: 8px !important;
            padding: 1rem !important;
        }
        html[data-color-mode="dark"] .markdown-body pre {
            background: #1a1a1a !important;
        }

        /* ----- 分页 ----- */
        .pagination {
            display: flex !important;
            justify-content: center !important;
            gap: 0.5rem !important;
            margin-top: 3rem !important;
        }
        .pagination a, .pagination span {
            background: transparent !important;
            padding: 0.4rem 0.8rem !important;
            border-radius: 4px !important;
            color: var(--ygmz-meta-color, #8b8b8b) !important;
            text-decoration: none !important;
        }
        .pagination a:hover {
            background: var(--ygmz-tag-bg, #f5f5f5) !important;
            color: var(--ygmz-title-color, #111111) !important;
        }

        /* ----- 评论按钮 ----- */
        #cmButton {
            background: transparent !important;
            border: 1px solid var(--ygmz-card-border, #eaeaea) !important;
            border-radius: 30px !important;
            padding: 0.5rem 1.5rem !important;
            font-size: 0.8rem !important;
            color: var(--ygmz-body-text, #1a1a1a) !important;
            cursor: pointer !important;
            display: block !important;
            margin: 2rem auto 0 !important;
        }
        #cmButton:hover {
            border-color: var(--ygmz-link-hover, #3b82f6) !important;
        }

        /* ----- 页脚 ----- */
        #footer {
            border-top: 1px solid var(--ygmz-footer-border, #eaeaea) !important;
            padding-top: 1.5rem !important;
            margin-top: 3rem !important;
            text-align: center !important;
            font-size: 0.7rem !important;
            color: var(--ygmz-footer-text, #8b8b8b) !important;
        }
        #footer a {
            color: var(--ygmz-footer-text, #8b8b8b) !important;
            text-decoration: none !important;
        }

        /* ----- 响应式 ----- */
        @media (max-width: 640px) {
            body {
                padding: 1rem !important;
            }
            .listTitle {
                font-size: 1rem !important;
            }
            .listLabels {
                gap: 0.5rem !important;
            }
            .post-stats {
                margin-left: 0 !important;
                width: 100% !important;
            }
        }

        /* ----- 滚动条 ----- */
        ::-webkit-scrollbar {
            width: 6px;
        }
        ::-webkit-scrollbar-track {
            background: var(--ygmz-tag-bg, #f5f5f5);
        }
        ::-webkit-scrollbar-thumb {
            background: var(--ygmz-card-border, #eaeaea);
            border-radius: 3px;
        }
    `;
    document.head.appendChild(style);

    // 初始化主题
    applyTheme();

    // 监听主题变化
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.attributeName === "data-color-mode") {
                applyTheme();
            }
        });
    });
    observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ["data-color-mode"]
    });

    // 监听系统主题变化
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", function() {
        const mode = document.documentElement.getAttribute("data-color-mode");
        if (mode === "auto") {
            applyTheme();
        }
    });

    // 尝试为文章列表添加摘要和统计数据
    function enhancePostItems() {
        const items = document.querySelectorAll(".SideNav-item");
        items.forEach(function(item) {
            // 如果已经有摘要，跳过
            if (item.querySelector(".post-excerpt")) return;

            const excerpt = document.createElement("div");
            excerpt.className = "post-excerpt";
            // 尝试从正文提取摘要（如果有 .markdown-body 或直接内容）
            const content = item.querySelector(".markdown-body, .post-body");
            if (content) {
                const text = content.textContent.trim();
                excerpt.textContent = text.substring(0, 120) + (text.length > 120 ? "..." : "");
                item.appendChild(excerpt);
            }
        });
    }

    // 延迟执行，等待动态内容加载
    setTimeout(enhancePostItems, 500);

    console.log("✅ Ygmz Typecho 主题加载完成 | 亮色/暗色模式已启用");
})();
