;(window.lazySizesConfig = window.lazySizesConfig || {}),
  (lazySizesConfig.expand = 1500),
  (lazySizesConfig.expFactor = 4),
  /*! lazysizes - v5.1.0 */ (function (e, t) {
    var n = (function (e, t) {
      'use strict'
      var n, a
      if (
        ((function () {
          var t,
            n = {
              lazyClass: 'lazyload',
              loadedClass: 'lazyloaded',
              loadingClass: 'lazyloading',
              preloadClass: 'lazypreload',
              errorClass: 'lazyerror',
              autosizesClass: 'lazyautosizes',
              srcAttr: 'data-src',
              srcsetAttr: 'data-srcset',
              sizesAttr: 'data-sizes',
              minSize: 40,
              customMedia: {},
              init: !0,
              expFactor: 1.5,
              hFac: 0.8,
              loadMode: 2,
              loadHidden: !0,
              ricTimeout: 0,
              throttleDelay: 125
            }
          for (t in ((a = e.lazySizesConfig || e.lazysizesConfig || {}), n))
            t in a || (a[t] = n[t])
        })(),
        !t || !t.getElementsByClassName)
      )
        return { init: function () {}, cfg: a, noSupport: !0 }
      var r = t.documentElement,
        o = e.Date,
        i = e.HTMLPictureElement,
        s = 'addEventListener',
        l = 'getAttribute',
        c = e[s],
        d = e.setTimeout,
        g = e.requestAnimationFrame || d,
        u = e.requestIdleCallback,
        m = /^picture$/i,
        f = ['load', 'error', 'lazyincluded', '_lazyloaded'],
        h = {},
        p = Array.prototype.forEach,
        S = function (e, t) {
          return (
            h[t] || (h[t] = new RegExp('(\\s|^)' + t + '(\\s|$)')),
            h[t].test(e[l]('class') || '') && h[t]
          )
        },
        v = function (e, t) {
          S(e, t) ||
            e.setAttribute('class', (e[l]('class') || '').trim() + ' ' + t)
        },
        w = function (e, t) {
          var n
          ;(n = S(e, t)) &&
            e.setAttribute('class', (e[l]('class') || '').replace(n, ' '))
        },
        y = function (e, t, n) {
          var a = n ? s : 'removeEventListener'
          n && y(e, t),
            f.forEach(function (n) {
              e[a](n, t)
            })
        },
        b = function (e, a, r, o, i) {
          var s = t.createEvent('Event')
          return (
            r || (r = {}),
            (r.instance = n),
            s.initEvent(a, !o, !i),
            (s.detail = r),
            e.dispatchEvent(s),
            s
          )
        },
        C = function (t, n) {
          var r
          !i && (r = e.picturefill || a.pf)
            ? (n && n.src && !t[l]('srcset') && t.setAttribute('srcset', n.src),
              r({ reevaluate: !0, elements: [t] }))
            : n && n.src && (t.src = n.src)
        },
        z = function (e, t) {
          return (getComputedStyle(e, null) || {})[t]
        },
        x = function (e, t, n) {
          for (
            n = n || e.offsetWidth;
            n < a.minSize && t && !e._lazysizesWidth;

          )
            (n = t.offsetWidth), (t = t.parentNode)
          return n
        },
        A = (function () {
          var e,
            n,
            a = [],
            r = [],
            o = a,
            i = function () {
              var t = o
              for (o = a.length ? r : a, e = !0, n = !1; t.length; ) t.shift()()
              e = !1
            },
            s = function (a, r) {
              e && !r
                ? a.apply(this, arguments)
                : (o.push(a), n || ((n = !0), (t.hidden ? d : g)(i)))
            }
          return (s._lsFlush = i), s
        })(),
        R = function (e, t) {
          return t
            ? function () {
                A(e)
              }
            : function () {
                var t = this,
                  n = arguments
                A(function () {
                  e.apply(t, n)
                })
              }
        },
        q = function (e) {
          var t,
            n = 0,
            r = a.throttleDelay,
            i = a.ricTimeout,
            s = function () {
              ;(t = !1), (n = o.now()), e()
            },
            l =
              u && i > 49
                ? function () {
                    u(s, { timeout: i }),
                      i !== a.ricTimeout && (i = a.ricTimeout)
                  }
                : R(function () {
                    d(s)
                  }, !0)
          return function (e) {
            var a
            ;(e = !0 === e) && (i = 33),
              t ||
                ((t = !0),
                (a = r - (o.now() - n)) < 0 && (a = 0),
                e || a < 9 ? l() : d(l, a))
          }
        },
        E = function (e) {
          var t,
            n,
            a = function () {
              ;(t = null), e()
            },
            r = function () {
              var e = o.now() - n
              e < 99 ? d(r, 99 - e) : (u || a)(a)
            }
          return function () {
            ;(n = o.now()), t || (t = d(r, 99))
          }
        },
        k = (function () {
          var i,
            g,
            u,
            f,
            h,
            x,
            k,
            P,
            L,
            T,
            I,
            F,
            O = /^img$/i,
            B = /^iframe$/i,
            H = 'onscroll' in e && !/(gle|ing)bot/.test(navigator.userAgent),
            _ = 0,
            N = 0,
            W = -1,
            D = function (e) {
              N--, (!e || N < 0 || !e.target) && (N = 0)
            },
            j = function (e) {
              return (
                null == F && (F = 'hidden' == z(t.body, 'visibility')),
                F ||
                  ('hidden' != z(e.parentNode, 'visibility') &&
                    'hidden' != z(e, 'visibility'))
              )
            },
            Y = function (e, n) {
              var a,
                o = e,
                i = j(e)
              for (
                P -= n, I += n, L -= n, T += n;
                i && (o = o.offsetParent) && o != t.body && o != r;

              )
                (i = (z(o, 'opacity') || 1) > 0) &&
                  'visible' != z(o, 'overflow') &&
                  ((a = o.getBoundingClientRect()),
                  (i =
                    T > a.left &&
                    L < a.right &&
                    I > a.top - 1 &&
                    P < a.bottom + 1))
              return i
            },
            $ = function () {
              var e,
                o,
                s,
                c,
                d,
                u,
                m,
                h,
                p,
                S,
                v,
                w,
                y = n.elements
              if ((f = a.loadMode) && N < 8 && (e = y.length)) {
                for (o = 0, W++; o < e; o++)
                  if (y[o] && !y[o]._lazyRace)
                    if (!H || (n.prematureUnveil && n.prematureUnveil(y[o])))
                      K(y[o])
                    else if (
                      (((h = y[o][l]('data-expand')) && (u = 1 * h)) || (u = _),
                      S ||
                        ((S =
                          !a.expand || a.expand < 1
                            ? r.clientHeight > 500 && r.clientWidth > 500
                              ? 500
                              : 370
                            : a.expand),
                        (n._defEx = S),
                        (v = S * a.expFactor),
                        (w = a.hFac),
                        (F = null),
                        _ < v && N < 1 && W > 2 && f > 2 && !t.hidden
                          ? ((_ = v), (W = 0))
                          : (_ = f > 1 && W > 1 && N < 6 ? S : 0)),
                      p !== u &&
                        ((x = innerWidth + u * w),
                        (k = innerHeight + u),
                        (m = -1 * u),
                        (p = u)),
                      (s = y[o].getBoundingClientRect()),
                      (I = s.bottom) >= m &&
                        (P = s.top) <= k &&
                        (T = s.right) >= m * w &&
                        (L = s.left) <= x &&
                        (I || T || L || P) &&
                        (a.loadHidden || j(y[o])) &&
                        ((g && N < 3 && !h && (f < 3 || W < 4)) || Y(y[o], u)))
                    ) {
                      if ((K(y[o]), (d = !0), N > 9)) break
                    } else
                      !d &&
                        g &&
                        !c &&
                        N < 4 &&
                        W < 4 &&
                        f > 2 &&
                        (i[0] || a.preloadAfterLoad) &&
                        (i[0] ||
                          (!h &&
                            (I ||
                              T ||
                              L ||
                              P ||
                              'auto' != y[o][l](a.sizesAttr)))) &&
                        (c = i[0] || y[o])
                c && !d && K(c)
              }
            },
            G = q($),
            U = function (e) {
              var t = e.target
              t._lazyCache
                ? delete t._lazyCache
                : (D(e),
                  v(t, a.loadedClass),
                  w(t, a.loadingClass),
                  y(t, X),
                  b(t, 'lazyloaded'))
            },
            V = R(U),
            X = function (e) {
              V({ target: e.target })
            },
            J = function (e) {
              var t,
                n = e[l](a.srcsetAttr)
              ;(t = a.customMedia[e[l]('data-media') || e[l]('media')]) &&
                e.setAttribute('media', t),
                n && e.setAttribute('srcset', n)
            },
            Q = R(function (e, t, n, r, o) {
              var i, s, c, g, f, h
              ;(f = b(e, 'lazybeforeunveil', t)).defaultPrevented ||
                (r && (n ? v(e, a.autosizesClass) : e.setAttribute('sizes', r)),
                (s = e[l](a.srcsetAttr)),
                (i = e[l](a.srcAttr)),
                o && (g = (c = e.parentNode) && m.test(c.nodeName || '')),
                (h = t.firesLoad || ('src' in e && (s || i || g))),
                (f = { target: e }),
                v(e, a.loadingClass),
                h && (clearTimeout(u), (u = d(D, 2500)), y(e, X, !0)),
                g && p.call(c.getElementsByTagName('source'), J),
                s
                  ? e.setAttribute('srcset', s)
                  : i &&
                    !g &&
                    (B.test(e.nodeName)
                      ? (function (e, t) {
                          try {
                            e.contentWindow.location.replace(t)
                          } catch (n) {
                            e.src = t
                          }
                        })(e, i)
                      : (e.src = i)),
                o && (s || g) && C(e, { src: i })),
                e._lazyRace && delete e._lazyRace,
                w(e, a.lazyClass),
                A(function () {
                  var t = e.complete && e.naturalWidth > 1
                  ;(h && !t) ||
                    (t && v(e, 'ls-is-cached'),
                    U(f),
                    (e._lazyCache = !0),
                    d(function () {
                      '_lazyCache' in e && delete e._lazyCache
                    }, 9)),
                    'lazy' == e.loading && N--
                }, !0)
            }),
            K = function (e) {
              if (!e._lazyRace) {
                var t,
                  n = O.test(e.nodeName),
                  r = n && (e[l](a.sizesAttr) || e[l]('sizes')),
                  o = 'auto' == r
                ;((!o && g) ||
                  !n ||
                  (!e[l]('src') && !e.srcset) ||
                  e.complete ||
                  S(e, a.errorClass) ||
                  !S(e, a.lazyClass)) &&
                  ((t = b(e, 'lazyunveilread').detail),
                  o && M.updateElem(e, !0, e.offsetWidth),
                  (e._lazyRace = !0),
                  N++,
                  Q(e, t, o, r, n))
              }
            },
            Z = E(function () {
              ;(a.loadMode = 3), G()
            }),
            ee = function () {
              3 == a.loadMode && (a.loadMode = 2), Z()
            },
            te = function () {
              if (!g) {
                if (o.now() - h < 999) return void d(te, 999)
                ;(g = !0), (a.loadMode = 3), G(), c('scroll', ee, !0)
              }
            }
          return {
            _: function () {
              ;(h = o.now()),
                (n.elements = t.getElementsByClassName(a.lazyClass)),
                (i = t.getElementsByClassName(
                  a.lazyClass + ' ' + a.preloadClass
                )),
                c('scroll', G, !0),
                c('resize', G, !0),
                e.MutationObserver
                  ? new MutationObserver(G).observe(r, {
                      childList: !0,
                      subtree: !0,
                      attributes: !0
                    })
                  : (r[s]('DOMNodeInserted', G, !0),
                    r[s]('DOMAttrModified', G, !0),
                    setInterval(G, 999)),
                c('hashchange', G, !0),
                [
                  'focus',
                  'mouseover',
                  'click',
                  'load',
                  'transitionend',
                  'animationend'
                ].forEach(function (e) {
                  t[s](e, G, !0)
                }),
                /d$|^c/.test(t.readyState)
                  ? te()
                  : (c('load', te), t[s]('DOMContentLoaded', G), d(te, 2e4)),
                n.elements.length ? ($(), A._lsFlush()) : G()
            },
            checkElems: G,
            unveil: K,
            _aLSL: ee
          }
        })(),
        M = (function () {
          var e,
            n = R(function (e, t, n, a) {
              var r, o, i
              if (
                ((e._lazysizesWidth = a),
                (a += 'px'),
                e.setAttribute('sizes', a),
                m.test(t.nodeName || ''))
              )
                for (
                  o = 0, i = (r = t.getElementsByTagName('source')).length;
                  o < i;
                  o++
                )
                  r[o].setAttribute('sizes', a)
              n.detail.dataAttr || C(e, n.detail)
            }),
            r = function (e, t, a) {
              var r,
                o = e.parentNode
              o &&
                ((a = x(e, o, a)),
                (r = b(e, 'lazybeforesizes', { width: a, dataAttr: !!t }))
                  .defaultPrevented ||
                  ((a = r.detail.width) &&
                    a !== e._lazysizesWidth &&
                    n(e, o, r, a)))
            },
            o = E(function () {
              var t,
                n = e.length
              if (n) for (t = 0; t < n; t++) r(e[t])
            })
          return {
            _: function () {
              ;(e = t.getElementsByClassName(a.autosizesClass)), c('resize', o)
            },
            checkElems: o,
            updateElem: r
          }
        })(),
        P = function () {
          !P.i && t.getElementsByClassName && ((P.i = !0), M._(), k._())
        }
      return (
        d(function () {
          a.init && P()
        }),
        (n = {
          cfg: a,
          autoSizer: M,
          loader: k,
          init: P,
          uP: C,
          aC: v,
          rC: w,
          hC: S,
          fire: b,
          gW: x,
          rAF: A
        })
      )
    })(e, e.document)
    ;(e.lazySizes = n),
      'object' == typeof module && module.exports && (module.exports = n)
  })('undefined' != typeof window ? window : {})
