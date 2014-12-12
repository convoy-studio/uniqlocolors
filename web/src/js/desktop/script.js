var App, Carousel, CountDown, Event, Form, Game, Grid, Home, Loader, Parameters, Pics, Router, Screens, Scroll, Snow, SocialSharing, Transitions, Tuto, UI_Slider, Utils, VideoPlayer, VideoPlayer_Controls, VideoPlayer_HTML, VideoPlayer_Templates, W, mediasPath,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

Event = (function() {
  function Event() {}

  Event.MOUSEDOWN = $('body').hasClass('tablet') ? 'touchstart' : 'mousedown';

  Event.MOUSEUP = $('body').hasClass('tablet') ? 'touchend' : 'mouseup';

  Event.MOUSEMOVE = $('body').hasClass('tablet') ? 'touchmove' : 'mousemove';

  Event.CLICK = $('body').hasClass('tablet') ? 'touchstart' : 'click';

  Event.ENTER = $('body').hasClass('tablet') ? 'touchstart' : 'mouseenter';

  Event.KEYDOWN = 'keydown';

  Event.WHEEL = 'mousewheel';

  Event.LOADED = 'loaded';

  Event.STEPS = 'steps';

  Event.SUBMIT = 'submit';

  return Event;

})();

Utils = (function() {
  function Utils() {}

  Utils.getCoverSizeImage = function(picWidth, picHeight, containerWidth, containerHeight) {
    var ch, cr, cw, ph, pr, pw;
    pw = picWidth;
    ph = picHeight;
    cw = containerWidth || W.ww;
    ch = containerHeight || W.wh;
    pr = pw / ph;
    cr = cw / ch;
    if (cr < pr) {
      return {
        'width': ch * pr,
        'height': ch,
        'top': 0,
        'left': -((ch * pr) - cw) * 0.5
      };
    } else {
      return {
        'width': cw,
        'height': cw / pr,
        'top': -((cw / pr) - ch) * 0.5,
        'left': 0
      };
    }
  };

  Utils.getContainSizeImage = function(picWidth, picHeight, containerWidth, containerHeight) {
    var ch, cr, cw, ph, pr, pw;
    pw = picWidth;
    ph = picHeight;
    cw = containerWidth || W.ww;
    ch = containerHeight || W.wh;
    pr = pw / ph;
    cr = cw / ch;
    if (cr < pr) {
      return {
        'width': cw,
        'height': cw / pr,
        'top': (ch - cw / pr) * 0.5,
        'left': 0
      };
    } else {
      return {
        'width': ch * pr,
        'height': ch,
        'top': 0,
        'left': (cw - ch * pr) * 0.5
      };
    }
  };

  Utils.clearTimers = function(timers) {
    return $.each(timers, function(key, timer) {
      return clearTimeout(timer);
    });
  };

  Utils.hexToRgb = function(hex) {
    var result;
    result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    if (result) {
      return {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
      };
    } else {
      return null;
    }
  };

  return Utils;

})();

W = (function() {
  function W() {}

  W.init = function() {
    W.window = $(window);
    W.body = $('body');
    W.device = $('body').attr('class');
    W.ww = $(window).width();
    W.wh = $(window).height();
    W.sw = screen.width;
    W.sh = screen.height;
    W.scrollTop = {
      real: 0,
      calc: 0
    };
    return W.isTablet = $('body').hasClass('tablet') ? true : false;
  };

  return W;

})();

Carousel = (function() {
  function Carousel(options) {
    this._onNavClick = __bind(this._onNavClick, this);
    this.container = options.container, this.delay = options.delay, this.onUpdate = options.onUpdate;
    this._initContent();
    this._initEvents();
  }

  Carousel.prototype._initContent = function() {
    this.list = this.container.find('.slides');
    this.slides = this.list.find('li');
    this.nav = this.container.find('nav');
    this.navItems = this.nav.find('li');
    this.timer = void 0;
    this.delay = this.delay ||  5000;
    this.currentSlideIndex = 0;
    this.prevSlideIndex = 0;
    this.slidesLength = this.slides.length;
    this.itemWidth = this.slides.width();
    this.slides.addClass('no-transition right');
    this.slides.eq(0).removeClass('right');
    this.navItems.eq(0).addClass('active');
    return this._getSlide();
  };

  Carousel.prototype._initEvents = function() {
    return this.navItems.on(Event.CLICK, this._onNavClick);
  };

  Carousel.prototype._getSlide = function() {
    return this.timer = setTimeout((function(_this) {
      return function() {
        _this.prevSlideIndex = _this.currentSlideIndex;
        _this.currentSlideIndex++;
        if (_this.currentSlideIndex > _this.slidesLength - 1) {
          _this.currentSlideIndex = 0;
        } else if (_this.currentSlideIndex < 0) {
          _this.currentSlideIndex = _this.slidesLength - 1;
        }
        return _this._updateSlides();
      };
    })(this), this.delay);
  };

  Carousel.prototype._updateSlides = function(manual) {
    var direction;
    direction = ['left', 'right'];
    if (manual === true && this.prevSlideIndex > this.currentSlideIndex) {
      direction.reverse();
    }
    this.slides.eq(this.currentSlideIndex).removeClass('left right').addClass('no-transition ' + direction[1]);
    this.slides.eq(this.currentSlideIndex)[0].offsetHeight;
    this.slides.eq(this.currentSlideIndex).removeClass('no-transition');
    this.slides.eq(this.currentSlideIndex)[0].offsetHeight;
    this.slides.eq(this.currentSlideIndex).removeClass(direction[1]);
    this.slides.eq(this.prevSlideIndex).removeClass('no-transition').addClass(direction[0]);
    this.navItems.eq(this.currentSlideIndex).addClass('active').siblings().removeClass('active');
    this._getSlide();
    if (this.onUpdate) {
      return this.onUpdate({
        'prev': this.prevSlideIndex,
        'current': this.currentSlideIndex
      });
    }
  };

  Carousel.prototype._onNavClick = function(e) {
    var index;
    index = $(e.currentTarget).index();
    if (index !== this.currentSlideIndex) {
      this.prevSlideIndex = this.currentSlideIndex;
      this.currentSlideIndex = index;
      clearTimeout(this.timer);
      return this._updateSlides(true);
    }
  };

  return Carousel;

})();

Loader = (function() {
  function Loader(options) {
    var imgInc, imgLength, pics;
    this.container = options.container, this.elm = options.elm, this.custom = options.custom, this.each = options.each, this.complete = options.complete;
    if (this.elm) {
      pics = this.container.find(this.elm);
    } else {
      pics = this.container.find('.img');
    }
    imgLength = pics.length;
    imgInc = 0;
    this.steps = 0;
    this.empty = false;
    if (!pics.length) {
      this.empty = true;
      if (this.complete) {
        this.complete();
      }
    }
    pics.each((function(_this) {
      return function(key, item) {
        var $this, attrs, img, klass, src;
        $this = $(item);
        klass = $this.attr('class').replace('img ', '');
        src = $this.attr('data-src');
        img = new Image();
        attrs = '';
        $.each(item.attributes, function(key, att) {
          if (att.name === 'class') {
            att.value = att.value.replace('img', '');
          }
          if (att.name !== 'data-src') {
            return attrs += att.name + '="' + att.value + '" ';
          }
        });
        img.src = src;
        return img.onload = function() {
          var _ref;
          imgInc++;
          _this.steps = imgInc / imgLength * 100;
          if (_this.each) {
            _this.each($this, '<img src="' + src + '" ' + attrs + '/>', key);
          }
          if ((_ref = _this.custom) === false || _ref === (void 0)) {
            $this.replaceWith('<img src="' + src + '" ' + attrs + '/>');
          }
          $(_this).trigger(Event.STEPS);
          if (imgInc === imgLength) {
            if (_this.complete) {
              _this.complete();
            }
            return $(_this).trigger(Event.LOADED);
          }
        };
      };
    })(this));
  }

  return Loader;

})();

Router = (function() {
  Router.CALLSTART = 'callstart';

  Router.CALLEND = 'callend';

  Router.CALLERROR = 'callerror';

  Router.INITIALIZE = 'initialize';

  Router.CLICK = 'click';

  function Router() {
    this.backCall = __bind(this.backCall, this);
    this.cache = {};
    this.container = $('.ajaxContainer');
    this.current = this.container.attr('id');
    this.headTitle = $('title');
    this.pages = {
      'prev': '',
      'current': this.container.attr('id')
    };
    this.processing = false;
    this.fromCache = false;
    this.events();
    this.initCache();
  }

  Router.prototype.initCache = function() {
    this.href = document.location.pathname;
    this.content = this.container;
    return this.caching();
  };

  Router.prototype.events = function() {
    $(document).on('click', 'a', (function(_this) {
      return function(e) {
        _this.elm = $(e.currentTarget);
        _this.href = _this.elm.attr('href');
        _this.checkRequestAvailability();
        if (_this.isRequestAvailable) {
          _this.getContent();
        }
        if (!_this.isTargetSet) {
          e.preventDefault();
        }
        return $(_this).trigger(Router.CLICK);
      };
    })(this));
    return $(window).on('popstate', (function(_this) {
      return function(event) {
        _this.backCall();
        return event.preventDefault();
      };
    })(this));
  };

  Router.prototype.checkRequestAvailability = function() {
    this.isRequestAvailable = true;
    this.isTargetSet = false;
    if (this.areUrlsMatching()) {
      this.isRequestAvailable = false;
    }
    if (this.processing) {
      this.isRequestAvailable = false;
    }
    if (this.elm.attr('target')) {
      this.isTargetSet = true;
      return this.isRequestAvailable = false;
    }
  };

  Router.prototype.areUrlsMatching = function() {
    var currentPath, currentUrl, urlToCheck;
    urlToCheck = this.href;
    currentPath = document.location.pathname;
    currentUrl = document.location.href;
    if (urlToCheck.substr(-1) === '/') {
      urlToCheck = urlToCheck.substr(0, urlToCheck.length - 1);
    }
    if (currentUrl.substr(-1) === '/') {
      currentUrl = currentUrl.substr(0, currentUrl.length - 1);
      currentPath = currentPath.substr(0, currentPath.length - 1);
    }
    if (urlToCheck === currentPath || urlToCheck === currentUrl) {
      return true;
    }
    return false;
  };

  Router.prototype.backCall = function() {
    if (this.canBack) {
      if (document.location.pathname === this.href) {
        window.history.go(-1);
      } else {
        this.href = document.location.pathname;
        this.getContent();
      }
    }
    return this.canBack = true;
  };

  Router.prototype.getContent = function() {
    this.pages.prev = this.pages.current;
    this.processing = true;
    if (this.cache[this.href]) {
      this.fromCache = true;
      this.content = this.cache[this.href].clone();
      return this.requestSucceeded();
    } else {
      this.fromCache = false;
      return this.request();
    }
  };

  Router.prototype.request = function() {
    $(this).trigger(Router.CALLSTART);
    if (this.ajaxRequest && this.ajaxRequest !== 4) {
      this.ajaxRequest.abort();
    }
    return this.ajaxRequest = $.ajax({
      url: this.href,
      success: (function(_this) {
        return function(response) {
          _this.ajaxResponse = response;
          _this.content = $(response).filter('.ajaxContainer');
          if (_this.content.length === 0) {
            _this.content = $(response).find('.ajaxContainer');
          }
          _this.title = $(response).filter('title').text();
          return _this.requestSucceeded();
        };
      })(this),
      complete: (function(_this) {
        return function(request, status) {};
      })(this),
      error: (function(_this) {
        return function(response) {
          return $(_this).trigger(Router.CALLERROR);
        };
      })(this)
    });
  };

  Router.prototype.requestSucceeded = function(response) {
    this.pages.current = this.content.attr('id');
    this.changeTitle();
    this.caching();
    this.changeUrl();
    return $(this).trigger(Router.CALLEND);
  };

  Router.prototype.changeTitle = function() {
    return this.headTitle.text(this.title);
  };

  Router.prototype.caching = function() {
    return this.cache[this.href] = this.content.clone();
  };

  Router.prototype.changeUrl = function(href) {
    var pathname, state;
    if (href) {
      this.href = href;
    }
    state = {};
    pathname = this.href.split(window.location.host)[1];
    if (pathname) {
      pathname = pathname.substr(4);
    }
    if (window.history.pushState) {
      if (this.pages.current === this.pages.prev) {
        return window.history.replaceState(state, null, this.href);
      } else {
        return window.history.pushState(state, null, this.href);
      }
    } else {
      return window.location.hash = pathname;
    }
  };

  return Router;

})();

