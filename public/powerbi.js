const btn = document.getElementById('pbiLoad');
if (btn) {
  btn.addEventListener('click', () => {
    const raw = document.getElementById('pbiUrl').value.trim();
    const token = (document.getElementById('pbiToken')?.value || '').trim();
    const iframe = document.getElementById('pbiFrame');

    if (!raw) return alert('Provide an Embed URL or an <iframe> snippet.');

    // If the user pasted an <iframe>, extract its src
    const m = raw.match(/src\s*=\s*["']([^"']+)["']/i);
    const url = m ? m[1] : raw;

    const isPublic = /powerbi\.com\/view\?r=|playground\.powerbi\.com/i.test(url);
    if (!isPublic && !token) {
      return alert('Provide Embed URL and Embed Token.');
    }

    iframe.src = url; // direct load for public links; token is just for org embeds in real apps
  });
}
