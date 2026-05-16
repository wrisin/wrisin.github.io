// 文件名: ygmz-modern-ui.js
// 用途: 为 https://ygmz.net 注入现代UI样式（完美适配现有DOM结构）
(function() {
    const style = document.createElement('style');
    style.textContent = `
        /* ----- 全局重置与基调 ----- */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            background: linear-gradient(145deg, #f8fafc 0%, #eef2f6 100%);
            font-family: system-ui, -apple-system, 'Segoe UI', 'Roboto', 'Noto Sans', sans-serif;
            color: #1e293b;
            line-height: 1.6;
            padding: 2rem 1rem;
            margin: 0 auto;
            max-width: 1000px;
        }

        /* 适配暗色模式（保留原有主题切换功能，仅增强默认亮色样式）*/
        html[data-color-mode="dark"] body {
            background: linear-gradient(145deg, #0f172a 0%, #1e293b 100%);
            color: #e2e8f0;
        }

        /* ----- Header 区域美化 ----- */
        #header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding-bottom: 1.5rem;
            margin-bottom: 2rem;
            border-bottom: 1px solid rgba(0,0,0,0.08);
            background: rgba(255,255,255,0.5);
            backdrop-filter: blur(10px);
            border-radius: 48px;
            padding: 0.75rem 1.5rem;
            position: sticky;
            top: 1rem;
            z-index: 10;
            box-shadow: 0 4px 12px rgba(0,0,0,0.02);
        }

        html[data-color-mode="dark"] #header {
            background: rgba(30,41,59,0.6);
            border-bottom-color: rgba(255,255,255,0.1);
        }

        .title-left {
            display: flex;
            align-items: center;
            gap: 0.75rem;
        }

        .avatar {
            width: 48px;
            height: 48px;
            transition: all 0.5s cubic-bezier(0.2, 0.9, 0.4, 1.1);
            box-shadow: 0 8px 20px rgba(0,0,0,0.1);
        }
        .avatar:hover {
            transform: scale(1.08) rotate(8deg);
            box-shadow: 0 12px 28px rgba(0,0,0,0.2);
        }

        .blogTitle {
            font-size: 1.8rem;
            font-weight: 700;
            background: linear-gradient(135deg, #3b82f6, #a855f7);
            background-clip: text;
            -webkit-background-clip: text;
            color: transparent;
            letter-spacing: -0.02em;
        }

        .title-right {
            display: flex;
            gap: 0.5rem;
        }
        .title-right .btn {
            background: rgba(255,255,255,0.6);
            backdrop-filter: blur(4px);
            border-radius: 40px;
            padding: 10px;
            transition: all 0.2s;
        }
        .title-right .btn:hover {
            background: white;
            transform: translateY(-2px);
            box-shadow: 0 6px 14px rgba(0,0,0,0.1);
        }

        /* 副标题区域 */
        #content > div:first-child {
            font-size: 1.1rem;
            background: rgba(59,130,246,0.08);
            display: inline-block;
            padding: 0.5rem 1.2rem;
            border-radius: 40px;
            margin-bottom: 2rem;
            border-left: 3px solid #3b82f6;
            font-style: normal;
            color: #2c3e66;
        }
        html[data-color-mode="dark"] #content > div:first-child {
            background: rgba(59,130,246,0.2);
            color: #cbd5e1;
        }

        /* 文章列表卡片化 - 适配 .SideNav */
        .SideNav {
            border: none;
            display: flex;
            flex-direction: column;
            gap: 1rem;
            background: transparent;
        }

        .SideNav-item {
            background: rgba(255,255,255,0.85);
            backdrop-filter: blur(2px);
            border-radius: 28px;
            padding: 1.2rem 1.5rem;
            transition: all 0.3s cubic-bezier(0.2, 0, 0, 1);
            border: 1px solid rgba(255,255,255,0.6);
            box-shadow: 0 2px 6px rgba(0,0,0,0.02);
            text-decoration: none;
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            gap: 0.75rem;
        }

        html[data-color-mode="dark"] .SideNav-item {
            background: rgba(30,41,59,0.7);
            border-color: rgba(255,255,255,0.08);
            box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        }

        .SideNav-item:hover {
            transform: translateY(-6px);
            background: white;
            box-shadow: 0 20px 30px -12px rgba(0,0,0,0.2);
            border-color: #cbd5e1;
        }
        html[data-color-mode="dark"] .SideNav-item:hover {
            background: #334155;
            border-color: #5b6e8c;
        }

        /* 文章标题与图标区 */
        .d-flex {
            display: flex;
            align-items: center;
            gap: 12px;
            flex: 2;
            min-width: 180px;
        }
        .SideNav-icon {
            width: 24px;
            height: 24px;
            color: #3b82f6;
            flex-shrink: 0;
        }
        .listTitle {
            font-weight: 600;
            font-size: 1.05rem;
            color: #0f172a;
            transition: color 0.2s;
        }
        html[data-color-mode="dark"] .listTitle {
            color: #f1f5f9;
        }
        .SideNav-item:hover .listTitle {
            color: #3b82f6;
        }

        /* 标签和时间样式 */
        .listLabels {
            display: flex;
            gap: 8px;
            align-items: center;
            flex-wrap: wrap;
        }
        .Label {
            border-radius: 40px;
            padding: 4px 12px;
            font-size: 0.75rem;
            font-weight: 500;
            background-color: #eef2ff;
            color: #1e293b;
        }
        .Label a {
            color: inherit !important;
            text-decoration: none;
        }
        .LabelTime {
            background: #e2e8f0;
            color: #334155;
        }
        html[data-color-mode="dark"] .LabelTime {
            background: #475569;
            color: #e2e8f0;
        }

        /* 分页器美化 */
        .paginate-container {
            margin-top: 3rem;
        }
        .pagination {
            display: flex;
            justify-content: center;
            gap: 1rem;
        }
        .pagination a, .pagination span {
            background: white;
            padding: 0.6rem 1.4rem;
            border-radius: 60px;
            font-weight: 500;
            border: 1px solid #e2e8f0;
            transition: all 0.2s;
            text-decoration: none;
            color: #1e293b;
        }
        .pagination a:hover {
            background: #3b82f6;
            color: white;
            border-color: #3b82f6;
            transform: translateY(-2px);
        }
        .pagination .previous_page[aria-disabled="true"] {
            opacity: 0.5;
            cursor: not-allowed;
            background: #f1f5f9;
        }

        /* 页脚美化 */
        #footer {
            margin-top: 4rem;
            padding-top: 2rem;
            border-top: 1px solid rgba(0,0,0,0.08);
            text-align: center;
            font-size: 0.85rem;
            color: #5b6e8c;
        }
        #footer a {
            color: #3b82f6;
            text-decoration: none;
        }
        #footer a:hover {
            text-decoration: underline;
        }

        /* 响应式：手机优化 */
        @media (max-width: 640px) {
            body {
                padding: 1rem;
            }
            .SideNav-item {
                flex-direction: column;
                align-items: flex-start;
            }
            .listLabels {
                margin-left: 32px;
            }
            .blogTitle {
                font-size: 1.2rem;
            }
            .avatar {
                width: 36px;
                height: 36px;
            }
            #header {
                padding: 0.5rem 1rem;
                top: 0.5rem;
            }
        }

        /* 滚动与选中效果 */
        html {
            scroll-behavior: smooth;
        }
        ::selection {
            background: rgba(59,130,246,0.25);
            color: #0f172a;
        }

        /* 优化卡片内 SVG 图标颜色 */
        .SideNav-icon .octicon {
            fill: currentColor;
        }
        .SideNav-item .svgTop0, .SideNav-item .svgTop1 {
            transition: transform 0.2s;
        }
        .SideNav-item:hover .svgTop0,
        .SideNav-item:hover .svgTop1 {
            transform: scale(1.1);
        }
    `;
    document.head.appendChild(style);

    // 可选：增加一个小的控制台彩蛋
    console.log("%c✨ 一个马扎 - 现代UI已注入 | 保持优雅，保持热爱", "color: #3b82f6; font-size: 14px;");
})();