Scroll = (function() {
  Scroll.DOWN = 'scroll_active';

  Scroll.UP = 'scroll_inactive';

  function Scroll(options) {
    this.setScale = __bind(this.setScale, this);
    this.resetEase = __bind(this.resetEase, this);
    this.refresh = __bind(this.refresh, this);
    this.goTop = __bind(this.goTop, this);
    this.goTo = __bind(this.goTo, this);
    this.keyDown = __bind(this.keyDown, this);
    this._onMouseWheel = __bind(this._onMouseWheel, this);
    this._onMouseUp = __bind(this._onMouseUp, this);
    this._onMouseMove = __bind(this._onMouseMove, this);
    this._onMouseDown = __bind(this._onMouseDown, this);
    this._initEvents = __bind(this._initEvents, this);
    this.container = options.container;
    this.viewport = this.container.find('.scroll-viewport');
    this.overview = this.container.find('.scroll-overview');
    this.scrollbarContainer = this.container.find('.scrollbar-container');
    this.scrollbarTrack = this.scrollbarContainer.children('.scrollbar-track');
    this.scrollbarThumb = this.scrollbarTrack.children('.scrollbar-thumb');
    this.scrollId = '#' + this.container.attr('id');
    if (this.container.attr('class')) {
      this.scrollId += '.' + this.container.attr('class').split(' ').join('.');
    }
    this.scrollTop = {
      real: 0,
      calc: 0,
      limit: 0,
      perc: 0,
      prev: 0
    };
    this.scrollbar = {
      real: 0,
      calc: 0,
      perc: 0,
      trackHeight: this.scrollbarTrack.height(),
      thumbHeight: this.scrollbarThumb.outerHeight()
    };
    this.overviewHeight = 1;
    this.scale = 1;
    this.isScrollbar = false;
    this.isMouseMoving = false;
    this.scrollEnd = false;
    this.ease = this.initEase = 0.9;
    this.i = 0;
    this.prevY = this.moveY = this.initY = 0;
    this.resize();
    this._initEvents();
  }

  Scroll.prototype._initEvents = function() {
    return this.container.on(Event.MOUSEDOWN, this._onMouseDown).on(Event.WHEEL, this._onMouseWheel);
  };

  Scroll.prototype._onMouseDown = function(event) {
    var e, klass, target, _ref;
    e = event.type === 'touchstart' ? event.originalEvent.touches[0] : event;
    if ((_ref = event.which) === 0 || _ref === 1) {
      target = $(e.target);
      klass = target.attr('class') || '';
      this.scrollbarContainer.addClass('active');
      if (target.parents(this.scrollId).length) {
        if (klass.match('scrollbar') || target.parents('.scrollbar-thumb').length === 1) {
          this.isScrollbar = true;
          this.initScrollY = this.scrollTop.perc * (this.scrollbar.trackHeight - this.scrollbar.thumbHeight);
          this.initY = e.pageY - this.initScrollY;
        } else {
          this.isScrollbar = false;
          this.ease = 1;
          this.initScrollY = this.scrollTop.perc * this.scrollTop.limit;
          this.initY = e.pageY;
        }
        $(this).trigger(Scroll.DOWN);
        W.body.on(Event.MOUSEMOVE, this._onMouseMove).on(Event.MOUSEUP, this._onMouseUp);
      }
      return event.preventDefault();
    }
  };

  Scroll.prototype._onMouseMove = function(event) {
    var e, _ref;
    e = event.type === 'touchmove' ? event.originalEvent.touches[0] : event;
    if ((_ref = event.which) === 0 || _ref === 1) {
      this.isMouseMoving = true;
      if (this.isScrollbar === true) {
        this.moveY = e.pageY - this.initY;
        this.scrollTop.perc = this.moveY / (this.scrollbar.trackHeight - this.scrollbar.thumbHeight);
      } else {
        this.prevY = this.moveY;
        this.moveY = -this.initScrollY + e.pageY - this.initY;
        this.scrollTop.perc = -this.moveY / this.scrollTop.limit;
      }
      return event.preventDefault();
    }
  };

  Scroll.prototype._onMouseUp = function() {
    if (this.isMouseMoving === true && this.isScrollbar === false) {
      this.scrollTop.perc = -(this.moveY + (this.moveY - this.prevY) * 10) / this.scrollTop.limit;
    }
    this.resetEase();
    this.isScrollbar = this.isMouseMoving = false;
    $(this).trigger(Scroll.UP);
    W.body.off(Event.MOUSEMOVE, this._onMouseMove).off(Event.MOUSEUP, this._onMouseUp);
    return this.scrollbarContainer.removeClass('active');
  };

  Scroll.prototype._onMouseWheel = function(e, deltaY) {
    var initScrollY, moveY, target;
    target = $(e.target);
    if (target.parents(this.scrollId).length) {
      this.resetEase();
      initScrollY = this.scrollTop.perc * this.scrollTop.limit;
      moveY = -initScrollY + deltaY;
      this.scrollTop.perc = -moveY / this.scrollTop.limit;
      return e.preventDefault();
    }
  };

  Scroll.prototype.keyDown = function(e) {

    /*
    			32: space
    			40: down
    			38: up
    			16: shift
    			91: cmd
    			18: alt
     */
    var initScrollY, moveY;
    initScrollY = this.scrollTop.perc * this.scrollTop.limit;
    moveY = -initScrollY;
    switch (e.keyCode) {
      case 32:
        moveY -= this.container.height();
        break;
      case 40:
        moveY -= 40;
        break;
      case 38:
        moveY += 40;
    }
    return this.scrollTop.perc = -moveY / this.scrollTop.limit;
  };

  Scroll.prototype.goTo = function(pos, changeEase) {
    if (changeEase) {
      this.ease = 0.1;
    }
    return this.scrollTop.perc = pos / this.scrollTop.limit;
  };

  Scroll.prototype.goTop = function() {
    this.ease = 0.1;
    return this.scrollTop.perc = 0;
  };

  Scroll.prototype.refresh = function() {
    this.viewport = this.container.find('.scroll-viewport');
    this.overview = this.container.find('.scroll-overview');
    this.scrollbarContainer = this.container.find('.scrollbar-container');
    this.scrollbarTrack = this.scrollbarContainer.children('.scrollbar-track');
    this.scrollbarThumb = this.scrollbarTrack.children('.scrollbar-thumb');
    this.scrollTop.perc = 0;
    this.resetEase();
    return this.resize();
  };

  Scroll.prototype.resetEase = function() {
    return this.ease = this.initEase;
  };

  Scroll.prototype.setScale = function(val) {
    return this.scale = val;
  };

  Scroll.prototype.resize = function() {
    this.viewportHeight = this.viewport.outerHeight();
    this.overviewHeight = this.overview.outerHeight();
    this.scrollTop.limit = this.overviewHeight - this.viewportHeight;
    this.scrollbar.trackHeight = this.scrollbarTrack.height();
    if (this.scrollbar.thumbHeight === 0 || this.scrollbar.autoresize === true) {
      this.scrollbar.thumbHeight = Math.max(this.scrollbar.trackHeight / (this.scrollTop.limit / this.viewportHeight), 50);
      this.scrollbar.autoresize = true;
      return this.scrollbarThumb.css({
        'height': this.scrollbar.thumbHeight
      });
    }
  };

  Scroll.prototype.update = function() {
    if (this.scrollTop.perc < 0) {
      this.scrollTop.perc = 0;
    } else if (this.scrollTop.perc > 1) {
      this.scrollTop.perc = 1;
    }
    this.scrollTop.prev = this.scrollTop.calc;
    this.scrollTop.real = this.scrollTop.perc * this.scrollTop.limit;
    this.scrollTop.calc += (this.scrollTop.real - this.scrollTop.calc) * this.ease;
    if (~~this.scrollTop.calc === 0) {
      this.scrollTop.calc = 0;
    }
    if (~~this.scrollTop.prev !== ~~this.scrollTop.calc) {
      Normalize.transform(this.overview[0], 'translate3d(0, ' + (-this.scrollTop.calc * this.scale) + 'px, 0)');
      Normalize.transform(this.scrollbarThumb[0], 'translate3d(0, ' + ((this.scrollTop.real / this.scrollTop.limit) * (this.scrollbar.trackHeight - this.scrollbar.thumbHeight)) + 'px, 0)');
      if (this.scrollEnd === false) {
        this.scrollEnd = true;
        return this.scrollbarContainer.addClass('active');
      }
    } else {
      if (this.scrollEnd === true) {
        this.scrollEnd = false;
        return this.scrollbarContainer.removeClass('active');
      }
    }
  };

  return Scroll;

})();

Transitions = (function() {
  Transitions.INITIALIZE = 'initialize';

  Transitions.CALLSTART = 'callstart';

  Transitions.CALLEND = 'callend';

  Transitions.CALLMIDDLE = 'callmiddle';

  Transitions.CLICK = 'click';

  function Transitions() {
    this.defaultOut = __bind(this.defaultOut, this);
    this.launchIn = __bind(this.launchIn, this);
    this.launchOut = __bind(this.launchOut, this);
    this.end = __bind(this.end, this);
    this.start = __bind(this.start, this);
    this._onRouterClick = __bind(this._onRouterClick, this);
    this.container = $('.ajaxContainer');
    this.blackMask = $('.black_mask');
    this.router = new Router();
    $(this.router).on(Router.CLICK, this._onRouterClick);
    $(this.router).on(Router.CALLSTART, this.start);
    $(this.router).on(Router.CALLEND, this.end);
    this.sectionId = this.router.pages.current;
    this.data = {};
  }

  Transitions.prototype._onRouterClick = function() {
    return $(this).trigger(Transitions.CLICK);
  };

  Transitions.prototype.start = function() {
    $('#loading').css('display', 'block');
    return setTimeout((function(_this) {
      return function() {
        return $('#loading').css('opacity', 1);
      };
    })(this), 10);
  };

  Transitions.prototype.end = function() {
    return this.launchOut();
  };

  Transitions.prototype.launchOut = function() {
    $(this).trigger(Transitions.CALLSTART);
    this.container = {
      prev: $('.ajaxContainer'),
      current: this.router.content
    };
    if (this[this.router.pages.prev + 'Out']) {
      return this[this.router.pages.prev + 'Out']();
    } else {
      return this.defaultOut();
    }
  };

  Transitions.prototype.launchIn = function() {
    this.sectionId = this.router.pages.current;
    if (this[this.router.pages.current + 'In']) {
      this[this.router.pages.current + 'In']();
    } else {
      this.defaultIn();
    }
    return $(this).trigger(Transitions.CALLEND);
  };

  Transitions.prototype.defaultIn = function() {
    this.sectionId = this.router.pages.current;
    this.currentContainer = $('.ajaxContainer');
    this.newContainer = this.router.content;
    this.newContainer.css({
      'width': this.currentContainer.width(),
      'height': this.currentContainer.height()
    });
    this.currentContainer.before(this.newContainer);
    this.newContainer.addClass('new');
    this.currentContainer.addClass('old');
    setTimeout((function(_this) {
      return function() {
        return _this.newContainer.removeClass('new');
      };
    })(this), 100);
    return setTimeout((function(_this) {
      return function() {
        _this.currentContainer.remove();
        return _this.router.processing = false;
      };
    })(this), 1100);
  };

  Transitions.prototype.defaultOut = function() {
    return this.launchIn();
  };

  return Transitions;

})();

UI_Slider = (function() {
  UI_Slider.START = 'start';

  UI_Slider.CHANGE = 'change';

  UI_Slider.END = 'end';

  function UI_Slider(options) {
    this._onMouseUp = __bind(this._onMouseUp, this);
    this._onMouseMove = __bind(this._onMouseMove, this);
    this._onMouseDown = __bind(this._onMouseDown, this);
    this._initSlider = __bind(this._initSlider, this);
    this.container = options.container, this.startValue = options.startValue;
    this.startValue = this.startValue || 0;
    this._initX = 0;
    this._x = 0;
    this._moveX = 0;
    this._initSlider();
  }

  UI_Slider.prototype._initSlider = function() {
    return this.container.on(Event.MOUSEDOWN, this._onMouseDown);
  };

  UI_Slider.prototype._onMouseDown = function(event) {
    var e;
    e = event.type === 'touchstart' ? event.originalEvent.touches[0] : event;
    this.containerWidth = this.container.width();
    this._leftSide = this.container.offset().left;
    this.cursorPos = e.pageX - this._leftSide;
    this.perc = this.cursorPos / this.containerWidth;
    $(document).on(Event.MOUSEMOVE, this._onMouseMove).on(Event.MOUSEUP, this._onMouseUp);
    return $(this).trigger(UI_Slider.START);
  };

  UI_Slider.prototype._onMouseMove = function(event) {
    var e;
    e = event.type === 'touchmove' ? event.originalEvent.touches[0] : event;
    this.cursorPos = e.pageX - this._leftSide;
    this.perc = this.cursorPos / this.containerWidth;
    if (this.perc < 0) {
      this.perc = 0;
    } else if (this.perc > 1) {
      this.perc = 1;
    }
    return $(this).trigger(UI_Slider.CHANGE);
  };

  UI_Slider.prototype._onMouseUp = function() {
    $(document).off(Event.MOUSEMOVE, this._onMouseMove).off(Event.MOUSEUP, this._onMouseUp);
    return $(this).trigger(UI_Slider.END);
  };

  return UI_Slider;

})();

