/* Shared header / footer / icons for the HKIC tender demo */
const ICON = {
  search:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/></svg>',
  menu:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h10"/></svg>',
  clock:'<svg viewBox="0 0 512 512" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><g> <g> <path d="M347.216,301.211l-71.387-53.54V138.609c0-10.966-8.864-19.83-19.83-19.83c-10.966,0-19.83,8.864-19.83,19.83v118.978 c0,6.246,2.935,12.136,7.932,15.864l79.318,59.489c3.569,2.677,7.734,3.966,11.878,3.966c6.048,0,11.997-2.717,15.884-7.952 C357.766,320.208,355.981,307.775,347.216,301.211z"/> </g> </g> <g> <g> <path d="M256,0C114.833,0,0,114.833,0,256s114.833,256,256,256s256-114.833,256-256S397.167,0,256,0z M256,472.341 c-119.275,0-216.341-97.066-216.341-216.341S136.725,39.659,256,39.659c119.295,0,216.341,97.066,216.341,216.341 S375.275,472.341,256,472.341z"/> </g> </g></svg>',
  pin:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 21s7-6.2 7-12a7 7 0 10-14 0c0 5.8 7 12 7 12z"/><circle cx="12" cy="9" r="2.5"/></svg>',
  lang:'<svg viewBox="0 0 527.982 527.982" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><g><g><path d="m237.572 527.98c-3.967 0-7.995-.898-11.785-2.793-13.041-6.521-18.326-22.378-11.806-35.417l39.333-78.666c.164-.346.334-.686.512-1.024l92.148-184.296c4.471-8.944 13.613-14.593 23.612-14.593s19.14 5.649 23.612 14.593l92.155 184.311c.173.327.338.66.498.996l39.339 78.68c6.519 13.039 1.234 28.896-11.806 35.417-13.037 6.518-28.896 1.235-35.417-11.806l-32.301-64.602h-152.16l-32.301 64.602c-4.626 9.249-13.949 14.598-23.633 14.598zm82.333-132h99.362l-49.681-99.362zm-293.481 56.209c-9.707 0-19.049-5.375-23.661-14.658-6.487-13.057-1.162-28.901 11.895-35.387 52.263-25.967 98.303-61.601 136.129-104.222-23.475-31.739-43.101-66.149-58.623-102.845-5.681-13.427.6-28.917 14.028-34.597 13.427-5.68 28.917.601 34.597 14.029 11.971 28.3 26.665 55.074 43.944 80.114 30.938-44.841 53.772-95.295 66.757-149.026h-225.086c-14.58 0-26.399-11.819-26.399-26.399s11.82-26.398 26.399-26.398h131.993v-26.399c0-14.58 11.819-26.399 26.399-26.399s26.399 11.819 26.399 26.399v26.399h72.13c.307-.005.615-.005.922 0h58.94c14.58 0 26.399 11.819 26.399 26.399s-11.82 26.399-26.399 26.399h-37.547c-15.058 70.119-45.049 135.571-86.95 192.281 4.15 4.668 8.402 9.255 12.759 13.765 10.13 10.487 9.84 27.198-.645 37.328-10.487 10.129-27.2 9.839-37.328-.645-2.95-3.054-5.86-6.142-8.724-9.26-41.203 44.937-90.715 82.594-146.601 110.36-3.775 1.874-7.781 2.762-11.727 2.762z" /></g></g></svg>',
  list:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="6" rx="2"/><rect x="3" y="14" width="18" height="6" rx="2"/><path d="M7 7h6M7 17h6"/></svg>',
  cal:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/></svg>',
  cap:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M2 9l10-5 10 5-10 5z"/><path d="M6 11v5c3 2 9 2 12 0v-5"/></svg>',
  level:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 20h18M5 20v-4h4v4M10 20v-8h4v8M15 20V8h4v12"/></svg>',
  swap:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 8h14l-4-4M20 16H6l4 4"/></svg>',
  up:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 20h16M7 16l4-4 3 3 6-7"/><path d="M15 8h5v5"/></svg>',
  shield:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/><path d="M8.5 12l2.5 2.5 4.5-5"/></svg>',
  hash:'<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><g id="Icon"><path d="m2.134 10.356c-.566-.313-.884-.861-.884-1.434 0-.574.318-1.122.884-1.434l8.314-4.595c.944-.521 2.16-.521 3.104 0l8.314 4.595c.566.312.884.86.884 1.434 0 .573-.318 1.121-.884 1.434l-8.314 4.594c-.944.522-2.16.522-3.104 0zm.725-1.313 8.314 4.594c.503.278 1.151.278 1.654 0l8.314-4.594c.055-.03.109-.066.109-.121 0-.056-.054-.091-.109-.122l-8.314-4.594c-.503-.278-1.151-.278-1.654 0l-8.314 4.594c-.055.031-.109.066-.109.122 0 .055.054.091.109.121z"/><path d="m18.25 11.25c0-.414.336-.75.75-.75s.75.336.75.75v4.5c0 2.071-1.679 3.75-3.75 3.75h-8c-2.071 0-3.75-1.679-3.75-3.75v-4.5c0-.414.336-.75.75-.75s.75.336.75.75v4.5c0 1.243 1.007 2.25 2.25 2.25h8c1.243 0 2.25-1.007 2.25-2.25z"/><path d="m11.47 9.78c-.293-.292-.293-.768 0-1.06.292-.293.768-.293 1.06 0l3.5 3.5c.141.14.22.331.22.53v8c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-7.689z"/></g></svg>',
  hourglass:'<svg viewBox="0 0 24 24" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><g transform="translate(-62.744 -90.903)"><path d="m77.744 94.903v-1c0-.552.448-1 1-1s1 .448 1 1v1c2.209 0 4 1.791 4 4v10c0 2.209-1.791 4-4 4-2.86 0-7.141 0-10 0-2.209 0-4-1.791-4-4v-10c0-2.209 1.791-4 4-4v-1c0-.552.448-1 1-1s1 .448 1 1v1zm4 8h-14v6c0 1.104.895 2 2 2h10c1.104 0 2-.896 2-2zm-2-6v1c0 .552-.448 1-1 1s-1-.448-1-1v-1h-6v1c0 .552-.448 1-1 1s-1-.448-1-1v-1c-1.105 0-2 .895-2 2v2h14v-2c0-1.105-.896-2-2-2z"/></g></svg>',
  coin:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M14.8 9.2c-.5-.9-1.6-1.4-2.8-1.4-1.6 0-2.8.8-2.8 2s1.2 1.7 2.8 2.1 2.9.9 2.9 2.2-1.3 2.1-2.9 2.1c-1.3 0-2.5-.6-3-1.5M12 6v1.8M12 16.2V18"/></svg>',
  filter:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 6h16M7 12h10M10 18h4"/></svg>'
};
function icons(root=document){root.querySelectorAll('[data-i]').forEach(el=>{el.innerHTML=ICON[el.dataset.i]||''})}

