/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/ 	// webpack-livereload-plugin
/******/ 	(function() {
/******/ 	  if (typeof window === "undefined") { return };
/******/ 	  var id = "webpack-livereload-plugin-script";
/******/ 	  if (document.getElementById(id)) { return; }
/******/ 	  var el = document.createElement("script");
/******/ 	  el.id = id;
/******/ 	  el.async = true;
/******/ 	  el.src = "http://localhost:35729/livereload.js";
/******/ 	  document.head.appendChild(el);
/******/ 	}());
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!********************!*\
  !*** multi global ***!
  \********************/
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(/*! public/bootstrap/js/bootstrap.min.js */1);
	__webpack_require__(/*! client/js/app/app.js */2);
	module.exports = __webpack_require__(/*! client/sass/screen.scss */15);


/***/ },
/* 1 */
/*!**********************************************!*\
  !*** ./public/bootstrap/js/bootstrap.min.js ***!
  \**********************************************/
/***/ function(module, exports) {

	/*!
	 * Bootstrap v3.3.7 (http://getbootstrap.com)
	 * Copyright 2011-2016 Twitter, Inc.
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 */
	
	/*!
	 * Generated using the Bootstrap Customizer (http://getbootstrap.com/customize/?id=2313e16c0351334850f523b2ea5d99a0)
	 * Config saved to config.json and https://gist.github.com/2313e16c0351334850f523b2ea5d99a0
	 */
	"use strict";
	
	if ("undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery");+(function (t) {
	  "use strict";var e = t.fn.jquery.split(" ")[0].split(".");if (e[0] < 2 && e[1] < 9 || 1 == e[0] && 9 == e[1] && e[2] < 1 || e[0] > 3) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4");
	})(jQuery), +(function (t) {
	  "use strict";function e(e) {
	    return this.each(function () {
	      var i = t(this),
	          n = i.data("bs.alert");n || i.data("bs.alert", n = new o(this)), "string" == typeof e && n[e].call(i);
	    });
	  }var i = '[data-dismiss="alert"]',
	      o = function o(e) {
	    t(e).on("click", i, this.close);
	  };o.VERSION = "3.3.7", o.TRANSITION_DURATION = 150, o.prototype.close = function (e) {
	    function i() {
	      a.detach().trigger("closed.bs.alert").remove();
	    }var n = t(this),
	        s = n.attr("data-target");s || (s = n.attr("href"), s = s && s.replace(/.*(?=#[^\s]*$)/, ""));var a = t("#" === s ? [] : s);e && e.preventDefault(), a.length || (a = n.closest(".alert")), a.trigger(e = t.Event("close.bs.alert")), e.isDefaultPrevented() || (a.removeClass("in"), t.support.transition && a.hasClass("fade") ? a.one("bsTransitionEnd", i).emulateTransitionEnd(o.TRANSITION_DURATION) : i());
	  };var n = t.fn.alert;t.fn.alert = e, t.fn.alert.Constructor = o, t.fn.alert.noConflict = function () {
	    return t.fn.alert = n, this;
	  }, t(document).on("click.bs.alert.data-api", i, o.prototype.close);
	})(jQuery), +(function (t) {
	  "use strict";function e(e) {
	    return this.each(function () {
	      var o = t(this),
	          n = o.data("bs.button"),
	          s = "object" == typeof e && e;n || o.data("bs.button", n = new i(this, s)), "toggle" == e ? n.toggle() : e && n.setState(e);
	    });
	  }var i = function i(e, o) {
	    this.$element = t(e), this.options = t.extend({}, i.DEFAULTS, o), this.isLoading = !1;
	  };i.VERSION = "3.3.7", i.DEFAULTS = { loadingText: "loading..." }, i.prototype.setState = function (e) {
	    var i = "disabled",
	        o = this.$element,
	        n = o.is("input") ? "val" : "html",
	        s = o.data();e += "Text", null == s.resetText && o.data("resetText", o[n]()), setTimeout(t.proxy(function () {
	      o[n](null == s[e] ? this.options[e] : s[e]), "loadingText" == e ? (this.isLoading = !0, o.addClass(i).attr(i, i).prop(i, !0)) : this.isLoading && (this.isLoading = !1, o.removeClass(i).removeAttr(i).prop(i, !1));
	    }, this), 0);
	  }, i.prototype.toggle = function () {
	    var t = !0,
	        e = this.$element.closest('[data-toggle="buttons"]');if (e.length) {
	      var i = this.$element.find("input");"radio" == i.prop("type") ? (i.prop("checked") && (t = !1), e.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == i.prop("type") && (i.prop("checked") !== this.$element.hasClass("active") && (t = !1), this.$element.toggleClass("active")), i.prop("checked", this.$element.hasClass("active")), t && i.trigger("change");
	    } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active");
	  };var o = t.fn.button;t.fn.button = e, t.fn.button.Constructor = i, t.fn.button.noConflict = function () {
	    return t.fn.button = o, this;
	  }, t(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function (i) {
	    var o = t(i.target).closest(".btn");e.call(o, "toggle"), t(i.target).is('input[type="radio"], input[type="checkbox"]') || (i.preventDefault(), o.is("input,button") ? o.trigger("focus") : o.find("input:visible,button:visible").first().trigger("focus"));
	  }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function (e) {
	    t(e.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(e.type));
	  });
	})(jQuery), +(function (t) {
	  "use strict";function e(e) {
	    return this.each(function () {
	      var o = t(this),
	          n = o.data("bs.carousel"),
	          s = t.extend({}, i.DEFAULTS, o.data(), "object" == typeof e && e),
	          a = "string" == typeof e ? e : s.slide;n || o.data("bs.carousel", n = new i(this, s)), "number" == typeof e ? n.to(e) : a ? n[a]() : s.interval && n.pause().cycle();
	    });
	  }var i = function i(e, _i) {
	    this.$element = t(e), this.$indicators = this.$element.find(".carousel-indicators"), this.options = _i, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", t.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", t.proxy(this.pause, this)).on("mouseleave.bs.carousel", t.proxy(this.cycle, this));
	  };i.VERSION = "3.3.7", i.TRANSITION_DURATION = 600, i.DEFAULTS = { interval: 5e3, pause: "hover", wrap: !0, keyboard: !0 }, i.prototype.keydown = function (t) {
	    if (!/input|textarea/i.test(t.target.tagName)) {
	      switch (t.which) {case 37:
	          this.prev();break;case 39:
	          this.next();break;default:
	          return;}t.preventDefault();
	    }
	  }, i.prototype.cycle = function (e) {
	    return e || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)), this;
	  }, i.prototype.getItemIndex = function (t) {
	    return this.$items = t.parent().children(".item"), this.$items.index(t || this.$active);
	  }, i.prototype.getItemForDirection = function (t, e) {
	    var i = this.getItemIndex(e),
	        o = "prev" == t && 0 === i || "next" == t && i == this.$items.length - 1;if (o && !this.options.wrap) return e;var n = "prev" == t ? -1 : 1,
	        s = (i + n) % this.$items.length;return this.$items.eq(s);
	  }, i.prototype.to = function (t) {
	    var e = this,
	        i = this.getItemIndex(this.$active = this.$element.find(".item.active"));return t > this.$items.length - 1 || 0 > t ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function () {
	      e.to(t);
	    }) : i == t ? this.pause().cycle() : this.slide(t > i ? "next" : "prev", this.$items.eq(t));
	  }, i.prototype.pause = function (e) {
	    return e || (this.paused = !0), this.$element.find(".next, .prev").length && t.support.transition && (this.$element.trigger(t.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this;
	  }, i.prototype.next = function () {
	    return this.sliding ? void 0 : this.slide("next");
	  }, i.prototype.prev = function () {
	    return this.sliding ? void 0 : this.slide("prev");
	  }, i.prototype.slide = function (e, o) {
	    var n = this.$element.find(".item.active"),
	        s = o || this.getItemForDirection(e, n),
	        a = this.interval,
	        r = "next" == e ? "left" : "right",
	        l = this;if (s.hasClass("active")) return this.sliding = !1;var h = s[0],
	        d = t.Event("slide.bs.carousel", { relatedTarget: h, direction: r });if ((this.$element.trigger(d), !d.isDefaultPrevented())) {
	      if ((this.sliding = !0, a && this.pause(), this.$indicators.length)) {
	        this.$indicators.find(".active").removeClass("active");var p = t(this.$indicators.children()[this.getItemIndex(s)]);p && p.addClass("active");
	      }var c = t.Event("slid.bs.carousel", { relatedTarget: h, direction: r });return t.support.transition && this.$element.hasClass("slide") ? (s.addClass(e), s[0].offsetWidth, n.addClass(r), s.addClass(r), n.one("bsTransitionEnd", function () {
	        s.removeClass([e, r].join(" ")).addClass("active"), n.removeClass(["active", r].join(" ")), l.sliding = !1, setTimeout(function () {
	          l.$element.trigger(c);
	        }, 0);
	      }).emulateTransitionEnd(i.TRANSITION_DURATION)) : (n.removeClass("active"), s.addClass("active"), this.sliding = !1, this.$element.trigger(c)), a && this.cycle(), this;
	    }
	  };var o = t.fn.carousel;t.fn.carousel = e, t.fn.carousel.Constructor = i, t.fn.carousel.noConflict = function () {
	    return t.fn.carousel = o, this;
	  };var n = function n(i) {
	    var o,
	        n = t(this),
	        s = t(n.attr("data-target") || (o = n.attr("href")) && o.replace(/.*(?=#[^\s]+$)/, ""));if (s.hasClass("carousel")) {
	      var a = t.extend({}, s.data(), n.data()),
	          r = n.attr("data-slide-to");r && (a.interval = !1), e.call(s, a), r && s.data("bs.carousel").to(r), i.preventDefault();
	    }
	  };t(document).on("click.bs.carousel.data-api", "[data-slide]", n).on("click.bs.carousel.data-api", "[data-slide-to]", n), t(window).on("load", function () {
	    t('[data-ride="carousel"]').each(function () {
	      var i = t(this);e.call(i, i.data());
	    });
	  });
	})(jQuery), +(function (t) {
	  "use strict";function e(e) {
	    var i = e.attr("data-target");i || (i = e.attr("href"), i = i && /#[A-Za-z]/.test(i) && i.replace(/.*(?=#[^\s]*$)/, ""));var o = i && t(i);return o && o.length ? o : e.parent();
	  }function i(i) {
	    i && 3 === i.which || (t(n).remove(), t(s).each(function () {
	      var o = t(this),
	          n = e(o),
	          s = { relatedTarget: this };n.hasClass("open") && (i && "click" == i.type && /input|textarea/i.test(i.target.tagName) && t.contains(n[0], i.target) || (n.trigger(i = t.Event("hide.bs.dropdown", s)), i.isDefaultPrevented() || (o.attr("aria-expanded", "false"), n.removeClass("open").trigger(t.Event("hidden.bs.dropdown", s)))));
	    }));
	  }function o(e) {
	    return this.each(function () {
	      var i = t(this),
	          o = i.data("bs.dropdown");o || i.data("bs.dropdown", o = new a(this)), "string" == typeof e && o[e].call(i);
	    });
	  }var n = ".dropdown-backdrop",
	      s = '[data-toggle="dropdown"]',
	      a = function a(e) {
	    t(e).on("click.bs.dropdown", this.toggle);
	  };a.VERSION = "3.3.7", a.prototype.toggle = function (o) {
	    var n = t(this);if (!n.is(".disabled, :disabled")) {
	      var s = e(n),
	          a = s.hasClass("open");if ((i(), !a)) {
	        "ontouchstart" in document.documentElement && !s.closest(".navbar-nav").length && t(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(t(this)).on("click", i);var r = { relatedTarget: this };if ((s.trigger(o = t.Event("show.bs.dropdown", r)), o.isDefaultPrevented())) return;n.trigger("focus").attr("aria-expanded", "true"), s.toggleClass("open").trigger(t.Event("shown.bs.dropdown", r));
	      }return !1;
	    }
	  }, a.prototype.keydown = function (i) {
	    if (/(38|40|27|32)/.test(i.which) && !/input|textarea/i.test(i.target.tagName)) {
	      var o = t(this);if ((i.preventDefault(), i.stopPropagation(), !o.is(".disabled, :disabled"))) {
	        var n = e(o),
	            a = n.hasClass("open");if (!a && 27 != i.which || a && 27 == i.which) return 27 == i.which && n.find(s).trigger("focus"), o.trigger("click");var r = " li:not(.disabled):visible a",
	            l = n.find(".dropdown-menu" + r);if (l.length) {
	          var h = l.index(i.target);38 == i.which && h > 0 && h--, 40 == i.which && h < l.length - 1 && h++, ~h || (h = 0), l.eq(h).trigger("focus");
	        }
	      }
	    }
	  };var r = t.fn.dropdown;t.fn.dropdown = o, t.fn.dropdown.Constructor = a, t.fn.dropdown.noConflict = function () {
	    return t.fn.dropdown = r, this;
	  }, t(document).on("click.bs.dropdown.data-api", i).on("click.bs.dropdown.data-api", ".dropdown form", function (t) {
	    t.stopPropagation();
	  }).on("click.bs.dropdown.data-api", s, a.prototype.toggle).on("keydown.bs.dropdown.data-api", s, a.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", a.prototype.keydown);
	})(jQuery), +(function (t) {
	  "use strict";function e(e, o) {
	    return this.each(function () {
	      var n = t(this),
	          s = n.data("bs.modal"),
	          a = t.extend({}, i.DEFAULTS, n.data(), "object" == typeof e && e);s || n.data("bs.modal", s = new i(this, a)), "string" == typeof e ? s[e](o) : a.show && s.show(o);
	    });
	  }var i = function i(e, _i2) {
	    this.options = _i2, this.$body = t(document.body), this.$element = t(e), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, t.proxy(function () {
	      this.$element.trigger("loaded.bs.modal");
	    }, this));
	  };i.VERSION = "3.3.7", i.TRANSITION_DURATION = 300, i.BACKDROP_TRANSITION_DURATION = 150, i.DEFAULTS = { backdrop: !0, keyboard: !0, show: !0 }, i.prototype.toggle = function (t) {
	    return this.isShown ? this.hide() : this.show(t);
	  }, i.prototype.show = function (e) {
	    var o = this,
	        n = t.Event("show.bs.modal", { relatedTarget: e });this.$element.trigger(n), this.isShown || n.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function () {
	      o.$element.one("mouseup.dismiss.bs.modal", function (e) {
	        t(e.target).is(o.$element) && (o.ignoreBackdropClick = !0);
	      });
	    }), this.backdrop(function () {
	      var n = t.support.transition && o.$element.hasClass("fade");o.$element.parent().length || o.$element.appendTo(o.$body), o.$element.show().scrollTop(0), o.adjustDialog(), n && o.$element[0].offsetWidth, o.$element.addClass("in"), o.enforceFocus();var s = t.Event("shown.bs.modal", { relatedTarget: e });n ? o.$dialog.one("bsTransitionEnd", function () {
	        o.$element.trigger("focus").trigger(s);
	      }).emulateTransitionEnd(i.TRANSITION_DURATION) : o.$element.trigger("focus").trigger(s);
	    }));
	  }, i.prototype.hide = function (e) {
	    e && e.preventDefault(), e = t.Event("hide.bs.modal"), this.$element.trigger(e), this.isShown && !e.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), t(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), t.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", t.proxy(this.hideModal, this)).emulateTransitionEnd(i.TRANSITION_DURATION) : this.hideModal());
	  }, i.prototype.enforceFocus = function () {
	    t(document).off("focusin.bs.modal").on("focusin.bs.modal", t.proxy(function (t) {
	      document === t.target || this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus");
	    }, this));
	  }, i.prototype.escape = function () {
	    this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", t.proxy(function (t) {
	      27 == t.which && this.hide();
	    }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal");
	  }, i.prototype.resize = function () {
	    this.isShown ? t(window).on("resize.bs.modal", t.proxy(this.handleUpdate, this)) : t(window).off("resize.bs.modal");
	  }, i.prototype.hideModal = function () {
	    var t = this;this.$element.hide(), this.backdrop(function () {
	      t.$body.removeClass("modal-open"), t.resetAdjustments(), t.resetScrollbar(), t.$element.trigger("hidden.bs.modal");
	    });
	  }, i.prototype.removeBackdrop = function () {
	    this.$backdrop && this.$backdrop.remove(), this.$backdrop = null;
	  }, i.prototype.backdrop = function (e) {
	    var o = this,
	        n = this.$element.hasClass("fade") ? "fade" : "";if (this.isShown && this.options.backdrop) {
	      var s = t.support.transition && n;if ((this.$backdrop = t(document.createElement("div")).addClass("modal-backdrop " + n).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", t.proxy(function (t) {
	        return this.ignoreBackdropClick ? void (this.ignoreBackdropClick = !1) : void (t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()));
	      }, this)), s && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !e)) return;s ? this.$backdrop.one("bsTransitionEnd", e).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION) : e();
	    } else if (!this.isShown && this.$backdrop) {
	      this.$backdrop.removeClass("in");var a = function a() {
	        o.removeBackdrop(), e && e();
	      };t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", a).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION) : a();
	    } else e && e();
	  }, i.prototype.handleUpdate = function () {
	    this.adjustDialog();
	  }, i.prototype.adjustDialog = function () {
	    var t = this.$element[0].scrollHeight > document.documentElement.clientHeight;this.$element.css({ paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : "", paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : "" });
	  }, i.prototype.resetAdjustments = function () {
	    this.$element.css({ paddingLeft: "", paddingRight: "" });
	  }, i.prototype.checkScrollbar = function () {
	    var t = window.innerWidth;if (!t) {
	      var e = document.documentElement.getBoundingClientRect();t = e.right - Math.abs(e.left);
	    }this.bodyIsOverflowing = document.body.clientWidth < t, this.scrollbarWidth = this.measureScrollbar();
	  }, i.prototype.setScrollbar = function () {
	    var t = parseInt(this.$body.css("padding-right") || 0, 10);this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", t + this.scrollbarWidth);
	  }, i.prototype.resetScrollbar = function () {
	    this.$body.css("padding-right", this.originalBodyPad);
	  }, i.prototype.measureScrollbar = function () {
	    var t = document.createElement("div");t.className = "modal-scrollbar-measure", this.$body.append(t);var e = t.offsetWidth - t.clientWidth;return this.$body[0].removeChild(t), e;
	  };var o = t.fn.modal;t.fn.modal = e, t.fn.modal.Constructor = i, t.fn.modal.noConflict = function () {
	    return t.fn.modal = o, this;
	  }, t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (i) {
	    var o = t(this),
	        n = o.attr("href"),
	        s = t(o.attr("data-target") || n && n.replace(/.*(?=#[^\s]+$)/, "")),
	        a = s.data("bs.modal") ? "toggle" : t.extend({ remote: !/#/.test(n) && n }, s.data(), o.data());o.is("a") && i.preventDefault(), s.one("show.bs.modal", function (t) {
	      t.isDefaultPrevented() || s.one("hidden.bs.modal", function () {
	        o.is(":visible") && o.trigger("focus");
	      });
	    }), e.call(s, a, this);
	  });
	})(jQuery), +(function (t) {
	  "use strict";function e(e) {
	    return this.each(function () {
	      var o = t(this),
	          n = o.data("bs.tooltip"),
	          s = "object" == typeof e && e;!n && /destroy|hide/.test(e) || (n || o.data("bs.tooltip", n = new i(this, s)), "string" == typeof e && n[e]());
	    });
	  }var i = function i(t, e) {
	    this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", t, e);
	  };i.VERSION = "3.3.7", i.TRANSITION_DURATION = 150, i.DEFAULTS = { animation: !0, placement: "top", selector: !1, template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>', trigger: "hover focus", title: "", delay: 0, html: !1, container: !1, viewport: { selector: "body", padding: 0 } }, i.prototype.init = function (e, i, o) {
	    if ((this.enabled = !0, this.type = e, this.$element = t(i), this.options = this.getOptions(o), this.$viewport = this.options.viewport && t(t.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = { click: !1, hover: !1, focus: !1 }, this.$element[0] instanceof document.constructor && !this.options.selector)) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");for (var n = this.options.trigger.split(" "), s = n.length; s--;) {
	      var a = n[s];if ("click" == a) this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this));else if ("manual" != a) {
	        var r = "hover" == a ? "mouseenter" : "focusin",
	            l = "hover" == a ? "mouseleave" : "focusout";this.$element.on(r + "." + this.type, this.options.selector, t.proxy(this.enter, this)), this.$element.on(l + "." + this.type, this.options.selector, t.proxy(this.leave, this));
	      }
	    }this.options.selector ? this._options = t.extend({}, this.options, { trigger: "manual", selector: "" }) : this.fixTitle();
	  }, i.prototype.getDefaults = function () {
	    return i.DEFAULTS;
	  }, i.prototype.getOptions = function (e) {
	    return e = t.extend({}, this.getDefaults(), this.$element.data(), e), e.delay && "number" == typeof e.delay && (e.delay = { show: e.delay, hide: e.delay }), e;
	  }, i.prototype.getDelegateOptions = function () {
	    var e = {},
	        i = this.getDefaults();return this._options && t.each(this._options, function (t, o) {
	      i[t] != o && (e[t] = o);
	    }), e;
	  }, i.prototype.enter = function (e) {
	    var i = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);return i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i)), e instanceof t.Event && (i.inState["focusin" == e.type ? "focus" : "hover"] = !0), i.tip().hasClass("in") || "in" == i.hoverState ? void (i.hoverState = "in") : (clearTimeout(i.timeout), i.hoverState = "in", i.options.delay && i.options.delay.show ? void (i.timeout = setTimeout(function () {
	      "in" == i.hoverState && i.show();
	    }, i.options.delay.show)) : i.show());
	  }, i.prototype.isInStateTrue = function () {
	    for (var t in this.inState) if (this.inState[t]) return !0;return !1;
	  }, i.prototype.leave = function (e) {
	    var i = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);return i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i)), e instanceof t.Event && (i.inState["focusout" == e.type ? "focus" : "hover"] = !1), i.isInStateTrue() ? void 0 : (clearTimeout(i.timeout), i.hoverState = "out", i.options.delay && i.options.delay.hide ? void (i.timeout = setTimeout(function () {
	      "out" == i.hoverState && i.hide();
	    }, i.options.delay.hide)) : i.hide());
	  }, i.prototype.show = function () {
	    var e = t.Event("show.bs." + this.type);if (this.hasContent() && this.enabled) {
	      this.$element.trigger(e);var o = t.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);if (e.isDefaultPrevented() || !o) return;var n = this,
	          s = this.tip(),
	          a = this.getUID(this.type);this.setContent(), s.attr("id", a), this.$element.attr("aria-describedby", a), this.options.animation && s.addClass("fade");var r = "function" == typeof this.options.placement ? this.options.placement.call(this, s[0], this.$element[0]) : this.options.placement,
	          l = /\s?auto?\s?/i,
	          h = l.test(r);h && (r = r.replace(l, "") || "top"), s.detach().css({ top: 0, left: 0, display: "block" }).addClass(r).data("bs." + this.type, this), this.options.container ? s.appendTo(this.options.container) : s.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);var d = this.getPosition(),
	          p = s[0].offsetWidth,
	          c = s[0].offsetHeight;if (h) {
	        var f = r,
	            u = this.getPosition(this.$viewport);r = "bottom" == r && d.bottom + c > u.bottom ? "top" : "top" == r && d.top - c < u.top ? "bottom" : "right" == r && d.right + p > u.width ? "left" : "left" == r && d.left - p < u.left ? "right" : r, s.removeClass(f).addClass(r);
	      }var g = this.getCalculatedOffset(r, d, p, c);this.applyPlacement(g, r);var v = function v() {
	        var t = n.hoverState;n.$element.trigger("shown.bs." + n.type), n.hoverState = null, "out" == t && n.leave(n);
	      };t.support.transition && this.$tip.hasClass("fade") ? s.one("bsTransitionEnd", v).emulateTransitionEnd(i.TRANSITION_DURATION) : v();
	    }
	  }, i.prototype.applyPlacement = function (e, i) {
	    var o = this.tip(),
	        n = o[0].offsetWidth,
	        s = o[0].offsetHeight,
	        a = parseInt(o.css("margin-top"), 10),
	        r = parseInt(o.css("margin-left"), 10);isNaN(a) && (a = 0), isNaN(r) && (r = 0), e.top += a, e.left += r, t.offset.setOffset(o[0], t.extend({ using: function using(t) {
	        o.css({ top: Math.round(t.top), left: Math.round(t.left) });
	      } }, e), 0), o.addClass("in");var l = o[0].offsetWidth,
	        h = o[0].offsetHeight;"top" == i && h != s && (e.top = e.top + s - h);var d = this.getViewportAdjustedDelta(i, e, l, h);d.left ? e.left += d.left : e.top += d.top;var p = /top|bottom/.test(i),
	        c = p ? 2 * d.left - n + l : 2 * d.top - s + h,
	        f = p ? "offsetWidth" : "offsetHeight";o.offset(e), this.replaceArrow(c, o[0][f], p);
	  }, i.prototype.replaceArrow = function (t, e, i) {
	    this.arrow().css(i ? "left" : "top", 50 * (1 - t / e) + "%").css(i ? "top" : "left", "");
	  }, i.prototype.setContent = function () {
	    var t = this.tip(),
	        e = this.getTitle();t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e), t.removeClass("fade in top bottom left right");
	  }, i.prototype.hide = function (e) {
	    function o() {
	      "in" != n.hoverState && s.detach(), n.$element && n.$element.removeAttr("aria-describedby").trigger("hidden.bs." + n.type), e && e();
	    }var n = this,
	        s = t(this.$tip),
	        a = t.Event("hide.bs." + this.type);return this.$element.trigger(a), a.isDefaultPrevented() ? void 0 : (s.removeClass("in"), t.support.transition && s.hasClass("fade") ? s.one("bsTransitionEnd", o).emulateTransitionEnd(i.TRANSITION_DURATION) : o(), this.hoverState = null, this);
	  }, i.prototype.fixTitle = function () {
	    var t = this.$element;(t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "");
	  }, i.prototype.hasContent = function () {
	    return this.getTitle();
	  }, i.prototype.getPosition = function (e) {
	    e = e || this.$element;var i = e[0],
	        o = "BODY" == i.tagName,
	        n = i.getBoundingClientRect();null == n.width && (n = t.extend({}, n, { width: n.right - n.left, height: n.bottom - n.top }));var s = window.SVGElement && i instanceof window.SVGElement,
	        a = o ? { top: 0, left: 0 } : s ? null : e.offset(),
	        r = { scroll: o ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop() },
	        l = o ? { width: t(window).width(), height: t(window).height() } : null;return t.extend({}, n, r, l, a);
	  }, i.prototype.getCalculatedOffset = function (t, e, i, o) {
	    return "bottom" == t ? { top: e.top + e.height, left: e.left + e.width / 2 - i / 2 } : "top" == t ? { top: e.top - o, left: e.left + e.width / 2 - i / 2 } : "left" == t ? { top: e.top + e.height / 2 - o / 2, left: e.left - i } : { top: e.top + e.height / 2 - o / 2, left: e.left + e.width };
	  }, i.prototype.getViewportAdjustedDelta = function (t, e, i, o) {
	    var n = { top: 0, left: 0 };if (!this.$viewport) return n;var s = this.options.viewport && this.options.viewport.padding || 0,
	        a = this.getPosition(this.$viewport);if (/right|left/.test(t)) {
	      var r = e.top - s - a.scroll,
	          l = e.top + s - a.scroll + o;r < a.top ? n.top = a.top - r : l > a.top + a.height && (n.top = a.top + a.height - l);
	    } else {
	      var h = e.left - s,
	          d = e.left + s + i;h < a.left ? n.left = a.left - h : d > a.right && (n.left = a.left + a.width - d);
	    }return n;
	  }, i.prototype.getTitle = function () {
	    var t,
	        e = this.$element,
	        i = this.options;return t = e.attr("data-original-title") || ("function" == typeof i.title ? i.title.call(e[0]) : i.title);
	  }, i.prototype.getUID = function (t) {
	    do t += ~ ~(1e6 * Math.random()); while (document.getElementById(t));return t;
	  }, i.prototype.tip = function () {
	    if (!this.$tip && (this.$tip = t(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");return this.$tip;
	  }, i.prototype.arrow = function () {
	    return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow");
	  }, i.prototype.enable = function () {
	    this.enabled = !0;
	  }, i.prototype.disable = function () {
	    this.enabled = !1;
	  }, i.prototype.toggleEnabled = function () {
	    this.enabled = !this.enabled;
	  }, i.prototype.toggle = function (e) {
	    var i = this;e && (i = t(e.currentTarget).data("bs." + this.type), i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i))), e ? (i.inState.click = !i.inState.click, i.isInStateTrue() ? i.enter(i) : i.leave(i)) : i.tip().hasClass("in") ? i.leave(i) : i.enter(i);
	  }, i.prototype.destroy = function () {
	    var t = this;clearTimeout(this.timeout), this.hide(function () {
	      t.$element.off("." + t.type).removeData("bs." + t.type), t.$tip && t.$tip.detach(), t.$tip = null, t.$arrow = null, t.$viewport = null, t.$element = null;
	    });
	  };var o = t.fn.tooltip;t.fn.tooltip = e, t.fn.tooltip.Constructor = i, t.fn.tooltip.noConflict = function () {
	    return t.fn.tooltip = o, this;
	  };
	})(jQuery), +(function (t) {
	  "use strict";function e(e) {
	    return this.each(function () {
	      var o = t(this),
	          n = o.data("bs.popover"),
	          s = "object" == typeof e && e;!n && /destroy|hide/.test(e) || (n || o.data("bs.popover", n = new i(this, s)), "string" == typeof e && n[e]());
	    });
	  }var i = function i(t, e) {
	    this.init("popover", t, e);
	  };if (!t.fn.tooltip) throw new Error("Popover requires tooltip.js");i.VERSION = "3.3.7", i.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, { placement: "right", trigger: "click", content: "", template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>' }), i.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype), i.prototype.constructor = i, i.prototype.getDefaults = function () {
	    return i.DEFAULTS;
	  }, i.prototype.setContent = function () {
	    var t = this.tip(),
	        e = this.getTitle(),
	        i = this.getContent();t.find(".popover-title")[this.options.html ? "html" : "text"](e), t.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof i ? "html" : "append" : "text"](i), t.removeClass("fade top bottom left right in"), t.find(".popover-title").html() || t.find(".popover-title").hide();
	  }, i.prototype.hasContent = function () {
	    return this.getTitle() || this.getContent();
	  }, i.prototype.getContent = function () {
	    var t = this.$element,
	        e = this.options;return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content);
	  }, i.prototype.arrow = function () {
	    return this.$arrow = this.$arrow || this.tip().find(".arrow");
	  };var o = t.fn.popover;t.fn.popover = e, t.fn.popover.Constructor = i, t.fn.popover.noConflict = function () {
	    return t.fn.popover = o, this;
	  };
	})(jQuery), +(function (t) {
	  "use strict";function e(e) {
	    return this.each(function () {
	      var o = t(this),
	          n = o.data("bs.tab");n || o.data("bs.tab", n = new i(this)), "string" == typeof e && n[e]();
	    });
	  }var i = function i(e) {
	    this.element = t(e);
	  };i.VERSION = "3.3.7", i.TRANSITION_DURATION = 150, i.prototype.show = function () {
	    var e = this.element,
	        i = e.closest("ul:not(.dropdown-menu)"),
	        o = e.data("target");if ((o || (o = e.attr("href"), o = o && o.replace(/.*(?=#[^\s]*$)/, "")), !e.parent("li").hasClass("active"))) {
	      var n = i.find(".active:last a"),
	          s = t.Event("hide.bs.tab", { relatedTarget: e[0] }),
	          a = t.Event("show.bs.tab", { relatedTarget: n[0] });if ((n.trigger(s), e.trigger(a), !a.isDefaultPrevented() && !s.isDefaultPrevented())) {
	        var r = t(o);this.activate(e.closest("li"), i), this.activate(r, r.parent(), function () {
	          n.trigger({ type: "hidden.bs.tab", relatedTarget: e[0] }), e.trigger({ type: "shown.bs.tab", relatedTarget: n[0] });
	        });
	      }
	    }
	  }, i.prototype.activate = function (e, o, n) {
	    function s() {
	      a.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), e.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), r ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"), e.parent(".dropdown-menu").length && e.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), n && n();
	    }var a = o.find("> .active"),
	        r = n && t.support.transition && (a.length && a.hasClass("fade") || !!o.find("> .fade").length);a.length && r ? a.one("bsTransitionEnd", s).emulateTransitionEnd(i.TRANSITION_DURATION) : s(), a.removeClass("in");
	  };var o = t.fn.tab;t.fn.tab = e, t.fn.tab.Constructor = i, t.fn.tab.noConflict = function () {
	    return t.fn.tab = o, this;
	  };var n = function n(i) {
	    i.preventDefault(), e.call(t(this), "show");
	  };t(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', n).on("click.bs.tab.data-api", '[data-toggle="pill"]', n);
	})(jQuery), +(function (t) {
	  "use strict";function e(e) {
	    return this.each(function () {
	      var o = t(this),
	          n = o.data("bs.affix"),
	          s = "object" == typeof e && e;n || o.data("bs.affix", n = new i(this, s)), "string" == typeof e && n[e]();
	    });
	  }var i = function i(e, o) {
	    this.options = t.extend({}, i.DEFAULTS, o), this.$target = t(this.options.target).on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", t.proxy(this.checkPositionWithEventLoop, this)), this.$element = t(e), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition();
	  };i.VERSION = "3.3.7", i.RESET = "affix affix-top affix-bottom", i.DEFAULTS = { offset: 0, target: window }, i.prototype.getState = function (t, e, i, o) {
	    var n = this.$target.scrollTop(),
	        s = this.$element.offset(),
	        a = this.$target.height();if (null != i && "top" == this.affixed) return i > n ? "top" : !1;if ("bottom" == this.affixed) return null != i ? n + this.unpin <= s.top ? !1 : "bottom" : t - o >= n + a ? !1 : "bottom";var r = null == this.affixed,
	        l = r ? n : s.top,
	        h = r ? a : e;return null != i && i >= n ? "top" : null != o && l + h >= t - o ? "bottom" : !1;
	  }, i.prototype.getPinnedOffset = function () {
	    if (this.pinnedOffset) return this.pinnedOffset;this.$element.removeClass(i.RESET).addClass("affix");var t = this.$target.scrollTop(),
	        e = this.$element.offset();return this.pinnedOffset = e.top - t;
	  }, i.prototype.checkPositionWithEventLoop = function () {
	    setTimeout(t.proxy(this.checkPosition, this), 1);
	  }, i.prototype.checkPosition = function () {
	    if (this.$element.is(":visible")) {
	      var e = this.$element.height(),
	          o = this.options.offset,
	          n = o.top,
	          s = o.bottom,
	          a = Math.max(t(document).height(), t(document.body).height());"object" != typeof o && (s = n = o), "function" == typeof n && (n = o.top(this.$element)), "function" == typeof s && (s = o.bottom(this.$element));var r = this.getState(a, e, n, s);if (this.affixed != r) {
	        null != this.unpin && this.$element.css("top", "");var l = "affix" + (r ? "-" + r : ""),
	            h = t.Event(l + ".bs.affix");if ((this.$element.trigger(h), h.isDefaultPrevented())) return;this.affixed = r, this.unpin = "bottom" == r ? this.getPinnedOffset() : null, this.$element.removeClass(i.RESET).addClass(l).trigger(l.replace("affix", "affixed") + ".bs.affix");
	      }"bottom" == r && this.$element.offset({ top: a - e - s });
	    }
	  };var o = t.fn.affix;t.fn.affix = e, t.fn.affix.Constructor = i, t.fn.affix.noConflict = function () {
	    return t.fn.affix = o, this;
	  }, t(window).on("load", function () {
	    t('[data-spy="affix"]').each(function () {
	      var i = t(this),
	          o = i.data();o.offset = o.offset || {}, null != o.offsetBottom && (o.offset.bottom = o.offsetBottom), null != o.offsetTop && (o.offset.top = o.offsetTop), e.call(i, o);
	    });
	  });
	})(jQuery), +(function (t) {
	  "use strict";function e(e) {
	    var i,
	        o = e.attr("data-target") || (i = e.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, "");return t(o);
	  }function i(e) {
	    return this.each(function () {
	      var i = t(this),
	          n = i.data("bs.collapse"),
	          s = t.extend({}, o.DEFAULTS, i.data(), "object" == typeof e && e);!n && s.toggle && /show|hide/.test(e) && (s.toggle = !1), n || i.data("bs.collapse", n = new o(this, s)), "string" == typeof e && n[e]();
	    });
	  }var o = function o(e, i) {
	    this.$element = t(e), this.options = t.extend({}, o.DEFAULTS, i), this.$trigger = t('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle();
	  };o.VERSION = "3.3.7", o.TRANSITION_DURATION = 350, o.DEFAULTS = { toggle: !0 }, o.prototype.dimension = function () {
	    var t = this.$element.hasClass("width");return t ? "width" : "height";
	  }, o.prototype.show = function () {
	    if (!this.transitioning && !this.$element.hasClass("in")) {
	      var e,
	          n = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");if (!(n && n.length && (e = n.data("bs.collapse"), e && e.transitioning))) {
	        var s = t.Event("show.bs.collapse");if ((this.$element.trigger(s), !s.isDefaultPrevented())) {
	          n && n.length && (i.call(n, "hide"), e || n.data("bs.collapse", null));var a = this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[a](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;var r = function r() {
	            this.$element.removeClass("collapsing").addClass("collapse in")[a](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse");
	          };if (!t.support.transition) return r.call(this);var l = t.camelCase(["scroll", a].join("-"));this.$element.one("bsTransitionEnd", t.proxy(r, this)).emulateTransitionEnd(o.TRANSITION_DURATION)[a](this.$element[0][l]);
	        }
	      }
	    }
	  }, o.prototype.hide = function () {
	    if (!this.transitioning && this.$element.hasClass("in")) {
	      var e = t.Event("hide.bs.collapse");if ((this.$element.trigger(e), !e.isDefaultPrevented())) {
	        var i = this.dimension();this.$element[i](this.$element[i]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;var n = function n() {
	          this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse");
	        };return t.support.transition ? void this.$element[i](0).one("bsTransitionEnd", t.proxy(n, this)).emulateTransitionEnd(o.TRANSITION_DURATION) : n.call(this);
	      }
	    }
	  }, o.prototype.toggle = function () {
	    this[this.$element.hasClass("in") ? "hide" : "show"]();
	  }, o.prototype.getParent = function () {
	    return t(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(t.proxy(function (i, o) {
	      var n = t(o);this.addAriaAndCollapsedClass(e(n), n);
	    }, this)).end();
	  }, o.prototype.addAriaAndCollapsedClass = function (t, e) {
	    var i = t.hasClass("in");t.attr("aria-expanded", i), e.toggleClass("collapsed", !i).attr("aria-expanded", i);
	  };var n = t.fn.collapse;t.fn.collapse = i, t.fn.collapse.Constructor = o, t.fn.collapse.noConflict = function () {
	    return t.fn.collapse = n, this;
	  }, t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function (o) {
	    var n = t(this);n.attr("data-target") || o.preventDefault();var s = e(n),
	        a = s.data("bs.collapse"),
	        r = a ? "toggle" : n.data();i.call(s, r);
	  });
	})(jQuery), +(function (t) {
	  "use strict";function e(i, o) {
	    this.$body = t(document.body), this.$scrollElement = t(t(i).is(document.body) ? window : i), this.options = t.extend({}, e.DEFAULTS, o), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", t.proxy(this.process, this)), this.refresh(), this.process();
	  }function i(i) {
	    return this.each(function () {
	      var o = t(this),
	          n = o.data("bs.scrollspy"),
	          s = "object" == typeof i && i;n || o.data("bs.scrollspy", n = new e(this, s)), "string" == typeof i && n[i]();
	    });
	  }e.VERSION = "3.3.7", e.DEFAULTS = { offset: 10 }, e.prototype.getScrollHeight = function () {
	    return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight);
	  }, e.prototype.refresh = function () {
	    var e = this,
	        i = "offset",
	        o = 0;this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), t.isWindow(this.$scrollElement[0]) || (i = "position", o = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function () {
	      var e = t(this),
	          n = e.data("target") || e.attr("href"),
	          s = /^#./.test(n) && t(n);return s && s.length && s.is(":visible") && [[s[i]().top + o, n]] || null;
	    }).sort(function (t, e) {
	      return t[0] - e[0];
	    }).each(function () {
	      e.offsets.push(this[0]), e.targets.push(this[1]);
	    });
	  }, e.prototype.process = function () {
	    var t,
	        e = this.$scrollElement.scrollTop() + this.options.offset,
	        i = this.getScrollHeight(),
	        o = this.options.offset + i - this.$scrollElement.height(),
	        n = this.offsets,
	        s = this.targets,
	        a = this.activeTarget;if ((this.scrollHeight != i && this.refresh(), e >= o)) return a != (t = s[s.length - 1]) && this.activate(t);if (a && e < n[0]) return this.activeTarget = null, this.clear();for (t = n.length; t--;) a != s[t] && e >= n[t] && (void 0 === n[t + 1] || e < n[t + 1]) && this.activate(s[t]);
	  }, e.prototype.activate = function (e) {
	    this.activeTarget = e, this.clear();var i = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]',
	        o = t(i).parents("li").addClass("active");o.parent(".dropdown-menu").length && (o = o.closest("li.dropdown").addClass("active")), o.trigger("activate.bs.scrollspy");
	  }, e.prototype.clear = function () {
	    t(this.selector).parentsUntil(this.options.target, ".active").removeClass("active");
	  };var o = t.fn.scrollspy;t.fn.scrollspy = i, t.fn.scrollspy.Constructor = e, t.fn.scrollspy.noConflict = function () {
	    return t.fn.scrollspy = o, this;
	  }, t(window).on("load.bs.scrollspy.data-api", function () {
	    t('[data-spy="scroll"]').each(function () {
	      var e = t(this);i.call(e, e.data());
	    });
	  });
	})(jQuery), +(function (t) {
	  "use strict";function e() {
	    var t = document.createElement("bootstrap"),
	        e = { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd otransitionend", transition: "transitionend" };for (var i in e) if (void 0 !== t.style[i]) return { end: e[i] };return !1;
	  }t.fn.emulateTransitionEnd = function (e) {
	    var i = !1,
	        o = this;t(this).one("bsTransitionEnd", function () {
	      i = !0;
	    });var n = function n() {
	      i || t(o).trigger(t.support.transition.end);
	    };return setTimeout(n, e), this;
	  }, t(function () {
	    t.support.transition = e(), t.support.transition && (t.event.special.bsTransitionEnd = { bindType: t.support.transition.end, delegateType: t.support.transition.end, handle: function handle(e) {
	        return t(e.target).is(this) ? e.handleObj.handler.apply(this, arguments) : void 0;
	      } });
	  });
	})(jQuery);

/***/ },
/* 2 */
/*!******************************!*\
  !*** ./client/js/app/app.js ***!
  \******************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _mobileMenu = __webpack_require__(/*! ./mobile-menu */ 3);
	
	var _mobileMenu2 = _interopRequireDefault(_mobileMenu);
	
	var _externalLink = __webpack_require__(/*! ./external-link */ 4);
	
	var _externalLink2 = _interopRequireDefault(_externalLink);
	
	var _sectionLink = __webpack_require__(/*! ./section-link */ 5);
	
	var _sectionLink2 = _interopRequireDefault(_sectionLink);
	
	var _inlineIframes = __webpack_require__(/*! ./inline-iframes */ 14);
	
	var _inlineIframes2 = _interopRequireDefault(_inlineIframes);
	
	// Mobile Menu
	(0, _mobileMenu2['default'])();
	
	// External Link
	var aiExternalLink = new _externalLink2['default']();
	aiExternalLink.init();
	
	// Section Link
	var aiSectionLink = new _sectionLink2['default']();
	aiSectionLink.init();
	
	// Inline iFrames
	(0, _inlineIframes2['default'])();

/***/ },
/* 3 */
/*!**************************************!*\
  !*** ./client/js/app/mobile-menu.js ***!
  \**************************************/
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	exports['default'] = function () {
	  var menuBtn = document.getElementById('icon-bars');
	  var sideBar = document.getElementById('sidebar');
	  var menuClose = document.getElementById('close-menu');
	  var body = document.body;
	  if (menuBtn) {
	    menuBtn.addEventListener('click', function (evt) {
	      evt.preventDefault();
	      sideBar.classList.add('active');
	      body.classList.add('menu-open');
	    });
	  }
	  if (menuClose) {
	    menuClose.addEventListener('click', function (evt) {
	      evt.preventDefault();
	      sideBar.classList.remove('active');
	      body.classList.remove('menu-open');
	    });
	  }
	};
	
	module.exports = exports['default'];

/***/ },
/* 4 */
/*!****************************************!*\
  !*** ./client/js/app/external-link.js ***!
  \****************************************/