const html = document.documentElement,
  body = document.body
let viewportHeight = window.innerHeight
var aeMobileRatio = window.matchMedia('(max-aspect-ratio: 1/1)'),
  touch = !1
function calculatePath () {
  ;[].forEach.call(document.querySelectorAll('.svg-line-animation'), function (
    e
  ) {
    var t = e.clientWidth / e.getAttribute('width')
    ;[].map
      .call(e.querySelectorAll(['path', 'circle']), function (e) {
        return e
      })
      .forEach(function (e) {
        0 == e.hasAttribute('vector-effect')
          ? e.style.setProperty('--stroke-dasharray', e.getTotalLength())
          : e.style.setProperty('--stroke-dasharray', e.getTotalLength() * t)
      })
  })
}
window.matchMedia('(pointer:coarse)').matches
  ? ((touch = !0), body.classList.add('touch-true'))
  : (touch = !1)
var progressLenght,
  aspectRatio,
  WeChat = !1
function calculateProgress () {
  progressLenght = document.body.clientHeight - window.innerHeight / 2
}
function getAspectRatio () {
  aspectRatio =
    1 == window.matchMedia('(min-aspect-ratio: 4501/3000)').matches
      ? 'lg'
      : 1 ==
        window.matchMedia(
          '(min-aspect-ratio: 3501/3000) and (max-aspect-ratio: 45/30)'
        ).matches
      ? 'md'
      : 1 ==
        window.matchMedia(
          '(min-aspect-ratio: 25/30) and (max-aspect-ratio: 35/30)'
        ).matches
      ? 'sm'
      : 'xs'
}
let progressDuration, progressFactor
document.addEventListener(
  'WeixinJSBridgeReady',
  function () {
    WeChat = !0
  },
  !1
),
  setTimeout(function () {
    !0 === WeChat && videofallback(document.querySelector('#huawei video'))
  }, 500),
  (function () {
    'use strict'
    var e = [].slice
    document.addEventListener('lazybeforeunveil', function (t) {
      var n = t.target.getAttribute('data-lazyload-children')
      n && e.call(t.target.querySelectorAll(n)).forEach(lazySizes.loader.unveil)
    })
  })()
