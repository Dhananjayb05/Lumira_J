const A=n=>'assets/'+n,U=(id,w=900)=>`https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=85`;
const P=[
{id:1,n:'Serene Pendant',c:'Necklaces',g:'Women',o:'Daily',col:'Minimalist',p:2490,m:2990,d:'20% OFF',mat:'18K Gold Vermeil',r:4.9,rv:128,model:U('1617038220319-276d3cfab638'),studio:U('1599643477877-530eb83abc8e'),desc:'A fluid pendant designed to sit close to the collarbone and layer beautifully.'},
{id:13,n:'Atlas Compass Pendant',c:'Necklaces',g:'Men',o:'Daily',col:'Minimalist',p:2990,m:3590,d:'17% OFF',mat:'Stainless Steel',r:4.8,rv:64,model:A('m2.jpg'),studio:A('m2_detail.jpg'),desc:'A weighty compass pendant on a box chain, made to sit open-collar or under a shirt.'},
{id:2,n:'Sol Drop Hoops',c:'Earrings',g:'Women',o:'Office',col:'Everyday Chic',p:2190,m:2690,d:'18% OFF',mat:'18K Gold Plated',r:4.8,rv:94,model:A('w7_ear.jpg'),studio:U('1635767798638-3e25273a8236'),desc:'Polished sculptural hoops that move from workday to dinner.'},
{id:14,n:'Orion Link Bracelet',c:'Bracelets',g:'Men',o:'Office',col:'Everyday Chic',p:2490,m:2990,d:'17% OFF',mat:'18K Gold Plated',r:4.8,rv:58,model:A('m1_hand.jpg'),studio:A('m1.jpg'),desc:'Substantial curb links with a quiet shine, sized for a confident wrist.'},
{id:3,n:'Lumi Signet',c:'Rings',g:'Women',o:'Festive',col:'Royal Heritage',p:1890,m:2290,d:'BOGO',mat:'18K Gold Vermeil',r:4.9,rv:77,model:A('w6_model.jpg'),studio:A('w6_hand.jpg'),desc:'A confident silhouette with a softly polished face and a sparkling centre stone.'},
{id:15,n:'Kairo Signet Ring',c:'Rings',g:'Men',o:'Festive',col:'Royal Heritage',p:1990,m:2490,d:'BOGO',mat:'Stainless Steel',r:4.9,rv:87,model:A('m4.jpg'),studio:A('m4_hand.jpg'),desc:'A bold signet with a polished stone face, cut to be worn every day.'},
{id:4,n:'Mira Cuff',c:'Bracelets',g:'Women',o:'Office',col:'Minimalist',p:2290,m:2790,d:'18% OFF',mat:'18K Gold Plated',r:4.8,rv:61,model:A('w8.jpg'),studio:A('w8_hand.jpg'),desc:'A clean open cuff with a subtle architectural curve.'},
{id:16,n:'Noor Gold Pendant',c:'Necklaces',g:'Men',o:'Wedding',col:'Royal Heritage',p:3490,m:4190,d:'17% OFF',mat:'18K Gold Vermeil',r:4.9,rv:102,model:A('m3_model.jpg'),studio:A('m3_detail.jpg'),desc:'An ornate filigree pendant on a fine gold chain — made for weddings and celebrations.'},
{id:5,n:'Halo Layer',c:'Necklaces',g:'Women',o:'Wedding',col:'Royal Heritage',p:3290,m:3990,d:'18% OFF',mat:'18K Gold Vermeil',r:5,rv:153,model:U('1599643477877-530eb83abc8e'),studio:U('1599643478518-a784e5dc4c8f'),desc:'Layered luminosity for ceremonies, celebrations and after-dark dressing.'},
{id:17,n:'Cuban Gold Bracelet',c:'Bracelets',g:'Men',o:'Wedding',col:'Royal Heritage',p:2790,m:3290,d:'15% OFF',mat:'18K Gold Vermeil',r:4.8,rv:73,model:A('m1.jpg'),studio:A('m1_hand.jpg'),desc:'A flat-link Cuban bracelet with a high-polish finish that catches every cuff.'},
{id:6,n:'Pearl Arc',c:'Earrings',g:'Women',o:'Wedding',col:'Royal Heritage',p:2790,m:3290,d:'15% OFF',mat:'18K Gold Plated',r:4.9,rv:86,model:A('w7_model.jpg'),studio:A('w7_ear.jpg'),desc:'Pearl-inspired studs with a high-polish gold finish.'},
{id:18,n:'Onyx Band',c:'Rings',g:'Men',o:'Daily',col:'Minimalist',p:1790,m:2290,d:'22% OFF',mat:'Stainless Steel',r:4.7,rv:49,model:A('m5.jpg'),studio:A('m4_hand.jpg'),desc:'A slim stone-set band that sits flush and wears all day.'},
{id:7,n:'Muse Band',c:'Rings',g:'Women',o:'Daily',col:'Everyday Chic',p:1590,m:1990,d:'BOGO',mat:'Stainless Steel',r:4.7,rv:52,model:A('w7.jpg'),studio:A('w7_hand.jpg'),desc:'A stack-friendly band made for everyday rituals.'},
{id:8,n:'Dune Bangle',c:'Bracelets',g:'Women',o:'Festive',col:'Everyday Chic',p:2590,m:3090,d:'16% OFF',mat:'18K Gold Vermeil',r:4.8,rv:73,model:A('w9.jpg'),studio:A('w9_bangle.jpg'),desc:'A sculpted gold bangle with statement stones for festive dressing.'},
{id:9,n:'Axis Chain',c:'Necklaces',g:'Women',o:'Office',col:'Minimalist',p:1790,m:2190,d:'18% OFF',mat:'Stainless Steel',r:4.7,rv:48,model:U('1506630448388-4e683c67ddb0'),studio:U('1617038220319-276d3cfab638'),desc:'A crisp chain for a clean neckline and effortless layering.'},
{id:10,n:'Rhea Stack',c:'Combos',g:'Women',o:'Festive',col:'Personalized',p:1499,m:2199,d:'32% OFF',mat:'18K Gold Plated',r:4.9,rv:119,model:A('w6.jpg'),studio:U('1599643477877-530eb83abc8e'),desc:'A ready-to-layer set curated for instant impact.'},
{id:11,n:'Aster Mini Hoops',c:'Earrings',g:'Women',o:'Daily',col:'Everyday Chic',p:1299,m:1699,d:'24% OFF',mat:'18K Gold Plated',r:4.8,rv:91,model:A('w7_ear.jpg'),studio:U('1535632066927-ab7c9ab60908'),desc:'Petite hoops with a smooth everyday shine.'},
{id:12,n:'Aria Duo',c:'Combos',g:'Women',o:'Wedding',col:'Personalized',p:999,m:1499,d:'BUNDLE',mat:'18K Gold Plated',r:4.8,rv:67,model:A('w8.jpg'),studio:A('w8_hand.jpg'),desc:'A petite pairing designed to gift beautifully.'}];
const CAT={
'Customize For You':[['Necklaces','Delicate layers & bold pendants',U('1617038220319-276d3cfab638'),'Necklaces','Women'],['Bangles & Cuffs','Statement gold for her',A('w9.jpg'),'Bracelets','Women'],['Men’s Pendants','Heirloom shine, modern lines',A('m3_model.jpg'),'Necklaces','Men'],['Men’s Rings','Signets & bands built to last',A('m4.jpg'),'Rings','Men']],
'For Her':[['Necklaces','Delicate layers & bold pendants',U('1617038220319-276d3cfab638'),'Necklaces','Women'],['Rings','Solitaires & stacking bands',A('w6_model.jpg'),'Rings','Women'],['Earrings','Little details, lasting impact',A('w7_ear.jpg'),'Earrings','Women'],['Bracelets','Soft shine for every day',A('w8.jpg'),'Bracelets','Women']],
'For Him':[['Pendants','Understated, made to layer',A('m2.jpg'),'Necklaces','Men'],['Bracelets','Wrist stacks with quiet weight',A('m1_hand.jpg'),'Bracelets','Men'],['Rings','Signets & bands built to last',A('m4.jpg'),'Rings','Men'],['Gold Edit','Heirloom shine, modern lines',A('m3_model.jpg'),'Necklaces','Men']]};
const O=[['Wedding',A('w9.jpg'),'Wedding'],['Office',A('m4.jpg'),'Office'],['Daily',A('m1.jpg'),'Daily'],['Festive',A('m3_model.jpg'),'Festive']];
const LOOK=[[A('w9.jpg'),'Gold bangles','Bracelets','Women'],[A('m2.jpg'),'Compass pendant','Necklaces','Men'],[A('w6_model.jpg'),'Solitaire rings','Rings','Women'],[A('m1_hand.jpg'),'Link bracelets','Bracelets','Men'],[A('w10.jpg'),'Pearl & rose gold','Necklaces','Women'],[A('m4.jpg'),'Signet rings','Rings','Men'],[A('w8.jpg'),'Cuffs','Bracelets','Women'],[A('m5.jpg'),'Stone bands','Rings','Men'],[A('w7_model.jpg'),'Pearl studs','Earrings','Women'],[A('m3_model.jpg'),'Filigree gold','Necklaces','Men']];
const H=[['THE NEW LUMIRA','Jewellery that<br><em>moves with you.</em>','Modern demi-fine pieces for coffee runs, boardrooms, weddings and every beautiful in-between.','Shop bestsellers',A('w9.jpg'),'50% 25%',['All','All']],
['FOR HIM','Quiet strength.<br><em>Worn daily.</em>','Chains, bracelets and rings with understated weight — made for the way he dresses.','Shop for him',A('m1.jpg'),'60% 30%',['All','Men']],
['THE SOLITAIRE EDIT','Shine that<br><em>says it all.</em>','Stacking bands, studs and statement rings for the moments that deserve an entrance.','Shop rings',A('w7.jpg'),'55% 30%',['Rings','All']]];
const INFO={gift:['Gift Cards','Choose a LUMIRA gift card for birthdays, weddings, milestones and just-because moments.'],offers:['Offers & Discounts','Use LUMIRA10 in the bag for 10% off. Selected BOGO and bundle products are marked on their cards.'],privacy:['Privacy Policy','This demo provides the privacy-policy surface. Replace it with your final legal policy before launch.'],returns:['Return & Exchange Policy','Replace this demo copy with your final return and exchange terms before launch.'],shipping:['Shipping Policy','Free express shipping is shown above ₹1,499. Connect your live courier and serviceability system for production.'],warranty:['Lifetime Warranty Terms','The interface highlights a lifetime plating warranty. Replace this placeholder with your final legal warranty terms.'],track:['Track Order','Connect this front-end to your live order tracking API.'],care:['Jewellery Care Guide','Store pieces separately, avoid harsh chemicals and wipe gently after wear. Use your final material-specific care guide at launch.'],size:['Size Guide','Add your production ring and bracelet sizing chart here.'],faq:['Contact Us / FAQs','Add support email, phone, WhatsApp and final FAQ content here.'],about:['About LUMIRA','LUMIRA is modern demi-fine jewellery made for everyday luxury.'],craft:['Our Craftsmanship','LUMIRA centres on 18K gold plating over selected sterling silver and stainless-steel bases.'],stores:['Store Locator','Connect your retail locations or dealer locator here.'],app:['LUMIRA App','The LUMIRA app is coming soon — get exclusive offers and early access to new drops.'],careers:['Careers','Add current openings and application instructions here.']};
let S={cart:JSON.parse(localStorage.lumiraCart||'[]'),wish:JSON.parse(localStorage.lumiraWish||'[]'),cat:'All',g:'All',col:null,deal:null,occ:null,sort:'featured',persona:'Customize For You',visible:8,promo:false,hero:0};
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)],M=n=>'₹'+n.toLocaleString('en-IN');
function save(){localStorage.lumiraCart=JSON.stringify(S.cart);localStorage.lumiraWish=JSON.stringify(S.wish);badges();bag();wishlist()}
function badges(){$('#bagCount').textContent=S.cart.reduce((a,x)=>a+x.q,0);$('#wishCount').textContent=S.wish.length}
function toast(t){let e=$('#toast');e.textContent=t;e.classList.add('show');clearTimeout(window.tt);window.tt=setTimeout(()=>e.classList.remove('show'),2200)}
function show(id){$(id).classList.add('open');document.body.classList.add('lock')}
function hide(id){$(id).classList.remove('open');if(!$$('.overlay.open,.modal.open,.drawer.open').length)document.body.classList.remove('lock')}
function by(id){return P.find(p=>p.id==id)}
function goTo(id){$(id).scrollIntoView({behavior:'smooth'})}
/* hero */
function hero(){$('#heroSlides').innerHTML=H.map((h,i)=>`<article class="slide ${i?'':'active'}"><div class="heroCopy"><small>${h[0]}</small><h1>${h[1]}</h1><p>${h[2]}</p><button class="pill" data-h="${i}">${h[3]} →</button></div><div class="heroImg"><img src="${h[4]}" alt="LUMIRA campaign" style="object-position:${h[5]}" ${i?'loading="lazy"':''}></div></article>`).join('');
$('#dots').innerHTML=H.map((_,i)=>`<button aria-label="Slide ${i+1}" class="${i?'':'active'}" data-dot="${i}"></button>`).join('');
$$('[data-dot]').forEach(b=>b.onclick=()=>{go(+b.dataset.dot);restart()});$$('[data-h]').forEach(b=>b.onclick=()=>filter(...H[+b.dataset.h][6]))}
function go(i){S.hero=(i+H.length)%H.length;$$('.slide').forEach((x,n)=>x.classList.toggle('active',n==S.hero));$$('[data-dot]').forEach((x,n)=>x.classList.toggle('active',n==S.hero))}
let heroTimer;function restart(){clearInterval(heroTimer);heroTimer=setInterval(()=>go(S.hero+1),6500)}
/* categories / occasions / lookbook */
function categories(){$('#categories').innerHTML=CAT[S.persona].map((c,i)=>`<article class="category" tabindex="0" data-cat="${c[3]}" data-g="${c[4]}"><img src="${c[2]}" alt="${c[0]}" loading="lazy"><span class="catIcon">✦</span><div class="categoryContent"><small>0${i+1}</small><h3>${c[0]}</h3><p>${c[1]}</p></div></article>`).join('');
$$('#categories .category').forEach(e=>{e.onclick=()=>filter(e.dataset.cat,e.dataset.g);e.onkeydown=k=>{if(k.key==='Enter')e.click()}})}
function occasions(){$('#occasions').innerHTML=O.map(o=>`<article class="occasionCard" data-occ="${o[2]}"><img src="${o[1]}" alt="${o[0]} jewellery styling" loading="lazy"><div class="occasionCopy"><span>Shop the edit</span><h3>${o[0]}</h3></div></article>`).join('');
$$('.occasionCard').forEach(e=>e.onclick=()=>{filter('All','All');S.occ=e.dataset.occ;render();goTo('#bestsellers')})}
function lookbook(){$('#lookTrack').innerHTML=LOOK.map(l=>`<article class="look" data-cat="${l[2]}" data-g="${l[3]}"><img src="${l[0]}" alt="${l[1]}" loading="lazy"><span>${l[1]}</span></article>`).join('');$$('.look').forEach(e=>e.onclick=()=>filter(e.dataset.cat,e.dataset.g))}
/* products */
function list(){let x=P.filter(p=>(S.cat==='All'||p.c===S.cat||(S.cat==='Under ₹1,999'&&p.p<1999))&&(S.g==='All'||p.g===S.g)&&(!S.occ||p.o===S.occ)&&(!S.col||p.col===S.col)&&(!S.deal||p.d===S.deal));
if(S.sort==='low')x.sort((a,b)=>a.p-b.p);if(S.sort==='high')x.sort((a,b)=>b.p-a.p);return x}
function card(p){let w=S.wish.includes(p.id);return `<article class="product"><div class="visual" data-q="${p.id}"><img class="model" src="${p.model}" alt="${p.n} on model" loading="lazy"><img class="studio" src="${p.studio}" alt="${p.n} detail" loading="lazy"><span class="badgeSale">${p.d}</span><button class="wish ${w?'active':''}" aria-label="Wishlist" data-w="${p.id}">${w?'♥':'♡'}</button><button class="quick" data-q="${p.id}">◉ Quick View</button></div><h3>${p.n}</h3><div class="material">${p.g==='Men'?'Men · ':'Women · '}${p.mat}</div><div class="rating"><span>★★★★★</span> ${p.r} (${p.rv})</div><div class="price"><b>${M(p.p)}</b><s>${M(p.m)}</s><span class="save">${p.d}</span></div><button class="add" data-add="${p.id}">Add to Bag</button></article>`}
function bindCards(){$$('[data-w]').forEach(b=>b.onclick=e=>{e.stopPropagation();wish(+b.dataset.w)});$$('[data-add]').forEach(b=>b.onclick=()=>add(+b.dataset.add));$$('[data-q]').forEach(b=>b.onclick=e=>{if(e.target.closest('[data-w]'))return;quick(+b.dataset.q)})}
function products(){let l=list(),x=l.slice(0,S.visible);$('#products').innerHTML=x.length?x.map(card).join(''):'<p class="empty">No pieces match this edit. <button class="text" id="resetF">Reset filters</button></p>';
$('#menProducts').innerHTML=P.filter(p=>p.g==='Men').slice(0,4).map(card).join('');$('#womenProducts').innerHTML=P.filter(p=>p.g==='Women'&&p.c!=='Combos').slice(0,4).map(card).join('');
bindCards();$('#more').style.display=l.length>S.visible?'inline-block':'none';let r=$('#resetF');if(r)r.onclick=()=>filter('All','All');chips()}
function chips(){let c=[];if(S.g!=='All')c.push(['g',S.g==='Men'?'For Him':'For Her']);if(S.cat!=='All')c.push(['cat',S.cat]);if(S.occ)c.push(['occ',S.occ]);if(S.col)c.push(['col',S.col]);if(S.deal)c.push(['deal',S.deal==='BOGO'?'Buy 1 Get 1':S.deal]);
$('#chips').innerHTML=c.map(x=>`<button data-chip="${x[0]}">${x[1]} ✕</button>`).join('');$$('[data-chip]').forEach(b=>b.onclick=()=>{let k=b.dataset.chip;if(k==='g')S.g='All';else if(k==='cat')S.cat='All';else S[k]=null;sync();render()})}
function sync(){S.visible=8;$$('#filters button').forEach(b=>b.classList.toggle('active',(b.dataset.cat||'All')===S.cat&&(b.dataset.g||'All')===S.g&&!S.col&&!S.deal&&!S.occ))}
function render(){products();categories();badges();bag();wishlist()}
function filter(c='All',g='All'){S.cat=c;S.g=g;S.occ=null;S.col=null;S.deal=null;sync();render();goTo('#bestsellers')}
/* cart & wishlist */
function wish(id){S.wish.includes(id)?(S.wish=S.wish.filter(x=>x!==id),toast('Removed from wishlist')):(S.wish.push(id),toast('Added to wishlist'));save();products()}
function add(id){let x=S.cart.find(i=>i.id==id);x?x.q++:S.cart.push({id,q:1});save();toast('Added to your bag');show('#bagDrawer')}
function total(){let t=S.cart.reduce((a,x)=>a+by(x.id).p*x.q,0);return S.promo?Math.round(t*.9):t}
function bag(){let e=$('#bagItems');e.innerHTML=S.cart.length?S.cart.map(i=>{let p=by(i.id);return `<div class="row"><img src="${p.model}" alt=""><div><h4>${p.n}</h4><small>${M(p.p)}</small><div class="qty"><button aria-label="Decrease" data-minus="${p.id}">−</button><b>${i.q}</b><button aria-label="Increase" data-plus="${p.id}">+</button></div><button class="remove" data-rem="${p.id}">Remove</button></div><b>${M(p.p*i.q)}</b></div>`}).join(''):'<div style="padding:60px 0;text-align:center">Your bag is waiting for something beautiful.</div>';
let t=total();$('#total').textContent=M(t);let pc=Math.min(100,t/1499*100);$('#shipBar').style.width=pc+'%';$('#shipPct').textContent=Math.round(pc)+'%';$('#shipText').textContent=t>=1499?'Free express shipping unlocked':'₹'+(1499-t).toLocaleString('en-IN')+' away from free shipping';
$$('[data-plus]').forEach(b=>b.onclick=()=>qty(+b.dataset.plus,1));$$('[data-minus]').forEach(b=>b.onclick=()=>qty(+b.dataset.minus,-1));$$('[data-rem]').forEach(b=>b.onclick=()=>{S.cart=S.cart.filter(x=>x.id!=b.dataset.rem);save()})}
function qty(id,d){let x=S.cart.find(i=>i.id==id);x.q+=d;if(x.q<1)S.cart=S.cart.filter(i=>i.id!=id);save()}
function wishlist(){let e=$('#wishItems');e.innerHTML=S.wish.length?S.wish.map(id=>{let p=by(id);return `<div class="row"><img src="${p.model}" alt=""><div><h4>${p.n}</h4><small>${M(p.p)}</small><button class="add" data-move="${p.id}">Move to Bag</button></div></div>`}).join(''):'<div style="padding:60px 0;text-align:center">No saved pieces yet.</div>';
$$('[data-move]').forEach(b=>b.onclick=()=>{S.wish=S.wish.filter(x=>x!=b.dataset.move);add(+b.dataset.move)})}
/* product detail (quick view) */
function quick(id){let p=by(id),w=S.wish.includes(id);$('#quick').innerHTML=`<div class="quickLayout"><div class="gallery"><img id="qimg" src="${p.model}" alt="${p.n}"><div class="toggle"><button class="active" data-view="model">Model View</button><button data-view="studio">Detail View</button></div></div><div><small>${p.g==='Men'?'For Him':'For Her'} · ${p.c} / ${p.o}</small><h2>${p.n}</h2><div class="rating"><span>★★★★★</span> ${p.r} · ${p.rv} reviews</div><p>${p.desc}</p><h3>${M(p.p)} <s>${M(p.m)}</s> <span class="save">${p.d}</span></h3><div class="selector"><label>Metal</label><button class="active">${p.mat}</button><button>Stainless Steel</button></div><div class="selector"><label>Size</label><button class="active">Standard</button><button>Small</button><button>Large</button></div><button class="pill dark full" id="quickAdd">Add to Bag</button><button class="pill outline full" id="quickWish" style="margin-top:8px">${w?'♥ Saved to wishlist':'♡ Add to wishlist'}</button><p class="perks">✦ Waterproof &amp; anti-tarnish · ✦ Lifetime plating warranty · ✦ Free express shipping above ₹1,499</p></div></div>`;
show('#quickModal');$$('#quick .selector').forEach(g=>g.querySelectorAll('button').forEach(b=>b.onclick=()=>{g.querySelectorAll('button').forEach(x=>x.classList.remove('active'));b.classList.add('active')}));
$$('[data-view]').forEach(b=>b.onclick=()=>{$$('[data-view]').forEach(x=>x.classList.remove('active'));b.classList.add('active');$('#qimg').src=b.dataset.view==='model'?p.model:p.studio});
$('#quickAdd').onclick=()=>{hide('#quickModal');add(p.id)};$('#quickWish').onclick=()=>{wish(p.id);$('#quickWish').textContent=S.wish.includes(p.id)?'♥ Saved to wishlist':'♡ Add to wishlist'}}
/* search (local — never changes the main product grid) */
function search(){let q=$('#search').value.trim().toLowerCase();let x=(q?P.filter(p=>(p.n+' '+p.c+' '+p.o+' '+p.col+' '+p.mat+' '+p.g+' '+(p.g==='Men'?'men him male':'women her female')).toLowerCase().includes(q)):P.slice(0,6)).slice(0,8);
$('#results').innerHTML=x.map(p=>`<div class="result" data-res="${p.id}"><img src="${p.model}" alt=""><div><h4>${p.n}</h4><small>${p.g==='Men'?'For Him':'For Her'} · ${p.c} · ${p.o}</small></div><b>${M(p.p)}</b></div>`).join('')||'<p>No pieces found.</p>';
$$('[data-res]').forEach(e=>e.onclick=()=>{hide('#searchOverlay');quick(+e.dataset.res)})}
function info(k){let a=INFO[k]||INFO.about;$('#infoTitle').textContent=a[0];$('#infoText').textContent=a[1];show('#infoModal')}
function checkout(){if(!S.cart.length)return toast('Your bag is empty');$('#checkoutSummary').innerHTML=S.cart.map(i=>`<div class="row"><span>${by(i.id).n} × ${i.q}</span><b>${M(by(i.id).p*i.q)}</b></div>`).join('')+`<div class="row"><b>Total</b><b>${M(total())}</b></div>`;show('#checkoutModal')}
/* init */
hero();lookbook();occasions();render();restart();
$('#prev').onclick=()=>{go(S.hero-1);restart()};$('#next').onclick=()=>{go(S.hero+1);restart()};
$('#more').onclick=()=>{S.visible+=4;products()};$('#sort').onchange=e=>{S.sort=e.target.value;products()};
$$('#filters button').forEach(b=>b.onclick=()=>filter(b.dataset.cat||'All',b.dataset.g||'All'));
$('#allOcc').onclick=()=>filter('All','All');$('#menAll').onclick=()=>filter('All','Men');$('#womenAll').onclick=()=>filter('All','Women');
$$('[data-feature]').forEach(b=>b.onclick=()=>filter('All',b.dataset.feature));
$$('[data-persona]').forEach(b=>b.onclick=()=>{$$('[data-persona]').forEach(x=>x.classList.remove('active'));b.classList.add('active');S.persona=b.dataset.persona;categories()});
$$('[data-collection]').forEach(b=>b.onclick=e=>{e.preventDefault();filter('All','All');S.col=b.dataset.collection;S.visible=12;render();toast(S.col+' collection');navOpen(false);goTo('#bestsellers')});
$('#searchBtn').onclick=()=>{show('#searchOverlay');$('#search').focus();search()};$('#search').oninput=search;
$('#bagBtn').onclick=()=>show('#bagDrawer');$('#wishBtn').onclick=()=>show('#wishDrawer');$('#viewAll').onclick=()=>filter('All','All');
$$('[data-promo]').forEach(b=>b.onclick=()=>{if(b.dataset.promo==='BUNDLE'){filter('Combos','All');$('#promo').value='LUMIRA10';toast('Bundle edit — code LUMIRA10 pre-filled in your bag')}else{filter('All','All');S.deal='BOGO';render();toast('Buy 1 Get 1 — selected pieces')}});
$('#applyPromo').onclick=()=>{if($('#promo').value.trim().toUpperCase()==='LUMIRA10'){S.promo=true;save();toast('LUMIRA10 applied — 10% off')}else toast('Try promo code LUMIRA10')};
$('#checkout').onclick=checkout;$('#placeOrder').onclick=()=>{S.cart=[];S.promo=false;save();hide('#checkoutModal');hide('#bagDrawer');toast('Demo order placed — thank you')};
$$('[data-info]').forEach(b=>b.onclick=()=>info(b.dataset.info));$$('[data-close]').forEach(b=>b.onclick=()=>hide('#'+b.dataset.close));
$('#newsletter').onsubmit=e=>{e.preventDefault();let v=$('#email').value;if(!v.includes('@'))return toast('Enter a valid email');$('#newsMsg').textContent='You are in — welcome to the LUMIRA circle.';e.target.reset();toast('Subscribed successfully')};
$('#tickerClose').onclick=()=>$('.announcement').style.display='none';
function navOpen(o){$('#mobileDrawer').classList.toggle('open',o);$('#navScrim').classList.toggle('open',o)}
$('#menuBtn').onclick=()=>navOpen(true);$('#mobileClose').onclick=()=>navOpen(false);$('#navScrim').onclick=()=>navOpen(false);$('#mobileCollection').onclick=()=>$('#mobileSub').classList.toggle('open');
$$('#mobileDrawer a').forEach(a=>a.onclick=()=>navOpen(false));
$$('[data-soc]').forEach(a=>a.onclick=e=>e.preventDefault());
document.addEventListener('keydown',e=>{if(e.key==='Escape'){$$('.overlay.open,.modal.open,.drawer.open').forEach(x=>x.classList.remove('open'));navOpen(false);document.body.classList.remove('lock')}});

