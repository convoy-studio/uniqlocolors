class Tuto

	@HIDDEN: 'hidden'

	constructor: () ->

		@container = $('.tuto')
		@startButton = @container.find('.start-button')

		@_display()

		@_initEvents()

	# -----------------------------------------------------------------------------o private

	_initEvents: () =>

		@startButton
			.on(Event.CLICK, @_onStartButtonClick)


	_display: () =>




	# -----------------------------------------------------------------------------o listeners

	_onStartButtonClick: () =>

		@container.remove()

		$(@).trigger(Tuto.HIDDEN)