/* Header and footer reproduce the current hkic.edu.hk markup; styles come from hkic-shell.css (extracted from the live site CSS). */
function shell(active){
  const nav=[['課程及入學','programmes.html'],['業界夥伴','#'],['校園生活','#'],['消息及活動','#'],['關於我們','#']];
  const hd=`<header class="hkic_head"><a class="sr" href="#main">跳至主要內容</a>
  <div class="hkic_main"><div class="hkic_head_container">
    <div class="hkic_head_logo"><a href="programmes.html" aria-label="HKIC"><img src="assets/logo_hkic.svg" class="normal" alt="香港建造學院 HKIC"><img src="assets/logo_hkic_simplified.svg" class="small" alt="香港建造學院 HKIC"></a></div>
    <div class="hkic_head_menu">
      <div class="hkic_head_menu_top">
        <div class="hkic_head_menu_group"><a href="#">建造業議會</a><a href="#">建造專業進修院校</a></div>
        <div class="hkic_head_menu_group"><a href="#" class="hkic_head_menu_group_drop" role="button">快速連結</a></div>
        <div class="hkic_head_menu_group"><a href="#">聯絡我們</a><a href="#">位置與地圖</a><a href="#">常見問題</a></div>
        <div class="hkic_head_menu_group hkic_head_menu_group--lang"><a href="#">EN</a><a class="active">繁</a><a href="#">简</a></div>
      </div>
      <div class="hkic_head_menu_main">
        ${nav.map(([n,u])=>`<a href="${u}" class="${n===active?'active':''}">${n}</a>`).join('')}
        <a href="search.html" class="hkic_btn hkic_btn--search js-search" aria-label="搜尋" aria-expanded="false" aria-controls="sp" role="button"></a>
        <a href="#" class="hkic_btn hkic_btn--menu" aria-label="Menu" role="button"></a>
      </div>
    </div>
  </div></div></header>`;
  const ft=`<div class="hkic_foot_bg"><footer class="hkic_foot">
  <div class="hkic_main"><div class="hkic_foot_container">
    <div class="hkic_foot_left hkic_foot_left--logo">
      <div class="hkic_foot_logo"><a href="programmes.html"><img src="assets/logo_hkic.svg" alt="香港建造學院 HKIC"></a></div>
      <div class="hkic_foot_info">
        <div class="hkic_foot_label">
          <div class="hkic_label hkic_label--addr"><strong><a href="#">香港建造學院</a></strong></div>
          <div class="hkic_label hkic_label--phone"><a href="tel:+85221009000">+852 2100 9000</a></div>
          <div class="hkic_label hkic_label--mail"><a href="mailto:training@hkic.edu.hk">training@hkic.edu.hk</a></div>
        </div>
        <div class="hkic_foot_sns"><a href="#" class="hkic_sns hkic_sns--facebook" aria-label="Facebook"></a><a href="#" class="hkic_sns hkic_sns--ig" aria-label="IG"></a><a href="#" class="hkic_sns hkic_sns--youtube" aria-label="Youtube"></a></div>
      </div>
    </div>
    <div class="hkic_foot_right">
      <div class="hkic_foot_logo"><a href="#"><img src="assets/logo_cic_1.svg" alt="建造業議會 CIC" class="desktop"><img src="assets/logo_cic_2.svg" alt="建造業議會 CIC" class="mobile"></a></div>
      <div class="hkic_foot_award">${[1,2,3,4,5,6,7].map(i=>`<a><img src="assets/awards/award-${i}.jpeg" alt=""></a>`).join('')}</div>
    </div>
  </div></div>
  <div class="hkic_foot_bottom"><div class="hkic_main"><div class="hkic_foot_container"><div class="hkic_foot_left"><div class="hkic_foot_text">
    <div class="hkic_foot_link"><a href="#">惡劣天氣安排</a><a href="#">免責聲明</a><a href="#">私隱政策</a><a href="#">網站地圖</a></div>
    Copyright © 2026 香港建造學院 版權所有
  </div></div></div></div></div>
  </footer></div>
  <div class="demo-note">Tender demo prototype by FirmStudio · 示範資料只供說明用途，課程、班期及名額並非真實資料</div>`;
  document.body.classList.add('hkic_body');
  document.body.insertAdjacentHTML('afterbegin',hd);
  document.body.insertAdjacentHTML('beforeend',ft);
  icons();
  const head=document.querySelector('.hkic_head');
  const onScroll=()=>{head.classList.toggle('scroll',scrollY>10);document.documentElement.style.setProperty('--hh',head.offsetHeight+'px')};
  addEventListener('scroll',onScroll,{passive:true}); onScroll();
  if(window.ResizeObserver) new ResizeObserver(()=>document.documentElement.style.setProperty('--hh',head.offsetHeight+'px')).observe(head);
  if(typeof siteSearch==='function') searchPanel(head);
}