/***/ function(module, exports) {

	/**
	 * Component for external links
	 */
	
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var ExternalLink = (function () {
	  function ExternalLink() {
	    _classCallCheck(this, ExternalLink);
	
	    this.content = document.querySelector('.content-wrapper');
	    this.links = this.content.querySelectorAll('a');
	    this.currentHost = window.location.host;
	    this.linkIcon = '<svg width="1792" height="1792" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1408 928v-480q0-26-19-45t-45-19h-480q-42 0-59 39-17 41 14 70l144 144-534 534q-19 19-19 45t19 45l102 102q19 19 45 19t45-19l534-534 144 144q18 19 45 19 12 0 25-5 39-17 39-59zm256-512v960q0 119-84.5 203.5t-203.5 84.5h-960q-119 0-203.5-84.5t-84.5-203.5v-960q0-119 84.5-203.5t203.5-84.5h960q119 0 203.5 84.5t84.5 203.5z"/></svg>';
	  }
	
	  /**
	   * Identify valid external links
	   */
	
	  _createClass(ExternalLink, [{
	    key: 'setExternalLinks',
	    value: function setExternalLinks() {
	      var _this = this;
	
	      Array.prototype.forEach.call(this.links, function (el) {
	        // Don't apply to anchors that contain images
	        if (0 >= el.getElementsByTagName('img').length) {
	          // Don't apply to internal or hash anchors
	          if (-1 === el.href.indexOf(_this.currentHost) && el.href && -1 === el.href.indexOf('#') && !el.classList.contains('github-button')) {
	            el.classList.add('js-external-link');
	            el.insertAdjacentHTML('afterend', '<span class="icon-external-link">' + _this.linkIcon + '</span>');
	          }
	        }
	      });
	    }
	
	    // Init
	  }, {
	    key: 'init',
	    value: function init() {
	      this.setExternalLinks();
	    }
	  }]);
	
	  return ExternalLink;
	})();
	
	exports['default'] = ExternalLink;
	module.exports = exports['default'];

/***/ },
/* 5 */
/*!***************************************!*\
  !*** ./client/js/app/section-link.js ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var Clipboard = __webpack_require__(/*! clipboard */ 6);
	
	/**
	 * Component for section links
	 */
	
	var SectionLink = (function () {
	  function SectionLink() {
	    _classCallCheck(this, SectionLink);
	
	    this.content = document.querySelector('.content-wrapper');
	    this.headers = this.content.querySelectorAll('h1,h2,h3,h4,h5,h6');
	    this.currentHref = window.location.href;
	  }
	
	  /**
	   * Identify valid section links
	   */
	
	  _createClass(SectionLink, [{
	    key: 'setSectionLinks',
	    value: function setSectionLinks() {
	      var _this = this;
	
	      Array.prototype.forEach.call(this.headers, function (el) {
	        if (el.id) {
	          var url = _this.currentHref + '#' + el.id;
	          el.setAttribute('data-clipboard-text', url);
	          var clipboard = new Clipboard(el);
	          clipboard.on('success', function () {
	            alert('Section Link Copied to Clipboard');
	          });
	        }
	      });
	    }
	
	    // Init
	  }, {
	    key: 'init',
	    value: function init() {
	      this.setSectionLinks();
	    }
	  }]);
	
	  return SectionLink;
	})();
	
	exports['default'] = SectionLink;
	module.exports = exports['default'];