let progressPath = 103.67
const progress = document.querySelector('#progress'),
  dreamMessage = document.querySelector('#dream')
function calculateProgress () {
  ;(progressDuration = body.clientHeight - viewportHeight),
    (progressFactor = -progressPath / progressDuration)
}
let manropeTrigger,
  oneplusTrigger,
  aboutTrigger,
  aboutColorsTrigger,
  portraitTrigger,
  manropeObj = document.querySelector('#manrope'),
  oneplusObj = document.querySelector('#oneplus'),
  aboutColors = document.querySelector('#about-colors'),
  aboutPortrait = !0
function showcaseCoordinates () {
  ;(manropeTrigger =
    manropeObj.getBoundingClientRect().top + window.scrollY - viewportHeight),
    (oneplusTrigger =
      oneplusObj.getBoundingClientRect().top +
      window.scrollY -
      0.75 * viewportHeight),
    (portraitTrigger =
      document.querySelector('#about-portrait-trigger').getBoundingClientRect()
        .top + window.scrollY),
    (aboutColorsTrigger =
      aboutColors.getBoundingClientRect().top + window.scrollY - viewportHeight)
}
const scroller = { endY: 0, y: 0, resizeRequest: 1, scrollRequest: 0 }
let requestId = null
function updateScroller () {
  scroller.resizeRequest > 0 && (scroller.resizeRequest = 0)
  var e = window.pageYOffset || html.scrollTop || body.scrollTop || 0
  ;(progress.style.strokeDashoffset = e * progressFactor + progressPath),
    e >= manropeTrigger && e <= manropeTrigger + 2 * viewportHeight
      ? manropeObj.classList.add('animated')
      : manropeObj.classList.remove('animated'),
    e >= oneplusTrigger && e <= oneplusTrigger + viewportHeight
      ? oneplusObj.classList.add('animated')
      : oneplusObj.classList.remove('animated'),
    e >= aboutColorsTrigger && e <= aboutColorsTrigger + 2 * viewportHeight
      ? aboutColors.classList.add('bloom')
      : aboutColors.classList.remove('bloom'),
    e > 3 * viewportHeight && e < 4 * viewportHeight
      ? dreamMessage.classList.add('animated')
      : 1 == dreamMessage.classList.contains('animated') &&
        dreamMessage.classList.remove('animated'),
    e > 0.5 * viewportHeight &&
      e < 5 * viewportHeight &&
      gentSscroll(e, 'spaceman'),
    e >= portraitTrigger && !0 === aboutPortrait
      ? ((aboutPortrait = !1),
        document.querySelector('#about').classList.remove('portrait-active'))
      : e < portraitTrigger &&
        ((aboutPortrait = !0),
        document.querySelector('#about').classList.add('portrait-active')),
    (scroller.scrollRequest = 0),
    (requestId =
      scroller.scrollRequest > 0 ? requestAnimationFrame(updateScroller) : null)
}
function onScroll () {
  scroller.scrollRequest++,
    requestId || (requestId = requestAnimationFrame(updateScroller))
}
var gentSimgFormat,
  gentSmaskFormat,
  gentSactive = 0,
  gentSonscroll = !1,
  gentSdelay = 0
