class Form

	constructor: (options) ->

		{@container} = options

		@submitButton = @container.find('.submit')

		@_initEvents()



	# -----------------------------------------------------------------------------o private

	_initEvents: () =>

		@container
			.on('submit', @_onSubmit)

		@submitButton
			.on(Event.CLICK, @_onSubmit)

		@container.find('.input-text')
			.on(Event.CLICK, @_onInputFocus)
			.find('input')
				.on('blur', @_onInputBlur)


	_displayError: (error) =>

		console.log @container.find('.error.' + error)
		@container.find('.error.' + error).css('display', 'block')


	# -----------------------------------------------------------------------------o listener

	_onSubmit: (e) =>

		e.preventDefault()

		allFieldsField = true

		@container.find('input').each (key, input) =>
			if input.value == ''
				allFieldsField = false

		if allFieldsField == false
			@_displayError('empty-fields')
			return !1

		console.log W, W.status
		@container.append('<input type="hidden" name="winner" id="winner" value="' + W.status.winner + '" />')
		@container.append('<input type="hidden" name="locale" id="locale" value="' + W.lang + '" />')

		console.log @container.serialize()

		$.ajax {
			type: 'POST'
			url: 'http://uniqlo.dev/app_dev.php/api/users.json'
			dataType: 'json'
			data: @container.serialize()
			success: (response) =>

				console.log 'success', response

			error: (response) =>

				console.log 'error', $.parseJSON(response.responseText)
		}




	_onInputFocus: (e) =>

		$this = $(e.currentTarget)

		$this.addClass('focus')


	_onInputBlur: (e) =>

		$this = $(e.currentTarget)

		if $this.val() == ''
			$this.parents('.input-text').removeClass('focus')



		