/***/ },
/* 6 */
/*!**************************************!*\
  !*** ./~/clipboard/lib/clipboard.js ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, __webpack_require__(/*! ./clipboard-action */ 7), __webpack_require__(/*! tiny-emitter */ 9), __webpack_require__(/*! good-listener */ 10)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else if (typeof exports !== "undefined") {
	        factory(module, require('./clipboard-action'), require('tiny-emitter'), require('good-listener'));
	    } else {
	        var mod = {
	            exports: {}
	        };
	        factory(mod, global.clipboardAction, global.tinyEmitter, global.goodListener);
	        global.clipboard = mod.exports;
	    }
	})(this, function (module, _clipboardAction, _tinyEmitter, _goodListener) {
	    'use strict';
	
	    var _clipboardAction2 = _interopRequireDefault(_clipboardAction);
	
	    var _tinyEmitter2 = _interopRequireDefault(_tinyEmitter);
	
	    var _goodListener2 = _interopRequireDefault(_goodListener);
	
	    function _interopRequireDefault(obj) {
	        return obj && obj.__esModule ? obj : {
	            default: obj
	        };
	    }
	
	    function _classCallCheck(instance, Constructor) {
	        if (!(instance instanceof Constructor)) {
	            throw new TypeError("Cannot call a class as a function");
	        }
	    }
	
	    var _createClass = function () {
	        function defineProperties(target, props) {
	            for (var i = 0; i < props.length; i++) {
	                var descriptor = props[i];
	                descriptor.enumerable = descriptor.enumerable || false;
	                descriptor.configurable = true;
	                if ("value" in descriptor) descriptor.writable = true;
	                Object.defineProperty(target, descriptor.key, descriptor);
	            }
	        }
	
	        return function (Constructor, protoProps, staticProps) {
	            if (protoProps) defineProperties(Constructor.prototype, protoProps);
	            if (staticProps) defineProperties(Constructor, staticProps);
	            return Constructor;
	        };
	    }();
	
	    function _possibleConstructorReturn(self, call) {
	        if (!self) {
	            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	        }
	
	        return call && (typeof call === "object" || typeof call === "function") ? call : self;
	    }
	
	    function _inherits(subClass, superClass) {
	        if (typeof superClass !== "function" && superClass !== null) {
	            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	        }
	
	        subClass.prototype = Object.create(superClass && superClass.prototype, {
	            constructor: {
	                value: subClass,
	                enumerable: false,
	                writable: true,
	                configurable: true
	            }
	        });
	        if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	    }
	
	    var Clipboard = function (_Emitter) {
	        _inherits(Clipboard, _Emitter);
	
	        /**
	         * @param {String|HTMLElement|HTMLCollection|NodeList} trigger
	         * @param {Object} options
	         */
	        function Clipboard(trigger, options) {
	            _classCallCheck(this, Clipboard);
	
	            var _this = _possibleConstructorReturn(this, (Clipboard.__proto__ || Object.getPrototypeOf(Clipboard)).call(this));
	
	            _this.resolveOptions(options);
	            _this.listenClick(trigger);
	            return _this;
	        }
	
	        /**
	         * Defines if attributes would be resolved using internal setter functions
	         * or custom functions that were passed in the constructor.
	         * @param {Object} options
	         */
	
	
	        _createClass(Clipboard, [{
	            key: 'resolveOptions',
	            value: function resolveOptions() {
	                var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	                this.action = typeof options.action === 'function' ? options.action : this.defaultAction;
	                this.target = typeof options.target === 'function' ? options.target : this.defaultTarget;
	                this.text = typeof options.text === 'function' ? options.text : this.defaultText;
	            }
	        }, {
	            key: 'listenClick',
	            value: function listenClick(trigger) {
	                var _this2 = this;
	
	                this.listener = (0, _goodListener2.default)(trigger, 'click', function (e) {
	                    return _this2.onClick(e);
	                });
	            }
	        }, {
	            key: 'onClick',
	            value: function onClick(e) {
	                var trigger = e.delegateTarget || e.currentTarget;
	
	                if (this.clipboardAction) {
	                    this.clipboardAction = null;
	                }
	
	                this.clipboardAction = new _clipboardAction2.default({
	                    action: this.action(trigger),
	                    target: this.target(trigger),
	                    text: this.text(trigger),
	                    trigger: trigger,
	                    emitter: this
	                });
	            }
	        }, {
	            key: 'defaultAction',
	            value: function defaultAction(trigger) {
	                return getAttributeValue('action', trigger);
	            }
	        }, {
	            key: 'defaultTarget',
	            value: function defaultTarget(trigger) {
	                var selector = getAttributeValue('target', trigger);
	
	                if (selector) {
	                    return document.querySelector(selector);
	                }
	            }
	        }, {
	            key: 'defaultText',
	            value: function defaultText(trigger) {
	                return getAttributeValue('text', trigger);
	            }
	        }, {
	            key: 'destroy',
	            value: function destroy() {
	                this.listener.destroy();
	
	                if (this.clipboardAction) {
	                    this.clipboardAction.destroy();
	                    this.clipboardAction = null;
	                }
	            }
	        }], [{
	            key: 'isSupported',
	            value: function isSupported() {
	                var action = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ['copy', 'cut'];
	
	                var actions = typeof action === 'string' ? [action] : action;
	                var support = !!document.queryCommandSupported;
	
	                actions.forEach(function (action) {
	                    support = support && !!document.queryCommandSupported(action);
	                });
	
	                return support;
	            }
	        }]);
	
	        return Clipboard;
	    }(_tinyEmitter2.default);
	
	    /**
	     * Helper function to retrieve attribute value.
	     * @param {String} suffix
	     * @param {Element} element
	     */
	    function getAttributeValue(suffix, element) {
	        var attribute = 'data-clipboard-' + suffix;
	
	        if (!element.hasAttribute(attribute)) {
	            return;
	        }
	
	        return element.getAttribute(attribute);
	    }
	
	    module.exports = Clipboard;
	});