let gentS,
  gentViewport = window.innerHeight,
  gentPerformanceLow = !1
function gentSResize (e, t) {
  gentViewport = window.innerHeight
  var n = (e.width = e.getBoundingClientRect().width),
    a = (e.height = e.getBoundingClientRect().height)
  window.devicePixelRatio
  if (
    (window.devicePixelRatio > 1 &&
      ((n = e.width = 2 * n), (a = e.height = 2 * a)),
    gentS[t].viewports)
  )
    return (
      (gentS[t].start =
        gentS[t].trigger.getBoundingClientRect().top + window.pageYOffset),
      (gentS[t].duration = gentS[t].viewports * gentViewport),
      (gentS[t].end = gentS[t].start + gentS[t].duration),
      (gentS[t].step = gentS[t].duration / gentS[t].frames)
    )
}
function gentSpreload (e, t, n, a) {
  var r = '.'
  window.matchMedia('(max-aspect-ratio: 1/1)').matches && (r = '-xs.')
  let o = [],
    i = []
  for (let e = 0; e < t + 1; e++) o.push(e)
  !(function e (t, n) {
    const a = Math.ceil((t.length - 1) / (n + 1))
    for (let e = 1; e <= n; e++) {
      const n = a * e - (e - 1)
      void 0 !== t[n] && i.push(t.splice(n, 1)[0])
    }
    t.length > 0 && e(t, n + 1)
  })([...o], 1)
  for (var s = 0; s < t + 1; s++) {
    if (gentS[e].img) {
      var l = new Image()
      ;(l.src = gentS[e].path + ('000' + i[s]).slice(-3) + r + gentSimgFormat),
        (gentS[e].img[i[s]] = l)
    }
    if (
      ('img-mask' === gentS[e].type && 'png' === gentSmaskFormat) ||
      'background-mask' === gentS[e].type
    ) {
      var c = new Image()
      ;(c.src = gentS[e].path + ('000' + i[s]).slice(-3) + r + gentSmaskFormat),
        (gentS[e].maskimg[i[s]] = c)
    }
  }
}
function gentSstart () {
  ;(gentS = [
    {
      id: 'spaceman',
      el: document.querySelector('#intro-spaceman'),
      ctx: document.querySelector('#intro-spaceman').getContext('2d'),
      type: 'img-mask',
      event: 'on-scroll',
      path: '/assets/img/spaceman/',
      trigger: document.querySelector('#intro-spaceman-trigger'),
      frame: 0,
      newframe: 0,
      frames: 46,
      img: [],
      maskimg: [],
      viewports: 2,
      duration: null,
      start: null,
      end: null,
      step: null
    }
  ]),
    gentS.forEach((e, t) => {
      gentSpreload(t, gentS[t].frames, gentS[t].path, gentS[t].type),
        (gentS[t].ctx.globalCompositeOperation = 'copy'),
        gentSResize(gentS[t].el, t)
      var n,
        a = 0
      'img' === gentS[t].type ||
      ('img-mask' === gentS[t].type && 'webp' === gentSimgFormat)
        ? (n = 1)
        : (('img-mask' === gentS[t].type && 'jpg' === gentSimgFormat) ||
            'background-mask' === gentS[t].type) &&
          (n = 2),
        gentS[t].img &&
          (gentS[t].img[0].onload = function () {
            ++a === n && gentSdraw(t)
          }),
        gentS[t].background &&
          (gentS[t].background.onload = function () {
            ++a === n && gentSdraw(t)
          }),
        (('img-mask' === gentS[t].type && 'jpg' === gentSimgFormat) ||
          'background-mask' === gentS[t].type) &&
          (gentS[t].maskimg[0].onload = function () {
            ++a === n && gentSdraw(t)
          })
    })
}
function gentSinit () {
  var e = new Image()
  ;(e.onerror = function () {
    return (
      document.body.classList.add('gent-no-webp'),
      (gentSimgFormat = 'jpg'),
      (gentSmaskFormat = 'png'),
      gentSstart()
    )
  }),
    (e.onload = function () {
      return (
        document.body.classList.add('gent-webp'),
        (gentSimgFormat = 'webp'),
        (gentSmaskFormat = 'webp'),
        gentSstart()
      )
    }),
    (e.src =
      'data:image/webp;base64,UklGRjIAAABXRUJQVlA4ICYAAACyAgCdASoBAAEALmk0mk0iIiIiIgBoSygABc6zbAAA/v56QAAAAA==')
}
var gentSrender = { resizeRequest: 1, renderRequest: 0 }
let gentSrenderID = null
function gentSaddRequest (e, t) {
  e && (gentSactive = gentS.findIndex(t => t.id === e)),
    t && (gentS[gentSactive].newframe = Number(t)),
    gentSrender.renderRequest++,
    gentSrenderID || (gentSrenderID = requestAnimationFrame(gentSupdate))
}
function gentSupdate () {
  var e = gentSactive
  gentS[e].newframe > gentS[e].frame && gentS[e].newframe <= gentS[e].frames
    ? ('on-scroll' === gentS[e].event && gentS[e].newframe - gentS[e].frame > 5
        ? (gentS[e].frame = gentS[e].newframe - 5)
        : gentS[e].frame++,
      gentSdraw(e))
    : gentS[e].newframe < gentS[e].frame &&
      gentS[e].newframe >= 0 &&
      ('on-scroll' === gentS[e].event && gentS[e].frame - gentS[e].newframe > 5
        ? (gentS[e].frame = gentS[e].newframe + 5)
        : gentS[e].frame--,
      gentSdraw(e)),
    gentS[e].newframe !== gentS[e].frame &&
      (1 == gentSonscroll
        ? ((gentSdelay += 8),
          setTimeout(function () {
            gentSaddRequest()
          }, gentSdelay))
        : ((gentSdelay = 24),
          setTimeout(function () {
            gentSaddRequest()
          }, gentSdelay))),
    console.log(gentS[e].frame),
    (gentSrender.renderRequest = 0),
    (gentSrenderID =
      gentSrender.renderRequest > 0 ? requestAnimationFrame(gentSupdate) : null)
}
function gentSscroll (e, t) {
  void 0 !== gentS &&
    ((gentSdelay = 0),
    (t = gentS.findIndex(e => e.id === t)),
    e > gentS[t].start && e < gentS[t].end
      ? ((gentS[t].newframe = Math.floor((e - gentS[t].start) / gentS[t].step)),
        gentS[t].frame !== gentS[t].newframe && gentSaddRequest())
      : 0 !== gentS[t].frame && e <= gentS[t].start
      ? ((gentS[t].newframe = 0), gentSaddRequest())
      : gentS[t].frame !== gentS[t].frames &&
        e >= gentS[t].end &&
        ((gentS[t].newframe = gentS[t].frames), gentSaddRequest()))
}
function gentError () {
  console.log(
    'IMAGE ERROR! Active: ' +
      gentSactive +
      ' / Frame: ' +
      gentS[gentSactive].frame
  )
}
function gentSdraw (e) {
  var t = gentS[e].frame
  if ('img-mask' === gentS[e].type && 'webp' === gentSimgFormat) {
    if (void 0 === gentS[e].img[t]) return gentError()
    ;(gentS[e].ctx.globalCompositeOperation = 'copy'),
      drawImageProp(gentS[e].ctx, gentS[e].img[t])
  } else if ('img-mask' === gentS[e].type && 'jpg' === gentSimgFormat) {
    if (void 0 === gentS[e].maskimg[t]) return gentError()
    if (
      ((gentS[e].ctx.globalCompositeOperation = 'copy'),
      drawImageProp(gentS[e].ctx, gentS[e].maskimg[t]),
      void 0 === gentS[e].img[t])
    )
      return gentError()
    ;(gentS[e].ctx.globalCompositeOperation = 'source-in'),
      drawImageProp(gentS[e].ctx, gentS[e].img[t])
  } else if ('background-mask' === gentS[e].type) {
    if (void 0 === gentS[e].maskimg[t]) return gentError()
    if (
      ((gentS[e].ctx.globalCompositeOperation = 'copy'),
      drawImageProp(gentS[e].ctx, gentS[e].maskimg[t]),
      void 0 === gentS[e].background)
    )
      return gentError()
    ;(gentS[e].ctx.globalCompositeOperation = 'source-in'),
      drawImageProp(gentS[e].ctx, gentS[e].background)
  }
  console.log(gentS[e].frame)
}
function drawImageProp (e, t, n, a, r, o, i, s) {
  2 === arguments.length &&
    ((n = a = 0), (r = e.canvas.width), (o = e.canvas.height)),
    (i = 'number' == typeof i ? i : 0.5) < 0 && (i = 0),
    (s = 'number' == typeof s ? s : 0.5) < 0 && (s = 0),
    i > 1 && (i = 1),
    s > 1 && (s = 1)
  var l,
    c,
    d,
    g,
    u = t.width,
    m = t.height,
    f = Math.min(r / u, o / m),
    h = u * f,
    p = m * f,
    S = 1
  h < r && (S = r / h),
    Math.abs(S - 1) < 1e-14 && p < o && (S = o / p),
    (l = (u - (d = u / ((h *= S) / r))) * i) < 0 && (l = 0),
    (c = (m - (g = m / ((p *= S) / o))) * s) < 0 && (c = 0),
    d > u && (d = u),
    g > m && (g = m),
    e.drawImage(t, l, c, d, g, n, a, r, o)
}
var runGalaxy = !0,
  canvas = document.querySelector('#galaxy'),
  ctx = canvas.getContext('2d', { alpha: !1 }),
  w = (canvas.width = canvas.getBoundingClientRect().width),
  h = (canvas.height = canvas.getBoundingClientRect().height),
  stars = [],
  count = 0,
  maxStars = 1e3,
  canvas2 = document.createElement('canvas'),
  ctx2 = canvas2.getContext('2d')
