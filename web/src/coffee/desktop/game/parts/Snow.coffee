class Snow

	constructor: (options) ->

		{@ctx} = options

		@timeFlakeUnleashing = 0
		@flakeCount = 0
		@rightWind = 0
		@rightWindTarget = 0
		@colors = []

		@_initContent()


	# -----------------------------------------------------------------------------o private

	_initContent: () =>	

		@flakes = []

		#for i in [0...100]
		#	@dots.push {
		#		x: Math.random() * W.ww | 0
		#		y: Math.random() * W.wh | 0
		#		radius: 3 + Math.random() * 7 | 0
		#	}

	_unleashFlakes: () =>

		if @flakeCount < @timeFlakeUnleashing
			@flakeCount++

			color =  @colors[Math.random() * @colors.length | 0] || '#F0F0F0'
			
			@flakes.push {
				x: Math.random() * W.ww | 0
				y: -10
				radius: 3 + Math.random() * 7 | 0
				prevColor: Utils.hexToRgb(color)
				currentColor: Utils.hexToRgb(color)
				color: color
			}

	_updateFlakeColor: (perc) =>

		for i in [0...@flakes.length]
			flake = @flakes[i]
			r = flake.currentColor.r * perc + flake.prevColor.r * (1 - perc) | 0
			g = flake.currentColor.g * perc + flake.prevColor.g * (1 - perc) | 0
			b = flake.currentColor.b * perc + flake.prevColor.b * (1 - perc) | 0

			flake.color = 'rgb(' + r + ',' + g + ',' + b + ')'


	# -----------------------------------------------------------------------------o private

	setColors: (colors) =>

		@colors = colors
		@rightWind = 0
		@rightWindTarget = 0


	levelUp: () =>

		for i in [0...@flakes.length]
			@flakes[i].prevColor = @flakes[i].currentColor
			@flakes[i].currentColor = Utils.hexToRgb(@colors[Math.random() * @colors.length | 0])

		@rightWindTarget = 50
		
		setTimeout () =>
			@rightWindTarget = 0
		, 500

		# Fade color
		color = {perc: 0}
		TweenLite.to(color, 2, {
			perc: 1
			ease: Expo.easeOut
			onUpdate: () =>
				@_updateFlakeColor(color.perc)
			onComplete: () =>
				@_updateFlakeColor(1)
		})




	render: () =>
		
		if W.time.delta
			if @flakeCount < 100
				flakeSpeed = 10
				@timeFlakeUnleashing += flakeSpeed * W.time.delta

				@_unleashFlakes()

			@rightWind += (@rightWindTarget - @rightWind) * 0.05

			for i in [0...@flakes.length]

				flake = @flakes[i]

				speed = flake.radius * 10 + @rightWind * 50
				flake.x = (flake.x + @rightWind * 0.35)
				flake.y = (flake.y + speed * W.time.delta) * 1.0025

				if flake.y > W.wh + 10
					flake.y = - 10
				if flake.x > W.ww + 10
					flake.x = -10

				@ctx.beginPath()
				@ctx.arc(flake.x, flake.y, flake.radius, 0, 2 * Math.PI)
				@ctx.fillStyle = flake.color
				@ctx.fill()