/***/ },
/* 7 */
/*!*********************************************!*\
  !*** ./~/clipboard/lib/clipboard-action.js ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, __webpack_require__(/*! select */ 8)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else if (typeof exports !== "undefined") {
	        factory(module, require('select'));
	    } else {
	        var mod = {
	            exports: {}
	        };
	        factory(mod, global.select);
	        global.clipboardAction = mod.exports;
	    }
	})(this, function (module, _select) {
	    'use strict';
	
	    var _select2 = _interopRequireDefault(_select);
	
	    function _interopRequireDefault(obj) {
	        return obj && obj.__esModule ? obj : {
	            default: obj
	        };
	    }
	
	    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
	        return typeof obj;
	    } : function (obj) {
	        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
	    };
	
	    function _classCallCheck(instance, Constructor) {
	        if (!(instance instanceof Constructor)) {
	            throw new TypeError("Cannot call a class as a function");
	        }
	    }
	
	    var _createClass = function () {
	        function defineProperties(target, props) {
	            for (var i = 0; i < props.length; i++) {
	                var descriptor = props[i];
	                descriptor.enumerable = descriptor.enumerable || false;
	                descriptor.configurable = true;
	                if ("value" in descriptor) descriptor.writable = true;
	                Object.defineProperty(target, descriptor.key, descriptor);
	            }
	        }
	
	        return function (Constructor, protoProps, staticProps) {
	            if (protoProps) defineProperties(Constructor.prototype, protoProps);
	            if (staticProps) defineProperties(Constructor, staticProps);
	            return Constructor;
	        };
	    }();
	
	    var ClipboardAction = function () {
	        /**
	         * @param {Object} options
	         */
	        function ClipboardAction(options) {
	            _classCallCheck(this, ClipboardAction);
	
	            this.resolveOptions(options);
	            this.initSelection();
	        }
	
	        /**
	         * Defines base properties passed from constructor.
	         * @param {Object} options
	         */
	
	
	        _createClass(ClipboardAction, [{
	            key: 'resolveOptions',
	            value: function resolveOptions() {
	                var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	                this.action = options.action;
	                this.emitter = options.emitter;
	                this.target = options.target;
	                this.text = options.text;
	                this.trigger = options.trigger;
	
	                this.selectedText = '';
	            }
	        }, {
	            key: 'initSelection',
	            value: function initSelection() {
	                if (this.text) {
	                    this.selectFake();
	                } else if (this.target) {
	                    this.selectTarget();
	                }
	            }
	        }, {
	            key: 'selectFake',
	            value: function selectFake() {
	                var _this = this;
	
	                var isRTL = document.documentElement.getAttribute('dir') == 'rtl';
	
	                this.removeFake();
	
	                this.fakeHandlerCallback = function () {
	                    return _this.removeFake();
	                };
	                this.fakeHandler = document.body.addEventListener('click', this.fakeHandlerCallback) || true;
	
	                this.fakeElem = document.createElement('textarea');
	                // Prevent zooming on iOS
	                this.fakeElem.style.fontSize = '12pt';
	                // Reset box model
	                this.fakeElem.style.border = '0';
	                this.fakeElem.style.padding = '0';
	                this.fakeElem.style.margin = '0';
	                // Move element out of screen horizontally
	                this.fakeElem.style.position = 'absolute';
	                this.fakeElem.style[isRTL ? 'right' : 'left'] = '-9999px';
	                // Move element to the same position vertically
	                var yPosition = window.pageYOffset || document.documentElement.scrollTop;
	                this.fakeElem.style.top = yPosition + 'px';
	
	                this.fakeElem.setAttribute('readonly', '');
	                this.fakeElem.value = this.text;
	
	                document.body.appendChild(this.fakeElem);
	
	                this.selectedText = (0, _select2.default)(this.fakeElem);
	                this.copyText();
	            }
	        }, {
	            key: 'removeFake',
	            value: function removeFake() {
	                if (this.fakeHandler) {
	                    document.body.removeEventListener('click', this.fakeHandlerCallback);
	                    this.fakeHandler = null;
	                    this.fakeHandlerCallback = null;
	                }
	
	                if (this.fakeElem) {
	                    document.body.removeChild(this.fakeElem);
	                    this.fakeElem = null;
	                }
	            }
	        }, {
	            key: 'selectTarget',
	            value: function selectTarget() {
	                this.selectedText = (0, _select2.default)(this.target);
	                this.copyText();
	            }
	        }, {
	            key: 'copyText',
	            value: function copyText() {
	                var succeeded = void 0;
	
	                try {
	                    succeeded = document.execCommand(this.action);
	                } catch (err) {
	                    succeeded = false;
	                }
	
	                this.handleResult(succeeded);
	            }
	        }, {
	            key: 'handleResult',
	            value: function handleResult(succeeded) {
	                this.emitter.emit(succeeded ? 'success' : 'error', {
	                    action: this.action,
	                    text: this.selectedText,
	                    trigger: this.trigger,
	                    clearSelection: this.clearSelection.bind(this)
	                });
	            }
	        }, {
	            key: 'clearSelection',
	            value: function clearSelection() {
	                if (this.target) {
	                    this.target.blur();
	                }
	
	                window.getSelection().removeAllRanges();
	            }
	        }, {
	            key: 'destroy',
	            value: function destroy() {
	                this.removeFake();
	            }
	        }, {
	            key: 'action',
	            set: function set() {
	                var action = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'copy';
	
	                this._action = action;
	
	                if (this._action !== 'copy' && this._action !== 'cut') {
	                    throw new Error('Invalid "action" value, use either "copy" or "cut"');
	                }
	            },
	            get: function get() {
	                return this._action;
	            }
	        }, {
	            key: 'target',
	            set: function set(target) {
	                if (target !== undefined) {
	                    if (target && (typeof target === 'undefined' ? 'undefined' : _typeof(target)) === 'object' && target.nodeType === 1) {
	                        if (this.action === 'copy' && target.hasAttribute('disabled')) {
	                            throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
	                        }
	
	                        if (this.action === 'cut' && (target.hasAttribute('readonly') || target.hasAttribute('disabled'))) {
	                            throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');
	                        }
	
	                        this._target = target;
	                    } else {
	                        throw new Error('Invalid "target" value, use a valid Element');
	                    }
	                }
	            },
	            get: function get() {
	                return this._target;
	            }
	        }]);
	
	        return ClipboardAction;
	    }();
	
	    module.exports = ClipboardAction;
	});