VideoPlayer = (function() {
  function VideoPlayer(options) {
    this._onPlayerPaused = __bind(this._onPlayerPaused, this);
    this._onPlayerEnded = __bind(this._onPlayerEnded, this);
    this._onPlayerPlaying = __bind(this._onPlayerPlaying, this);
    this._onPlayerWaiting = __bind(this._onPlayerWaiting, this);
    this._onPlayerTimeUpdate = __bind(this._onPlayerTimeUpdate, this);
    this._onPlayerProgress = __bind(this._onPlayerProgress, this);
    this._onPlayerCanPlay = __bind(this._onPlayerCanPlay, this);
    this._onControlsSeekEnd = __bind(this._onControlsSeekEnd, this);
    this._onControlsSeekStart = __bind(this._onControlsSeekStart, this);
    this._onControlsVolume = __bind(this._onControlsVolume, this);
    this._onControlsFullscreen = __bind(this._onControlsFullscreen, this);
    this._onControlsStop = __bind(this._onControlsStop, this);
    this._onControlsPause = __bind(this._onControlsPause, this);
    this._onControlsPlay = __bind(this._onControlsPlay, this);
    this._onShieldClick = __bind(this._onShieldClick, this);
    this.hideControls = __bind(this.hideControls, this);
    this.showControls = __bind(this.showControls, this);
    this.setSrc = __bind(this.setSrc, this);
    this.seek = __bind(this.seek, this);
    this.setVolume = __bind(this.setVolume, this);
    this.getSrc = __bind(this.getSrc, this);
    this.getState = __bind(this.getState, this);
    this.getDuration = __bind(this.getDuration, this);
    this.getCurrentTime = __bind(this.getCurrentTime, this);
    this.unmute = __bind(this.unmute, this);
    this.mute = __bind(this.mute, this);
    this.stop = __bind(this.stop, this);
    this.pause = __bind(this.pause, this);
    this.play = __bind(this.play, this);
    this.container = options.container, this.src = options.src, this.poster = options.poster, this.autoplay = options.autoplay, this.loop = options.loop, this.hideControlsAllowed = options.hideControlsAllowed;
    this.isMuted = false;
    this.state = -1;
    this.tempState = null;
    this.canPlay = false;
    this.queueSeek = null;
    this.bufferingInterval = null;
    this.isBuffering = false;
    this.isPaused = false;
    this._initPlayer();
  }

  VideoPlayer.prototype._initPlayer = function() {
    this.container.addClass('stopped');
    this.player = new VideoPlayer_HTML({
      container: this.container,
      src: this.container.attr('data-src') || this.src
    });
    this.video = this.player.$video;
    this.videoContainer = this.player.videoContainer;
    this.controls = new VideoPlayer_Controls({
      container: this.container,
      poster: this.poster,
      autoplay: this.autoplay,
      hideControlsAllowed: this.hideControlsAllowed
    });
    this._initListeners();
    if (this.autoplay) {
      return this.play();
    }
  };

  VideoPlayer.prototype._initListeners = function() {
    $(this.controls).on(VideoPlayer_Controls.SHIELD_CLICK, this._onShieldClick).on(VideoPlayer_Controls.PLAY, this._onControlsPlay).on(VideoPlayer_Controls.PAUSE, this._onControlsPause).on(VideoPlayer_Controls.STOP, this._onControlsStop).on(VideoPlayer_Controls.FULLSCREEN, this._onControlsFullscreen).on(VideoPlayer_Controls.VOLUME, this._onControlsVolume).on(VideoPlayer_Controls.SEEK_START, this._onControlsSeekStart).on(VideoPlayer_Controls.SEEK_END, this._onControlsSeekEnd);
    return $(this.player).on(VideoPlayer.CANPLAY, this._onPlayerCanPlay).on(VideoPlayer.PROGRESS, this._onPlayerProgress).on(VideoPlayer.TIMEUPDATE, this._onPlayerTimeUpdate).on(VideoPlayer.WAITING, this._onPlayerWaiting).on(VideoPlayer.PLAYING, this._onPlayerPlaying).on(VideoPlayer.ENDED, this._onPlayerEnded).on(VideoPlayer.PAUSED, this._onPlayerPaused);
  };

  VideoPlayer.playerState = {
    ENDED: 1,
    PLAYING: 2,
    PAUSED: 3,
    BUFFERING: 4,
    CUED: 5
  };

  VideoPlayer.CANPLAY = 'canplay';

  VideoPlayer.PROGRESS = 'progress';

  VideoPlayer.TIMEUPDATE = 'timeupdate';

  VideoPlayer.WAITING = 'waiting';

  VideoPlayer.PLAYING = 'playing';

  VideoPlayer.SEEKED = 'seeked';

  VideoPlayer.BUFFERING = 'buffering';

  VideoPlayer.ENDED = 'ended';

  VideoPlayer.PAUSED = 'paused';

  VideoPlayer.SHIELD_CLICK = 'shield_click';

  VideoPlayer.MUTE = 'onmute';

  VideoPlayer.UNMUTE = 'onunmute';

  VideoPlayer.prototype.play = function() {
    this.state = VideoPlayer.playerState.PLAYING;
    this.player.play();
    return this.controls.onPlay();
  };

  VideoPlayer.prototype.pause = function() {
    this.state = VideoPlayer.playerState.PAUSED;
    this.player.pause();
    return this.controls.onPause();
  };

  VideoPlayer.prototype.stop = function() {
    this.state = VideoPlayer.playerState.ENDED;
    this.player.stop();
    this.controls.onStop();
    if (this.loop === true) {
      return this.play();
    }
  };

  VideoPlayer.prototype.mute = function() {
    this.isMuted = true;
    this.player.mute();
    this.controls.onMute();
    return $(this).trigger(VideoPlayer.MUTE);
  };

  VideoPlayer.prototype.unmute = function() {
    this.isMuted = false;
    this.player.unmute();
    this.controls.onUnMute();
    return $(this).trigger(VideoPlayer.UNMUTE);
  };

  VideoPlayer.prototype.getCurrentTime = function() {
    return this.player.getCurrentTime();
  };

  VideoPlayer.prototype.getDuration = function() {
    return this.player.getDuration();
  };

  VideoPlayer.prototype.getState = function() {
    return this.state;
  };

  VideoPlayer.prototype.getSrc = function() {
    return this.player.getSrc();
  };

  VideoPlayer.prototype.setVolume = function(val) {
    return this.player.setVolume(val);
  };

  VideoPlayer.prototype.seek = function(val) {
    if (this.canPlay === false) {
      return this.queueSeek = val;
    } else {
      this.player.seek(val);
      this.controls.onSeek(val / this.player.getDuration());
      return $(this).trigger(VideoPlayer.SEEKED);
    }
  };

  VideoPlayer.prototype.setSrc = function(src) {
    this.canPlay = false;
    return this.player.setSrc(src);
  };

  VideoPlayer.prototype.showControls = function() {
    return this.controls.show();
  };

  VideoPlayer.prototype.hideControls = function() {
    return this.controls.hide();
  };

  VideoPlayer.prototype._onShieldClick = function() {
    if (this.state === VideoPlayer.playerState.PLAYING) {
      this.pause();
      return $(this).trigger(VideoPlayer.SHIELD_CLICK);
    } else {
      return this.play();
    }
  };

  VideoPlayer.prototype._onControlsPlay = function() {
    return this.play();
  };

  VideoPlayer.prototype._onControlsPause = function() {
    return this.pause();
  };

  VideoPlayer.prototype._onControlsStop = function() {
    this.pause();
    return this.seek(0);
  };

  VideoPlayer.prototype._onControlsFullscreen = function() {};

  VideoPlayer.prototype._onControlsVolume = function() {
    if (this.isMuted === true) {
      return this.unmute();
    } else {
      return this.mute();
    }
  };

  VideoPlayer.prototype._onControlsSeekStart = function() {
    this.tempState = this.state;
    return this.pause();
  };

  VideoPlayer.prototype._onControlsSeekEnd = function(e, perc) {
    this.seek(perc * this.getDuration());
    if (this.tempState === VideoPlayer.playerState.PLAYING) {
      return this.play();
    }
  };

  VideoPlayer.prototype._onPlayerCanPlay = function() {
    this.canPlay = true;
    if (this.queueSeek !== null) {
      this.seek(this.queueSeek);
      this.queueSeek = null;
    }
    this.controls.setTotalTime(this.getDuration());
    return $(this).trigger(VideoPlayer.CANPLAY);
  };

  VideoPlayer.prototype._onPlayerProgress = function() {
    return $(this).trigger(VideoPlayer.PROGRESS);
  };

  VideoPlayer.prototype._onPlayerTimeUpdate = function() {
    $(this).trigger(VideoPlayer.TIMEUPDATE);
    if (this.state === VideoPlayer.playerState.PLAYING) {
      return this.controls.onUpdate(this.getCurrentTime() / this.getDuration());
    }

    /*clearTimeout(@bufferingInterval)
    		@bufferingInterval = setTimeout () =>
    			if @state != VideoPlayer.playerState.PAUSED
    				@state = VideoPlayer.playerState.BUFFERING
    				@isBuffering = true
    				$(@).trigger(VideoPlayer.BUFFERING)
    		, 500
     */
  };

  VideoPlayer.prototype._onPlayerWaiting = function() {
    return $(this).trigger(VideoPlayer.WAITING);
  };

  VideoPlayer.prototype._onPlayerPlaying = function() {
    this.isBuffering = false;
    return $(this).trigger(VideoPlayer.PLAYING);
  };

  VideoPlayer.prototype._onPlayerEnded = function() {
    this.stop();
    return $(this).trigger(VideoPlayer.ENDED);
  };

  VideoPlayer.prototype._onPlayerPaused = function() {
    return $(this).trigger(VideoPlayer.PAUSED);
  };

  return VideoPlayer;

})();

