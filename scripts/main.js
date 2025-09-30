async function loadMembers() {
  const container = document.getElementById('members');
  try {
    const res = await fetch('data/members.json', { cache: 'no-store' });
    const members = await res.json();
    members.forEach(m => {
      const card = document.createElement('article');
      card.className = 'card';
      card.innerHTML = `
        <img src="${m.image || 'images/placeholder.jpg'}" alt="${m.name}">
        <h3>${m.name}</h3>
        <p>${m.role || 'Member'}</p>
        <div class="badges">
          ${(m.interests || []).map(i => `<span class="badge">${i}</span>`).join('')}
        </div>
        ${m.github ? `<p><a href="https://github.com/${m.github}" target="_blank">@${m.github}</a></p>` : ''}
      `;
      container.appendChild(card);
    });
  } catch (e) {
    container.innerHTML = `<p>Could not load members. Try refreshing.</p>`;
    console.error(e);
  }
}
loadMembers();