/***/ },
/* 8 */
/*!********************************!*\
  !*** ./~/select/src/select.js ***!
  \********************************/
/***/ function(module, exports) {

	function select(element) {
	    var selectedText;
	
	    if (element.nodeName === 'SELECT') {
	        element.focus();
	
	        selectedText = element.value;
	    }
	    else if (element.nodeName === 'INPUT' || element.nodeName === 'TEXTAREA') {
	        var isReadOnly = element.hasAttribute('readonly');
	
	        if (!isReadOnly) {
	            element.setAttribute('readonly', '');
	        }
	
	        element.select();
	        element.setSelectionRange(0, element.value.length);
	
	        if (!isReadOnly) {
	            element.removeAttribute('readonly');
	        }
	
	        selectedText = element.value;
	    }
	    else {
	        if (element.hasAttribute('contenteditable')) {
	            element.focus();
	        }
	
	        var selection = window.getSelection();
	        var range = document.createRange();
	
	        range.selectNodeContents(element);
	        selection.removeAllRanges();
	        selection.addRange(range);
	
	        selectedText = selection.toString();
	    }
	
	    return selectedText;
	}
	
	module.exports = select;


/***/ },
/* 9 */
/*!*********************************!*\
  !*** ./~/tiny-emitter/index.js ***!
  \*********************************/