VideoPlayer_Controls = (function() {
  function VideoPlayer_Controls(options) {
    this.setTotalTime = __bind(this.setTotalTime, this);
    this.show = __bind(this.show, this);
    this.hide = __bind(this.hide, this);
    this.onUnMute = __bind(this.onUnMute, this);
    this.onMute = __bind(this.onMute, this);
    this.onSeek = __bind(this.onSeek, this);
    this.onStop = __bind(this.onStop, this);
    this.onUpdate = __bind(this.onUpdate, this);
    this.onBuffering = __bind(this.onBuffering, this);
    this.onPause = __bind(this.onPause, this);
    this.onPlay = __bind(this.onPlay, this);
    this._sortTime = __bind(this._sortTime, this);
    this._changeTime = __bind(this._changeTime, this);
    this._onMouseMove = __bind(this._onMouseMove, this);
    this._onProgressBarEnd = __bind(this._onProgressBarEnd, this);
    this._onProgressBarChange = __bind(this._onProgressBarChange, this);
    this._onProgressBarStart = __bind(this._onProgressBarStart, this);
    this._onVolumeButtonClick = __bind(this._onVolumeButtonClick, this);
    this._onFullscreenButtonClick = __bind(this._onFullscreenButtonClick, this);
    this._onStopButtonClick = __bind(this._onStopButtonClick, this);
    this._onPauseButtonClick = __bind(this._onPauseButtonClick, this);
    this._onPlayButtonClick = __bind(this._onPlayButtonClick, this);
    this._onShieldClick = __bind(this._onShieldClick, this);
    this.container = options.container, this.poster = options.poster, this.autoplay = options.autoplay, this.hideControlsAllowed = options.hideControlsAllowed;
    this._areControlsHidden = false;
    this._initInterface();
    this._initEvents();
  }

  VideoPlayer_Controls.TEMPLATE = "";

  VideoPlayer_Controls.SHIELD_CLICK = 'shield_click';

  VideoPlayer_Controls.PLAY = 'play';

  VideoPlayer_Controls.PAUSE = 'pause';

  VideoPlayer_Controls.STOP = 'stop';

  VideoPlayer_Controls.FULLSCREEN = 'fullscreen';

  VideoPlayer_Controls.VOLUME = 'volume';

  VideoPlayer_Controls.SEEK_START = 'seek_start';

  VideoPlayer_Controls.SEEK_END = 'seek_end';

  VideoPlayer_Controls.prototype._initInterface = function() {
    this.controls = $(VideoPlayer_Controls.TEMPLATE);
    this.container.append(this.controls);
    if (this.autoplay !== true && this.poster) {
      this.poster = $("<img src=\"" + this.poster + "\" class=\"poster\" />");
      this.container.append(this.poster);
    }
    this.shield = this.container.find('.shield');
    this.playButton = this.container.find('.play-button');
    this.pauseButton = this.container.find('.pause-button');
    this.stopButton = this.container.find('.stop-button');
    this.fullscreenButton = this.container.find('.fullscreen-button');
    this.volumeButton = this.container.find('.volume-button');
    this.timelineContainer = this.container.find('.timeline-container');
    this.timelineProgress = this.timelineContainer.children('.progress');
    this.timeContainer = this.container.find('.time-container');
    this.timeCurrent = this.timeContainer.find('.time-current');
    this.timeTotal = this.timeContainer.find('.time-total');
    return this.progressBar = new UI_Slider({
      container: this.timelineContainer
    });
  };

  VideoPlayer_Controls.prototype._initEvents = function() {
    this.shield.on(Event.CLICK, this._onShieldClick);
    this.playButton.on(Event.CLICK, this._onPlayButtonClick);
    this.pauseButton.on(Event.CLICK, this._onPauseButtonClick);
    this.stopButton.on(Event.CLICK, this._onStopButtonClick);
    this.fullscreenButton.on(Event.CLICK, this._onFullscreenButtonClick);
    this.volumeButton.on(Event.CLICK, this._onVolumeButtonClick);
    $(this.progressBar).on(UI_Slider.START, this._onProgressBarStart);
    $(this.progressBar).on(UI_Slider.CHANGE, this._onProgressBarChange);
    $(this.progressBar).on(UI_Slider.END, this._onProgressBarEnd);
    if (this.hideControlsAllowed) {
      return this.container.on(Event.MOUSEMOVE, this._onMouseMove);
    }
  };

  VideoPlayer_Controls.prototype._onShieldClick = function() {
    return $(this).trigger(VideoPlayer_Controls.SHIELD_CLICK);
  };

  VideoPlayer_Controls.prototype._onPlayButtonClick = function() {
    return $(this).trigger(VideoPlayer_Controls.PLAY);
  };

  VideoPlayer_Controls.prototype._onPauseButtonClick = function() {
    return $(this).trigger(VideoPlayer_Controls.PAUSE);
  };

  VideoPlayer_Controls.prototype._onStopButtonClick = function() {
    return $(this).trigger(VideoPlayer_Controls.STOP);
  };

  VideoPlayer_Controls.prototype._onFullscreenButtonClick = function() {
    return $(this).trigger(VideoPlayer_Controls.FULLSCREEN);
  };

  VideoPlayer_Controls.prototype._onVolumeButtonClick = function() {
    return $(this).trigger(VideoPlayer_Controls.VOLUME);
  };

  VideoPlayer_Controls.prototype._onProgressBarStart = function() {
    $(this).trigger(VideoPlayer_Controls.SEEK_START);
    return this.timelineProgress.css({
      'width': this.progressBar.perc * this.timelineContainer.width()
    });
  };

  VideoPlayer_Controls.prototype._onProgressBarChange = function() {
    return this.timelineProgress.css({
      'width': this.progressBar.perc * this.timelineContainer.width()
    });
  };

  VideoPlayer_Controls.prototype._onProgressBarEnd = function() {
    return $(this).trigger(VideoPlayer_Controls.SEEK_END, [this.progressBar.perc]);
  };

  VideoPlayer_Controls.prototype._onMouseMove = function() {
    this.show();
    clearTimeout(this._moveTimer);
    return this._moveTimer = setTimeout((function(_this) {
      return function() {
        return _this.hide();
      };
    })(this), this._hideControlsDelay);
  };

  VideoPlayer_Controls.prototype._changeTime = function(perc) {
    var newTime;
    newTime = this._sortTime(perc * this.duration);
    if (newTime !== this.timeText) {
      this.timeText = newTime;
      return this.timeCurrent.text(newTime);
    }
  };

  VideoPlayer_Controls.prototype._sortTime = function(time) {
    var m, s;
    m = ~~(time / 60);
    s = ~~(time - m * 60);
    return (m < 10 ? '0' + m : m) + ':' + (s < 10 ? '0' + s : s);
  };

  VideoPlayer_Controls.prototype.onPlay = function() {
    return this.container.addClass('playing').removeClass('paused stopped');
  };

  VideoPlayer_Controls.prototype.onPause = function() {
    return this.container.addClass('paused').removeClass('playing stopped');
  };

  VideoPlayer_Controls.prototype.onBuffering = function() {};

  VideoPlayer_Controls.prototype.onUpdate = function(perc) {
    this.timelineProgress.css({
      'width': perc * this.timelineContainer.width()
    });
    return this._changeTime(perc);
  };

  VideoPlayer_Controls.prototype.onStop = function() {
    this.container.addClass('stopped').removeClass('playing paused');
    return this.timelineProgress.css({
      'width': 0
    });
  };

  VideoPlayer_Controls.prototype.onSeek = function(perc) {
    this.timelineProgress.css({
      'width': perc * this.timelineContainer.width()
    });
    return this._changeTime(perc);
  };

  VideoPlayer_Controls.prototype.onMute = function() {
    return this.container.addClass('muted');
  };

  VideoPlayer_Controls.prototype.onUnMute = function() {
    return this.container.removeClass('muted');
  };

  VideoPlayer_Controls.prototype.hide = function() {
    if (this._areControlsHidden === false) {
      this.controls.addClass('hidden');
      return this._areControlsHidden = true;
    }
  };

  VideoPlayer_Controls.prototype.show = function() {
    if (this._areControlsHidden === true) {
      this.controls.removeClass('hidden');
      return this._areControlsHidden = false;
    }
  };

  VideoPlayer_Controls.prototype.setTotalTime = function(duration) {
    this.duration = duration;
    return this.timeTotal.text(this._sortTime(duration));
  };

  return VideoPlayer_Controls;

})();

VideoPlayer_HTML = (function() {
  function VideoPlayer_HTML(options) {
    this.setSrc = __bind(this.setSrc, this);
    this.seek = __bind(this.seek, this);
    this.setVolume = __bind(this.setVolume, this);
    this.getSrc = __bind(this.getSrc, this);
    this.getState = __bind(this.getState, this);
    this.getDuration = __bind(this.getDuration, this);
    this.getCurrentTime = __bind(this.getCurrentTime, this);
    this.unmute = __bind(this.unmute, this);
    this.mute = __bind(this.mute, this);
    this.stop = __bind(this.stop, this);
    this.pause = __bind(this.pause, this);
    this.play = __bind(this.play, this);
    this._onPause = __bind(this._onPause, this);
    this._onEnded = __bind(this._onEnded, this);
    this._onPlaying = __bind(this._onPlaying, this);
    this._onWaiting = __bind(this._onWaiting, this);
    this._onTimeUpdate = __bind(this._onTimeUpdate, this);
    this._onProgress = __bind(this._onProgress, this);
    this._onLoad = __bind(this._onLoad, this);
    this._onCanPlay = __bind(this._onCanPlay, this);
    this._initEvents = __bind(this._initEvents, this);
    this.container = options.container, this.src = options.src;
    this.html = "<div class=\"video-container\">\n	<video>\n	</video>\n</div>";
    this.videoContainer = $(this.html);
    this.$video = this.videoContainer.children('video');
    this.video = this.$video[0];
    this.volume = 1;
    this.setSrc(this.src);
    this.container.html(this.videoContainer);
    this._initEvents();
  }

  VideoPlayer_HTML.prototype._initEvents = function() {
    return this.$video.on('load', this._onload).on('canplay', this._onCanPlay).on('progress', this._onProgress).on('timeupdate', this._onTimeUpdate).on('waiting', this._onWaiting).on('playing', this._onPlaying).on('ended', this._onEnded).on('pause', this._onPause);
  };

  VideoPlayer_HTML.prototype._onCanPlay = function() {
    return $(this).trigger(VideoPlayer.CANPLAY);
  };

  VideoPlayer_HTML.prototype._onLoad = function() {};

  VideoPlayer_HTML.prototype._onProgress = function() {
    return $(this).trigger(VideoPlayer.PROGRESS);
  };

  VideoPlayer_HTML.prototype._onTimeUpdate = function() {
    return $(this).trigger(VideoPlayer.TIMEUPDATE);
  };

  VideoPlayer_HTML.prototype._onWaiting = function() {
    return $(this).trigger(VideoPlayer.WAITING);
  };

  VideoPlayer_HTML.prototype._onPlaying = function() {
    return $(this).trigger(VideoPlayer.PLAYING);
  };

  VideoPlayer_HTML.prototype._onEnded = function() {
    return $(this).trigger(VideoPlayer.ENDED);
  };

  VideoPlayer_HTML.prototype._onPause = function() {
    return $(this).trigger(VideoPlayer.PAUSED);
  };

  VideoPlayer_HTML.prototype.play = function() {
    return this.video.play();
  };

  VideoPlayer_HTML.prototype.pause = function() {
    return this.video.pause();
  };

  VideoPlayer_HTML.prototype.stop = function() {
    this.video.currentTime = 0;
    return this.video.pause();
  };

  VideoPlayer_HTML.prototype.mute = function() {
    return this.video.volume = 0;
  };

  VideoPlayer_HTML.prototype.unmute = function() {
    return this.video.volume = this.volume;
  };

  VideoPlayer_HTML.prototype.getCurrentTime = function() {
    return this.video.currentTime;
  };

  VideoPlayer_HTML.prototype.getDuration = function() {
    return this.video.duration;
  };

  VideoPlayer_HTML.prototype.getState = function() {
    return null;
  };

  VideoPlayer_HTML.prototype.getSrc = function() {
    return this.video.src;
  };

  VideoPlayer_HTML.prototype.setVolume = function(val) {
    this.volume = val;
    return this.video.volume = val;
  };

  VideoPlayer_HTML.prototype.seek = function(val) {
    return this.video.currentTime = val;
  };

  VideoPlayer_HTML.prototype.setSrc = function(src) {
    var sources;
    if (src) {
      this.srcNoExt = src.substr(0, src.lastIndexOf("."));
    }
    sources = "<source src=\"" + this.srcNoExt + ".webm\" type=\"video/webm\" />\n<source src=\"" + this.srcNoExt + ".mp4\" type=\"video/mp4\" />\n<source src=\"" + this.srcNoExt + ".ogv\" type=\"video/ogg\" />";
    this.$video.html(sources);
    return this.video.load();
  };

  return VideoPlayer_HTML;

})();

VideoPlayer_Templates = (function() {
  function VideoPlayer_Templates() {}

  VideoPlayer_Templates.PLAY_BUTTON = "<span class=\"play-button\"><i></i></span>";

  VideoPlayer_Templates.PAUSE_BUTTON = "<span class=\"pause-button\"><i></i></span>";

  VideoPlayer_Templates.STOP_BUTTON = "<span class=\"stop-button\"></span>";

  VideoPlayer_Templates.FULLSCREEN_BUTTON = "<span class=\"fullscreen-button\"></span>";

  VideoPlayer_Templates.VOLUME_BUTTON = "<span class=\"volume-button\"></span>";

  VideoPlayer_Templates.PROGRESS = "<div class=\"progress-container\">\n	<div class=\"background\"></div>\n	<div class=\"buffering\"></div>\n	<div class=\"progress\"></div>\n</div>";

  return VideoPlayer_Templates;

})();

SocialSharing = (function() {
  function SocialSharing() {
    this._onLinkClick = __bind(this._onLinkClick, this);
    this._initEvents = __bind(this._initEvents, this);
    this.links = $('.social-link');
    this._initEvents();
  }

  SocialSharing.prototype._initEvents = function() {
    return $(document).on(Event.CLICK, '.social-link', this._onLinkClick);
  };

  SocialSharing.prototype._onLinkClick = function(e) {
    var height, leftPosition, link, options, topPosition, width, windowFeatures;
    e.preventDefault();
    link = $(e.currentTarget).attr('href');
    width = 800;
    height = 500;
    leftPosition = (window.screen.width / 2) - ((width / 2) + 10);
    topPosition = (window.screen.height / 2) - ((height / 2) + 50);
    options = windowFeatures = "status=no,height=" + height + ",width=" + width + ",resizable=yes,left=" + leftPosition + ",top=" + topPosition + ",screenX=" + leftPosition + ",screenY=" + topPosition + ",toolbar=no,menubar=no,scrollbars=no,location=no,directories=no";
    return window.open(link, 'Withings Activité', options);
  };

  return SocialSharing;

})();

