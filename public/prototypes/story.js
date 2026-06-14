/* Story canvas — flip book + Figma chrome (zoom) */
(function(){
  /* ---------- JOURNAL FLIP BOOK ---------- */
  var book = document.getElementById('book');
  if(book){
    var leaves = Array.prototype.slice.call(book.querySelectorAll('.leaf'));
    var N = leaves.length, flipped = 0, busy = false;
    var prevBtn = document.getElementById('prevBtn');
    var nextBtn = document.getElementById('nextBtn');
    var counter = document.getElementById('pgCount');
    function label(n){ if(n===0) return 'cover'; if(n===N) return 'the end'; return 'spread '+n+' / '+(N-1); }
    function settle(){
      leaves.forEach(function(lf,i){ lf.style.zIndex = (i<flipped) ? i : (N-i); });
      book.classList.toggle('closed', flipped===0);
      if(prevBtn) prevBtn.disabled = (flipped===0);
      if(nextBtn) nextBtn.disabled = (flipped===N);
      if(counter) counter.textContent = label(flipped);
      setTurned();
      busy = false;
    }
    function apply(){ leaves.forEach(function(lf,i){ lf.style.transform = (i<flipped)?'rotateY(-180deg)':'rotateY(0deg)'; }); }
    function setTurned(){ leaves.forEach(function(lf,i){ lf.classList.toggle('turned', i<flipped); }); }
    function go(dir){
      if(busy) return;
      var target = flipped + dir;
      if(target<0 || target>N) return;
      var moving = dir>0 ? leaves[flipped] : leaves[flipped-1];
      busy = true;
      if(moving) moving.style.zIndex = 999;
      flipped = target; apply();
      // swap which face is visible at the mid-flip (page edge-on)
      if(moving) setTimeout(function(){ moving.classList.toggle('turned', dir>0); }, 450);
      // settle on a timer (don't depend on transitionend, which can be skipped)
      setTimeout(settle, 940);
    }
    if(nextBtn) nextBtn.addEventListener('click', function(){ go(1); });
    if(prevBtn) prevBtn.addEventListener('click', function(){ go(-1); });
    book.addEventListener('click', function(e){
      if(e.target.closest('button')) return;
      var r = book.getBoundingClientRect();
      if(e.clientX > r.left + r.width/2) go(1); else go(-1);
    });
    window.addEventListener('keydown', function(e){
      if(e.key==='ArrowRight') go(1); else if(e.key==='ArrowLeft') go(-1);
    });
    settle(); setTurned();
  }

  /* ---------- FIGMA ZOOM ---------- */
  var board = document.getElementById('board');
  var spacer = document.getElementById('spacer');
  var valEl = document.getElementById('zoomVal');
  var zin = document.getElementById('zoomIn');
  var zout = document.getElementById('zoomOut');
  if(board && spacer){
    var z = 1, MIN = 0.4, MAX = 1.4;
    function fit(){
      // never let the 1280 board overflow the viewport horizontally
      var avail = Math.min(window.innerWidth - 48, 1280);
      return Math.min(1, avail/1280);
    }
    function render(){
      board.style.transform = 'translateX(-50%) scale('+z+')';
      spacer.style.height = (board.offsetHeight * z) + 'px';
      if(valEl) valEl.textContent = Math.round(z*100) + '%';
    }
    function setZoom(nz){ z = Math.max(MIN, Math.min(MAX, nz)); render(); }
    if(zin) zin.addEventListener('click', function(){ setZoom(z + 0.1); });
    if(zout) zout.addEventListener('click', function(){ setZoom(z - 0.1); });
    // initial fit-to-width on desktop board
    function init(){ if(window.innerWidth > 760){ z = fit(); } else { z = 1; board.style.transform='translateX(-50%)'; spacer.style.height=''; if(valEl) valEl.textContent='100%'; return; } render(); }
    init();
    var rt;
    window.addEventListener('resize', function(){ clearTimeout(rt); rt = setTimeout(init, 120); });
  }

  /* ---------- frosted nav on scroll ---------- */
  var headerEl = document.querySelector('header');
  if(headerEl){
    var onNavScroll = function(){ headerEl.classList.toggle('scrolled', window.scrollY > 6); };
    window.addEventListener('scroll', onNavScroll, {passive:true});
    onNavScroll();
  }

  /* ---------- gentle cursor drift on scroll ---------- */
  var drifters = Array.prototype.slice.call(document.querySelectorAll('[data-drift]'));
  if(drifters.length){
    window.addEventListener('scroll', function(){
      var y = window.scrollY;
      drifters.forEach(function(el){
        var k = parseFloat(el.getAttribute('data-drift')) || 0.02;
        el.style.setProperty('--dy', (y*k).toFixed(1)+'px');
      });
    }, {passive:true});
  }
})();
