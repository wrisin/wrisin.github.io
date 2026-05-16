(function() {
  const proxyDomain = 'https://img.ygmz.net';
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