/***/ function(module, exports) {

	function E () {
	  // Keep this empty so it's easier to inherit from
	  // (via https://github.com/lipsmack from https://github.com/scottcorgan/tiny-emitter/issues/3)
	}
	
	E.prototype = {
	  on: function (name, callback, ctx) {
	    var e = this.e || (this.e = {});
	
	    (e[name] || (e[name] = [])).push({
	      fn: callback,
	      ctx: ctx
	    });
	
	    return this;
	  },
	
	  once: function (name, callback, ctx) {
	    var self = this;
	    function listener () {
	      self.off(name, listener);
	      callback.apply(ctx, arguments);
	    };
	
	    listener._ = callback
	    return this.on(name, listener, ctx);
	  },
	
	  emit: function (name) {
	    var data = [].slice.call(arguments, 1);
	    var evtArr = ((this.e || (this.e = {}))[name] || []).slice();
	    var i = 0;
	    var len = evtArr.length;
	
	    for (i; i < len; i++) {
	      evtArr[i].fn.apply(evtArr[i].ctx, data);
	    }
	
	    return this;
	  },
	
	  off: function (name, callback) {
	    var e = this.e || (this.e = {});
	    var evts = e[name];
	    var liveEvents = [];
	
	    if (evts && callback) {
	      for (var i = 0, len = evts.length; i < len; i++) {
	        if (evts[i].fn !== callback && evts[i].fn._ !== callback)
	          liveEvents.push(evts[i]);
	      }
	    }
	
	    // Remove event from queue to prevent memory leak
	    // Suggested by https://github.com/lazd
	    // Ref: https://github.com/scottcorgan/tiny-emitter/commit/c6ebfaa9bc973b33d110a84a307742b7cf94c953#commitcomment-5024910
	
	    (liveEvents.length)
	      ? e[name] = liveEvents
	      : delete e[name];
	
	    return this;
	  }
	};
	
	module.exports = E;


/***/ },
/* 10 */
/*!***************************************!*\
  !*** ./~/good-listener/src/listen.js ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	var is = __webpack_require__(/*! ./is */ 11);
	var delegate = __webpack_require__(/*! delegate */ 12);
	
	/**
	 * Validates all params and calls the right
	 * listener function based on its target type.
	 *
	 * @param {String|HTMLElement|HTMLCollection|NodeList} target
	 * @param {String} type
	 * @param {Function} callback
	 * @return {Object}
	 */
	function listen(target, type, callback) {
	    if (!target && !type && !callback) {
	        throw new Error('Missing required arguments');
	    }
	
	    if (!is.string(type)) {
	        throw new TypeError('Second argument must be a String');
	    }
	
	    if (!is.fn(callback)) {
	        throw new TypeError('Third argument must be a Function');
	    }
	
	    if (is.node(target)) {
	        return listenNode(target, type, callback);
	    }
	    else if (is.nodeList(target)) {
	        return listenNodeList(target, type, callback);
	    }
	    else if (is.string(target)) {
	        return listenSelector(target, type, callback);
	    }
	    else {
	        throw new TypeError('First argument must be a String, HTMLElement, HTMLCollection, or NodeList');
	    }
	}
	
	/**
	 * Adds an event listener to a HTML element
	 * and returns a remove listener function.
	 *
	 * @param {HTMLElement} node
	 * @param {String} type
	 * @param {Function} callback
	 * @return {Object}
	 */
	function listenNode(node, type, callback) {
	    node.addEventListener(type, callback);
	
	    return {
	        destroy: function() {
	            node.removeEventListener(type, callback);
	        }
	    }
	}
	
	/**
	 * Add an event listener to a list of HTML elements
	 * and returns a remove listener function.
	 *
	 * @param {NodeList|HTMLCollection} nodeList
	 * @param {String} type
	 * @param {Function} callback
	 * @return {Object}
	 */
	function listenNodeList(nodeList, type, callback) {
	    Array.prototype.forEach.call(nodeList, function(node) {
	        node.addEventListener(type, callback);
	    });
	
	    return {
	        destroy: function() {
	            Array.prototype.forEach.call(nodeList, function(node) {
	                node.removeEventListener(type, callback);
	            });
	        }
	    }
	}
	
	/**
	 * Add an event listener to a selector
	 * and returns a remove listener function.
	 *
	 * @param {String} selector
	 * @param {String} type
	 * @param {Function} callback
	 * @return {Object}
	 */
	function listenSelector(selector, type, callback) {
	    return delegate(document.body, selector, type, callback);
	}
	
	module.exports = listen;


