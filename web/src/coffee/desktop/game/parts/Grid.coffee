class Grid

	@GOOD_ANSWER: 'good_answer'
	@WRONG_ANSWER: 'wrong_answer'

	constructor: (options) ->

		{@ctx} = options

		@randomPics = []
		@_initContent()

		@singleton = @

		@scale = 1



	# -----------------------------------------------------------------------------o private

	_initContent: () =>



	_initEvents: () =>

		


	_picsLoaded: () =>

		@render()


	_drawPictures: () =>

		@picSize = (W.grid.size - (W.grid.lines - 1) *  W.grid.gap) /  W.grid.lines

		if W.ww < 640
			top = 200
		else
			top = W.grid.top

		if W.status.paused == false && Parameters.levels[W.status.level].moving == true
			speed = 1 / Parameters.time
			@scale -= speed * W.time.delta

		for i in [0...@randomPics.length]
			@randomPics[i].x = W.grid.left + (@picSize + W.grid.gap) * (i %  W.grid.lines)
			@randomPics[i].y = top + (@picSize + W.grid.gap) * ~~ (i /  W.grid.lines)

			@ctx.save()
			@ctx.translate(@randomPics[i].x, @randomPics[i].y)
			@ctx.translate(@picSize * 0.5, @picSize * 0.5)
			@ctx.scale(@scale, @scale)
			@ctx.drawImage(@randomPics[i].img, - @picSize * 0.5, - @picSize * 0.5, @picSize, @picSize)
			@ctx.restore()



	_setRandomPics: () =>

		levelParams = Parameters.levels[W.status.level]
		diff = levelParams.difficulty

		pics = Pics.slice(0)
		selectedColors = []
		selectedSubColors = []
		selectedPics = []
		randomPics = []


		# ------------------o Récupérer n couleurs aléatoires		
		ar = pics
		keys = [0...ar.length]
		for i in [0...diff.colors]
			randomKey = Math.random() * keys.length | 0
			randomId = keys[randomKey]

			keys.splice(randomKey, 1)
			if ar[randomId]
				selectedColors.push(ar[randomId])


		# ------------------o Récupérer n sous-couleurs aléatoires
		for i in [0...selectedColors.length]
			ar = selectedColors[i]
			keys = [0...ar.length]

			for j in [0...diff.subColors]
				randomKey = Math.random() * keys.length | 0
				randomId = keys[randomKey]

				keys.splice(randomKey, 1)
				if ar[randomId]
					selectedSubColors.push(ar[randomId])

		# ------------------o Récupérer n images aléatoires
		for i in [0...selectedSubColors.length]
			ar = selectedSubColors[i]
			keys = [0...ar.length]

			for j in [0...diff.pics]
				randomKey = Math.random() * keys.length | 0
				randomId = keys[randomKey]

				keys.splice(randomKey, 1)
				if ar[randomId]
					selectedPics.push(ar[randomId])


		# ------------------o On récupère l'image unique
		neoKey = Math.random() * selectedPics.length | 0

		selectedPics[neoKey].neo = true
		randomPics.push(selectedPics[neoKey])
		selectedPics.splice(neoKey, 1)

		for i in [0...selectedPics.length]
			toPick = (levelParams.picsLength) / selectedPics.length | 0

			if i == selectedPics.length - 1
				toPick = levelParams.picsLength - randomPics.length
			
			for j in [0...toPick]
				randomPics.push(selectedPics[i])


		# ------------------o On trie le tableau aléatoirement
		for i in [randomPics.length-1..1]
			j = Math.floor Math.random() * (i + 1)
			[randomPics[i], randomPics[j]] = [randomPics[j], randomPics[i]]


		@randomPics = []
		for i in [0...randomPics.length]
			pic = {}
			pic.filename = randomPics[i].filename
			pic.img = randomPics[i].img
			pic.color = randomPics[i].color
			pic.neo = randomPics[i].neo 

			@randomPics.push(pic)



	# -----------------------------------------------------------------------------o public

	reset: () =>

		@scale = 1


	click: (e) =>

		for i in [0...@randomPics.length]
			pic = @randomPics[i]

			if pic.x < e.pageX < pic.x + @picSize && pic.y < e.pageY - $(document).scrollTop() < pic.y + @picSize
				if pic.neo == true
					$(@).trigger(Grid.GOOD_ANSWER)
				else
					$(@).trigger(Grid.WRONG_ANSWER)
					return
		

	getColors: () =>

		colors = []
		for i in [0...@randomPics.length]
			color = @randomPics[i].color
			if color not in colors
				colors.push color

		return colors


	levelUp: () =>

		@scale = 1
		@_setRandomPics()


	render: (resized) =>

		@_drawPictures()