/* ===== account: create profile / login / profile / logout =====
   Front-end demo: accounts live in this browser's localStorage and passwords are stored only as a salted
   PBKDF2 hash. Connect these functions to your real auth API (and HTTPS) before launch. */
const esc=t=>String(t).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const store={get(k,d){try{return JSON.parse(localStorage.getItem(k))??d}catch(e){return d}},set(k,v){try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}}};
const users=()=>store.get('lumiraUsers',{}),saveUsers=u=>store.set('lumiraUsers',u);
const hex=b=>[...new Uint8Array(b)].map(x=>x.toString(16).padStart(2,'0')).join('');
function newSalt(){let a=new Uint8Array(16);(window.crypto||{}).getRandomValues?crypto.getRandomValues(a):a.forEach((_,i)=>a[i]=Math.random()*256|0);return hex(a)}
async function hashPw(pw,salt){
  if(window.crypto&&crypto.subtle){const k=await crypto.subtle.importKey('raw',new TextEncoder().encode(pw),'PBKDF2',false,['deriveBits']);
    return hex(await crypto.subtle.deriveBits({name:'PBKDF2',salt:new TextEncoder().encode(salt),iterations:120000,hash:'SHA-256'},k,256))}
  let h=2166136261;for(const c of salt+pw+salt){h^=c.charCodeAt(0);h=Math.imul(h,16777619)}return 'f'+(h>>>0).toString(16)}