/***/ },
/* 11 */
/*!***********************************!*\
  !*** ./~/good-listener/src/is.js ***!
  \***********************************/
/***/ function(module, exports) {

	/**
	 * Check if argument is a HTML element.
	 *
	 * @param {Object} value
	 * @return {Boolean}
	 */
	exports.node = function(value) {
	    return value !== undefined
	        && value instanceof HTMLElement
	        && value.nodeType === 1;
	};
	
	/**
	 * Check if argument is a list of HTML elements.
	 *
	 * @param {Object} value
	 * @return {Boolean}
	 */
	exports.nodeList = function(value) {
	    var type = Object.prototype.toString.call(value);
	
	    return value !== undefined
	        && (type === '[object NodeList]' || type === '[object HTMLCollection]')
	        && ('length' in value)
	        && (value.length === 0 || exports.node(value[0]));
	};
	
	/**
	 * Check if argument is a string.
	 *
	 * @param {Object} value
	 * @return {Boolean}
	 */
	exports.string = function(value) {
	    return typeof value === 'string'
	        || value instanceof String;
	};
	
	/**
	 * Check if argument is a function.
	 *
	 * @param {Object} value
	 * @return {Boolean}
	 */
	exports.fn = function(value) {
	    var type = Object.prototype.toString.call(value);
	
	    return type === '[object Function]';
	};


/***/ },
/* 12 */
/*!************************************!*\
  !*** ./~/delegate/src/delegate.js ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

	var closest = __webpack_require__(/*! ./closest */ 13);
	
	/**
	 * Delegates event to a selector.
	 *
	 * @param {Element} element
	 * @param {String} selector
	 * @param {String} type
	 * @param {Function} callback
	 * @param {Boolean} useCapture
	 * @return {Object}
	 */
	function delegate(element, selector, type, callback, useCapture) {
	    var listenerFn = listener.apply(this, arguments);
	
	    element.addEventListener(type, listenerFn, useCapture);
	
	    return {
	        destroy: function() {
	            element.removeEventListener(type, listenerFn, useCapture);
	        }
	    }
	}
	
	/**
	 * Finds closest match and invokes callback.
	 *
	 * @param {Element} element
	 * @param {String} selector
	 * @param {String} type
	 * @param {Function} callback
	 * @return {Function}
	 */
	function listener(element, selector, type, callback) {
	    return function(e) {
	        e.delegateTarget = closest(e.target, selector);
	
	        if (e.delegateTarget) {
	            callback.call(element, e);
	        }
	    }
	}
	
	module.exports = delegate;


