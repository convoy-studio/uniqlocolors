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

		$('.uniqlo-logo.main').addClass('displayed')
		
		setTimeout () =>
			$(@).trigger(Home.HIDDEN)
		, 1000



	# -----------------------------------------------------------------------------o public

	resize: () =>

		if W.ww < 640
			dims = Utils.getCoverSizeImage(600, 600, W.ww, 320)
		else
			dims = Utils.getCoverSizeImage(600, 600, W.ww * 0.5, W.wh)

		for i in [0...@pics.length]
			pic = @pics[i]
			pic.css(dims)