function session(){let s=store.get('lumiraSession',null);try{s=s||JSON.parse(sessionStorage.getItem('lumiraSession'))}catch(e){}
  if(!s||s.exp<Date.now()){logoutSilently();return null}return users()[s.email]?s:null}
function currentUser(){let s=session();return s?users()[s.email]:null}
function startSession(email,remember){let s={email,exp:Date.now()+(remember?30:1)*864e5};
  if(remember)store.set('lumiraSession',s);else{try{localStorage.removeItem('lumiraSession');sessionStorage.setItem('lumiraSession',JSON.stringify(s))}catch(e){}}}
function logoutSilently(){try{localStorage.removeItem('lumiraSession');sessionStorage.removeItem('lumiraSession')}catch(e){}}
function accountUI(){let u=currentUser();$('#profileDot').classList.toggle('on',!!u);$('#profileBtn').setAttribute('aria-label',u?'My profile':'Login or create account');
  $('#mobileAccount').textContent=u?'My Profile · '+u.name.split(' ')[0]:'Login / Create Account'}
const initials=n=>n.trim().split(/\s+/).map(w=>w[0]).slice(0,2).join('').toUpperCase();
const pwField=(id,label,ac)=>`<div class="field"><label for="${id}">${label}</label><input id="${id}" type="password" autocomplete="${ac}" required minlength="8"><button type="button" class="eye" data-eye="${id}">Show</button></div>`;
function openAccount(tab){navOpen(false);currentUser()?profileView():authView(tab||'login');show('#authModal')}
function authView(tab){let L=tab==='login';$('#authBody').innerHTML=`<small>LUMIRA CIRCLE</small><h2>${L?'Welcome back.':'Join LUMIRA.'}</h2><p class="sub">${L?'Log in to see your profile, wishlist and orders.':'Create a profile for faster checkout and member-only offers.'}</p>
<div class="authTabs" role="tablist"><button type="button" class="${L?'active':''}" data-tab="login">Login</button><button type="button" class="${L?'':'active'}" data-tab="signup">Create Account</button></div>
<form id="authForm" novalidate>${L?`<div class="field"><label for="aEmail">Email address</label><input id="aEmail" type="email" autocomplete="email" required></div>${pwField('aPw','Password','current-password')}<label class="check"><input type="checkbox" id="aRemember" checked> Keep me logged in for 30 days</label>`
:`<div class="field"><label for="aName">Full name</label><input id="aName" autocomplete="name" required></div><div class="field"><label for="aEmail">Email address</label><input id="aEmail" type="email" autocomplete="email" required></div><div class="field"><label for="aPhone">Mobile number (optional)</label><input id="aPhone" type="tel" autocomplete="tel" inputmode="tel" placeholder="+91"></div><div class="two">${pwField('aPw','Password','new-password')}${pwField('aPw2','Confirm password','new-password')}</div><label class="check"><input type="checkbox" id="aRemember" checked> Keep me logged in for 30 days</label>`}
<p class="authErr" id="authErr" role="alert"></p><button class="pill dark full" id="authSubmit">${L?'Log In':'Create My Account'}</button></form>
<p class="authNote">${L?'New to LUMIRA? <button type="button" data-tab="signup">Create an account</button>':'Already a member? <button type="button" data-tab="login">Log in</button>'}</p>`;
$$('#authBody [data-tab]').forEach(b=>b.onclick=()=>authView(b.dataset.tab));
$$('[data-eye]').forEach(b=>b.onclick=()=>{let i=$('#'+b.dataset.eye);i.type=i.type==='password'?'text':'password';b.textContent=i.type==='password'?'Show':'Hide'});
setTimeout(()=>$(L?'#aEmail':'#aName').focus(),60);
$('#authForm').onsubmit=async e=>{e.preventDefault();let err=m=>{$('#authErr').textContent=m},btn=$('#authSubmit'),email=$('#aEmail').value.trim().toLowerCase(),pw=$('#aPw').value,u=users();
  if(!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email))return err('Please enter a valid email address.');
  btn.disabled=true;
  try{if(L){let x=u[email];if(!x||await hashPw(pw,x.salt)!==x.hash)return err('Email or password is incorrect.');
      startSession(email,$('#aRemember').checked);toast('Welcome back, '+x.name.split(' ')[0])}
    else{let name=$('#aName').value.trim(),phone=$('#aPhone').value.trim();
      if(name.length<2)return err('Please enter your full name.');
      if(phone&&!/^\+?[\d\s-]{10,15}$/.test(phone))return err('Please enter a valid mobile number.');
      if(pw.length<8||!/\d/.test(pw)||!/[a-z]/i.test(pw))return err('Password needs at least 8 characters, including a letter and a number.');
      if(pw!==$('#aPw2').value)return err('Passwords do not match.');
      if(u[email])return err('An account with this email already exists. Please log in.');
      let salt=newSalt();u[email]={name,email,phone,salt,hash:await hashPw(pw,salt),since:Date.now(),orders:0};saveUsers(u);
      startSession(email,$('#aRemember').checked);toast('Account created — welcome to LUMIRA')}
    accountUI();profileView()}finally{btn.disabled=false}}}
