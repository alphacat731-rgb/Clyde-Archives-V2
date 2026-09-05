(() => {
  const ICONS = {
    bot:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="5" width="18" height="14" rx="4"/><path d="M12 2v3"/><circle cx="8.5" cy="12" r="1"/><circle cx="15.5" cy="12" r="1"/><path d="M8 16h8"/></svg>',
    compass:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polygon points="16 8 14 14 8 16 10 10 16 8"/></svg>',
    sparkles:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9L12 3z"/><path d="M19 15l.7 1.9 1.8.6L19 18l-.7 1.9-.7-1.9-1.8-.6 1.8-.6L19 15z"/></svg>',
    palette:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c1.7 0 3-1.3 3-3 0-.8-.3-1.5-.8-2-.5-.5-.7-1.1-.7-1.7 0-1.4 1.1-2.5 2.5-2.5H19c1.7 0 3-2.2 3-4.7C22 5.6 17.5 2 12 2Z"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/></svg>',
    smile:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>',
    search:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>',
    external:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>',
    x:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>'
  };

  const VERIFIED = [
    { title:'Anthro Clyde', artist:'LiquidCrystalBunny', tags:['anthro','discord','furry'], url:'https://www.newgrounds.com/art/view/zaxolotl/anthro-clyde', image:'https://art.ngfiles.com/images/2531000/2531864_samrunner_discord.png?f1653146054=', note:'Verified Clyde/Discord anthro-furry artwork on Newgrounds.' },
    { title:'Discord', artist:'SamRunner', tags:['clyde','discord','furry','fanart'], url:'https://www.newgrounds.com/art/view/samrunner/discord', image:'https://art.ngfiles.com/images/2531000/2531864_samrunner_discord.png?f1653146054=', note:'Verified Clyde Discord fanart on Newgrounds.' },
    { title:'Discord Furry LOL', artist:'DatsFunny', tags:['clyde','discord','discord-furry'], url:'https://www.newgrounds.com/art/view/datsfunny/discord-furry-lol', image:null, note:'Verified result tagged Clyde, Discord, and Discord-furry.' },
    { title:'Clyde the Dog', artist:'ToonThick', tags:['clyde','anthro','anthropomorphic','furry'], url:'https://www.newgrounds.com/art/view/toonthick/clyde-the-dog', image:null, note:'Verified recent anthro/furry Clyde result.' }
  ];

  const $=id=>document.getElementById(id);
  const input=$('search-input'),grid=$('art-grid'),title=$('section-title'),count=$('result-count'),clear=$('clear-search'),status=$('search-status');
  const norm=s=>String(s??'').normalize('NFKD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
  const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const paintIcons=()=>document.querySelectorAll('[data-icon]').forEach(el=>el.innerHTML=ICONS[el.dataset.icon]||'');
  const matches=(item,term)=>norm(term).split(/\s+/).filter(Boolean).every(w=>norm([item.title,item.artist,...item.tags].join(' ')).includes(w));

  function liveSearch(term){
    const q=(term||'clyde discord').trim();
    const u=new URL('https://www.newgrounds.com/search/conduct/art');
    u.searchParams.set('suitabilities','et');
    u.searchParams.set('match','tags');
    u.searchParams.set('tags',q);
    window.open(u.toString(),'_blank','noopener,noreferrer');
  }

  function render(items,term=''){
    grid.innerHTML='';
    items.forEach((item,i)=>{
      const card=document.createElement('article');card.className='art-card';
      const media=item.image?`<button class="art-image-container" type="button" aria-label="Open ${esc(item.title)}"><img class="art-image" src="${esc(item.image)}" alt="${esc(item.title)} by ${esc(item.artist)}" loading="lazy" referrerpolicy="no-referrer"><span class="source-badge">NEWGROUNDS</span></button>`:`<a class="art-image-container no-image" href="${esc(item.url)}" target="_blank" rel="noopener noreferrer"><div class="no-image-inner"><span class="icon w-8 h-8 text-[#8ea1ff]" data-icon="search"></span><strong>Open artwork</strong><small>Newgrounds preview</small></div><span class="source-badge">NEWGROUNDS</span></a>`;
      card.innerHTML=`${media}<div class="p-4"><div class="flex items-center justify-between gap-2 mb-1"><h3 class="font-bold text-white text-sm truncate">${esc(item.title)}</h3><span class="text-[10px] text-[#949ba4]">${i+1}</span></div><div class="text-xs text-[#b5bac1] mb-2">by ${esc(item.artist)}</div><p class="text-xs text-[#949ba4] leading-5 mb-3">${esc(item.note)}</p><div class="flex flex-wrap gap-1.5 mb-3">${item.tags.map(t=>`<span class="bg-[#383a40] text-[10px] text-[#b5bac1] px-2 py-0.5 rounded">${esc(t)}</span>`).join('')}</div><a class="inline-flex items-center gap-1.5 text-xs font-bold text-[#8ea1ff] hover:text-white" href="${esc(item.url)}" target="_blank" rel="noopener noreferrer">View on Newgrounds <span class="icon w-3.5 h-3.5" data-icon="external"></span></a></div>`;
      if(item.image)card.querySelector('button').addEventListener('click',()=>open(item));
      grid.appendChild(card);
    });
    paintIcons();
    title.textContent=term?`Verified Clyde results for “${term}”`:'Verified Clyde artworks from Newgrounds';
    count.textContent=`${items.length} result${items.length===1?'':'s'}`;
    clear.classList.toggle('hidden',!term);
  }
  function open(item){$('lightbox-img').src=item.image;$('lightbox-img').alt=item.title;$('lightbox-title').textContent=`${item.title} — ${item.artist}`;$('lightbox-link').href=item.url;$('lightbox').classList.add('open');}
  function close(){ $('lightbox').classList.remove('open');$('lightbox-img').src=''; }

  $('search-form').addEventListener('submit',e=>{e.preventDefault();const term=input.value.trim();const results=VERIFIED.filter(x=>!term||matches(x,term));render(results,term);status.innerHTML=`Newgrounds is the source. <button id="live-search" class="underline text-[#8ea1ff] hover:text-white" type="button">Open live tag results ↗</button>`;$('live-search').onclick=()=>liveSearch(term);});
  clear.onclick=()=>{input.value='';status.textContent='';render(VERIFIED);};
  document.querySelectorAll('[data-category]').forEach(b=>b.onclick=()=>{const term=b.dataset.category||'';input.value=term;render(VERIFIED.filter(x=>!term||matches(x,term)),term);});
  $('newgrounds-search').onclick=()=>liveSearch(input.value);
  $('lightbox').onclick=e=>{if(e.target===$('lightbox'))close();};$('lightbox-close').onclick=close;document.onkeydown=e=>{if(e.key==='Escape')close();};
  paintIcons();render(VERIFIED);
})();
