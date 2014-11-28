class CountDown

	@END: 'END'

	constructor: (options) ->

		{@ctx} = options

		@countDownInterval = undefined

		@arcZero = - Math.PI * 0.5
		@arcFull = Math.PI * 2
		@currentTimeDeg = @arcZero
		@red = '#FF0000'

		@tweens = {
			clockPerc: 0
			dash: []
		}

		@_timeOut = false
		@_progressPerc = 0

		@_initContent()


	# -----------------------------------------------------------------------------o private

	_initContent: () =>

		TweenLite.to(@tweens, 2, {clockPerc: 1, delay: 0, ease: Quint.easeOut, delay: 0.5})

		for i in [0...60]
			@tweens.dash.push({perc: 0})

			TweenLite.to(@tweens.dash[i], 2, {perc: 1, delay: 0 + 1 * i / 60 + 1, ease: Quint.easeOut})

	
	_drawProgressCircle: () =>

		if W.ww < 640
			top = 100
			shift = 10
		else
			top = W.wh * 0.5
			shift = 20

		if @_timeOut == false && W.status.paused != true && W.status.stopped != true
			speed = Math.PI * 2 / Parameters.time
			@currentTimeDeg += speed * W.time.delta

			@_progressPerc = (@currentTimeDeg + Math.PI * 0.5) / (Math.PI * 2)

			@ctx.beginPath()

			@ctx.fillStyle = @red
			@ctx.globalAlpha = 0.2

			@ctx.arc(W.ww * 0.5, top, W.grid.radius + shift, @arcZero, @currentTimeDeg, false)
			@ctx.lineTo(W.ww * 0.5, top)

			@ctx.fill()

			@ctx.globalAlpha = 1

		# ---------------o Draw level line

		if W.ww > 640
			@ctx.lineWidth = 2

			pos = @arcZero + (W.status.level / Parameters.levels.length) * Math.PI * 2

			@ctx.beginPath()
			if pos < @arcZero + Math.PI * (1 - W.grid.bottomSpace)
				@ctx.arc(W.ww * 0.5, top, W.grid.radius + 40, @arcZero, pos, false)
			else
				@ctx.arc(W.ww * 0.5, top, W.grid.radius + 40, @arcZero, @arcZero + Math.PI * (1 - W.grid.bottomSpace), false)
			@ctx.stroke()

			@ctx.beginPath()
			if pos > @arcZero + Math.PI * (1 + W.grid.bottomSpace)
				@ctx.arc(W.ww * 0.5, top, W.grid.radius + 40, @arcZero + Math.PI * (1 + W.grid.bottomSpace), pos, false)
			else if pos == Math.PI * 2
				@ctx.arc(W.ww * 0.5, top, W.grid.radius + 40, @arcZero + Math.PI * (1 + W.grid.bottomSpace), @arcZero + Math.PI * 2, false)
			@ctx.stroke()




	_drawClock: () =>

		radius = W.grid.clockRadius

		# ---------------o Draw halfes

		if !(W.status.paused == true && W.ww < 640)

			if W.ww < 640
				top = 100
			else
				top = W.wh * 0.5

			@ctx.lineWidth = 6
			@ctx.strokeStyle = @red

			if @tweens.clockPerc == 1
				@ctx.beginPath()
				@ctx.arc(W.ww * 0.5, W.wh * 0.5, radius, @arcZero, @arcZero + Math.PI * 2, true)
				@ctx.fillStyle = 'rgba(230, 230, 230, 0.8)'
				@ctx.fill()

			@ctx.beginPath()
			@ctx.arc(W.ww * 0.5, top, radius, @arcZero, @arcZero + Math.PI * (1 - W.grid.bottomSpace) * @tweens.clockPerc, false)
			@ctx.stroke()

			@ctx.beginPath()
			@ctx.arc(W.ww * 0.5, top, radius, @arcZero + Math.PI * 2, @arcZero + Math.PI * (2 - (1 - W.grid.bottomSpace) * @tweens.clockPerc), true)
			@ctx.stroke()

			if W.ww > 640
				# ---------------o Draw lines

				for i in [0...120]

					@ctx.beginPath()
					perc = i / 120

					rp = @arcZero + Math.PI * 2 * perc
					ox = W.ww * 0.5 + (radius + 3) * Math.cos(rp)  
					oy = W.wh * 0.5 + (radius + 3) * Math.sin(rp) 
					
					if rp < @arcZero + Math.PI * (1 - W.grid.bottomSpace) || rp > @arcZero + Math.PI * (1 + W.grid.bottomSpace)

						if i % 30 == 0
							@ctx.lineWidth = 5
							length = 15
						else if i % 10 == 0
							@ctx.lineWidth = 3
							length = 8
						else
							@ctx.lineWidth = 1
							length = 5 

						if i < 60
							percProg = @tweens.dash[i].perc
						else
							percProg = @tweens.dash[60 - (i - 60)].perc

						dx = ox + (Math.cos(- Math.PI * 0.5 + Math.PI * 2 * perc) * length) * percProg
						dy = oy + (Math.sin(- Math.PI * 0.5 + Math.PI * 2 * perc) * length) * percProg

						#dx = ox
						#dy = oy - 50

						@ctx.moveTo(ox, oy);
						@ctx.lineTo(dx, dy);
						@ctx.stroke()


	# -----------------------------------------------------------------------------o public

	levelUp: () =>

		@currentTimeDeg = @arcZero




	render: (resized) =>

		#radius = Math.sqrt((W.grid.height * 0.5) * (W.grid.height * 0.5) + (W.grid.width * 0.5) * (W.grid.width * 0.5)) + 10
		#radius = Math.max(W.grid.height, W.grid.width) * 0.5

		@ctx.lineCap = 'round'

		@_drawClock()

		if W.status.launched
			@_drawProgressCircle()

		if @_progressPerc > 1 && @_timeOut != true
			@_timeOut = true
			$(@).trigger(CountDown.END)
			


	reset: () =>

		@_timeOut = false
		@currentTimeDeg = @arcZero








