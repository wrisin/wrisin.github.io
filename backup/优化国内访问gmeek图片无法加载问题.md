gmeek文章基于github issues，issues附件图片在我家这片反正一直没正常显示过。得益于AI的变态发展，A到一个损失较小的解决方案：workers反代+脚本替换文章图片链接，好处是对gmeek构建程序完全没有修改，不影响后续升级。
**操作前提：**
1.你有一个顶级域名
2.github已经绑定顶级域名
3.域名解析在cloudflare
4.没了

### 一、配置Cloudflare

Cloudflare中“构建-Workers 和 Pages-创建应用程序”➡️从Hello World！开始➡️Worker name自己随便起一个➡️部署➡️右上角编辑代码➡️复制粘贴以下代码➡️部署➡️域-添加域名-选域名-自定义域-子域名随便起个名字-添加域名➡️Cloudflare部分结束

```
export default {
  async fetch(request) {
    const url = new URL(request.url);
    const pathParts = url.pathname.split('/').filter(part => part !== '');
    
    if (pathParts.length === 1) {
      const imageId = pathParts[0];
      const originalUrl = `https://github.com/user-attachments/assets/${imageId}`;
      const newRequest = new Request(originalUrl, {
        headers: { 'User-Agent': 'Cloudflare-Worker-Proxy' }
      });
      return fetch(newRequest);
    }
    
    return new Response('Not Found', { status: 404 });
  }
}
```

### 二、配置Github

进入gmeek项目➡️进入static文件夹，点击add file-create new file，起个脚本名，可以是“ghattprx.js”，复制粘贴以下代码，点击commit changes

```
(function() {
  const proxyDomain = '这里填你刚才第一步的自定义域名';
  const images = document.querySelectorAll('img[src*="github.com/user-attachments/assets/"]');
  
  images.forEach(img => {
    const match = img.src.match(/assets\/([a-f0-9\-]+)/);
    if (match) {
      // 先让图片透明，避免闪烁时的突兀感
      img.style.opacity = '0.3';
      img.style.transition = 'opacity 0.2s';
      
      const newSrc = `${proxyDomain}/${match[1]}`;
      img.src = newSrc;
      
      // 新图片加载完成后恢复透明度
      img.onload = () => {
        img.style.opacity = '1';
      };
    }
  });
})();
```

编辑config.json，复制粘贴以下代码到最后一行，点击commit changes➡️进入actions-build gmeek-run workflow➡️大功告成

```
"script":"<script src='https://ygmz.net/ghattprx.js'></script>"
```