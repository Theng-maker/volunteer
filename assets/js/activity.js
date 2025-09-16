(() => {
  // LIKE button
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.btn-like');
    if (!btn) return;
    e.preventDefault();
    const countEl = btn.querySelector('.like-count');
    let count = parseInt(countEl.textContent || '0', 10);
    const liked = !btn.classList.contains('btn-primary');
    count = Math.max(0, count + (liked ? 1 : -1));
    countEl.textContent = count;
    btn.classList.toggle('btn-primary', liked);
  });

  // Add comment
  document.addEventListener('click', (e) => {
    const add = e.target.closest('.btn-add-comment');
    if (!add) return;
    const wrap = add.closest('.comments-wrap');
    appendComment(wrap);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const input = e.target.closest('.comment-input');
      if (!input) return;
      e.preventDefault();
      const wrap = input.closest('.comments-wrap');
      appendComment(wrap);
    }
  }); 
  

  function appendComment(wrap){
    const input = wrap.querySelector('.comment-input');
    const list  = wrap.querySelector('.comments-list');
    if (!input || !list) return;

    const text = input.value.trim();
    if (!text) return;

    const li = document.createElement('li');
    li.className = 'comment-item';
    li.innerHTML = `
      <img src="../image/profile.png" class="comment-avatar" alt="">
      <div class="flex-grow-1">
        <div class="d-flex justify-content-between">
          <div><span class="comment-author">អ្នកប្រើប្រាស់</span><span class="comment-time ms-2">ឥឡូវនេះ</span></div>
        </div>
        <p class="comment-text">${escapeHtml(text)}</p>
        <div class="comment-actions">
          <span><i class="bi bi-hand-thumbs-up"></i> 0 ចូលចិត្ត</span>
          <span><i class="bi bi-reply"></i> 0 ចម្លើយ</span>
        </div>
      </div>`;
    list.prepend(li);
    input.value = '';

    const totalEl = wrap.querySelector('.comments-total');
    if (totalEl) totalEl.textContent = list.children.length;

    const countEl = wrap.closest('.card').querySelector('.comment-count');
    if (countEl) countEl.textContent = String(parseInt(countEl.textContent||'0',10)+1);
  }

  function escapeHtml(s){
    return s.replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));
  }

  // SHARE (copy deep link)
  document.addEventListener('click', async (e) => {
    const btn = e.target.closest('.btn-share');
    if (!btn) return;
    e.preventDefault();
    const card = btn.closest('.card');
    if (!card.id) card.id = 'post-' + Date.now();
    const url = `${location.origin}${location.pathname}#${card.id}`;
    try {
      await navigator.clipboard.writeText(url);
      const old = btn.innerHTML;
      btn.innerHTML = '<i class="bi bi-check2"></i> បានចម្លងតំណ';
      setTimeout(() => (btn.innerHTML = old), 1500);
    } catch {
      alert('មិនអាចចម្លងតំណបានទេ');
    }
  });
})();
