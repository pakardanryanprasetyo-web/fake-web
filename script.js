(function(){
  var root=document.documentElement;
  var nav=document.getElementById('nav'),mb=document.getElementById('menuBtn');
  mb.onclick=function(){var o=nav.classList.toggle('open');mb.setAttribute('aria-expanded',o)};
  nav.querySelectorAll('a').forEach(function(a){a.onclick=function(){nav.classList.remove('open');mb.setAttribute('aria-expanded',false)}});

  document.getElementById('themeBtn').onclick=function(){
    var dark=root.getAttribute('data-theme')==='dark'||(!root.getAttribute('data-theme')&&matchMedia('(prefers-color-scheme: dark)').matches);
    root.setAttribute('data-theme',dark?'light':'dark');
  };

  var links=[].slice.call(nav.querySelectorAll('a'));
  var ids=links.map(function(a){return a.getAttribute('href').slice(1)});
  function spy(){
    var y=scrollY+130,cur=ids[0];
    ids.forEach(function(id){var el=document.getElementById(id);if(el&&el.getBoundingClientRect().top+scrollY<=y)cur=id});
    links.forEach(function(a){a.classList.toggle('on',a.getAttribute('href')==='#'+cur)});
  }
  addEventListener('scroll',spy,{passive:true});spy();

  var items=[
    ['Gedung Kampus 2 SMK Muhammadiyah Pakem','images/kampus2.jpg'],
    ['Young Coder World Cup 2025','images/youngcoder.jpg'],
    ['Praktik Teknik Sepeda Motor','images/tsm.jpg'],
    ['Validasi Kurikulum Pesantren Vokasi','images/validasi.jpg'],
    ['Laboratorium TEFA Perbankan Syariah','images/tefa.jpg'],
    ['Kegiatan Milad Muhammadiyah','images/milad.jpg'],
    ['Apel di halaman sekolah','images/apel.jpg'],
    ['Sarasehan Pendidikan: Mencetak Juara Vokasi','images/sarasehan.jpg'],
    ['Praktik Teknik Kendaraan Ringan dengan penerapan K3','images/bengkel.jpg'],
    ['Penyerahan cenderamata Pesantren Vokasi','images/cenderamata.jpg'],
    ['Belajar di laboratorium komputer','images/kelas.jpg'],
    ['Rancangan Kampus 2','images/render.jpg'],
    ['Merancang bangunan dengan komputer dan maket','images/arsitektur.jpg'],
    ['Keceriaan warga sekolah','images/guru.jpg'],
    ['Laboratorium komputer','images/lab.jpg'],
    ['Upacara bersama seluruh siswa','images/upacara.jpg']
  ];
  var g=document.getElementById('gal'),lb=document.getElementById('lb'),lbv=document.getElementById('lbv'),cur=0;
  function show(i){cur=(i+items.length)%items.length;lbv.innerHTML='<img src="'+items[cur][1]+'" alt="'+items[cur][0]+'"><p>'+items[cur][0]+'</p>'}
  items.forEach(function(it,i){
    var f=document.createElement('button');f.className='fig';f.type='button';f.setAttribute('aria-label','Perbesar: '+it[0]);
    f.innerHTML='<img src="'+it[1]+'" alt="'+it[0]+'" loading="lazy"><span>'+it[0]+'</span>';
    f.onclick=function(){show(i);lb.hidden=false;document.getElementById('lbx').focus()};
    g.appendChild(f);
  });
  function close(){lb.hidden=true}
  document.getElementById('lbx').onclick=close;
  document.getElementById('lbp').onclick=function(){show(cur-1)};
  document.getElementById('lbn').onclick=function(){show(cur+1)};
  lb.onclick=function(e){if(e.target===lb)close()};
  addEventListener('keydown',function(e){
    if(lb.hidden)return;
    if(e.key==='Escape')close();
    if(e.key==='ArrowLeft')show(cur-1);
    if(e.key==='ArrowRight')show(cur+1);
  });

  document.getElementById('f').onsubmit=function(e){e.preventDefault();document.getElementById('ok').hidden=false;this.reset()};
})();
