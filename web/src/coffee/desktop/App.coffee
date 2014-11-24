class App

	constructor: () ->

		console.log '%c# --------------------o Running Desktop', 'background: #42e34d; color: #F0F0F0;'

		W.init()

		@body = $('.body')
		@_initLang()

		@_initContent()
		@_initEvents()

		@_onResize()



	# -----------------------------------------------------------------------------o private

	_initContent: () =>

		W.time = {
			old: +new Date()
		}

		@home = new Home()
		#@_onHomeHidden() # --- DEBUG ---
		#$('.uniqlo-logo').remove()
		#$('.tuto').remove()
		#@_onTutoHidden()

		#@game = new Game()

		@_isWindowFocused = true


	_initEvents: () =>

		W.window
			.on('resize', @_onResize)
			.on('focus', @_onWindowFocus)
			.on('blur', @_onWindowBlur)

		$(@home)
			.on(Home.HIDDEN, @_onHomeHidden)

	
	_initLang: () =>

		lang = (navigator.language || navigator.userLanguage).substr(0, 2)
		availablesLang = []

		$.each Trads, (key, trad) =>
			availablesLang.push(key)

		if lang not in availablesLang
			lang = 'en'

		trad = Trads[lang]
		product = trad.products[currentWeek]

		@hbSource = @body.html()
		@hbTemplate = Handlebars.compile(@hbSource)

		@body.html(@hbTemplate({'trad': trad, 'product': product}))
			


	# -----------------------------------------------------------------------------o listeners

	_onKeyDown: (e) =>


	_onResize: () =>

		W.sw = screen.width
		W.sh = screen.height
		W.ww = W.window.width()
		W.wh = W.window.height()

		if W.sw > 600
			W.body.css {
				'height': W.wh
				'width': W.ww
			}
		else 
			W.body.css {
				'height': 'auto'
				'width': '100%'
			}

		if @home
			@home.resize()

		if @game
			@game.resize()


	_onWindowFocus: () =>

		@_isWindowFocused = true


	_onWindowBlur: () =>

		@_isWindowFocused = false


	_onHomeHidden: () =>

		@home.container.remove()

		#@screens = new Screens()
		@game = new Game()

	


	# -----------------------------------------------------------------------------o public

	update: () =>

		W.time.now = +new Date()
		W.time.delta = (W.time.now - W.time.old) / 1000
		W.time.old = W.time.now

		if @game
			@game.update()


$ ->
	
	app = new App()

	(tick = () ->
		app.update()
		window.requestAnimationFrame(tick)
	)()