// 文件名: ygmz-primer-theme.js
// 功能: 基于 Primer CSS 变量覆盖，实现「紫霞幻境」主题
(function() {
    // 添加主题样式覆盖
    const style = document.createElement('style');
    style.textContent = `
        /* ============================================
           一个马扎 - 紫霞幻境主题
           基于 Primer CSS 变量覆盖
           不改变任何 HTML 结构
        ============================================ */

        :root {
            /* 亮色模式 - 主色调 */
            --color-canvas-default: #faf5ff;
            --color-canvas-subtle: #f3e8ff;
            --color-canvas-inset: #ffffff;
            
            --color-border-default: #e9d5ff;
            --color-border-muted: #f3e8ff;
            --color-border-subtle: #fae8ff;
            
            --color-fg-default: #2d1b4e;
            --color-fg-muted: #6b21a5;
            --color-fg-subtle: #a855f7;
            
            --color-accent-fg: #7c3aed;
            --color-accent-emphasis: #8b5cf6;
            --color-accent-muted: rgba(124, 58, 237, 0.1);
            --color-accent-subtle: rgba(139, 92, 246, 0.05);
            
            --color-success-fg: #059669;
            --color-success-emphasis: #10b981;
            --color-success-muted: rgba(5, 150, 105, 0.1);
            
            --color-danger-fg: #dc2626;
            --color-danger-emphasis: #ef4444;
            --color-danger-muted: rgba(220, 38, 38, 0.1);
            
            --color-attention-fg: #d97706;
            --color-attention-emphasis: #f59e0b;
            --color-attention-muted: rgba(217, 119, 6, 0.1);
            
            --color-btn-bg: #ffffff;
            --color-btn-border: #e9d5ff;
            --color-btn-hover-bg: #f3e8ff;
            --color-btn-active-bg: #e9d5ff;
            
            --color-header-bg: rgba(250, 245, 255, 0.8);
            --color-header-border: #e9d5ff;
            
            /* 渐变背景 */
            --gradient-header: linear-gradient(135deg, #faf5ff 0%, #fdf4ff 100%);
            --gradient-card: linear-gradient(135deg, #ffffff 0%, #fef9ff 100%);
        }

        /* 暗色模式 */
        html[data-color-mode="dark"] {
            --color-canvas-default: #0f0c1a;
            --color-canvas-subtle: #1a1625;
            --color-canvas-inset: #0a0812;
            
            --color-border-default: #2d2440;
            --color-border-muted: #1f1a2e;
            --color-border-subtle: #2a1f3a;
            
            --color-fg-default: #e9d5ff;
            --color-fg-muted: #c084fc;
            --color-fg-subtle: #a855f7;
            
            --color-accent-fg: #a78bfa;
            --color-accent-emphasis: #c084fc;
            --color-accent-muted: rgba(167, 139, 250, 0.15);
            --color-accent-subtle: rgba(167, 139, 250, 0.08);
            
            --color-btn-bg: #1a1625;
            --color-btn-border: #2d2440;
            --color-btn-hover-bg: #2d2440;
            --color-btn-active-bg: #3d3057;
            
            --color-header-bg: rgba(15, 12, 26, 0.8);
            --color-header-border: #2d2440;
            
            --gradient-header: linear-gradient(135deg, #0f0c1a 0%, #1a1625 100%);
            --gradient-card: linear-gradient(135deg, #1a1625 0%, #15122c 100%);
        }

        /* 全局背景与过渡 */
        body {
            background: var(--color-canvas-default) !important;
            transition: background-color 0.3s ease, color 0.2s ease;
        }

        /* Header 区域 - 毛玻璃效果 */
        #header {
            background: var(--color-header-bg) !important;
            backdrop-filter: blur(12px) !important;
            border-bottom: 1px solid var(--color-border-default) !important;
            border-radius: 20px !important;
            margin-bottom: 24px !important;
            padding: 12px 20px !important;
            transition: all 0.3s ease;
        }

        /* 头像装饰 */
        .avatar {
            border: 2px solid var(--color-accent-emphasis) !important;
            transition: all 0.4s cubic-bezier(0.2, 0.9, 0.4, 1.1) !important;
        }
        .avatar:hover {
            transform: scale(1.05) rotate(3deg) !important;
            border-color: #f43f5e !important;
        }

        /* 标题字体 */
        .blogTitle, .postTitle {
            background: linear-gradient(135deg, var(--color-accent-fg), #f43f5e) !important;
            background-clip: text !important;
            -webkit-background-clip: text !important;
            color: transparent !important;
        }

        /* 文章列表卡片效果 */
        .SideNav-item {
            background: var(--gradient-card) !important;
            border: 1px solid var(--color-border-default) !important;
            border-radius: 16px !important;
            margin-bottom: 12px !important;
            transition: all 0.3s cubic-bezier(0.2, 0, 0, 1) !important;
            backdrop-filter: blur(4px) !important;
        }
        .SideNav-item:hover {
            transform: translateY(-4px) !important;
            border-color: var(--color-accent-emphasis) !important;
            box-shadow: 0 20px 30px -15px rgba(124, 58, 237, 0.3) !important;
        }

        /* 标签样式 - 彩色药丸 */
        .Label {
            background: var(--color-accent-muted) !important;
            color: var(--color-accent-fg) !important;
            border-radius: 20px !important;
            padding: 4px 12px !important;
            font-weight: 500 !important;
        }
        .Label a {
            color: var(--color-accent-fg) !important;
        }

        /* 日期标签 */
        .LabelTime {
            background: var(--color-border-muted) !important;
            color: var(--color-fg-muted) !important;
        }

        /* 文章正文 */
        .markdown-body {
            background: var(--color-canvas-inset) !important;
            border-radius: 20px !important;
            padding: 32px !important;
            border: 1px solid var(--color-border-default) !important;
        }

        /* 代码块 */
        .markdown-body pre {
            background: #1e1b2e !important;
            border-radius: 12px !important;
            border: 1px solid #3d3057 !important;
        }
        .markdown-body code {
            background: var(--color-accent-muted) !important;
            color: var(--color-accent-fg) !important;
            border-radius: 6px !important;
        }

        /* 引用块 */
        .markdown-body blockquote {
            border-left: 4px solid var(--color-accent-emphasis) !important;
            background: var(--color-accent-subtle) !important;
            border-radius: 0 12px 12px 0 !important;
        }

        /* 链接 */
        a {
            color: var(--color-accent-fg) !important;
            transition: all 0.2s ease !important;
        }
        a:hover {
            color: #f43f5e !important;
        }

        /* 按钮 - 评论、分页等 */
        .btn, #cmButton, .pagination a, .pagination span {
            background: var(--color-btn-bg) !important;
            border: 1px solid var(--color-btn-border) !important;
            border-radius: 30px !important;
            transition: all 0.2s ease !important;
        }
        .btn:hover, #cmButton:hover, .pagination a:hover {
            background: var(--color-btn-hover-bg) !important;
            border-color: var(--color-accent-emphasis) !important;
            transform: translateY(-2px) !important;
        }

        /* 分页容器 */
        .pagination {
            gap: 8px !important;
        }

        /* 页脚 */
        #footer {
            border-top: 1px solid var(--color-border-default) !important;
            padding-top: 24px !important;
            margin-top: 48px !important;
        }

        /* 响应式调整 */
        @media (max-width: 640px) {
            .markdown-body {
                padding: 20px !important;
            }
            .SideNav-item {
                padding: 12px 16px !important;
            }
        }

        /* 滚动条美化 */
        ::-webkit-scrollbar {
            width: 8px;
            height: 8px;
        }
        ::-webkit-scrollbar-track {
            background: var(--color-canvas-subtle);
            border-radius: 10px;
        }
        ::-webkit-scrollbar-thumb {
            background: var(--color-accent-muted);
            border-radius: 10px;
        }
        ::-webkit-scrollbar-thumb:hover {
            background: var(--color-accent-emphasis);
        }

        /* 选中文字颜色 */
        ::selection {
            background: var(--color-accent-muted);
            color: var(--color-accent-fg);
        }
    `;
    document.head.appendChild(style);
    
    // 控制台输出
    console.log("%c✨ 紫霞幻境主题已加载 | 一个马扎", "color: #a78bfa; font-size: 14px; font-weight: bold;");
})();