/***/ },
/* 13 */
/*!***********************************!*\
  !*** ./~/delegate/src/closest.js ***!
  \***********************************/
/***/ function(module, exports) {

	var DOCUMENT_NODE_TYPE = 9;
	
	/**
	 * A polyfill for Element.matches()
	 */
	if (Element && !Element.prototype.matches) {
	    var proto = Element.prototype;
	
	    proto.matches = proto.matchesSelector ||
	                    proto.mozMatchesSelector ||
	                    proto.msMatchesSelector ||
	                    proto.oMatchesSelector ||
	                    proto.webkitMatchesSelector;
	}
	
	/**
	 * Finds the closest parent that matches a selector.
	 *
	 * @param {Element} element
	 * @param {String} selector
	 * @return {Function}
	 */
	function closest (element, selector) {
	    while (element && element.nodeType !== DOCUMENT_NODE_TYPE) {
	        if (element.matches(selector)) return element;
	        element = element.parentNode;
	    }
	}
	
	module.exports = closest;


/***/ },
/* 14 */
/*!*****************************************!*\
  !*** ./client/js/app/inline-iframes.js ***!
  \*****************************************/
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	exports['default'] = function () {
	  var iframes = document.getElementsByTagName('iframe');
	
	  if (iframes) {
	    Array.prototype.forEach.call(iframes, function (el) {
	      el.onload = function () {
	        var _this = this;
	
	        // eslint-disable-line
	        var iframe = el.contentWindow.document;
	        var loadHeight = iframe.body.scrollHeight;
	        el.height = loadHeight + 'px'; // eslint-disable-line
	
	        iframe.addEventListener('click', function (e) {
	          if (e.target && (e.target.matches('input[type="submit"]') || e.target.matches('img.pickerImage') || e.target.matches('span.hoverArea'))) {
	            (function () {
	              var self = _this;
	              setTimeout(function () {
	                var newHeight = self.contentWindow.document.body.scrollHeight + 50;
	                self.height = newHeight + 'px';
	              }, 500);
	            })();
	          }
	        });
	      };
	    });
	  }
	};
	
	module.exports = exports['default'];

/***/ },
/* 15 */
/*!*********************************!*\
  !*** ./client/sass/screen.scss ***!
  \*********************************/
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
/******/ ]);
//# sourceMappingURL=global.bundle.js.map