App = (function() {
  function App() {
    this.update = __bind(this.update, this);
    this._onHomeHidden = __bind(this._onHomeHidden, this);
    this._onWindowBlur = __bind(this._onWindowBlur, this);
    this._onWindowFocus = __bind(this._onWindowFocus, this);
    this._onResize = __bind(this._onResize, this);
    this._onKeyDown = __bind(this._onKeyDown, this);
    this._initLang = __bind(this._initLang, this);
    this._initEvents = __bind(this._initEvents, this);
    this._initContent = __bind(this._initContent, this);
    console.log('%c# --------------------o Running Desktop', 'background: #42e34d; color: #F0F0F0;');
    W.init();
    this.body = $('.body');
    this._initLang();
    this._initContent();
    this._initEvents();
    this._onResize();
  }

  App.prototype._initContent = function() {
    W.basil = new window.Basil({
      namespace: 'uniqlocolors'
    });
    W.time = {
      old: +new Date()
    };
    this.home = new Home();
    $('form').each((function(_this) {
      return function(key, form) {
        return new Form({
          container: $(form)
        });
      };
    })(this));
    return this._isWindowFocused = true;
  };

  App.prototype._initEvents = function() {
    W.window.on('resize', this._onResize).on('focus', this._onWindowFocus).on('blur', this._onWindowBlur);
    return $(this.home).on(Home.HIDDEN, this._onHomeHidden);
  };

  App.prototype._initLang = function() {
    var availablesLang, lang, product, trad;
    lang = (navigator.language || navigator.userLanguage).substr(0, 2);
    availablesLang = [];
    $.each(Trads, (function(_this) {
      return function(key, trad) {
        return availablesLang.push(key);
      };
    })(this));
    if (__indexOf.call(availablesLang, lang) < 0) {
      lang = 'en';
    }
    trad = Trads[lang];
    product = trad.products[currentWeek];
    this.hbSource = this.body.html();
    this.hbTemplate = Handlebars.compile(this.hbSource);
    W.lang = lang;
    this.body.html(this.hbTemplate({
      'trad': trad,
      'product': product
    }));
    return setTimeout((function(_this) {
      return function() {
        return _this.body.css('display', 'block');
      };
    })(this), 100);
  };

  App.prototype._onKeyDown = function(e) {};

  App.prototype._onResize = function() {
    W.sw = screen.width;
    W.sh = screen.height;
    W.ww = W.window.width();
    W.wh = W.window.height();
    if (W.sw > 600) {
      W.body.css({
        'height': W.wh,
        'width': W.ww
      });
    } else {
      W.body.css({
        'height': 'auto',
        'width': '100%'
      });
    }
    if (this.home) {
      this.home.resize();
    }
    if (this.game) {
      return this.game.resize();
    }
  };

  App.prototype._onWindowFocus = function() {
    return this._isWindowFocused = true;
  };

  App.prototype._onWindowBlur = function() {
    return this._isWindowFocused = false;
  };

  App.prototype._onHomeHidden = function() {
    this.home.container.remove();
    return this.game = new Game();
  };

  App.prototype.update = function() {
    W.time.now = +new Date();
    W.time.delta = (W.time.now - W.time.old) / 1000;
    W.time.old = W.time.now;
    if (this.game) {
      return this.game.update();
    }
  };

  return App;

})();

$(function() {
  var app, tick;
  app = new App();
  return (tick = function() {
    app.update();
    return window.requestAnimationFrame(tick);
  })();
});

Game = (function() {
  function Game() {
    this.update = __bind(this.update, this);
    this.render = __bind(this.render, this);
    this.levelUp = __bind(this.levelUp, this);
    this.resize = __bind(this.resize, this);
    this.launch = __bind(this.launch, this);
    this._onGameOverHidden = __bind(this._onGameOverHidden, this);
    this._onTutoHidden = __bind(this._onTutoHidden, this);
    this._onGridWrongAnswer = __bind(this._onGridWrongAnswer, this);
    this._onGridGoodAnswer = __bind(this._onGridGoodAnswer, this);
    this._onCountDownEnd = __bind(this._onCountDownEnd, this);
    this._onTryAgainClick = __bind(this._onTryAgainClick, this);
    this._onGameClick = __bind(this._onGameClick, this);
    this._updateVals = __bind(this._updateVals, this);
    this._stopGame = __bind(this._stopGame, this);
    this._playGame = __bind(this._playGame, this);
    this._pauseGame = __bind(this._pauseGame, this);
    this._initGame = __bind(this._initGame, this);
    this._loadPictures = __bind(this._loadPictures, this);
    this._initEvents = __bind(this._initEvents, this);
    this._initContent = __bind(this._initContent, this);
    this.container = $('.game');
    this._initContent();
    this._initEvents();
  }

  Game.prototype._initContent = function() {
    W.status = {
      level: -1,
      lives: Parameters.lives - 1,
      paused: true,
      stopped: false,
      loading: true,
      launched: false,
      initialized: true,
      ended: false,
      shared: W.basil.get('shared') || false,
      winner: false
    };
    this.gameParameters = Parameters;
    this._gameLaunched = false;
    this.canvas = this.container.find('canvas')[0];
    this.ctx = this.canvas.getContext('2d');
    this.screens = new Screens();
    this.snow = new Snow({
      ctx: this.ctx
    });
    this.countDown = new CountDown({
      ctx: this.ctx
    });
    W.grid = {
      padding: 75,
      gap: 20
    };
    this.grid = new Grid({
      ctx: this.ctx
    });
    this.livesVal = $('.lives span');
    this.levelVal = $('.level span');
    this.levelVal.siblings('sup').text('/' + Parameters.levels.length);
    this._loadPictures();
    return this.resize();
  };

  Game.prototype._initEvents = function() {
    this.container.on(Event.CLICK, this._onGameClick);
    $(this.countDown).on(CountDown.END, this._onCountDownEnd);
    $(this.grid).on(Grid.GOOD_ANSWER, this._onGridGoodAnswer).on(Grid.WRONG_ANSWER, this._onGridWrongAnswer);
    $('.button.try-again').on(Event.CLICK, this._onTryAgainClick);
    return $(this.screens).on(Screens.TUTO_HIDDEN, this._onTutoHidden).on(Screens.GAMEOVER_HIDDEN, this._onGameOverHidden);
  };

  Game.prototype._loadPictures = function() {
    var inc, perc;
    perc = 0;
    inc = 0;
    W.grid.picLength = 29;
    return $.each(Pics, (function(_this) {
      return function(key, pack) {
        return $.each(pack, function(key, subdiv) {
          return $.each(subdiv, function(key, pic) {
            pic.img = new Image();
            pic.img.onload = function() {
              perc = inc++ / W.grid.picLength;
              if (inc === W.grid.picLength) {
                return _this._initGame();
              }
            };
            return pic.img.src = mediasPath + pic.filename;
          });
        });
      };
    })(this));
  };

  Game.prototype._initGame = function() {
    this.resize();
    return $('.tuto').find('.start-button').css('display', 'block').siblings('.loading').remove();
  };

  Game.prototype._pauseGame = function() {
    W.body.removeClass('playing');
    W.status.paused = true;
    if (W.status.lives === 0) {
      this._stopGame();
    } else {
      $('.try-again').css('display', 'block');
      W.status.lives--;
    }
    this.snow.setColors([]);
    this.container.addClass('hidden');
    return this._updateVals();
  };

  Game.prototype._playGame = function() {
    W.body.addClass('playing');
    W.status.paused = false;
    W.status.stopped = false;
    $('.try-again').css('display', 'none');
    this.countDown.reset();
    this.grid.reset();
    return this.container.removeClass('hidden');
  };

  Game.prototype._stopGame = function() {
    W.body.removeClass('playing');
    W.status.stopped = true;
    this.snow.setColors(['#FFFFFF']);
    return this.container.addClass('hidden');
  };

  Game.prototype._updateVals = function() {
    this.livesVal.text(W.status.lives);
    return this.levelVal.text(W.status.level + 1);
  };

  Game.prototype._onGameClick = function(e) {
    if (W.status.paused === false && e.target.nodeName === 'CANVAS') {
      return this.grid.click(e);
    }
  };

  Game.prototype._onTryAgainClick = function() {
    this.snow.setColors(this.grid.getColors());
    return this._playGame();
  };

  Game.prototype._onCountDownEnd = function() {
    return this._onGridWrongAnswer();
  };

  Game.prototype._onGridGoodAnswer = function() {
    if (W.status.level < Parameters.levels.length - 1) {
      return this.levelUp();
    } else {
      this._stopGame();
      W.status.ended = true;
      W.status.winner = true;
      return this.screens.displayWin();
    }
  };

  Game.prototype._onGridWrongAnswer = function() {
    if (W.status.lives > 1) {
      this._pauseGame();
      this.screens.displayTryAgain();
    } else {
      this._stopGame();
      if (W.status.shared === false) {
        W.status.paused = true;
        this.screens.displayGameOver();
      } else {
        W.status.paused = false;
        this.screens.displayLoose();
      }
    }
    return this._updateVals();
  };

  Game.prototype._onTutoHidden = function() {
    return this.launch();
  };

  Game.prototype._onGameOverHidden = function() {
    W.status.lives = Parameters.lives;
    W.status.level = -1;
    this.launch();
    return this._updateVals();
  };

  Game.prototype.launch = function() {
    W.basil.set('played', true);
    W.status.launched = true;
    this._gameLaunched = true;
    this.levelUp();
    return this._playGame();
  };

  Game.prototype.resize = function() {
    W.grid.radius = (Math.min(W.ww, W.wh) - W.grid.padding * 2) * 0.5;
    W.grid.size = 2 * (Math.sin(Math.PI * 0.25) * W.grid.radius);
    W.grid.clockRadius = W.grid.radius + 20;
    W.grid.bottomSpace = 0;
    W.grid.gap = Math.max(5, W.grid.size * 0.05 / W.grid.lines);
    if (W.ww < 640) {
      W.grid.radius = 30;
      W.grid.size = W.ww - 40;
      W.grid.clockRadius = 40;
      this.container.css('height', W.grid.size + 200 + 20);
      this.canvas.width = W.ww;
      this.canvas.height = W.grid.size + 200;
    } else {
      this.container.css('height', 'auto');
      this.canvas.width = W.ww;
      this.canvas.height = W.wh;
    }
    if (W.ww > W.wh) {
      W.grid.top = W.grid.padding + W.grid.radius - W.grid.size * 0.5;
      W.grid.left = W.ww * 0.5 - W.grid.radius + (W.grid.radius - W.grid.size * 0.5);
    } else {
      W.grid.top = (W.wh - W.grid.padding - W.grid.radius) * 0.5;
      W.grid.left = W.ww * 0.5 - W.grid.radius + (W.grid.radius - W.grid.size * 0.5);
    }
    if (this._gameLaunched === true) {
      this.render(true);
    }
    return this.snow.resize();
  };

  Game.prototype.levelUp = function() {
    W.status.level++;
    W.grid.lines = ~~Math.sqrt(Parameters.levels[W.status.level].picsLength);
    this.resize();
    this.countDown.levelUp();
    this.grid.levelUp();
    this.snow.setColors(this.grid.getColors());
    this.snow.levelUp();
    return this._updateVals();
  };

  Game.prototype.render = function(resized) {
    this.ctx.clearRect(0, 0, W.ww, W.wh);
    if (W.status.initialized === true) {
      this.snow.render();
      if (W.status.ended !== true) {
        this.countDown.render(resized);
      }
    }
    if (W.status.launched === true && W.status.paused !== true && W.status.stopped !== true) {
      return this.grid.render(resized);
    }
  };

  Game.prototype.update = function() {
    return this.render();
  };

  return Game;

})();

Parameters = {
  time: 5,
  lives: 4,
  levels: [
    {
      difficulty: {
        colors: 2,
        subColors: 1,
        pics: 1
      },
      picsLength: 9,
      moving: false
    }, {
      difficulty: {
        colors: 3,
        subColors: 1,
        pics: 1
      },
      picsLength: 9,
      moving: false
    }, {
      difficulty: {
        colors: 4,
        subColors: 1,
        pics: 1
      },
      picsLength: 9,
      moving: false
    }, {
      difficulty: {
        colors: 2,
        subColors: 1,
        pics: 2
      },
      picsLength: 16,
      moving: false
    }, {
      difficulty: {
        colors: 2,
        subColors: 1,
        pics: 2
      },
      picsLength: 16,
      moving: false
    }, {
      difficulty: {
        colors: 2,
        subColors: 1,
        pics: 2
      },
      picsLength: 16,
      moving: false
    }, {
      difficulty: {
        colors: 2,
        subColors: 1,
        pics: 2
      },
      picsLength: 16,
      moving: false
    }, {
      difficulty: {
        colors: 2,
        subColors: 1,
        pics: 2
      },
      picsLength: 16,
      moving: false
    }, {
      difficulty: {
        colors: 1,
        subColors: 2,
        pics: 1
      },
      picsLength: 9,
      moving: true
    }, {
      difficulty: {
        colors: 2,
        subColors: 1,
        pics: 1
      },
      picsLength: 16,
      moving: true
    }, {
      difficulty: {
        colors: 1,
        subColors: 2,
        pics: 2
      },
      picsLength: 16,
      moving: true
    }, {
      difficulty: {
        colors: 2,
        subColors: 3,
        pics: 1
      },
      picsLength: 16,
      moving: true
    }, {
      difficulty: {
        colors: 1,
        subColors: 2,
        pics: 2
      },
      picsLength: 16,
      moving: true
    }, {
      difficulty: {
        colors: 2,
        subColors: 1,
        pics: 1
      },
      picsLength: 16,
      moving: true
    }, {
      difficulty: {
        colors: 2,
        subColors: 2,
        pics: 1
      },
      picsLength: 16,
      moving: true
    }
  ]
};

