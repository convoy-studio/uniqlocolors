class Home

	@HIDDEN: 'hidden'

	constructor: () ->

		@container = $('.home')
		@carousel = @container.find('.carousel')

		@_initContent()
		@_initEvents()


	# -----------------------------------------------------------------------------o private
	
	_initContent: () =>

		@pics = []
		@loader = new Loader {
			container: @carousel
			custom: true
			each: (elm, img, key) =>
				pic = $(img)
				pic.addClass('hidden')
				elm.replaceWith(pic)
				pic[0].offsetHeight
				pic.removeClass('hidden')

				if pic.hasClass('background')
					@pics.push(pic)

				@resize()

		}

		@carousel = new Carousel {
			container: @carousel
			delay: 4000
			onUpdate: (indexes) =>
				@container.removeClass('state-' + indexes.prev).addClass('state-' + indexes.current)
		}
		@container.addClass('state-0')


	_initEvents: () =>

		@container.find('.play-button')
			.on(Event.CLICK, @_onPlayButtonClick)


	# -----------------------------------------------------------------------------o listeners

	_onPlayButtonClick: () =>

		@container.addClass('hidden')

		logo = $('.uniqlo-logo')
		tween = {
			perc:0
		}
		TweenLite.to(tween, 2, {
			perc: 1
			ease: Expo.easeOut
			onUpdate: () =>
				Normalize.transform(logo[0], 'translate3d(0, ' + ((W.wh * 0.5 - 70) * tween.perc) + 'px, 0)')
			onComplete: () =>
				Normalize.transform(logo[0], 'translate3d(0, 0, 0)')
				logo.css {
					'bottom': 70
				}
		})
		setTimeout () =>
			$(@).trigger(Home.HIDDEN)
		, 500



	# -----------------------------------------------------------------------------o public

	resize: () =>

		dims = Utils.getCoverSizeImage(640, 720, W.ww * 0.5, W.wh)

		for i in [0...@pics.length]
			pic = @pics[i]
			pic.css(dims)
