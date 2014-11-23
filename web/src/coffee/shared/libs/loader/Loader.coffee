class Loader

	constructor: (options) ->

		{@container, @elm, @custom, @each, @complete} = options

		if @elm
			pics = @container.find(@elm)
		else
			pics = @container.find('.img')
			
		imgLength = pics.length
		imgInc = 0
		@steps = 0
		@empty = false

		if !pics.length
			@empty = true
			if @complete
				@complete()

		pics.each (key, item) =>

			$this = $(item)
			klass = $this.attr('class').replace('img ', '')
			src = $this.attr('data-src')
			img = new Image()

			attrs = ''

			$.each item.attributes, (key, att) =>
				if att.name == 'class'
					att.value = att.value.replace('img','')

				if att.name != 'data-src'
					attrs += att.name + '="' + att.value + '" '

			img.src = src
			img.onload = () =>

				imgInc++
				@steps = imgInc / imgLength * 100
				
				if @each
					@each($this, '<img src="' + src + '" ' + attrs + '/>', key)
				if @custom in [false, undefined]
					$this.replaceWith('<img src="' + src + '" ' + attrs + '/>')

				$(@).trigger(Event.STEPS)

				if imgInc == imgLength

					if @complete
						@complete()

					$(@).trigger(Event.LOADED)