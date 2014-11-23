class Game

	constructor: () ->

		@container = $('.game')

		@_initContent()
		@_initEvents()


	# -----------------------------------------------------------------------------o private

	_initContent: () =>

		W.status = {
			level: -1 			
			lives: Parameters.lives
			paused: false
			launched: false
			initialized: true
		}

		# ------o Game parameters

		@gameParameters = Parameters
		@_gameLaunched = false

		# ------o Canvas

		@canvas = @container.find('canvas')[0]
		@ctx = @canvas.getContext('2d')


		# ------o Init parts

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

		# ------o Load assets

		@_loadPictures()


	_initEvents: () =>

		@container
			.on(Event.CLICK, @_onGameClick)

		$(@countDown)
			.on(CountDown.END, @_onCountDownEnd)

		$(@grid)
			.on(Grid.GOOD_ANSWER, @_onGridGoodAnswer)
			.on(Grid.WRONG_ANSWER, @_onGridWrongAnswer)

		$('.try-again')
			.on(Event.CLICK, @_playGame)


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

		#@_gameLaunched = true

		#@levelUp()

		#setInterval () =>
		#	if W.level.current < Parameters.levels.length
		#		@levelUp()
		#, 2000

	_pauseGame: () =>

		W.status.paused = true

		if W.status.lives == 0
			@_stopGame()
		else
			$('.try-again').css('display', 'block')

			W.status.lives--

		


	_playGame: () =>

		W.status.paused = false

		$('.try-again').css('display', 'none')

		@countDown.reset()
		@grid.reset()


	_stopGame: () =>

		$('.game-over').css('display', 'block')



	# -----------------------------------------------------------------------------o listeners

	_onGameClick: (e) =>

		if W.status.paused == false && e.target.nodeName == 'CANVAS'
			console.log 'click'
			@grid.click(e)


	_onCountDownEnd: () =>

		@_pauseGame()


	_onGridGoodAnswer: () =>

		@levelUp()
		console.log 'good'


	_onGridWrongAnswer: () =>

		@_pauseGame()
		console.log 'wrong'


	# -----------------------------------------------------------------------------o listeners

	launch: () =>

		W.status.launched = true
		@_gameLaunched = true
		@levelUp()


	resize: () =>
	
		@canvas.width = W.ww
		@canvas.height = W.wh

		W.grid.radius = (Math.min(W.ww, W.wh) - W.grid.padding * 2) * 0.5
		W.grid.size = 2 * (Math.sin(Math.PI * 0.25) * W.grid.radius)
		W.grid.clockRadius = W.grid.radius + 10
		W.grid.bottomSpace = Math.asin(20 / W.grid.clockRadius)

		W.grid.gap = Math.max(5, W.grid.size * 0.05 / W.grid.lines)

		if W.ww > W.wh
			W.grid.top = W.grid.padding + W.grid.radius - W.grid.size * 0.5
			W.grid.left = W.ww * 0.5 - W.grid.radius + (W.grid.radius - W.grid.size * 0.5)
		else
			W.grid.top = (W.wh - W.grid.padding - W.grid.radius) * 0.5
			W.grid.left = W.ww * 0.5 - W.grid.radius + (W.grid.radius - W.grid.size * 0.5)

		if @_gameLaunched == true
			@render(true)


	levelUp: () =>

		W.status.level++
		W.grid.lines = ~~ Math.sqrt(Parameters.levels[W.status.level].picsLength)

		@resize()

		@countDown.levelUp()
		@grid.levelUp()

		@snow.setColors(@grid.getColors())
		@snow.levelUp()


	render: (resized) =>

		@ctx.clearRect(0, 0, W.ww, W.wh)

		if W.status.initialized == true
			@snow.render()
			@countDown.render(resized)

		if W.status.launched == true
			@grid.render(resized)


	update: () =>

		@render()