;(canvas2.width = 100), (canvas2.height = 100)
var half = canvas2.width / 2,
  gradient2 = ctx2.createRadialGradient(half, half, 0, half, half, half)
function random (e, t) {
  if ((arguments.length < 2 && ((t = e), (e = 0)), e > t)) {
    var n = t
    ;(t = e), (e = n)
  }
  return Math.floor(Math.random() * (t - e + 1)) + e
}
function maxOrbit (e, t) {
  var n = Math.max(e, t)
  return Math.round(Math.sqrt(n * n + n * n)) / 2
}
gradient2.addColorStop(0.1, '#fff'),
  gradient2.addColorStop(0.25, 'hsl(270, 100%, 50%)'),
  gradient2.addColorStop(0.3, 'hsl(219, 100%, 35%)'),
  gradient2.addColorStop(1, 'transparent'),
  (ctx2.fillStyle = gradient2),
  ctx2.beginPath(),
  ctx2.arc(half, half, half, 0, 2 * Math.PI),
  ctx2.fill()
var Star = function () {
  ;(this.orbitRadius = random(maxOrbit(w, h))),
    (this.radius = random(60, this.orbitRadius) / 12),
    (this.orbitX = w / 2),
    (this.orbitY = h / 2),
    (this.timePassed = random(0, maxStars)),
    (this.speed = random(this.orbitRadius) / 2e5),
    (this.alpha = random(2, 10) / 10),
    count++,
    (stars[count] = this)
}
Star.prototype.draw = function () {
  var e = Math.sin(this.timePassed) * this.orbitRadius + this.orbitX,
    t = Math.cos(this.timePassed) * this.orbitRadius + this.orbitY,
    n = random(10)
  1 === n && this.alpha > 0
    ? (this.alpha -= 0.05)
    : 2 === n && this.alpha < 1 && (this.alpha += 0.05),
    (ctx.globalAlpha = this.alpha),
    ctx.drawImage(
      canvas2,
      e - this.radius / 2,
      t - this.radius / 2,
      this.radius,
      this.radius
    ),
    (this.timePassed += this.speed)
}
for (var i = 0; i < maxStars; i++) new Star()
function updateCanvasSize () {
  ;(w = canvas.width = canvas.getBoundingClientRect().width),
    (h = canvas.height = canvas.getBoundingClientRect().height),
    (canvas2.width = 100),
    (canvas2.height = 100),
    (ctx2.fillStyle = gradient2),
    ctx2.beginPath(),
    ctx2.arc(half, half, half, 0, 2 * Math.PI),
    ctx2.fill()
}
function drawgalaxy () {
  ;(ctx.globalCompositeOperation = 'source-over'),
    (ctx.globalAlpha = 0.8),
    (ctx.fillStyle = '#000000'),
    ctx.fillRect(0, 0, w, h),
    (ctx.globalCompositeOperation = 'lighter')
  for (var e = 1, t = stars.length; e < t; e++) stars[e].draw()
  requestAnimationFrame(drawgalaxy)
}
var handleCompleted = !1
function handleComplete () {
  ;(handleCompleted = !0),
    document.body.classList.add('loaded'),
    setTimeout(function () {
      document.querySelector('#preloader').classList.add('dead')
    }, 500),
    setTimeout(function () {
      document.querySelector('#header').classList.add('animated'),
        document
          .querySelector('#spaceman-wrapper .counter')
          .classList.add('animated')
    }, 750),
    calculateProgress(),
    calculatePath(),
    getAspectRatio(),
    gentSinit(),
    drawgalaxy(),
    updateScroller(),
    window.focus(),
    window.addEventListener('resize', onResize),
    document.addEventListener('scroll', onScroll),
    calculateProgress(),
    showcaseCoordinates()
}
function onResize () {
  setTimeout(function () {
    scroller.resizeRequest++,
      requestId || (requestId = requestAnimationFrame(updateScroller)),
      getAspectRatio(),
      calculatePath(),
      calculateProgress(),
      gentS.forEach((e, t) => {
        gentSResize(gentS[t].el, t), gentSdraw(t)
      }),
      calculateProgress(),
      showcaseCoordinates()
  }, 500)
}
document.addEventListener('DOMContentLoaded', function () {
  calculatePath(),
    setTimeout(function () {
      1 != handleCompleted && handleComplete()
    }, 6e3)
}),
  (window.onload = function () {
    setTimeout(function () {
      window.scrollTo({ top: 0, left: 0 })
    }, 10),
      1 != handleCompleted && handleComplete()
  })
