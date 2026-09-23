// Conteúdo compartilhado, publicado pelo painel ADM no servidor.
(async function () {
  try {
    const response = await fetch('https://teste.anotaai.site/painel-adm/admin/api.php', {cache: 'no-store'});
    if (!response.ok) return;
    const data = await response.json();
    const desktop = document.getElementById('sermao1');
    const mobile = document.getElementById('sermao2');
    if (Array.isArray(data.sermons) && desktop && mobile) {
      desktop.replaceChildren();
      mobile.replaceChildren();
      for (const sermon of data.sermons) {
        if (!/^[\w-]{11}$/.test(sermon.id)) continue;
        const thumb = `https://img.youtube.com/vi/${sermon.id}/hqdefault.jpg`;
        const card = document.createElement('div');
        card.className = 'videos';
        const img = document.createElement('img'); img.src = thumb; img.alt = sermon.title; img.loading = 'lazy'; img.style.width = '100%';
        const title = document.createElement('h3'); title.textContent = sermon.title;
        const author = document.createElement('p'); author.textContent = sermon.author;
        card.append(img, title, author);
        card.addEventListener('click', () => trocarVideo(sermon.id));
        desktop.append(card);
        const mobileCard = document.createElement('div'); mobileCard.className = 'videos-mobile';
        const button = document.createElement('button'); button.type = 'button';
        const mobileImg = document.createElement('img'); mobileImg.src = thumb; mobileImg.alt = sermon.title; mobileImg.loading = 'lazy';
        button.append(mobileImg);
        const mTitle = document.createElement('h3'); mTitle.textContent = sermon.title;
        const mAuthor = document.createElement('p'); mAuthor.textContent = sermon.author;
        mobileCard.append(button, mTitle, mAuthor);
        mobileCard.addEventListener('click', () => {
          trocarVideo(sermon.id);
          const iframe = document.createElement('iframe'); iframe.src = `https://www.youtube.com/embed/${sermon.id}?autoplay=1`;
          iframe.title = sermon.title; iframe.allow = 'autoplay; fullscreen'; iframe.allowFullscreen = true;
          const current = mobileCard.querySelector('iframe, img');
          if (current && current.tagName !== 'IFRAME') current.replaceWith(iframe);
        });
        mobile.append(mobileCard);
      }
      const selected = data.mainVideo || data.sermons[0]?.id;
      if (/^[\w-]{11}$/.test(selected || '')) trocarVideo(selected);
    }
    if (data.verse) {
      document.getElementById('verse-reference').textContent = data.verse.reference;
      document.getElementById('verse-text').textContent = data.verse.text;
    }
    if (data.featured && /^[\w-]{11}$/.test(data.featured.id)) {
      document.getElementById('featured-player').src = `https://www.youtube.com/embed/${data.featured.id}`;
      document.getElementById('featured-title').textContent = data.featured.title;
    }
  } catch (error) { console.error('Não foi possível carregar o conteúdo publicado.', error); }
})();
