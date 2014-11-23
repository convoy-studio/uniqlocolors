class Screens

	@HIDDEN: 'hidden'

	constructor: () ->

		@container = $('.screen')

		@_initContent()
		@_initEvents()

	# -----------------------------------------------------------------------------o private

	_initContent: () =>

		@gameOverScreen = @container.filter('.game-over')
		@tutoScreen = @container.filter('.tuto')
		@tryAgainScreen = @container.filter('.try-again')

		# -----o Tuto

		@startButton = @tutoScreen.find('.start-button')


		# ----o Game Over

		@sharesLinks = @gameOverScreen.find('li')


		twttr.ready () =>

			twttr.events.bind('tweet', () =>
				@_pageShared('twitter')
			)

		# ---o Init sharing
		#FB.init({
		#	appId: YOUR_API_KEY,
		#	status: true,
		#	cookie: true,
		#	xfbml: true
		#});
		#FB.Canvas.setAutoResize();



	_initEvents: () =>

		@startButton
			.on(Event.CLICK, @_onStartButtonClick)

		@sharesLinks.filter('.facebook')
			.on(Event.CLICK, @_onFacebookButtonClick)	

		


	_display: () =>




	# -----------------------------------------------------------------------------o listeners

	_onStartButtonClick: () =>

		@container.remove()

		$(@).trigger(Tuto.HIDDEN)


	_onFacebookButtonClick: () =>

		FB.ui(
			{
				method: 'share'
				href: 'http://uniqlo.dev'
			},
			() =>
				@_pageShared('facebook')
		)


	_pageShared: (type) =>

		console.log type