Pics = [
  [
    [
      {
        'filename': '07.jpg',
        'color': '#fcc729'
      }, {
        'filename': '23.jpg',
        'color': '#f1cf61'
      }, {
        'filename': '29.jpg',
        'color': '#ffd640'
      }, {
        'filename': '30.jpg',
        'color': '#ffd262'
      }
    ], [
      {
        'filename': '01.jpg',
        'color': '#f4a36e'
      }, {
        'filename': '13.jpg',
        'color': '#ed6442'
      }, {
        'filename': '26.jpg',
        'color': '#eb5836'
      }, {
        'filename': '34.jpg',
        'color': '#eb6444'
      }, {
        'filename': '36.jpg',
        'color': '#ef6c26'
      }
    ], [
      {
        'filename': '15.jpg',
        'color': '#e93d3d'
      }
    ]
  ], [
    [
      {
        'filename': '03.jpg',
        'color': '#fbdee2'
      }, {
        'filename': '08.jpg',
        'color': '#f6b1b4'
      }, {
        'filename': '41.jpg',
        'color': '#f3abaf'
      }
    ], [
      {
        'filename': '19.jpg',
        'color': '#e9758c'
      }, {
        'filename': '21.jpg',
        'color': '#ef829f'
      }, {
        'filename': '27.jpg',
        'color': '#ef7695'
      }, {
        'filename': '38.jpg',
        'color': '#f083a0'
      }
    ], [
      {
        'filename': '11.jpg',
        'color': '#d4647a'
      }, {
        'filename': '18.jpg',
        'color': '#c14f68'
      }, {
        'filename': '31.jpg',
        'color': '#c9586c'
      }
    ]
  ], [
    [
      {
        'filename': '02.jpg',
        'color': '#b3d9e2'
      }, {
        'filename': '25.jpg',
        'color': '#8dced0'
      }, {
        'filename': '42.jpg',
        'color': '#84cbe7'
      }
    ], [
      {
        'filename': '12.jpg',
        'color': '#48b2e4'
      }, {
        'filename': '35.jpg',
        'color': '#6ab6d8'
      }, {
        'filename': '37.jpg',
        'color': '#3db7e8'
      }
    ], [
      {
        'filename': '28.jpg',
        'color': '#6d8ac6'
      }, {
        'filename': '33.jpg',
        'color': '#5b7abd'
      }, {
        'filename': '40.jpg',
        'color': '#6f8fca'
      }
    ], [
      {
        'filename': '09.jpg',
        'color': '#314874'
      }
    ], [
      {
        'filename': '05.jpg',
        'color': '#a79ecb'
      }, {
        'filename': '45.jpg',
        'color': '#8c81b9'
      }
    ]
  ], [
    [
      {
        'filename': '24.jpg',
        'color': '#8fc683'
      }, {
        'filename': '39.jpg',
        'color': '#96c987'
      }, {
        'filename': '44.jpg',
        'color': '#bcd8a7'
      }
    ], [
      {
        'filename': '32.jpg',
        'color': '#d1ce8b'
      }, {
        'filename': '43.jpg',
        'color': '#caca82'
      }
    ], [
      {
        'filename': '10.jpg',
        'color': '#b2a86d'
      }, {
        'filename': '16.jpg',
        'color': '#796c40'
      }
    ]
  ], [
    [
      {
        'filename': '17.jpg',
        'color': '#f8f2e6'
      }, {
        'filename': '20.jpg',
        'color': '#f5eedc'
      }, {
        'filename': '22.jpg',
        'color': '#f1ecd9'
      }
    ], [
      {
        'filename': '06.jpg',
        'color': '#ebc9ad'
      }, {
        'filename': '14.jpg',
        'color': '#e1c2a5'
      }
    ], [
      {
        'filename': '04.jpg',
        'color': '#babbbd'
      }
    ]
  ]
];

mediasPath = '/dev/medias/products/';

Form = (function() {
  function Form(options) {
    this._onListClick = __bind(this._onListClick, this);
    this._onListLeave = __bind(this._onListLeave, this);
    this._onListEnter = __bind(this._onListEnter, this);
    this._onCheckboxClick = __bind(this._onCheckboxClick, this);
    this._onRadioClick = __bind(this._onRadioClick, this);
    this._onInputBlur = __bind(this._onInputBlur, this);
    this._onInputFieldFocus = __bind(this._onInputFieldFocus, this);
    this._onInputFocus = __bind(this._onInputFocus, this);
    this._onSubmit = __bind(this._onSubmit, this);
    this._displayError = __bind(this._displayError, this);
    this._initEvents = __bind(this._initEvents, this);
    this.container = options.container;
    this.submitButton = this.container.find('.submit');
    this._initEvents();
  }

  Form.prototype._initEvents = function() {
    this.container.on('submit', this._onSubmit);
    this.submitButton.on(Event.CLICK, this._onSubmit);
    this.container.find('.input-text').on(Event.CLICK, this._onInputFocus).find('input').on('focus', this._onInputFieldFocus).on('blur', this._onInputBlur);
    this.container.find('.radio').on(Event.CLICK, this._onRadioClick);
    this.container.find('.checkbox').on(Event.CLICK, this._onCheckboxClick);
    return this.container.find('.input-list').on('mouseenter', this._onListEnter).on('mouseleave', this._onListLeave).on(Event.CLICK, this._onListClick);
  };

  Form.prototype._displayError = function(error) {
    return this.container.find('.error.' + error).css('display', 'block');
  };

  Form.prototype._onSubmit = function(e) {
    var allFieldsField, request;
    e.preventDefault();
    allFieldsField = true;
    this.container.find('input').each((function(_this) {
      return function(key, input) {
        if (input.value === '') {
          return allFieldsField = false;
        }
      };
    })(this));
    if (allFieldsField === false) {
      this.container.find('.error').css('display', 'block');
      return !1;
    }
    console.log(locale);
    this.container.append('<input type="hidden" name="winner" id="winner" value="' + W.status.winner + '" />');
    this.container.append('<input type="hidden" name="locale" id="locale" value="' + locale + '-' + this.container.find('.input-list').find('span').text() + '" />');
    console.log(this.container.serialize());
    request = $.ajax({
      type: 'POST',
      url: '/api/users.json',
      dataType: 'text',
      data: this.container.serialize()
    });
    request.done((function(_this) {
      return function(response) {
        _this.submitButton.css('display', 'none');
        _this.submitButton.siblings('.confirm').css('display', 'block');
        return _this.container.find('.error').css('display', 'none');
      };
    })(this));
    return request.fail((function(_this) {
      return function(response) {
        return _this.container.find('.error').css('display', 'block');
      };
    })(this));
  };

  Form.prototype._onInputFocus = function(e) {
    var $this;
    $this = $(e.currentTarget);
    $this.find('input').focus();
    return $this.addClass('focus');
  };

  Form.prototype._onInputFieldFocus = function(e) {
    var $this;
    $this = $(e.currentTarget);
    return $this.parents('.input-text').addClass('focus');
  };

  Form.prototype._onInputBlur = function(e) {
    var $this;
    $this = $(e.currentTarget);
    if ($this.val() === '') {
      return $this.parents('.input-text').removeClass('focus');
    }
  };

  Form.prototype._onRadioClick = function(e) {
    var $this, klass;
    $this = $(e.currentTarget);
    klass = $this.attr('class');
    $this.addClass('active').siblings().removeClass('active');
    $this.find('input').prop('checked', true);
    return $this.siblings().find('input').prop('checked', false);
  };

  Form.prototype._onCheckboxClick = function(e) {
    var $this, klass;
    $this = $(e.currentTarget);
    klass = $this.attr('class');
    if (klass.match('active')) {
      $this.removeClass('active');
      return $this.find('input').prop('checked', false);
    } else {
      $this.addClass('active');
      return $this.find('input').prop('checked', true);
    }
  };

  Form.prototype._onListEnter = function(e) {
    var $this;
    $this = $(e.currentTarget);
    return $this.find('ul').css('display', 'block');
  };

  Form.prototype._onListLeave = function(e) {
    var $this;
    $this = $(e.currentTarget);
    return $this.find('ul').css('display', 'none');
  };

  Form.prototype._onListClick = function(e) {
    var $this, display, elm;
    $this = $(e.currentTarget);
    elm = $(e.target);
    display = $this.find('span');
    display.text(elm.text());
    return $this.find('ul').css('display', 'none');
  };

  return Form;

})();

Home = (function() {
  Home.HIDDEN = 'hidden';

  function Home() {
    this.resize = __bind(this.resize, this);
    this._onPlayButtonClick = __bind(this._onPlayButtonClick, this);
    this._initEvents = __bind(this._initEvents, this);
    this._initContent = __bind(this._initContent, this);
    this.container = $('.home');
    this.carousel = this.container.find('.carousel');
    this._initContent();
    this._initEvents();
  }

  Home.prototype._initContent = function() {
    var midnight, now, oneday;
    this.pics = [];
    this.loader = new Loader({
      container: this.carousel,
      custom: true,
      each: (function(_this) {
        return function(elm, img, key) {
          var pic;
          pic = $(img);
          pic.addClass('hidden');
          elm.replaceWith(pic);
          pic[0].offsetHeight;
          pic.removeClass('hidden');
          if (pic.hasClass('background')) {
            _this.pics.push(pic);
          }
          return _this.resize();
        };
      })(this)
    });
    this.carousel = new Carousel({
      container: this.carousel,
      delay: 4000,
      onUpdate: (function(_this) {
        return function(indexes) {
          return _this.container.removeClass('state-' + indexes.prev).addClass('state-' + indexes.current);
        };
      })(this)
    });
    this.container.addClass('state-0');
    now = new Date();
    midnight = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0);
    oneday = 1000 * 60 * 60 * 24;
    if (W.basil.get('ztime') === null) {
      W.basil.set('ztime', midnight.getTime() + oneday);
      W.basil.set('played', false);
      W.basil.set('shared', false);
    }
    if (W.basil.get('ztime') - now.getTime() < 0) {
      W.basil.set('played', false);
      W.basil.set('shared', false);
      W.basil.set('ztime', midnight.getTime() + oneday);
    }
    if (W.basil.get('played') === true) {
      this.container.addClass('already-played');
      return this.container.find('.play-button').remove();
    }
  };

  Home.prototype._initEvents = function() {
    return this.container.find('.play-button').on(Event.CLICK, this._onPlayButtonClick);
  };

  Home.prototype._onPlayButtonClick = function() {
    this.container.addClass('hidden');
    $('.uniqlo-logo.main').addClass('displayed');
    return setTimeout((function(_this) {
      return function() {
        return $(_this).trigger(Home.HIDDEN);
      };
    })(this), 1000);
  };

  Home.prototype.resize = function() {
    var dims, i, pic, _i, _ref, _results;
    if (W.ww < 640) {
      dims = Utils.getCoverSizeImage(600, 600, W.ww, 320);
    } else {
      dims = Utils.getCoverSizeImage(600, 600, W.ww * 0.5, W.wh);
    }
    _results = [];
    for (i = _i = 0, _ref = this.pics.length; 0 <= _ref ? _i < _ref : _i > _ref; i = 0 <= _ref ? ++_i : --_i) {
      pic = this.pics[i];
      _results.push(pic.css(dims));
    }
    return _results;
  };

  return Home;

})();

