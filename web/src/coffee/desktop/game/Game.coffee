class Game

	constructor: () ->

		@container = $('.game')

		@_initContent()
		@_initEvents()


	# -----------------------------------------------------------------------------o private

	_initContent: () =>

		W.status = {
			level: -1 			
			lives: Parameters.lives - 1
			paused: true
			stopped: false
			loading: true
			launched: false
			initialized: true
			ended: false
			shared: W.basil.get('shared') || false
			winner: false
		}

		# ------o Game parameters

		@gameParameters = Parameters
		@_gameLaunched = false


		# ------o Canvas

		@canvas = @container.find('canvas')[0]
		@ctx = @canvas.getContext('2d')


		# ------o Init parts

		@screens = new Screens()

		@snow = new Snow({
			ctx: @ctx
		})

		@countDown = new CountDown({
			ctx: @ctx
		})

		W.grid = {
			padding:75
			gap: 20
		}

		@grid = new Grid({
			ctx: @ctx
		})

		@livesVal = $('.lives span')
		@levelVal = $('.level span')
		@levelVal.siblings('sup').text('/' + Parameters.levels.length)


		# ------o Load assets

		@_loadPictures()

		@resize()


	_initEvents: () =>

		@container
			.on(Event.CLICK, @_onGameClick)

		$(@countDown)
			.on(CountDown.END, @_onCountDownEnd)

		$(@grid)
			.on(Grid.GOOD_ANSWER, @_onGridGoodAnswer)
			.on(Grid.WRONG_ANSWER, @_onGridWrongAnswer)

		$('.button.try-again')
			.on(Event.CLICK, @_onTryAgainClick)

		$(@screens)
			.on(Screens.TUTO_HIDDEN, @_onTutoHidden)
			.on(Screens.GAMEOVER_HIDDEN, @_onGameOverHidden)


	_loadPictures: () =>

		perc = 0
		inc = 0

		W.grid.picLength = 29 # ----------o TEMP VAR

		$.each Pics, (key, pack) =>
			$.each pack, (key, subdiv) =>
				$.each subdiv, (key, pic) =>
					pic.img = new Image()
					pic.img.onload = () =>
						perc = inc++ / W.grid.picLength

						if inc == W.grid.picLength
							@_initGame()
					
					pic.img.src = mediasPath + pic.filename


	_initGame: () =>

		@resize()
		$('.tuto').find('.start-button').css('display','block').siblings('.loading').remove()
		#@_gameLaunched = true

		#@levelUp()

		#setInterval () =>
		#	if W.level.current < Parameters.levels.length
		#		@levelUp()
		#, 2000

	_pauseGame: () =>

		W.body.removeClass('playing')

		W.status.paused = true

		if W.status.lives == 0
			@_stopGame()
		else
			$('.try-again').css('display', 'block')

			W.status.lives--

		@snow.setColors([])

		@container.addClass('hidden')

		@_updateVals()


	_playGame: () =>

		W.body.addClass('playing')

		W.status.paused = false
		W.status.stopped = false

		$('.try-again').css('display', 'none')

		@countDown.reset()
		@grid.reset()

		@container.removeClass('hidden')


	_stopGame: () =>

		W.body.removeClass('playing')

		W.status.stopped = true

		@snow.setColors(['#FFFFFF'])

		@container.addClass('hidden')


	_updateVals: () =>

		@livesVal.text(W.status.lives)
		@levelVal.text(W.status.level + 1)



	# -----------------------------------------------------------------------------o listeners

	_onGameClick: (e) =>

		if W.status.paused == false && e.target.nodeName == 'CANVAS'
			@grid.click(e)


	_onTryAgainClick: () =>

		@snow.setColors(@grid.getColors())
		@_playGame()


	_onCountDownEnd: () =>

		@_onGridWrongAnswer()


	_onGridGoodAnswer: () =>

		if W.status.level < Parameters.levels.length - 1
			@levelUp()
		else
			@_stopGame()
			W.status.ended = true
			W.status.winner = true
			@screens.displayWin()
		

	_onGridWrongAnswer: () =>

		if W.status.lives > 1
			@_pauseGame()
			@screens.displayTryAgain()
		else
			@_stopGame()
			if W.status.shared == false
				W.status.paused = true
				@screens.displayGameOver()
			else
				#W.status.ended = true
				W.status.paused = false
				@screens.displayLoose()
			

		@_updateVals()
			
	

	_onTutoHidden: () =>

		@launch()


	_onGameOverHidden: () =>

		W.status.lives = Parameters.lives
		W.status.level = -1
		@launch()

		@_updateVals()


	# -----------------------------------------------------------------------------o listeners

	launch: () =>

		W.basil.set('played', true)

		W.status.launched = true
		@_gameLaunched = true
		@levelUp()
		@_playGame()


	resize: () =>

		W.grid.radius = (Math.min(W.ww, W.wh) - W.grid.padding * 2) * 0.5
		W.grid.size = 2 * (Math.sin(Math.PI * 0.25) * W.grid.radius)
		W.grid.clockRadius = W.grid.radius + 20
		#W.grid.bottomSpace = Math.asin(20 / W.grid.clockRadius)
		W.grid.bottomSpace = 0

		W.grid.gap = Math.max(5, W.grid.size * 0.05 / W.grid.lines)

		if W.ww < 640
			W.grid.radius = 30
			W.grid.size = W.ww - 40
			W.grid.clockRadius = 40
			@container.css('height', W.grid.size + 200 + 20)
			@canvas.width = W.ww
			@canvas.height = W.grid.size + 200
		else
			@container.css('height', 'auto')
			@canvas.width = W.ww
			@canvas.height = W.wh

		if W.ww > W.wh
			W.grid.top = W.grid.padding + W.grid.radius - W.grid.size * 0.5
			W.grid.left = W.ww * 0.5 - W.grid.radius + (W.grid.radius - W.grid.size * 0.5)
		else
			W.grid.top = (W.wh - W.grid.padding - W.grid.radius) * 0.5
			W.grid.left = W.ww * 0.5 - W.grid.radius + (W.grid.radius - W.grid.size * 0.5)

		if @_gameLaunched == true
			@render(true)
			
		@snow.resize()


	levelUp: () =>

		W.status.level++
		W.grid.lines = ~~ Math.sqrt(Parameters.levels[W.status.level].picsLength)

		@resize()

		@countDown.levelUp()
		@grid.levelUp()

		@snow.setColors(@grid.getColors())
		@snow.levelUp()

		@_updateVals()


	render: (resized) =>

		@ctx.clearRect(0, 0, W.ww, W.wh)

		if W.status.initialized == true
			@snow.render()
			if W.status.ended != true
				@countDown.render(resized)

		if W.status.launched == true && W.status.paused != true && W.status.stopped != true
			@grid.render(resized)


	update: () =>

		@render()














