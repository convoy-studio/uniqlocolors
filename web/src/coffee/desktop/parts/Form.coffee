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

		@container.find('.radio')
			.on(Event.CLICK, @_onRadioClick)

		@container.find('.checkbox')
			.on(Event.CLICK, @_onCheckboxClick)


	_displayError: (error) =>

		@container.find('.error.' + error).css('display', 'block')


	# -----------------------------------------------------------------------------o listener

	_onSubmit: (e) =>

		e.preventDefault()

		allFieldsField = true

		@container.find('input').each (key, input) =>
			if input.value == ''
				allFieldsField = false

		if allFieldsField == false
			@container.find('.error').css('display','block')
			return !1

		@container.append('<input type="hidden" name="winner" id="winner" value="' + W.status.winner + '" />')
		@container.append('<input type="hidden" name="locale" id="locale" value="' + W.lang + '" />')

		request = $.ajax ({
			type: 'POST'
			url: '/api/users.json'
			dataType: 'text'
			data: @container.serialize()

		})

		request.done((response) =>
			@submitButton.css('display','none')
			@submitButton.siblings('.confirm').css('display','block')
			@container.find('.error').css('display','none')
			#console.log 'success', response

		)
		request.fail((response) =>
			@container.find('.error').css('display','block')
			#console.log 'error', response

		)





	_onInputFocus: (e) =>

		$this = $(e.currentTarget)

		$this.find('input').focus()
		$this.addClass('focus')


	_onInputBlur: (e) =>

		$this = $(e.currentTarget)

		if $this.val() == ''
			$this.parents('.input-text').removeClass('focus')



	_onRadioClick: (e) =>

		$this = $(e.currentTarget)
		klass = $this.attr('class')

		$this.addClass('active').siblings().removeClass('active')
		$this.find('input').prop('checked', true)
		$this.siblings().find('input').prop('checked', false)

	_onCheckboxClick: (e) =>

		$this = $(e.currentTarget)
		klass = $this.attr('class')

		if klass.match('active')
			$this.removeClass('active')
			$this.find('input').prop('checked', false)
		else
			$this.addClass('active')
			$this.find('input').prop('checked', true)



		