function profileView(){let u=currentUser();if(!u)return authView('login');let since=new Date(u.since).toLocaleDateString('en-IN',{month:'long',year:'numeric'});
$('#authBody').innerHTML=`<small>MY PROFILE</small><div class="profileHead"><div class="avatar">${esc(initials(u.name))}</div><div><h2>${esc(u.name)}</h2><p>${esc(u.email)}</p><span class="tier">Circle member · since ${since}</span></div></div>
<div class="stats"><div><b>${S.wish.length}</b><span>Wishlist</span></div><div><b>${S.cart.reduce((a,x)=>a+x.q,0)}</b><span>In bag</span></div><div><b>${u.orders||0}</b><span>Orders</span></div></div>
<p class="profileSection">Personal details</p><form id="profileForm"><div class="field"><label for="pName">Full name</label><input id="pName" value="${esc(u.name)}" required></div><div class="field"><label for="pPhone">Mobile number</label><input id="pPhone" type="tel" value="${esc(u.phone||'')}" placeholder="+91"></div><p class="authErr" id="profErr" role="alert"></p>
<div class="authActions"><button class="pill dark full">Save Changes</button><button type="button" class="pill full" id="pWish">View Wishlist</button><button type="button" class="pill outline full" id="pLogout">Log Out</button></div></form>`;
$('#profileForm').onsubmit=e=>{e.preventDefault();let n=$('#pName').value.trim(),ph=$('#pPhone').value.trim();if(n.length<2)return $('#profErr').textContent='Please enter your full name.';
  if(ph&&!/^\+?[\d\s-]{10,15}$/.test(ph))return $('#profErr').textContent='Please enter a valid mobile number.';
  let all=users();all[u.email].name=n;all[u.email].phone=ph;saveUsers(all);accountUI();profileView();toast('Profile updated')};
$('#pWish').onclick=()=>{hide('#authModal');show('#wishDrawer')};
$('#pLogout').onclick=()=>{logoutSilently();accountUI();hide('#authModal');toast('You have been logged out securely')}}
$('#profileBtn').onclick=()=>openAccount();$('#mobileAccount').onclick=()=>openAccount();
/* count demo orders against the signed-in profile */
$('#placeOrder').addEventListener('click',()=>{let u=currentUser();if(u){let all=users();all[u.email].orders=(all[u.email].orders||0)+1;saveUsers(all)}});
window.addEventListener('storage',e=>{if(/lumira(Session|Users)/.test(e.key||''))accountUI()});
accountUI();
