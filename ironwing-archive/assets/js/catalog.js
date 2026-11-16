// 新增機型時，須同步新增對應的 aircraft/*.html 實際頁面。
const aircraftCatalog = [
  {name:"F-5E Tiger II",type:"輕型戰鬥機",summary:"從輕巧機身辨識到模型塗裝細節，建立基本收藏觀察清單。",href:"aircraft/f-5e.html",symbol:"✈",tag:"機型筆記"},
  {name:"F-104 Starfighter",type:"超音速戰鬥機",summary:"以細長機身和小型機翼為線索，整理外觀辨識的入門要點。",href:"aircraft/f-104.html",symbol:"✈",tag:"機型筆記"}
];
const area = document.querySelector('#catalog');
const search = document.querySelector('#search');
function renderCatalog(keyword='') {
 if(!area)return;
 const entries=aircraftCatalog.filter(x=>[x.name,x.type,x.summary].join(' ').toLowerCase().includes(keyword.trim().toLowerCase()));
 area.replaceChildren();
 if(!entries.length){const p=document.createElement('p');p.className='empty';p.textContent='目前沒有符合的機型筆記。';area.append(p);return;}
 for(const item of entries){
  const a=document.createElement('a');a.className='card';a.href=item.href;
  const v=document.createElement('div');v.className='visual';v.setAttribute('aria-hidden','true');v.textContent=item.symbol;
  const b=document.createElement('div');b.className='card-body';
  const tag=document.createElement('span');tag.className='tag';tag.textContent=item.tag;
  const h=document.createElement('h3');h.textContent=item.name;
  const p=document.createElement('p');p.textContent=item.summary;
  const small=document.createElement('small');small.textContent=`${item.type} · 閱讀筆記`;
  b.append(tag,h,p,small);a.append(v,b);area.append(a);
 }
}
renderCatalog();if(search)search.addEventListener('input',e=>renderCatalog(e.target.value));