Screens = (function() {
  Screens.TUTO_HIDDEN = 'tuto_hidden';

  Screens.GAMEOVER_HIDDEN = 'gameover_hidden';

  function Screens() {
    this.displayLoose = __bind(this.displayLoose, this);
    this.displayGameOver = __bind(this.displayGameOver, this);
    this.displayWin = __bind(this.displayWin, this);
    this.displayTryAgain = __bind(this.displayTryAgain, this);
    this.displayTuto = __bind(this.displayTuto, this);
    this._onGetNotifiedButtonClick = __bind(this._onGetNotifiedButtonClick, this);
    this._onFacebookButtonClick = __bind(this._onFacebookButtonClick, this);
    this._onReplayButtonClick = __bind(this._onReplayButtonClick, this);
    this._onStartButtonClick = __bind(this._onStartButtonClick, this);
    this._pageShared = __bind(this._pageShared, this);
    this._initEvents = __bind(this._initEvents, this);
    this._initContent = __bind(this._initContent, this);
    this.container = $('.screen');
    this._initContent();
    this._initEvents();
  }

  Screens.prototype._initContent = function() {
    var img, pic;
    this.gameOverScreen = this.container.filter('.game-over');
    this.tutoScreen = this.container.filter('.tuto');
    this.tryAgainScreen = this.container.filter('.try-again');
    this.winScreen = this.container.filter('.win');
    this.looseScreen = this.container.filter('.loose');
    this.startButton = this.tutoScreen.find('.start-button');
    this.replayButton = this.gameOverScreen.find('.replay-button');
    this.getNotifiedButton = this.gameOverScreen.find('.get-notified');
    this.sharesLinks = this.gameOverScreen.find('li');
    twttr.ready((function(_this) {
      return function() {
        return twttr.events.bind('tweet', function() {
          return _this._pageShared('twitter');
        });
      };
    })(this));
    pic = this.winScreen.find('.img');
    img = new Image();
    img.onload = (function(_this) {
      return function() {
        return pic.replaceWith('<img src="' + img.src + '" />');
      };
    })(this);
    img.src = pic.attr('data-src');
    return this.displayTuto();
  };

  Screens.prototype._initEvents = function() {
    this.startButton.on(Event.CLICK, this._onStartButtonClick);
    this.replayButton.on(Event.CLICK, this._onReplayButtonClick);
    this.sharesLinks.filter('.facebook').on(Event.CLICK, this._onFacebookButtonClick);
    return this.getNotifiedButton.on(Event.CLICK, this._onGetNotifiedButtonClick);
  };

  Screens.prototype._pageShared = function(type) {
    return this.gameOverScreen.find('.replay-button').css('display', 'block').prev().css('display', 'none');
  };

  Screens.prototype._onStartButtonClick = function() {
    this.tutoScreen.remove();
    return $(this).trigger(Screens.TUTO_HIDDEN);
  };

  Screens.prototype._onReplayButtonClick = function() {
    W.status.shared = true;
    this.gameOverScreen.remove();
    return $(this).trigger(Screens.GAMEOVER_HIDDEN);
  };

  Screens.prototype._onFacebookButtonClick = function() {
    return FB.ui({
      method: 'share',
      href: 'http://uniqlocolor.eu'
    }, (function(_this) {
      return function(response) {
        console.log(response);
        if (response && !response.error_code) {
          return _this._pageShared('facebook');
        }
      };
    })(this));
  };

  Screens.prototype._onGetNotifiedButtonClick = function() {
    this.gameOverScreen.css('display', 'none');
    return this.displayLoose();
  };

  Screens.prototype.displayTuto = function() {
    return setTimeout((function(_this) {
      return function() {
        _this.tutoScreen.css('display', 'block');
        _this.tutoScreen[0].offsetHeight;
        return _this.tutoScreen.addClass('displayed');
      };
    })(this), 1000);
  };

  Screens.prototype.displayTryAgain = function() {
    this.tryAgainScreen.css('display', 'block');
    this.tryAgainScreen[0].offsetHeight;
    return this.tryAgainScreen.addClass('displayed');
  };

  Screens.prototype.displayWin = function() {
    this.winScreen.css('display', 'block');
    this.winScreen[0].offsetHeight;
    return this.winScreen.addClass('displayed');
  };

  Screens.prototype.displayGameOver = function() {
    this.gameOverScreen.css('display', 'block');
    this.gameOverScreen[0].offsetHeight;
    return this.gameOverScreen.addClass('displayed');
  };

  Screens.prototype.displayLoose = function() {
    this.looseScreen.css('display', 'block');
    this.looseScreen[0].offsetHeight;
    return this.looseScreen.addClass('displayed');
  };

  return Screens;

})();

Tuto = (function() {
  Tuto.HIDDEN = 'hidden';

  function Tuto() {
    this._onStartButtonClick = __bind(this._onStartButtonClick, this);
    this._display = __bind(this._display, this);
    this._initEvents = __bind(this._initEvents, this);
    this.container = $('.tuto');
    this.startButton = this.container.find('.start-button');
    this._display();
    this._initEvents();
  }

  Tuto.prototype._initEvents = function() {
    return this.startButton.on(Event.CLICK, this._onStartButtonClick);
  };

  Tuto.prototype._display = function() {};

  Tuto.prototype._onStartButtonClick = function() {
    this.container.remove();
    return $(this).trigger(Tuto.HIDDEN);
  };

  return Tuto;

})();

CountDown = (function() {
  CountDown.END = 'END';

  function CountDown(options) {
    this.reset = __bind(this.reset, this);
    this.render = __bind(this.render, this);
    this.levelUp = __bind(this.levelUp, this);
    this._drawClock = __bind(this._drawClock, this);
    this._drawProgressCircle = __bind(this._drawProgressCircle, this);
    this._initContent = __bind(this._initContent, this);
    this.ctx = options.ctx;
    this.countDownInterval = void 0;
    this.arcZero = -Math.PI * 0.5;
    this.arcFull = Math.PI * 2;
    this.currentTimeDeg = this.arcZero;
    this.red = '#FF0000';
    this.tweens = {
      clockPerc: 0,
      dash: []
    };
    this._timeOut = false;
    this._progressPerc = 0;
    this._initContent();
  }

  CountDown.prototype._initContent = function() {
    var i, _i, _results;
    TweenLite.to(this.tweens, 2, {
      clockPerc: 1,
      delay: 0,
      ease: Quint.easeOut,
      delay: 0.5
    });
    _results = [];
    for (i = _i = 0; _i < 60; i = ++_i) {
      this.tweens.dash.push({
        perc: 0
      });
      _results.push(TweenLite.to(this.tweens.dash[i], 2, {
        perc: 1,
        delay: 0 + 1 * i / 60 + 1,
        ease: Quint.easeOut
      }));
    }
    return _results;
  };

  CountDown.prototype._drawProgressCircle = function() {
    var pos, shift, speed, top;
    if (W.ww < 640) {
      top = 100;
      shift = 10;
    } else {
      top = W.wh * 0.5;
      shift = 20;
    }
    if (this._timeOut === false && W.status.paused !== true && W.status.stopped !== true) {
      speed = Math.PI * 2 / Parameters.time;
      this.currentTimeDeg += speed * W.time.delta;
      this._progressPerc = (this.currentTimeDeg + Math.PI * 0.5) / (Math.PI * 2);
      this.ctx.beginPath();
      this.ctx.fillStyle = this.red;
      this.ctx.globalAlpha = 0.2;
      this.ctx.arc(W.ww * 0.5, top, W.grid.radius + shift, this.arcZero, this.currentTimeDeg, false);
      this.ctx.lineTo(W.ww * 0.5, top);
      this.ctx.fill();
      this.ctx.globalAlpha = 1;
    }
    if (W.ww > 640) {
      this.ctx.lineWidth = 2;
      pos = this.arcZero + (W.status.level / Parameters.levels.length) * Math.PI * 2;
      this.ctx.beginPath();
      if (pos < this.arcZero + Math.PI * (1 - W.grid.bottomSpace)) {
        this.ctx.arc(W.ww * 0.5, top, W.grid.radius + 40, this.arcZero, pos, false);
      } else {
        this.ctx.arc(W.ww * 0.5, top, W.grid.radius + 40, this.arcZero, this.arcZero + Math.PI * (1 - W.grid.bottomSpace), false);
      }
      this.ctx.stroke();
      this.ctx.beginPath();
      if (pos > this.arcZero + Math.PI * (1 + W.grid.bottomSpace)) {
        this.ctx.arc(W.ww * 0.5, top, W.grid.radius + 40, this.arcZero + Math.PI * (1 + W.grid.bottomSpace), pos, false);
      } else if (pos === Math.PI * 2) {
        this.ctx.arc(W.ww * 0.5, top, W.grid.radius + 40, this.arcZero + Math.PI * (1 + W.grid.bottomSpace), this.arcZero + Math.PI * 2, false);
      }
      return this.ctx.stroke();
    }
  };

  CountDown.prototype._drawClock = function() {
    var dx, dy, i, length, ox, oy, perc, percProg, radius, rp, top, _i, _results;
    radius = W.grid.clockRadius;
    if (!(W.status.paused === true && W.ww < 640)) {
      if (W.ww < 640) {
        top = 100;
      } else {
        top = W.wh * 0.5;
      }
      this.ctx.lineWidth = 6;
      this.ctx.strokeStyle = this.red;
      if (this.tweens.clockPerc === 1) {
        this.ctx.beginPath();
        this.ctx.arc(W.ww * 0.5, W.wh * 0.5, radius, this.arcZero, this.arcZero + Math.PI * 2, true);
        this.ctx.fillStyle = 'rgba(230, 230, 230, 0.8)';
        this.ctx.fill();
      }
      this.ctx.beginPath();
      this.ctx.arc(W.ww * 0.5, top, radius, this.arcZero, this.arcZero + Math.PI * (1 - W.grid.bottomSpace) * this.tweens.clockPerc, false);
      this.ctx.stroke();
      this.ctx.beginPath();
      this.ctx.arc(W.ww * 0.5, top, radius, this.arcZero + Math.PI * 2, this.arcZero + Math.PI * (2 - (1 - W.grid.bottomSpace) * this.tweens.clockPerc), true);
      this.ctx.stroke();
      if (W.ww > 640) {
        _results = [];
        for (i = _i = 0; _i < 120; i = ++_i) {
          this.ctx.beginPath();
          perc = i / 120;
          rp = this.arcZero + Math.PI * 2 * perc;
          ox = W.ww * 0.5 + (radius + 3) * Math.cos(rp);
          oy = W.wh * 0.5 + (radius + 3) * Math.sin(rp);
          if (rp < this.arcZero + Math.PI * (1 - W.grid.bottomSpace) || rp > this.arcZero + Math.PI * (1 + W.grid.bottomSpace)) {
            if (i % 30 === 0) {
              this.ctx.lineWidth = 5;
              length = 15;
            } else if (i % 10 === 0) {
              this.ctx.lineWidth = 3;
              length = 8;
            } else {
              this.ctx.lineWidth = 1;
              length = 5;
            }
            if (i < 60) {
              percProg = this.tweens.dash[i].perc;
            } else {
              percProg = this.tweens.dash[60 - (i - 60)].perc;
            }
            dx = ox + (Math.cos(-Math.PI * 0.5 + Math.PI * 2 * perc) * length) * percProg;
            dy = oy + (Math.sin(-Math.PI * 0.5 + Math.PI * 2 * perc) * length) * percProg;
            this.ctx.moveTo(ox, oy);
            this.ctx.lineTo(dx, dy);
            _results.push(this.ctx.stroke());
          } else {
            _results.push(void 0);
          }
        }
        return _results;
      }
    }
  };

  CountDown.prototype.levelUp = function() {
    return this.currentTimeDeg = this.arcZero;
  };

  CountDown.prototype.render = function(resized) {
    this.ctx.lineCap = 'round';
    this._drawClock();
    if (W.status.launched) {
      this._drawProgressCircle();
    }
    if (this._progressPerc > 1 && this._timeOut !== true) {
      this._timeOut = true;
      return $(this).trigger(CountDown.END);
    }
  };

  CountDown.prototype.reset = function() {
    this._timeOut = false;
    return this.currentTimeDeg = this.arcZero;
  };

  return CountDown;

})();

