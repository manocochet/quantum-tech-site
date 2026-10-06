/* Quantum Tech — motion layer.
   data-reveal=""|"up"|"fade"|"mask"|"line"|"left"|"scale"   data-delay="ms"
   parent data-stagger="ms" → delays children with data-reveal
   data-count="250000" (+ data-decimals) → count-up of the element's first text node
   data-parallax="0.15" → vertical drift on scroll
   Internal links to *.dc.html get a curtain transition. A thin progress bar tracks scroll. */
(function () {
  if (window.QTMotion) return;
  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  var EASE = 'cubic-bezier(.16,.84,.24,1)';
  var hidden = {
    up: ['opacity:0', 'translate(0,32px)'], '': ['opacity:0', 'translate(0,32px)'],
    fade: ['opacity:0', ''], left: ['opacity:0', 'translate(-32px,0)'],
    scale: ['opacity:0', 'scale(.94)'], line: ['', 'scaleX(0)'], mask: ['', '']
  };
  function prep(el) {
    if (el.dataset.rv) return; el.dataset.rv = '1';
    if (reduce) return;
    var t = el.getAttribute('data-reveal') || '';
    var p = el.parentElement, d = +(el.getAttribute('data-delay') || 0);
    if (p && p.hasAttribute('data-stagger')) {
      var sibs = Array.prototype.filter.call(p.children, function (c) { return c.hasAttribute('data-reveal'); });
      d += sibs.indexOf(el) * +(p.getAttribute('data-stagger') || 80);
    }
    el._rvDelay = d;
    if (t === 'mask') {
      el.style.clipPath = 'inset(0 0 100% 0)';
      var im = el.querySelector('img,video'); if (im) { im.style.transform = 'scale(1.14)'; el._rvImg = im; }
    } else {
      var h = hidden[t] || hidden.up;
      if (h[0]) el.style.opacity = '0';
      if (h[1]) el.style.transform = h[1];
      if (t === 'line') el.style.transformOrigin = 'left center';
    }
    io.observe(el);
  }
  function show(el) {
    if (el._rvDone) return; el._rvDone = true; el._rvShown = true;
    var t = el.getAttribute('data-reveal') || '', d = (el._rvDelay || 0) + 'ms';
    if (t === 'mask') {
      el.style.transition = 'clip-path 1.3s ' + EASE + ' ' + d;
      if (el._rvImg) el._rvImg.style.transition = 'transform 1.8s ' + EASE + ' ' + d;
      requestAnimationFrame(function () { el.style.clipPath = 'inset(0 0 0% 0)'; if (el._rvImg) el._rvImg.style.transform = 'scale(1)'; });
    } else {
      el.style.transition = 'opacity 1s ' + EASE + ' ' + d + ', transform 1.1s ' + EASE + ' ' + d;
      requestAnimationFrame(function () { el.style.opacity = ''; el.style.transform = ''; });
    }
  }
  var io = new IntersectionObserver(function (es) {
    es.forEach(function (e) { if (e.isIntersecting || e.boundingClientRect.bottom < 0) { show(e.target); io.unobserve(e.target); } });
  }, { rootMargin: '0px 0px -6% 0px', threshold: 0.01 });
  function sweep() {
    document.querySelectorAll('[data-rv]').forEach(function (el) {
      if (el._rvShown || el.getBoundingClientRect().top > innerHeight) return;
      el._rvShown = true; show(el); io.unobserve(el);
    });
  }

  function fmt(n, dec) { return n.toLocaleString('fr-FR', { minimumFractionDigits: dec, maximumFractionDigits: dec }).replace(/\u202f|\u00a0/g, ' '); }
  var cio = new IntersectionObserver(function (es) {
    es.forEach(function (e) {
      if (!e.isIntersecting) return; cio.unobserve(e.target);
      var el = e.target, to = parseFloat(el.getAttribute('data-count')), dec = +(el.getAttribute('data-decimals') || 0);
      var node = el.firstChild && el.firstChild.nodeType === 3 ? el.firstChild : null; if (!node) return;
      var final = node.nodeValue;
      if (reduce) return;
      var t0 = performance.now(), dur = 1800;
      (function step(t) {
        var k = Math.min(1, (t - t0) / dur), v = to * (1 - Math.pow(2, -10 * k));
        node.nodeValue = k >= 1 ? final : fmt(v, dec);
        if (k < 1) requestAnimationFrame(step);
      })(t0);
    });
  }, { threshold: 0.4 });

  var px = [];
  function scan() {
    document.querySelectorAll('[data-reveal]:not([data-rv])').forEach(prep);
    document.querySelectorAll('[data-count]:not([data-cv])').forEach(function (el) { el.dataset.cv = '1'; cio.observe(el); });
    document.querySelectorAll('[data-parallax]:not([data-pv])').forEach(function (el) { el.dataset.pv = '1'; px.push(el); });
  }
  var bar, ticking = false, sweepT;
  function onScroll() {
    if (ticking) return; ticking = true;
    requestAnimationFrame(function () {
      ticking = false;
      var h = document.documentElement.scrollHeight - innerHeight;
      if (bar) bar.style.transform = 'scaleX(' + (h > 0 ? scrollY / h : 0) + ')';
      clearTimeout(sweepT); sweepT = setTimeout(sweep, 120);
      if (reduce) return;
      px = px.filter(function (el) { return el.isConnected; });
      px.forEach(function (el) {
        var r = el.getBoundingClientRect(), c = r.top + r.height / 2 - innerHeight / 2;
        el.style.transform = 'translate3d(0,' + (-c * parseFloat(el.getAttribute('data-parallax'))).toFixed(1) + 'px,0)';
      });
    });
  }
  var curtain;
  function buildChrome() {
    bar = document.createElement('div');
    bar.style.cssText = 'position:fixed;left:0;top:0;height:2px;width:100%;z-index:9998;transform-origin:left;transform:scaleX(0);background:linear-gradient(90deg,#4F7BE0,#8B6AD8,#D46CA8);pointer-events:none';
    document.body.appendChild(bar);
    curtain = document.createElement('div');
    curtain.style.cssText = 'position:fixed;inset:0;z-index:9997;background:#05050B;display:flex;align-items:center;justify-content:center;pointer-events:none;transition:transform .7s ' + EASE + ';transform:translateY(0)';
    curtain.innerHTML = '<img src="media/brand/mark.png" alt="" style="width:56px;height:56px;opacity:.9">';
    document.body.appendChild(curtain);
    requestAnimationFrame(function () { requestAnimationFrame(function () { curtain.style.transform = 'translateY(-100%)'; }); });
    addEventListener('pageshow', function (e) { if (e.persisted) curtain.style.transform = 'translateY(-100%)'; });
    document.addEventListener('click', function (e) {
      var a = e.target.closest && e.target.closest('a[href]'); if (!a) return;
      var href = a.getAttribute('href');
      if (!/\.dc\.html([?#].*)?$/.test(href) || a.target || e.metaKey || e.ctrlKey || e.shiftKey || e.defaultPrevented) return;
      e.preventDefault();
      if (reduce) { location.href = href; return; }
      curtain.style.transition = 'none'; curtain.style.transform = 'translateY(100%)';
      requestAnimationFrame(function () { requestAnimationFrame(function () {
        curtain.style.transition = 'transform .55s ' + EASE; curtain.style.transform = 'translateY(0)';
        setTimeout(function () { location.href = href; }, 520);
      }); });
    });
  }
  function init() {
    buildChrome(); scan(); onScroll();
    var to; new MutationObserver(function () { clearTimeout(to); to = setTimeout(scan, 50); }).observe(document.body, { childList: true, subtree: true });
    addEventListener('scroll', onScroll, { passive: true }); addEventListener('resize', onScroll);
  }
  window.QTMotion = { scan: scan };
  if (document.body) init(); else document.addEventListener('DOMContentLoaded', init);
})();
