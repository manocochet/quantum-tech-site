/* Quantum Tech — animated web components (recréations des séquences motion)
   <qt-intro once>                      Séquence 01 · révélation du logo (préchargement, 1×/session)
   <qt-cosmos-sig byline>               Séquence 11 · signature COSMOS (au premier affichage)
   <qt-layers mode="auto|scroll" track="#id">   Séquence 05 · les 5 couches de la ville
   <qt-field density="1">               champ de particules connectées (fond)
   <qt-map>                             carte mondiale en trame de points + implantations
*/
(function () {
  if (window.__qtAnim) return; window.__qtAnim = true;
  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  var COL = ['#4F7BE0', '#6C74DA', '#8B6AD8', '#AE6AC4', '#D46CA8'];
  var FONT = "'Sora','Noto Sans SC',sans-serif", MONO = "'JetBrains Mono',monospace";
  function rng(seed) { var s = seed >>> 0; return function () { s = (s * 1664525 + 1013904223) >>> 0; return s / 4294967296; }; }
  function clamp(v, a, b) { return Math.max(a, Math.min(b, v)); }
  function ease(k) { return 1 - Math.pow(1 - k, 3); }
  function rgba(hex, a) { var n = parseInt(hex.slice(1), 16); return 'rgba(' + (n >> 16) + ',' + ((n >> 8) & 255) + ',' + (n & 255) + ',' + a + ')'; }
  function visible(el, cb) { var o = new IntersectionObserver(function (es) { cb(es[0].isIntersecting); }, { threshold: 0 }); o.observe(el); return o; }
  function canvasFit(host, cv) {
    var dpr = Math.min(2, devicePixelRatio || 1), r = host.getBoundingClientRect();
    cv.width = Math.max(1, r.width * dpr); cv.height = Math.max(1, r.height * dpr);
    cv.style.width = r.width + 'px'; cv.style.height = r.height + 'px';
    var c = cv.getContext('2d'); c.setTransform(dpr, 0, 0, dpr, 0, 0); return { c: c, w: r.width, h: r.height };
  }

  /* ───────────── Séquence 01 · intro ───────────── */
  class QtIntro extends HTMLElement {
    connectedCallback() {
      if (this._i) return; this._i = 1;
      var self = this;
      try { if (this.hasAttribute('once') && sessionStorage.getItem('qt_intro')) { this.style.display = 'none'; window.dispatchEvent(new Event('qt-intro-done')); return; } } catch (e) {}
      var caption = this.getAttribute('caption') || '塑造未来 · FAÇONNER L\u2019AVENIR';
      var root = this.attachShadow({ mode: 'open' });
      var h = clamp(innerWidth * 0.085, 54, 112), W = h * 3.9625;
      root.innerHTML = '<style>' +
        '.w{position:fixed;inset:0;z-index:9999;background:#05050B;display:flex;align-items:center;justify-content:center;overflow:hidden}' +
        '.g{position:absolute;left:50%;top:50%;width:90vmin;height:90vmin;margin:-45vmin 0 0 -45vmin;border-radius:50%;background:radial-gradient(circle,rgba(139,106,216,.42) 0%,rgba(79,123,224,.12) 38%,rgba(5,5,11,0) 66%);opacity:0}' +
        '.d{position:absolute;left:50%;top:50%;width:10px;height:10px;margin:-5px 0 0 -5px;border-radius:50%;background:#fff;box-shadow:0 0 18px 6px rgba(139,106,216,.9),0 0 60px 20px rgba(139,106,216,.35);transform:scale(0)}' +
        '.v{position:absolute;left:50%;top:50%;width:1px;height:0;background:linear-gradient(#fff0,#fff,#fff0);opacity:.8}' +
        '.lk{position:relative;height:' + h + 'px;width:' + W + 'px;opacity:0}' +
        '.lk img{height:100%;width:auto;display:block}' +
        '.cap{position:absolute;left:50%;top:calc(50% + ' + (h * 0.95) + 'px);transform:translateX(-50%);display:flex;flex-direction:column;align-items:center;gap:16px}' +
        '.ln{height:1px;width:0;background:linear-gradient(90deg,#4F7BE000,#8B6AD8,#D46CA800)}' +
        '.tx{font:500 12px ' + MONO + ';letter-spacing:.5em;color:#C9C6DA;opacity:0;white-space:nowrap}' +
        '.sk{position:absolute;right:28px;bottom:24px;background:none;border:1px solid #2A2840;color:#8D8AA6;font:500 11px ' + MONO + ';letter-spacing:.14em;padding:10px 14px;cursor:pointer}' +
        '.sk:hover{color:#fff;border-color:#8B6AD8}</style>' +
        '<div class="w"><div class="g"></div><div class="v" style="margin-left:-' + (h * 0.12) + 'px"></div><div class="v"></div><div class="v" style="margin-left:' + (h * 0.12) + 'px"></div><div class="d"></div>' +
        '<div class="lk"><img src="media/brand/lockup.png" alt="量子技术 Quantum Tech"></div>' +
        '<div class="cap"><div class="ln"></div><div class="tx">' + caption + '</div></div>' +
        '<button class="sk">PASSER</button></div>';
      var $ = function (s) { return root.querySelector(s); }, $$ = function (s) { return root.querySelectorAll(s); };
      var w = $('.w'), done = false;
      function finish() {
        if (done) return; done = true;
        try { sessionStorage.setItem('qt_intro', '1'); } catch (e) {}
        w.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 700, fill: 'forwards', easing: 'ease' }).onfinish = function () { self.style.display = 'none'; };
        window.dispatchEvent(new Event('qt-intro-done'));
      }
      $('.sk').onclick = finish; addEventListener('keydown', finish, { once: true });
      if (reduce) { setTimeout(finish, 300); return; }
      var off = W / 2 - h / 2, F = 'forwards', E = 'cubic-bezier(.16,.84,.24,1)';
      $('.d').animate([{ transform: 'scale(0)' }, { transform: 'scale(1.2)' }, { transform: 'scale(1)' }], { duration: 600, fill: F, easing: E });
      $('.d').animate([{ opacity: 1 }, { opacity: 0 }], { delay: 1100, duration: 400, fill: F });
      $$('.v').forEach(function (v, i) {
        v.animate([{ height: '0px', marginTop: '0px' }, { height: h * 1.1 + 'px', marginTop: -h * 0.55 + 'px' }], { delay: 500 + i * 90, duration: 700, fill: F, easing: E });
        v.animate([{ opacity: .8 }, { opacity: 0 }], { delay: 1250, duration: 400, fill: F });
      });
      $('.g').animate([{ opacity: 0, transform: 'scale(.6)' }, { opacity: 1, transform: 'scale(1)' }], { delay: 900, duration: 1600, fill: F, easing: E });
      var lk = $('.lk');
      lk.animate([
        { opacity: 0, filter: 'blur(14px)', transform: 'translateX(' + off + 'px) scale(1.12)', clipPath: 'inset(0 ' + (W - h) + 'px 0 0)' },
        { opacity: 1, filter: 'blur(0px)', transform: 'translateX(' + off + 'px) scale(1)', clipPath: 'inset(0 ' + (W - h) + 'px 0 0)' }
      ], { delay: 1200, duration: 900, fill: F, easing: E }).onfinish = function () {
        lk.animate([
          { opacity: 1, transform: 'translateX(' + off + 'px)', clipPath: 'inset(0 ' + (W - h) + 'px 0 0)' },
          { opacity: 1, transform: 'translateX(0px)', clipPath: 'inset(0 0px 0 0)' }
        ], { delay: 150, duration: 1000, fill: F, easing: E });
      };
      $('.ln').animate([{ width: '0px' }, { width: Math.min(280, W * 0.6) + 'px' }], { delay: 3300, duration: 800, fill: F, easing: E });
      $('.tx').animate([{ opacity: 0, letterSpacing: '.7em' }, { opacity: 1, letterSpacing: '.42em' }], { delay: 3450, duration: 900, fill: F, easing: E });
      setTimeout(finish, 5000);
    }
  }

  /* ───────────── Séquence 11 · signature COSMOS ───────────── */
  var COSMOS_MARK = '<svg viewBox="-60 -60 120 120" class="mk" aria-hidden="true"><defs>' +
    '<linearGradient id="cg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#4F7BE0"/><stop offset=".55" stop-color="#8B6AD8"/><stop offset="1" stop-color="#D46CA8"/></linearGradient>' +
    '<linearGradient id="cs" x1="1" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff" stop-opacity="0"/><stop offset=".35" stop-color="#C9D4FF"/><stop offset=".6" stop-color="#B58BEA"/><stop offset="1" stop-color="#D46CA8" stop-opacity="0"/></linearGradient>' +
    '<filter id="cgl"><feGaussianBlur stdDeviation="2.4" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs>' +
    '<g filter="url(#cgl)"><ellipse class="e" cx="0" cy="0" rx="40" ry="17" transform="rotate(48)" fill="none" stroke="url(#cg)" stroke-width="6" pathLength="1" stroke-dasharray="1" stroke-dashoffset="1"/>' +
    '<path class="s" d="M44 -52 L-40 50" stroke="url(#cs)" stroke-width="3.2" stroke-linecap="round" pathLength="1" stroke-dasharray="1" stroke-dashoffset="1"/></g></svg>';
  window.QT_COSMOS_MARK = COSMOS_MARK;
  class QtCosmosSig extends HTMLElement {
    connectedCallback() {
      if (this._i) return; this._i = 1;
      var self = this, root = this.attachShadow({ mode: 'open' });
      var mark = this.getAttribute('mark');
      var words = ['City', 'Operating', 'System', 'for', 'Metropolitan', 'Organizational', 'Structures'];
      var IC = ['#7C8CF2', '#8A7FEA', '#9A74E0', '', '#AD6FD4', '#C06EC4', '#D46CA8'];
      root.innerHTML = '<style>:host{display:block;position:relative}' +
        'canvas{position:absolute;left:50%;top:calc(clamp(110px,12vw,180px) / 2);width:min(1500px,130vw);height:min(760px,66vw);transform:translate(-50%,-50%);pointer-events:none;opacity:0}' +
        '.w{position:relative;display:flex;flex-direction:column;align-items:center;text-align:center}' +
        '.mw{position:relative;width:clamp(110px,12vw,180px);aspect-ratio:1}' +
        '.mi{position:absolute;inset:0;background:linear-gradient(225deg,#F2EEFF 0%,#8FA4FF 28%,#6C74DA 50%,#B07CE8 72%,#E58BC0 100%);-webkit-mask:url(' + mark + ') center/contain no-repeat;mask:url(' + mark + ') center/contain no-repeat;opacity:0}' +
        '.mg{position:absolute;inset:-90%;border-radius:50%;background:radial-gradient(circle,rgba(108,116,218,.42),rgba(139,106,216,.14) 30%,rgba(5,5,11,0) 62%);opacity:0}' +
        '.rg{position:absolute;inset:-6%;border-radius:50%;border:1px solid rgba(181,160,255,.7);opacity:0}' +
        '.wd{position:relative;margin-top:clamp(36px,6vh,64px);font:500 clamp(54px,6.4vw,110px)/1 ' + FONT + ';color:#FFFFFF;white-space:nowrap}' +
        '.wd span{display:inline-block;opacity:0;margin:0 .17em}' +
        '.sh{position:absolute;inset:0;white-space:nowrap;background:linear-gradient(100deg,rgba(255,255,255,0) 40%,rgba(200,190,255,1) 50%,rgba(255,255,255,0) 60%);background-size:300% 100%;background-position:100% 0;-webkit-background-clip:text;background-clip:text;color:transparent;opacity:0;pointer-events:none}' +
        '.sh span{display:inline-block;margin:0 .17em}' +
        '.ac{display:flex;flex-wrap:wrap;justify-content:center;gap:.2em .55em;margin-top:clamp(28px,4.5vh,48px);font:400 clamp(15px,1.55vw,26px)/1.2 ' + FONT + ';color:#DAD7E8;letter-spacing:.01em}' +
        '.ac span{display:inline-block;opacity:0}.ac b{font-weight:500}' +
        '.by{display:flex;flex-direction:column;align-items:center;gap:22px;margin-top:clamp(36px,6vh,64px);opacity:0}' +
        '.by small{font:500 10px ' + MONO + ';letter-spacing:.5em;padding-left:.5em;color:#8D8AA6}.by img{height:clamp(30px,3vw,42px)}' +
        '</style><canvas style="display:none"></canvas>' +
        '<div class="w"><div class="mw"><div class="mg"></div><div class="mi"></div></div>' +
        '<div class="wd">' + 'COSMOS'.split('').map(function (c) { return '<span>' + c + '</span>'; }).join('') +
        '<div class="sh">' + 'COSMOS'.split('').map(function (c) { return '<span>' + c + '</span>'; }).join('') + '</div></div>' +
        '<div class="ac">' + words.map(function (w, i) { return '<span>' + (IC[i] ? '<b style="color:' + IC[i] + '">' + w[0] + '</b>' + w.slice(1) : w) + '</span>'; }).join('') + '</div>' +
        (this.hasAttribute('byline') ? '<div class="by"><small>PAR</small><img src="media/brand/lockup.png" alt="Quantum Tech"></div>' : '') + '</div>';
      var cv = root.querySelector('canvas'), r = rng(23), rings = [];
      [0.16, 0.27, 0.4, 0.55, 0.72, 0.9].forEach(function (k, ri) {
        var dots = [], n = Math.round(60 + k * 160);
        for (var j = 0; j < n; j++) dots.push({ a: r() * 6.2832, s: .6 + r() * 1.4, o: .15 + r() * .7, streak: r() < .06 });
        rings.push({ k: k, dots: dots, sp: (ri % 2 ? -1 : 1) * (0.00004 + r() * 0.00005), off: r() * 6.28 });
      });
      var g, raf = 0, on = false, t0 = 0;
      var fit = function () { cv.style.width = cv.style.height = ''; g = canvasFit(cv, cv); cv.style.width = cv.style.height = ''; };
      var loop = function (t) {
        raf = 0; if (!on) return; if (!g || !g.w) fit(); if (!g) return;
        var c = g.c, W = g.w, H = g.h, cx = W / 2, cy = H / 2; c.clearRect(0, 0, W, H);
        var grow = reduce ? 1 : ease(clamp((t - t0) / 2400, 0, 1));
        rings.forEach(function (R, ri) {
          var rx = W * 0.5 * R.k * (0.7 + 0.3 * grow), ry = rx * 0.36, ang = R.off + (reduce ? 0 : t * R.sp);
          c.strokeStyle = 'rgba(139,120,230,' + (0.07 * grow) + ')'; c.lineWidth = 1; c.setLineDash([1, 6]);
          c.beginPath(); c.ellipse(cx, cy, rx, ry, 0, 0, 6.2832); c.stroke(); c.setLineDash([]);
          R.dots.forEach(function (d) {
            var a = d.a + ang, x = cx + Math.cos(a) * rx, y = cy + Math.sin(a) * ry;
            var depth = .55 + .45 * Math.sin(a), al = d.o * depth * grow * (1 - R.k * 0.35);
            if (d.streak) { c.strokeStyle = 'rgba(160,170,255,' + al * .8 + ')'; c.lineWidth = 1; c.beginPath(); c.moveTo(x, y); c.lineTo(x - Math.sin(a) * 18, y + Math.cos(a) * 6); c.stroke(); }
            else { c.fillStyle = 'rgba(205,200,255,' + al + ')'; c.fillRect(x, y, d.s, d.s); }
          });
        });
        raf = requestAnimationFrame(loop);
      };
      this.ro = new ResizeObserver(fit); this.ro.observe(cv);

      var played = false, scrub = this.hasAttribute('scrub'), anims = [];
      this.setProgress = function (k) { var T = 5000 * Math.max(0, Math.min(1, k)); anims.forEach(function (a) { a.currentTime = T; }); };
      var build = function () {
        var E = 'cubic-bezier(.16,.84,.24,1)', q = function (s) { return root.querySelectorAll(s); };
        var t = reduce && !scrub ? 0 : 1, A = function (el, kf, op) { if (!el) return; var an = el.animate(kf, Object.assign({ fill: 'both', easing: E }, op, { delay: (op.delay || 0) * t, duration: Math.max(1, (op.duration || 0) * t) })); if (scrub) { an.pause(); an.currentTime = 0; anims.push(an); } };
        A(cv, [{ opacity: 0 }, { opacity: 1 }], { duration: 2400, easing: 'ease-out' });
        A(q('.mg')[0], [{ opacity: 0, transform: 'scale(.3)' }, { opacity: 1, transform: 'scale(1)' }], { duration: 2000 });
        A(q('.mi')[0], [{ opacity: 0, transform: 'translateY(12px) scale(1.04)', filter: 'blur(16px)' }, { opacity: 1, transform: 'none', filter: 'blur(0px)' }], { delay: 200, duration: 1600 });
        q('.wd > span').forEach(function (s, i) { A(s, [{ opacity: 0, filter: 'blur(16px)', transform: 'translateY(.15em) scale(1.08)' }, { opacity: 1, filter: 'blur(0)', transform: 'none' }], { delay: 1300 + i * 120, duration: 1100 }); });
        q('.ac > span').forEach(function (s, i) { A(s, [{ opacity: 0, transform: 'translateY(10px)', filter: 'blur(6px)' }, { opacity: 1, transform: 'none', filter: 'blur(0)' }], { delay: 2400 + i * 120, duration: 900 }); });
        var sh = q('.sh')[0]; if (sh && t) A(sh, [{ opacity: 0, backgroundPosition: '100% 0' }, { opacity: 1, backgroundPosition: '100% 0', offset: .01 }, { opacity: 1, backgroundPosition: '0% 0', offset: .99 }, { opacity: 0, backgroundPosition: '0% 0' }], { delay: 3400, duration: 1400, easing: 'ease-in-out' });
        A(q('.by')[0], [{ opacity: 0, transform: 'translateY(10px)' }, { opacity: 1, transform: 'none' }], { delay: 3500, duration: 1000 });
      };
      if (scrub) { build(); if (reduce) this.setProgress(1); }
      else { var o = visible(this, function (v) { if (!v || played) return; played = true; o.disconnect(); build(); }); }
    }
    disconnectedCallback() { if (this.ro) this.ro.disconnect(); if (this.io2) this.io2.disconnect(); }
  }

  /* ───────────── Séquence 05 · couches COSMOS ───────────── */
  var LAYERS = ['Circulation & transports', 'Énergie', 'Infrastructures', 'Capteurs & caméras', 'Sécurité publique'];
  class QtLayers extends HTMLElement {
    connectedCallback() {
      if (this._i) return; this._i = 1;
      var self = this, root = this.attachShadow({ mode: 'open' });
      this.style.display = this.style.display || 'block'; this.style.position = this.style.position || 'relative';
      root.innerHTML = '<style>:host{display:block;position:relative}canvas{position:absolute;inset:0}' +
        '.lb{position:absolute;left:0;top:0;display:flex;align-items:center;gap:10px;padding:5px 16px 5px 5px;border-radius:999px;background:rgba(10,10,22,.86);border:1px solid #2A2840;font:600 12px ' + FONT + ';letter-spacing:.06em;text-transform:uppercase;color:#F2F0FA;white-space:nowrap;opacity:0;transition:border-color .4s,box-shadow .4s;cursor:pointer}' +
        '.lb i{font:500 10px ' + MONO + ';font-style:normal;width:24px;height:24px;border-radius:50%;display:flex;align-items:center;justify-content:center;color:#fff}</style><canvas></canvas>';
      this.cv = root.querySelector('canvas');
      this.labels = LAYERS.map(function (t, i) {
        var d = document.createElement('div'); d.className = 'lb';
        d.innerHTML = '<i style="background:' + rgba(COL[i], .55) + '">0' + (i + 1) + '</i>' + t;
        d.onmouseenter = function () { self.hover = i; }; d.onmouseleave = function () { self.hover = -1; };
        d.onclick = function () { self.dispatchEvent(new CustomEvent('qt-layer-pick', { detail: i, bubbles: true, composed: true })); };
        root.appendChild(d); return d;
      });
      this.hover = -1; this.active = -1; this.e = 0; this.t0 = performance.now();
      this.build();
      this.fit = function () { self.g = canvasFit(self, self.cv); };
      this.fit(); this.ro = new ResizeObserver(this.fit); this.ro.observe(this);
      this.on = false; this.io = visible(this, function (v) { self.on = v; if (v && !self.raf) self.raf = requestAnimationFrame(self.loop); if (v && !self.seen) { self.seen = true; self.t0 = performance.now(); } });
      var last = performance.now();
      this.loop = function (t) {
        self.raf = 0; if (!self.on) return;
        var dt = Math.min(50, t - last); last = t; self.step(t, dt); self.raf = requestAnimationFrame(self.loop);
      };
    }
    disconnectedCallback() { if (this.ro) this.ro.disconnect(); if (this.io) this.io.disconnect(); cancelAnimationFrame(this.raf); this.raf = 0; }
    build() {
      var r = rng(7), inDisk = function (m) { var u, v; do { u = r() * 2 - 1; v = r() * 2 - 1; } while (u * u + v * v > m * m); return [u, v]; };
      this.cars = []; for (var i = 0; i < 150; i++) { var p = inDisk(.92); this.cars.push({ u: p[0], v: p[1], d: r() < .5 ? 0 : 1, s: (r() < .5 ? -1 : 1) * (0.00004 + r() * 0.00008), l: .03 + r() * .06 }); }
      this.pulses = []; for (i = 0; i < 34; i++) this.pulses.push({ k: Math.round((r() * 2 - 1) * 6) * 0.14, d: r() < .5 ? 0 : 1, p: r() * 2 - 1, s: 0.0002 + r() * 0.0003 });
      this.blds = []; for (i = 0; i < 110; i++) { p = inDisk(.85); var dc = Math.hypot(p[0], p[1]); this.blds.push({ u: p[0], v: p[1], a: .018 + r() * .03, h: (8 + r() * 30) * (1.4 - dc) }); }
      this.nodes = []; for (i = 0; i < 46; i++) { p = inDisk(.88); this.nodes.push({ u: p[0], v: p[1], ph: r() * 6.28 }); }
      var N = this.nodes; this.arcs = [];
      N.forEach(function (a, ai) { var best = N.map(function (b, bi) { return [Math.hypot(a.u - b.u, a.v - b.v), bi]; }).sort(function (x, y) { return x[0] - y[0]; }); this.arcs.push([ai, best[1][1]]); if (r() < .5) this.arcs.push([ai, best[2][1]]); }, this);
      this.stars = []; for (i = 0; i < 280; i++) { p = inDisk(.97); this.stars.push({ u: p[0], v: p[1], ph: r() * 6.28, z: r() }); }
    }
    progress() {
      var sel = this.getAttribute('track'), el = sel ? document.querySelector(sel) : null;
      if (!el) return null; var r = el.getBoundingClientRect();
      var p = clamp(-r.top / Math.max(1, r.height - innerHeight), 0, 1), st = +(this.getAttribute('start') || 0);
      return clamp((p - st) / (1 - st), 0, 1);
    }
    step(t, dt) {
      var g = this.g; if (!g) return; var c = g.c, W = g.w, H = g.h;
      var mode = this.getAttribute('mode') || 'auto', act = -1;
      if (mode === 'scroll') {
        var p = this.progress(); if (p === null) p = 0;
        var target = clamp(p / 0.22, 0, 1); this.e += (target - this.e) * Math.min(1, dt * 0.008);
        act = p > 0.24 ? Math.min(4, Math.floor((p - 0.24) / 0.76 * 5)) : -1;
      } else {
        var k = reduce ? 1 : clamp((t - this.t0 - 300) / 2200, 0, 1); this.e = ease(k);
        act = this.e >= 1 && !reduce ? Math.floor((t - this.t0) / 2600) % 5 : -1;
      }
      if (this.hover >= 0) act = this.hover;
      if (act !== this.active) { this.active = act; this.dispatchEvent(new CustomEvent('qt-layer', { detail: act, bubbles: true, composed: true })); window.dispatchEvent(new CustomEvent('qt-layer', { detail: act })); }
      var e = this.e, labelsOn = W > 560 && !this.hasAttribute('nolabels');
      var cx = labelsOn ? W * 0.42 : W * 0.5;
      var rx = Math.min(labelsOn ? W * 0.33 : W * 0.44, H * 0.6), ry = rx * 0.3, gap = H * 0.15 * e + 5;
      var th = t * 0.00004, cs = Math.cos(th), sn = Math.sin(th);
      c.clearRect(0, 0, W, H);
      var gr = Math.min(rx * 1.2, cx, W - cx, H / 2) * 0.98; var rg = c.createRadialGradient(cx, H / 2, 0, cx, H / 2, gr); rg.addColorStop(0, 'rgba(139,106,216,.2)'); rg.addColorStop(.5, 'rgba(139,106,216,.08)'); rg.addColorStop(1, 'rgba(139,106,216,0)');
      c.fillStyle = rg; c.fillRect(0, 0, W, H);
      var self = this;
      for (var L = 0; L < 5; L++) {
        var cy = H / 2 + (L - 2) * gap, col = COL[L];
        var on = act < 0 || act === L, A = on ? 1 : 0.32;
        var P = function (u, v) { var a = u * cs - v * sn, b = u * sn + v * cs; return [cx + a * rx, cy + b * ry]; };
        c.save();
        c.beginPath(); c.ellipse(cx, cy, rx, ry, 0, 0, 6.2832); c.fillStyle = 'rgba(7,7,18,' + (0.5 * e + 0.1) + ')'; c.fill();
        c.shadowColor = col; c.shadowBlur = act === L ? 22 : 10; c.strokeStyle = rgba(col, 0.85 * A + 0.1); c.lineWidth = act === L ? 1.8 : 1.1; c.stroke();
        c.shadowBlur = 0;
        c.beginPath(); c.ellipse(cx, cy, rx, ry, 0, 0, 6.2832); c.clip();
        if (L === 0) {
          c.strokeStyle = 'rgba(235,235,255,' + 0.75 * A + ')'; c.lineWidth = 1.5; c.beginPath();
          this.cars.forEach(function (o) {
            if (!reduce) { if (o.d) o.v += o.s * dt; else o.u += o.s * dt; if (o.u * o.u + o.v * o.v > .9) { o.u = -o.u * .96; o.v = -o.v * .96; } }
            var a = P(o.u, o.v), b = P(o.u + (o.d ? 0 : o.l), o.v + (o.d ? o.l : 0)); c.moveTo(a[0], a[1]); c.lineTo(b[0], b[1]);
          }); c.stroke();
        } else if (L === 1) {
          c.strokeStyle = rgba(col, 0.22 * A); c.lineWidth = 1; c.beginPath();
          for (var gk = -6; gk <= 6; gk++) { var u = gk * 0.14, m = Math.sqrt(Math.max(0, 1 - u * u)), a1 = P(u, -m), b1 = P(u, m), a2 = P(-m, u), b2 = P(m, u); c.moveTo(a1[0], a1[1]); c.lineTo(b1[0], b1[1]); c.moveTo(a2[0], a2[1]); c.lineTo(b2[0], b2[1]); }
          c.stroke(); c.strokeStyle = 'rgba(200,190,255,' + 0.9 * A + ')'; c.lineWidth = 2; c.beginPath();
          this.pulses.forEach(function (o) { if (!reduce) { o.p += o.s * dt; if (o.p > 1) o.p = -1; } var a = o.d ? P(o.k, o.p) : P(o.p, o.k), b = o.d ? P(o.k, o.p + .08) : P(o.p + .08, o.k); c.moveTo(a[0], a[1]); c.lineTo(b[0], b[1]); }); c.stroke();
        } else if (L === 2) {
          c.restore(); c.save();
          c.strokeStyle = 'rgba(200,195,255,' + 0.3 * A + ')'; c.lineWidth = .8; c.beginPath();
          var hk = 1 + (1 - e) * 1.6;
          this.blds.forEach(function (o) {
            var q = [P(o.u - o.a, o.v - o.a), P(o.u + o.a, o.v - o.a), P(o.u + o.a, o.v + o.a), P(o.u - o.a, o.v + o.a)], hh = o.h * hk * (rx / 300);
            c.moveTo(q[0][0], q[0][1]); for (var j = 1; j < 4; j++) c.lineTo(q[j][0], q[j][1]); c.closePath();
            c.moveTo(q[0][0], q[0][1] - hh); for (j = 1; j < 4; j++) c.lineTo(q[j][0], q[j][1] - hh); c.closePath();
            for (j = 0; j < 4; j++) { c.moveTo(q[j][0], q[j][1]); c.lineTo(q[j][0], q[j][1] - hh); }
          }); c.stroke();
        } else if (L === 3) {
          c.restore(); c.save();
          var N = this.nodes; c.strokeStyle = rgba('#B58BEA', 0.38 * A); c.lineWidth = .9; c.beginPath();
          this.arcs.forEach(function (ar) { var a = P(N[ar[0]].u, N[ar[0]].v), b = P(N[ar[1]].u, N[ar[1]].v), d = Math.hypot(b[0] - a[0], b[1] - a[1]); c.moveTo(a[0], a[1]); c.quadraticCurveTo((a[0] + b[0]) / 2, (a[1] + b[1]) / 2 - d * .45, b[0], b[1]); }); c.stroke();
          N.forEach(function (o) { var a = P(o.u, o.v), k = .5 + .5 * Math.sin(t * .003 + o.ph); c.fillStyle = 'rgba(235,225,255,' + (0.4 + 0.6 * k) * A + ')'; c.beginPath(); c.arc(a[0], a[1], 1.6 + k, 0, 6.2832); c.fill(); });
        } else {
          this.stars.forEach(function (o) { var a = P(o.u, o.v), k = .5 + .5 * Math.sin(t * .002 + o.ph); c.fillStyle = 'rgba(255,235,250,' + (0.15 + 0.6 * k * o.z) * A + ')'; c.fillRect(a[0], a[1], 1.2, 1.2); });
          var ang = t * 0.0007, f = 0.5; c.beginPath(); var o0 = P(0, 0); c.moveTo(o0[0], o0[1]);
          for (var s = 0; s <= 12; s++) { var an = ang - f + s * f / 12, pp = P(Math.cos(an), Math.sin(an)); c.lineTo(pp[0], pp[1]); }
          c.closePath(); c.fillStyle = rgba(col, 0.12 * A); c.fill();
        }
        c.restore();
        if (labelsOn) {
          var lx = cx + rx, la = clamp((e - 0.55 - L * 0.07) / 0.2, 0, 1);
          c.globalAlpha = la; c.strokeStyle = rgba(col, .7); c.lineWidth = 1; c.beginPath(); c.moveTo(lx, cy); c.lineTo(lx + 26, cy); c.stroke();
          c.fillStyle = col; c.beginPath(); c.arc(lx, cy, 2.5, 0, 6.2832); c.fill(); c.globalAlpha = 1;
          var lb = this.labels[L]; lb.style.display = 'flex'; lb.style.opacity = la * (act < 0 || act === L ? 1 : .45);
          lb.style.transform = 'translate(' + (lx + 26) + 'px,' + (cy - 17) + 'px)';
          lb.style.borderColor = act === L ? col : '#2A2840'; lb.style.boxShadow = act === L ? '0 0 22px ' + rgba(col, .45) : 'none';
        } else this.labels[L].style.display = 'none';
      }
    }
  }

  /* ───────────── champ de particules ───────────── */
  class QtField extends HTMLElement {
    connectedCallback() {
      if (this._i) return; this._i = 1;
      var self = this, root = this.attachShadow({ mode: 'open' });
      root.innerHTML = '<style>:host{display:block;position:relative;overflow:hidden}canvas{position:absolute;inset:0}</style><canvas></canvas>';
      var cv = root.querySelector('canvas'), g, pts = [], r = rng(11);
      var fit = function () { g = canvasFit(self, cv); var n = Math.round(g.w * g.h / 14000 * (+self.getAttribute('density') || 1)); pts = []; for (var i = 0; i < n; i++) pts.push({ x: r() * g.w, y: r() * g.h, vx: (r() - .5) * .12, vy: (r() - .5) * .12, c: COL[i % 5] }); };
      fit(); this.ro = new ResizeObserver(fit); this.ro.observe(this);
      var on = false, raf = 0;
      this.io = visible(this, function (v) { on = v; if (v && !raf) raf = requestAnimationFrame(loop); });
      function loop() {
        raf = 0; if (!on || !g) return; var c = g.c; c.clearRect(0, 0, g.w, g.h);
        for (var i = 0; i < pts.length; i++) { var p = pts[i]; if (!reduce) { p.x += p.vx; p.y += p.vy; } if (p.x < 0) p.x += g.w; if (p.x > g.w) p.x -= g.w; if (p.y < 0) p.y += g.h; if (p.y > g.h) p.y -= g.h; }
        c.lineWidth = .6;
        for (i = 0; i < pts.length; i++) for (var j = i + 1; j < pts.length; j++) { var a = pts[i], b = pts[j], d = Math.abs(a.x - b.x) + Math.abs(a.y - b.y); if (d < 120) { c.strokeStyle = 'rgba(139,106,216,' + (0.16 * (1 - d / 120)) + ')'; c.beginPath(); c.moveTo(a.x, a.y); c.lineTo(b.x, b.y); c.stroke(); } }
        pts.forEach(function (p) { c.fillStyle = rgba(p.c, .7); c.fillRect(p.x - .8, p.y - .8, 1.6, 1.6); });
        raf = requestAnimationFrame(loop);
      }
    }
    disconnectedCallback() { if (this.ro) this.ro.disconnect(); if (this.io) this.io.disconnect(); }
  }

  /* ───────────── carte mondiale (trame de points) ───────────── */
  class QtMap extends HTMLElement {
    connectedCallback() {
      if (this._i) return; this._i = 1;
      var self = this, root = this.attachShadow({ mode: 'open' });
      var light = this.getAttribute('theme') === 'light';
      root.innerHTML = '<style>:host{display:block;position:relative}.wrap{position:relative;width:100%}canvas{display:block;width:100%;height:auto}svg{position:absolute;inset:0;width:100%;height:100%;overflow:visible}' +
        '.tip{position:absolute;pointer-events:none;transform:translate(-50%,calc(-100% - 18px));background:' + (light ? '#15141A' : '#0E0E1C') + ';border:1px solid #2E2C48;padding:8px 12px;white-space:nowrap;opacity:0;transition:opacity .2s}' +
        '.tip b{display:block;font:500 14px ' + FONT + ';color:#F2F0FA}.tip span{font:500 10px ' + MONO + ';letter-spacing:.1em;color:#A98BEF;text-transform:uppercase}' +
        '@keyframes pl{0%{r:3;opacity:.7}100%{r:22;opacity:0}}circle.p{animation:pl 2.6s ease-out infinite}</style><div class="wrap"><canvas></canvas><svg></svg><div class="tip"><span></span><b></b></div></div>';
      var go = function () { if (!window.QT_DATA) return setTimeout(go, 60); self.draw(root, light).catch(function (e) { console.warn('qt-map', e); }); };
      go();
    }
    async draw(root, light) {
      var geo = await import('https://cdn.jsdelivr.net/npm/d3-geo@3/+esm'), topo = await import('https://cdn.jsdelivr.net/npm/topojson-client@3/+esm');
      var world = await (await fetch('https://cdn.jsdelivr.net/npm/world-atlas@2/land-110m.json')).json();
      var fc = topo.feature(world, world.objects.land), land = fc.features ? fc.features[0] : fc;
      var W = 1200, proj = geo.geoEquirectangular().scale(W / 6.2832).translate([W / 2, 0]);
      var top = proj([0, 78])[1], bot = proj([0, -56])[1], H = Math.round(bot - top);
      proj.translate([W / 2, -top]);
      var off = document.createElement('canvas'); off.width = W; off.height = H; var oc = off.getContext('2d');
      oc.fillStyle = '#000'; oc.beginPath(); geo.geoPath(proj, oc)(land); oc.fill();
      var px = oc.getImageData(0, 0, W, H).data;
      var cv = root.querySelector('canvas'), dpr = Math.min(2, devicePixelRatio || 1); cv.width = W * dpr; cv.height = H * dpr;
      var c = cv.getContext('2d'); c.scale(dpr, dpr); c.fillStyle = light ? '#C9C1B4' : '#2A2946';
      var step = 7;
      for (var y = step / 2; y < H; y += step) for (var x = step / 2; x < W; x += step) if (px[(Math.floor(y) * W + Math.floor(x)) * 4 + 3] > 128) { c.beginPath(); c.arc(x, y, 1.5, 0, 6.2832); c.fill(); }
      var svg = root.querySelector('svg'), tip = root.querySelector('.tip'), NS = 'http://www.w3.org/2000/svg';
      svg.setAttribute('viewBox', '0 0 ' + W + ' ' + H);
      var sites = window.QT_DATA.sites, hq = sites.find(function (s) { return s.main; }), hqp = proj([hq.lon, hq.lat]);
      sites.forEach(function (s, i) {
        if (s.main) return; var p = proj([s.lon, s.lat]), l = document.createElementNS(NS, 'path');
        var mx = (p[0] + hqp[0]) / 2, my = Math.min(p[1], hqp[1]) - Math.abs(p[0] - hqp[0]) * .18;
        l.setAttribute('d', 'M' + hqp[0] + ' ' + hqp[1] + ' Q' + mx + ' ' + my + ' ' + p[0] + ' ' + p[1]);
        l.setAttribute('fill', 'none'); l.setAttribute('stroke', 'url(#mg)'); l.setAttribute('stroke-width', '.8'); l.setAttribute('opacity', '.5');
        l.setAttribute('pathLength', '1'); l.setAttribute('stroke-dasharray', '1'); l.setAttribute('stroke-dashoffset', '1');
        l.style.transition = 'stroke-dashoffset 1.8s cubic-bezier(.16,.84,.24,1) ' + (i * 70) + 'ms'; svg.appendChild(l); s._l = l;
      });
      svg.insertAdjacentHTML('afterbegin', '<defs><linearGradient id="mg"><stop offset="0" stop-color="#4F7BE0"/><stop offset="1" stop-color="#D46CA8"/></linearGradient></defs>');
      sites.forEach(function (s, i) {
        var p = proj([s.lon, s.lat]), g = document.createElementNS(NS, 'g'); g.style.cursor = 'pointer'; g.setAttribute('tabindex', '0');
        g.innerHTML = '<circle class="p" cx="' + p[0] + '" cy="' + p[1] + '" r="3" fill="none" stroke="' + (s.main ? '#D46CA8' : '#8B6AD8') + '" style="animation-delay:' + (i * 0.17) + 's"/>' +
          '<circle cx="' + p[0] + '" cy="' + p[1] + '" r="' + (s.main ? 5 : 3.2) + '" fill="' + (s.main ? '#F2F0FA' : '#A98BEF') + '"/><circle cx="' + p[0] + '" cy="' + p[1] + '" r="14" fill="transparent"/>';
        var showTip = function () { var r = svg.getBoundingClientRect(); tip.style.left = (p[0] / W * r.width) + 'px'; tip.style.top = (p[1] / H * r.height) + 'px'; tip.querySelector('span').textContent = s.type; tip.querySelector('b').textContent = s.city + ' · ' + s.country; tip.style.opacity = 1; };
        g.onmouseenter = showTip; g.onfocus = showTip; g.onmouseleave = g.onblur = function () { tip.style.opacity = 0; };
        svg.appendChild(g);
      });
      var o = visible(this, function (v) { if (!v) return; o.disconnect(); sites.forEach(function (s) { if (s._l) s._l.setAttribute('stroke-dashoffset', '0'); }); });
    }
  }

  customElements.define('qt-intro', QtIntro);
  customElements.define('qt-cosmos-sig', QtCosmosSig);
  customElements.define('qt-layers', QtLayers);
  customElements.define('qt-field', QtField);
  customElements.define('qt-map', QtMap);
})();