/* Search panel: opens under the header from the magnifier. Suggests programmes (with status) and other pages while typing. */
function searchPanel(head){
  const btn=head.querySelector('.js-search');
  head.insertAdjacentHTML('afterend',`<div class="sp" id="sp" hidden><div class="sp-in"><div class="wrap">
    <form class="search sp-form" action="search.html" role="search" data-pin="sp-input"><span data-i="search"></span>
      <label class="sr" for="spq">搜尋全站</label><input id="spq" name="q" placeholder="搜尋課程、行業、課程編號或資訊" autocomplete="off"><button class="btn sm">搜尋</button></form>
    <div class="sp-body" aria-live="polite"></div></div></div><div class="sp-scrim"></div></div>`);
  const sp=document.getElementById('sp'), q=sp.querySelector('#spq'), body=sp.querySelector('.sp-body');
  icons(sp);
  const goals=[['中學畢業，想入行','dse'],['想轉行做建造業','change'],['在職，想進修升級','upskill'],['要考安全證書','safety']];
  function render(){
    const r=siteSearch(q.value);
    if(!r.q){body.innerHTML=`<div class="sp-cols"><div><h3>熱門搜尋</h3><div class="sp-pop">${POPULAR.map(t=>`<button type="button" class="chip" data-q="${t}">${t}</button>`).join('')}</div>
      <a class="sp-finder" href="finder.html"><span class="fi"><span data-i="filter"></span></span><span><b>課程搜尋</b><small>按報名狀態、修讀模式、開課月份及行業篩選全部課程</small></span></a></div>
      <div><h3>不知道從何開始？</h3><div class="sp-goals">${goals.map(([t,p])=>`<a href="finder.html?persona=${p}">${t}</a>`).join('')}</div></div></div>`;
      icons(body);body.querySelectorAll('[data-q]').forEach(b=>b.onclick=()=>{q.value=b.dataset.q;render();q.focus()});return}
    const P=r.progs.slice(0,5), O=r.pages.slice(0,4), enc=encodeURIComponent(q.value.trim());
    body.innerHTML=`${r.alt?`<p class="sp-alt">包括「${esc(r.alt)}」的結果</p>`:''}<div class="sp-cols sp-res">
      <div data-pin="sp-progs"><h3>課程 <small>${r.progs.length}</small></h3>${P.length?P.map(p=>`<a class="sp-prog" href="${p.url||'programme-adbd.html'}"><span><small>${p.code} · ${catName(p.cat)}</small><b>${mark(p.name,r.q,r.alt)}</b></span><span class="sp-st"><span class="st ${p.st}">${ST[p.st]}</span><small>${p.next?'最近開課 '+fmtDate(p.next):''}</small></span></a>`).join('')
        :'<p class="sp-none">沒有相關課程</p>'}${r.progs.length?`<a class="link sp-more" href="finder.html?q=${enc}">在課程搜尋篩選全部 ${r.progs.length} 個課程</a>`:''}</div>
      <div data-pin="sp-pages"><h3>其他資訊 <small>${r.pages.length}</small></h3>${O.length?O.map(p=>`<a class="sp-page" href="search.html?q=${enc}"><small>${PTYPE[p.type]}</small><b>${mark(p.t,r.q,r.alt)}</b></a>`).join(''):'<p class="sp-none">沒有其他相關資訊</p>'}
        <a class="link sp-more" href="search.html?q=${enc}">查看全部 ${r.progs.length+r.pages.length} 個搜尋結果</a></div></div>`;
  }
  function open(v){sp.hidden=false;head.classList.add('open');btn.classList.replace('hkic_btn--search','hkic_btn--close');btn.setAttribute('aria-expanded','true');document.documentElement.classList.add('sp-on');if(v!=null)q.value=v;render();setTimeout(()=>q.focus(),0)}
  function close(){sp.hidden=true;head.classList.remove('open');btn.classList.replace('hkic_btn--close','hkic_btn--search');btn.setAttribute('aria-expanded','false');document.documentElement.classList.remove('sp-on');btn.focus()}
  btn.addEventListener('click',e=>{e.preventDefault();sp.hidden?open():close()});
  sp.querySelector('.sp-scrim').onclick=close;
  addEventListener('keydown',e=>{if(e.key==='Escape'&&!sp.hidden)close()});
  q.addEventListener('input',render);
  const pre=new URLSearchParams(location.search).get('search'); if(pre!==null) open(pre);
}