Grid = (function() {
  Grid.GOOD_ANSWER = 'good_answer';

  Grid.WRONG_ANSWER = 'wrong_answer';

  function Grid(options) {
    this.render = __bind(this.render, this);
    this.levelUp = __bind(this.levelUp, this);
    this.getColors = __bind(this.getColors, this);
    this.click = __bind(this.click, this);
    this.reset = __bind(this.reset, this);
    this._setRandomPics = __bind(this._setRandomPics, this);
    this._drawPictures = __bind(this._drawPictures, this);
    this._picsLoaded = __bind(this._picsLoaded, this);
    this._initEvents = __bind(this._initEvents, this);
    this._initContent = __bind(this._initContent, this);
    this.ctx = options.ctx;
    this.randomPics = [];
    this._initContent();
    this.singleton = this;
    this.scale = 1;
  }

  Grid.prototype._initContent = function() {};

  Grid.prototype._initEvents = function() {};

  Grid.prototype._picsLoaded = function() {
    return this.render();
  };

  Grid.prototype._drawPictures = function() {
    var i, speed, top, _i, _ref, _results;
    this.picSize = (W.grid.size - (W.grid.lines - 1) * W.grid.gap) / W.grid.lines;
    if (W.ww < 640) {
      top = 200;
    } else {
      top = W.grid.top;
    }
    if (W.status.paused === false && Parameters.levels[W.status.level].moving === true) {
      speed = 1 / Parameters.time;
      this.scale -= speed * W.time.delta;
    }
    _results = [];
    for (i = _i = 0, _ref = this.randomPics.length; 0 <= _ref ? _i < _ref : _i > _ref; i = 0 <= _ref ? ++_i : --_i) {
      this.randomPics[i].x = W.grid.left + (this.picSize + W.grid.gap) * (i % W.grid.lines);
      this.randomPics[i].y = top + (this.picSize + W.grid.gap) * ~~(i / W.grid.lines);
      this.ctx.save();
      this.ctx.translate(this.randomPics[i].x, this.randomPics[i].y);
      this.ctx.translate(this.picSize * 0.5, this.picSize * 0.5);
      this.ctx.scale(this.scale, this.scale);
      this.ctx.drawImage(this.randomPics[i].img, -this.picSize * 0.5, -this.picSize * 0.5, this.picSize, this.picSize);
      _results.push(this.ctx.restore());
    }
    return _results;
  };

  Grid.prototype._setRandomPics = function() {
    var ar, diff, i, j, keys, levelParams, neoKey, pic, pics, randomId, randomKey, randomPics, selectedColors, selectedPics, selectedSubColors, toPick, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _ref, _ref1, _ref10, _ref11, _ref2, _ref3, _ref4, _ref5, _ref6, _ref7, _ref8, _ref9, _results, _results1, _results2, _results3, _s, _t;
    levelParams = Parameters.levels[W.status.level];
    diff = levelParams.difficulty;
    pics = Pics.slice(0);
    selectedColors = [];
    selectedSubColors = [];
    selectedPics = [];
    randomPics = [];
    ar = pics;
    keys = (function() {
      _results = [];
      for (var _i = 0, _ref = ar.length; 0 <= _ref ? _i < _ref : _i > _ref; 0 <= _ref ? _i++ : _i--){ _results.push(_i); }
      return _results;
    }).apply(this);
    for (i = _j = 0, _ref1 = diff.colors; 0 <= _ref1 ? _j < _ref1 : _j > _ref1; i = 0 <= _ref1 ? ++_j : --_j) {
      randomKey = Math.random() * keys.length |  0;
      randomId = keys[randomKey];
      keys.splice(randomKey, 1);
      if (ar[randomId]) {
        selectedColors.push(ar[randomId]);
      }
    }
    for (i = _k = 0, _ref2 = selectedColors.length; 0 <= _ref2 ? _k < _ref2 : _k > _ref2; i = 0 <= _ref2 ? ++_k : --_k) {
      ar = selectedColors[i];
      keys = (function() {
        _results1 = [];
        for (var _l = 0, _ref3 = ar.length; 0 <= _ref3 ? _l < _ref3 : _l > _ref3; 0 <= _ref3 ? _l++ : _l--){ _results1.push(_l); }
        return _results1;
      }).apply(this);
      for (j = _m = 0, _ref4 = diff.subColors; 0 <= _ref4 ? _m < _ref4 : _m > _ref4; j = 0 <= _ref4 ? ++_m : --_m) {
        randomKey = Math.random() * keys.length |  0;
        randomId = keys[randomKey];
        keys.splice(randomKey, 1);
        if (ar[randomId]) {
          selectedSubColors.push(ar[randomId]);
        }
      }
    }
    for (i = _n = 0, _ref5 = selectedSubColors.length; 0 <= _ref5 ? _n < _ref5 : _n > _ref5; i = 0 <= _ref5 ? ++_n : --_n) {
      ar = selectedSubColors[i];
      keys = (function() {
        _results2 = [];
        for (var _o = 0, _ref6 = ar.length; 0 <= _ref6 ? _o < _ref6 : _o > _ref6; 0 <= _ref6 ? _o++ : _o--){ _results2.push(_o); }
        return _results2;
      }).apply(this);
      for (j = _p = 0, _ref7 = diff.pics; 0 <= _ref7 ? _p < _ref7 : _p > _ref7; j = 0 <= _ref7 ? ++_p : --_p) {
        randomKey = Math.random() * keys.length |  0;
        randomId = keys[randomKey];
        keys.splice(randomKey, 1);
        if (ar[randomId]) {
          selectedPics.push(ar[randomId]);
        }
      }
    }
    neoKey = Math.random() * selectedPics.length |  0;
    selectedPics[neoKey].neo = true;
    randomPics.push(selectedPics[neoKey]);
    selectedPics.splice(neoKey, 1);
    for (i = _q = 0, _ref8 = selectedPics.length; 0 <= _ref8 ? _q < _ref8 : _q > _ref8; i = 0 <= _ref8 ? ++_q : --_q) {
      toPick = levelParams.picsLength / selectedPics.length |  0;
      if (i === selectedPics.length - 1) {
        toPick = levelParams.picsLength - randomPics.length;
      }
      for (j = _r = 0; 0 <= toPick ? _r < toPick : _r > toPick; j = 0 <= toPick ? ++_r : --_r) {
        randomPics.push(selectedPics[i]);
      }
    }
    for (i = _s = _ref9 = randomPics.length - 1; _ref9 <= 1 ? _s <= 1 : _s >= 1; i = _ref9 <= 1 ? ++_s : --_s) {
      j = Math.floor(Math.random() * (i + 1));
      _ref10 = [randomPics[j], randomPics[i]], randomPics[i] = _ref10[0], randomPics[j] = _ref10[1];
    }
    this.randomPics = [];
    _results3 = [];
    for (i = _t = 0, _ref11 = randomPics.length; 0 <= _ref11 ? _t < _ref11 : _t > _ref11; i = 0 <= _ref11 ? ++_t : --_t) {
      pic = {};
      pic.filename = randomPics[i].filename;
      pic.img = randomPics[i].img;
      pic.color = randomPics[i].color;
      pic.neo = randomPics[i].neo;
      _results3.push(this.randomPics.push(pic));
    }
    return _results3;
  };

  Grid.prototype.reset = function() {
    return this.scale = 1;
  };

  Grid.prototype.click = function(e) {
    var i, pic, _i, _ref, _ref1, _ref2;
    for (i = _i = 0, _ref = this.randomPics.length; 0 <= _ref ? _i < _ref : _i > _ref; i = 0 <= _ref ? ++_i : --_i) {
      pic = this.randomPics[i];
      if ((pic.x < (_ref1 = e.pageX) && _ref1 < pic.x + this.picSize) && (pic.y < (_ref2 = e.pageY - $(document).scrollTop()) && _ref2 < pic.y + this.picSize)) {
        if (pic.neo === true) {
          $(this).trigger(Grid.GOOD_ANSWER);
        } else {
          $(this).trigger(Grid.WRONG_ANSWER);
          return;
        }
      }
    }
  };

  Grid.prototype.getColors = function() {
    var color, colors, i, _i, _ref;
    colors = [];
    for (i = _i = 0, _ref = this.randomPics.length; 0 <= _ref ? _i < _ref : _i > _ref; i = 0 <= _ref ? ++_i : --_i) {
      color = this.randomPics[i].color;
      if (__indexOf.call(colors, color) < 0) {
        colors.push(color);
      }
    }
    return colors;
  };

  Grid.prototype.levelUp = function() {
    this.scale = 1;
    return this._setRandomPics();
  };

  Grid.prototype.render = function(resized) {
    return this._drawPictures();
  };

  return Grid;

})();

Snow = (function() {
  function Snow(options) {
    this.render = __bind(this.render, this);
    this.resize = __bind(this.resize, this);
    this.levelUp = __bind(this.levelUp, this);
    this.setColors = __bind(this.setColors, this);
    this._updateFlakeColor = __bind(this._updateFlakeColor, this);
    this._unleashFlakes = __bind(this._unleashFlakes, this);
    this._initContent = __bind(this._initContent, this);
    this.ctx = options.ctx;
    this.timeFlakeUnleashing = 0;
    this.flakeCount = 0;
    this.rightWind = 0;
    this.rightWindTarget = 0;
    this.colors = [];
    this._initContent();
    this.tween = null;
  }

  Snow.prototype._initContent = function() {
    return this.flakes = [];
  };

  Snow.prototype._unleashFlakes = function() {
    var color, percX;
    if (this.flakeCount < this.timeFlakeUnleashing) {
      this.flakeCount++;
      color = this.colors[Math.random() * this.colors.length | 0] || '#FFFFFF';
      percX = Math.random();
      return this.flakes.push({
        perc: percX,
        x: percX * W.ww |  0,
        y: -10,
        radius: 3 + Math.random() * 7 |  0,
        prevColor: Utils.hexToRgb(color),
        currentColor: Utils.hexToRgb(color),
        color: color
      });
    }
  };

  Snow.prototype._updateFlakeColor = function(perc) {
    var b, flake, g, i, r, _i, _ref, _results;
    _results = [];
    for (i = _i = 0, _ref = this.flakes.length; 0 <= _ref ? _i < _ref : _i > _ref; i = 0 <= _ref ? ++_i : --_i) {
      flake = this.flakes[i];
      r = flake.currentColor.r * perc + flake.prevColor.r * (1 - perc) |  0;
      g = flake.currentColor.g * perc + flake.prevColor.g * (1 - perc) |  0;
      b = flake.currentColor.b * perc + flake.prevColor.b * (1 - perc) |  0;
      _results.push(flake.color = 'rgb(' + r + ',' + g + ',' + b + ')');
    }
    return _results;
  };

  Snow.prototype.setColors = function(colors) {
    var color, i, _i, _ref;
    if (colors && colors.length === 0) {
      colors = ['#FFFFFF'];
    }
    this.colors = colors;
    this.rightWind = 0;
    this.rightWindTarget = 0;
    for (i = _i = 0, _ref = this.flakes.length; 0 <= _ref ? _i < _ref : _i > _ref; i = 0 <= _ref ? ++_i : --_i) {
      this.flakes[i].prevColor = this.flakes[i].currentColor;
      this.flakes[i].currentColor = Utils.hexToRgb(this.colors[Math.random() * this.colors.length | 0]);
    }
    color = {
      perc: 0
    };
    if (this.tween) {
      this.tween.kill();
    }
    return this.tween = TweenLite.to(color, 2, {
      perc: 1,
      ease: Expo.easeOut,
      onUpdate: (function(_this) {
        return function() {
          return _this._updateFlakeColor(color.perc);
        };
      })(this),
      onComplete: (function(_this) {
        return function() {
          return _this._updateFlakeColor(1);
        };
      })(this)
    });
  };

  Snow.prototype.levelUp = function() {
    this.rightWindTarget = 50;
    return setTimeout((function(_this) {
      return function() {
        return _this.rightWindTarget = 0;
      };
    })(this), 500);
  };

  Snow.prototype.resize = function() {
    var flake, i, _i, _ref, _results;
    _results = [];
    for (i = _i = 0, _ref = this.flakes.length; 0 <= _ref ? _i < _ref : _i > _ref; i = 0 <= _ref ? ++_i : --_i) {
      flake = this.flakes[i];
      _results.push(flake.x = flake.perc * W.ww);
    }
    return _results;
  };

  Snow.prototype.render = function() {
    var flake, flakeSpeed, i, speed, _i, _ref, _results;
    if (W.time.delta) {
      if (this.flakeCount < 100) {
        flakeSpeed = 10;
        this.timeFlakeUnleashing += flakeSpeed * W.time.delta;
        this._unleashFlakes();
      }
      this.rightWind += (this.rightWindTarget - this.rightWind) * 0.05;
      _results = [];
      for (i = _i = 0, _ref = this.flakes.length; 0 <= _ref ? _i < _ref : _i > _ref; i = 0 <= _ref ? ++_i : --_i) {
        flake = this.flakes[i];
        speed = flake.radius * 10 + this.rightWind * 50;
        flake.x = flake.x + this.rightWind * 0.35;
        flake.y = (flake.y + speed * W.time.delta) * 1.0025;
        if (flake.y > W.wh + 10) {
          flake.y = -10;
        }
        if (flake.x > W.ww + 10) {
          flake.x = -10;
        }
        this.ctx.beginPath();
        this.ctx.arc(flake.x, flake.y, flake.radius, 0, 2 * Math.PI);
        this.ctx.fillStyle = flake.color;
        _results.push(this.ctx.fill());
      }
      return _results;
    }
  };

  return Snow;

})();
