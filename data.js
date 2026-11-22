/* Illustrative programme data (titles/codes from hkic.edu.hk, schedules & status invented for the demo).
   In production this comes from PCMS / TMS / OPAS via CIC MuleSoft APIs. */
const CATS = [
  {id:'skill-training',name:'技術培訓',n:56,open:21},
  {id:'skill-upgrade',name:'技術提升',n:106,open:38},
  {id:'adv-dip-certs',name:'高等文憑、建造文憑和建造證書',n:17,open:9},
  {id:'pro-dev',name:'專業進修',n:53,open:17},
  {id:'ntmm',name:'新科技及管理方法課程',n:72,open:24},
  {id:'master-class',name:'大師級培訓課程',n:5,open:2},
  {id:'safety-training',name:'安全訓練',n:84,open:61},
  {id:'non-chinese',name:'非華語人士課程',n:11,open:6},
  {id:'one-exam-multi-cert',name:'灣區標準及一試多證',n:3,open:1},
  {id:'vqp',name:'建造業職業資歷階梯',n:3,open:3}
];
const TRADES=['屋宇建造','土木工程','屋宇裝備 / 機電','裝飾及維修','機械操作','安全','創新科技','管理及監督'];
const PROGS = [
  {code:'ADBD',name:'屋宇建造監工高等文憑',cat:'adv-dip-certs',mode:'全日制',dur:'2 年',lang:['粵語'],trade:['屋宇建造','管理及監督'],st:'open',next:'2027-09-01',intakes:1,courses:1,sub:'免學費 · 津貼 $3,600/月',persona:['dse'],url:'programme-adbd.html'},
  {code:'ADCV',name:'土木工程監工高等文憑',cat:'adv-dip-certs',mode:'全日制',dur:'2 年',lang:['粵語'],trade:['土木工程','管理及監督'],st:'open',next:'2027-09-01',intakes:1,courses:1,sub:'免學費 · 津貼 $3,600/月',persona:['dse']},
  {code:'ADQS',name:'工料測量高等文憑',cat:'adv-dip-certs',mode:'全日制',dur:'2 年',lang:['粵語'],trade:['管理及監督'],st:'few',next:'2027-09-01',intakes:1,courses:1,sub:'免學費 · 津貼 $3,600/月',persona:['dse']},
  {code:'CQPP',name:'屋宇水喉安裝證書',cat:'skill-training',mode:'全日制',dur:'6 個月',lang:['粵語','英語'],trade:['屋宇裝備 / 機電'],st:'open',next:'2026-12-07',intakes:5,courses:3,sub:'免學費 · 津貼 $10,000/月',persona:['change','dse','ncs'],url:'programme-multi.html'},
  {code:'CZBA',name:'鋼筋屈紮證書',cat:'skill-training',mode:'全日制',dur:'3 個月',lang:['粵語'],trade:['屋宇建造','土木工程'],st:'open',next:'2026-12-14',intakes:4,courses:1,sub:'免學費 · 津貼 $10,000/月',persona:['change']},
  {code:'CZTA',name:'木鋁模板證書',cat:'skill-training',mode:'全日制',dur:'3 個月',lang:['粵語'],trade:['屋宇建造'],st:'full',next:'2026-11-30',intakes:3,courses:1,sub:'免學費 · 津貼 $10,000/月',persona:['change']},
  {code:'CZMI',name:'組裝合成組件安裝證書',cat:'skill-training',mode:'全日制',dur:'15 日',lang:['粵語'],trade:['屋宇建造','創新科技'],st:'soon',next:'2027-01-11',intakes:2,courses:1,sub:'免學費 · 津貼 $10,000/月',persona:['change','upskill']},
  {code:'FMYF',name:'金屬棚架安裝及拆卸督導訓練證書',cat:'skill-upgrade',mode:'兼讀制',dur:'8 晚',lang:['粵語'],trade:['屋宇建造','安全'],st:'few',next:'2026-12-02',intakes:6,courses:1,sub:'在職人士資助',persona:['upskill']},
  {code:'FCMC',name:'履帶式固定吊臂起重機操作(技術提升)證書',cat:'skill-upgrade',mode:'兼讀制',dur:'10 日',lang:['粵語'],trade:['機械操作'],st:'open',next:'2026-12-19',intakes:8,courses:2,sub:'在職人士資助',persona:['upskill']},
  {code:'FRPA',name:'油漆機械人應用證書',cat:'ntmm',mode:'兼讀制',dur:'3 日',lang:['粵語'],trade:['創新科技','裝飾及維修'],st:'open',next:'2027-01-09',intakes:3,courses:1,sub:'',persona:['upskill']},
  {code:'MSBA',name:'建造專門行業管理及監督證書 - 鋼筋屈紮',cat:'pro-dev',mode:'兼讀制',dur:'12 晚',lang:['粵語'],trade:['管理及監督'],st:'tba',next:'',intakes:0,courses:1,sub:'',persona:['upskill']},
  {code:'BASZ',name:'基本防止意外課程',cat:'safety-training',mode:'兼讀制',dur:'1 日',lang:['粵語','英語','普通話'],trade:['安全'],st:'open',next:'2026-11-25',intakes:42,courses:3,sub:'',persona:['safety']},
  {code:'ASWZ',name:'建造工友(指定行業)安全訓練課程 (銀卡課程)',cat:'safety-training',mode:'兼讀制',dur:'2 日',lang:['粵語'],trade:['安全'],st:'few',next:'2026-11-28',intakes:18,courses:1,sub:'',persona:['safety']},
  {code:'FSTZ',name:'建造業安全基礎證書課程',cat:'safety-training',mode:'兼讀制',dur:'4 晚',lang:['粵語','英語'],trade:['安全'],st:'open',next:'2026-12-03',intakes:9,courses:2,sub:'',persona:['safety','change']},
  {code:'CXME',name:'金屬棚架證書 (英語)',cat:'non-chinese',mode:'全日制',dur:'3 個月',lang:['英語'],trade:['屋宇建造'],st:'soon',next:'2027-02-01',intakes:1,courses:1,sub:'免學費 · 津貼 $10,000/月',persona:['ncs']},
  {code:'AIFC',name:'建造業議會大師級培訓課程：人工智能與建造 (涵蓋大型語言模型)',cat:'master-class',mode:'兼讀制',dur:'2 日',lang:['粵語','英語'],trade:['創新科技','管理及監督'],st:'full',next:'2026-12-10',intakes:1,courses:1,sub:'',persona:['upskill']},
  {code:'GCES',name:'一試多證(土木工程監工)證書',cat:'one-exam-multi-cert',mode:'兼讀制',dur:'1 日',lang:['粵語'],trade:['土木工程'],st:'open',next:'2027-01-16',intakes:2,courses:1,sub:'',persona:['upskill']}
];
const ST = {open:'接受報名',few:'尚餘少量名額',full:'額滿',soon:'即將接受報名',tba:'開班日期待定'};
const catName = id => (CATS.find(c=>c.id===id)||{}).name||'';
const fmtDate = d => { if(!d) return '待定'; const [y,m,dd]=d.split('-'); return `${y}年${+m}月${+dd}日`; };
/* Other site content for site search (titles follow hkic.edu.hk sections; snippets are illustrative). */
const PAGES = [
  {t:'入學資格及申請程序',type:'page',crumb:'課程及入學 › 入學資訊',d:'全日制及兼讀制課程的入學要求、申請步驟、面試安排及所需文件。',k:'入學 申請 資格 面試 全日制 兼讀制 apply admission'},
  {t:'學費及津貼',type:'page',crumb:'課程及入學 › 入學資訊',d:'全日制課程免學費，學員可獲培訓津貼；在職人士進修課程資助計劃。',k:'學費 津貼 免學費 資助 allowance fee'},
  {t:'工藝測試及中級工藝測試',type:'page',crumb:'課程及入學 › 測試及評核',d:'工藝測試報名、測試中心、費用及合格標準，包括水喉、鋼筋、木模板等工種。',k:'工藝測試 中級 trade test 水喉 鋼筋 木模板 測試'},
  {t:'安全訓練課程證明書（平安卡）續期',type:'page',crumb:'課程及入學 › 安全訓練',d:'平安卡有效期、續期課程及報名方法。',k:'平安卡 安全 續期 green card 安全訓練'},
  {t:'建造業工人註冊',type:'page',crumb:'業界夥伴 › 工人註冊',d:'註冊熟練技工、半熟練技工的資格及所需證明。',k:'註冊 工人 熟練技工 半熟練 registration'},
  {t:'屋宇裝備工程行業介紹',type:'page',crumb:'課程及入學 › 行業介紹',d:'水喉、電工、通風及空調等屋宇裝備工種的工作內容及晉升途徑。',k:'屋宇裝備 水喉 電工 機電 行業 career'},
  {t:'上水訓練中心',type:'page',crumb:'關於我們 › 院校及訓練中心',d:'地址、交通、設施及在本中心開辦的課程。',k:'上水 訓練中心 校園 地址 campus'},
  {t:'九龍灣院校',type:'page',crumb:'關於我們 › 院校及訓練中心',d:'地址、交通、設施及在本院校開辦的課程。',k:'九龍灣 院校 校園 地址 campus'},
  {t:'全日制課程是否真的免學費？',type:'faq',crumb:'常見問題 › 學費及津貼',d:'是。全日制課程學員毋須繳付學費，並可按出席率獲發培訓津貼。',k:'免學費 學費 津貼 全日制 faq'},
  {t:'非華語人士可以報讀哪些課程？',type:'faq',crumb:'常見問題 › 報讀課程',d:'學院設有英語授課課程，並提供傳譯服務及其他支援。',k:'非華語 英語 english ncs'},
  {t:'完成課程後如何報考工藝測試？',type:'faq',crumb:'常見問題 › 測試及評核',d:'學員完成指定課程後，學院會安排報考相關工藝測試。',k:'工藝測試 報考 trade test 水喉 鋼筋'},
  {t:'屋宇水喉安裝學員畢業典禮',type:'news',crumb:'消息及活動 › 學院消息',d:'2026年10月 · 一眾水喉學員完成培訓，即將投身業界。',k:'水喉 畢業 消息 news'},
  {t:'建造業安全周 2026',type:'news',crumb:'消息及活動 › 活動',d:'2026年11月 · 一系列安全講座及工地示範，歡迎業界參加。',k:'安全 活動 安全周 events'},
  {t:'入學講座及開放日',type:'news',crumb:'消息及活動 › 活動',d:'2026年12月 · 了解全日制課程、參觀訓練設施及即場查詢。',k:'開放日 講座 入學 open day dse'}
];
const PTYPE = {prog:'課程',page:'頁面',faq:'常見問題',news:'消息及活動'};
/* Synonyms and common terms so everyday words find the right programmes. Maintained in AEM. */
const SYN = {plumbing:'水喉',plumber:'水喉','水管':'水喉','鋼根':'鋼筋','銀卡':'ASWZ','平安咭':'平安卡','綠卡':'平安卡',scaffold:'棚架',crane:'起重機','吊機':'起重機'};
const POPULAR = ['平安卡','水喉','高等文憑','免學費','工藝測試','英語授課'];
function siteSearch(q){
  q=(q||'').trim().toLowerCase(); if(!q) return {q:'',alt:'',progs:[],pages:[]};
  const alt=(SYN[q]||'').toLowerCase(), terms=[q].concat(alt?[alt]:[]);
  const hit=s=>terms.some(t=>s.toLowerCase().includes(t));
  const progs=PROGS.filter(p=>hit(p.name+p.code+p.trade.join()+catName(p.cat)+(p.sub||'')+p.lang.join()+p.mode));
  progs.sort((a,b)=>((a.st==='full'||a.st==='tba')-(b.st==='full'||b.st==='tba'))||(a.next||'9').localeCompare(b.next||'9'));
  const pages=PAGES.filter(p=>hit(p.t+p.d+p.k));
  return {q,alt:SYN[q]||'',progs,pages};
}
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const mark=(s,q,alt)=>{let h=esc(s);[q,alt].filter(Boolean).forEach(t=>{const re=new RegExp(esc(t).replace(/[.*+?^${}()|[\]\\]/g,'\\$&'),'gi');h=h.replace(re,m=>`<mark>${m}</mark>`)});return h};
