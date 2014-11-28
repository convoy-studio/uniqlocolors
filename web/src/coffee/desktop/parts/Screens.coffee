class Screens

	@TUTO_HIDDEN: 'tuto_hidden'
	@GAMEOVER_HIDDEN: 'gameover_hidden'

	constructor: () ->

		@container = $('.screen')

		@_initContent()
		@_initEvents()


	# -----------------------------------------------------------------------------o private

	_initContent: () =>

		@gameOverScreen = @container.filter('.game-over')
		@tutoScreen = @container.filter('.tuto')
		@tryAgainScreen = @container.filter('.try-again')
		@winScreen = @container.filter('.win')
		@looseScreen = @container.filter('.loose')

		# -----o Buttons

		@startButton = @tutoScreen.find('.start-button')
		@replayButton = @gameOverScreen.find('.replay-button')
		@getNotifiedButton = @gameOverScreen.find('.get-notified')


		# ----o Game Over

		@sharesLinks = @gameOverScreen.find('li')

		twttr.ready () =>

			twttr.events.bind('tweet', () =>
				@_pageShared('twitter')
			)

		# ----o Win picture

		pic = @winScreen.find('.img')
		img = new Image()
		
		img.onload = () =>
			pic.replaceWith('<img src="' + img.src + '" />')

		img.src = pic.attr('data-src')


		# ---o Init sharing
		#FB.init({
		#	appId: YOUR_API_KEY,
		#	status: true,
		#	cookie: true,
		#	xfbml: true
		#});
		#FB.Canvas.setAutoResize();


		# ---o

		@displayTuto()



	_initEvents: () =>

		@startButton
			.on(Event.CLICK, @_onStartButtonClick)

		@replayButton
			.on(Event.CLICK, @_onReplayButtonClick)

		@sharesLinks.filter('.facebook')
			.on(Event.CLICK, @_onFacebookButtonClick)

		@getNotifiedButton
			.on(Event.CLICK, @_onGetNotifiedButtonClick)	


	_pageShared: (type) =>

		@gameOverScreen.find('.replay-button').css('display','block').prev().css('display', 'none')


	# -----------------------------------------------------------------------------o listeners

	_onStartButtonClick: () =>

		@tutoScreen.remove()

		$(@).trigger(Screens.TUTO_HIDDEN)


	_onReplayButtonClick: () =>

		W.status.shared = true

		@gameOverScreen.remove()

		$(@).trigger(Screens.GAMEOVER_HIDDEN)


	_onFacebookButtonClick: () =>

		FB.ui(
			{
				method: 'share'
				href: 'http://uniqlocolors.eu'
			},
			() =>
				@_pageShared('facebook')
		)

	_onGetNotifiedButtonClick: () =>

		@gameOverScreen.css('display', 'none')
		@displayLoose()





	# -----------------------------------------------------------------------------o public

	displayTuto: () =>

		setTimeout () =>
			@tutoScreen.css('display','block')
			@tutoScreen[0].offsetHeight
			@tutoScreen.addClass('displayed')
		, 1000


	displayTryAgain: () =>

		@tryAgainScreen.css('display','block')
		@tryAgainScreen[0].offsetHeight
		@tryAgainScreen.addClass('displayed')


	displayWin: () =>

		@winScreen.css('display','block')
		@winScreen[0].offsetHeight
		@winScreen.addClass('displayed')


	displayGameOver: () =>

		@gameOverScreen.css('display','block')
		@gameOverScreen[0].offsetHeight
		@gameOverScreen.addClass('displayed')


	displayLoose: () =>

		#W.status.ended = true
		@looseScreen.css('display','block')
		@looseScreen[0].offsetHeight
		@looseScreen.addClass('displayed')















