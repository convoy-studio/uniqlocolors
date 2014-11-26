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

		#@randomPics = randomPics.slice(0)



		#console.log 'test', selectedPics

		###for i in [0...diff.colors]
			colorsKey = Math.random() * colorsIds.length | 0
			colorsId = colorsIds[colorsKey]

			colorsIds.splice(colorsKey, 1)
			selectedColorsPics.push(pics[colorsId])

			subColorsIds = [0...pics[colorsId].length]


		for j in [0...diff.subColors]
			subColorsKey = Math.random() * subColorsIds.length | 0
			subColorsId = subColorsIds[subColorsKey]

			subColorsIds.splice(subColorsKey, 1)
			selectedSubColorsPics.push(selectedColorsPics[subColorsId])

			picsIds = [0...pics[colorsId][subColorsId].length]


		for k in [0...diff.pics]
			picsKey = Math.random() * picsIds.length | 0
			picsId = picsIds[picsKey]

			picsIds.splice(picsKey, 1)
			selectedPics.push(selectedSubColorsPics[picsId])
		###

		#console.log selectedPics




		###colorsKey = Math.random() * picsKeys.length | 0
			subDivKeys = [0...pics[colorsKey].length]

			for j in [0...subDivNb]
				picKey = Math.random() * pics[i].length | 0

				console.log picKey
			###

		#console.log colorsNb










		###

		pics = []
		randomPics = []
		catsId = [0...Pics.length]

		# on récupère n tableaux de photos par couleur (défini par le nombre de couleurs du niveau)
		for i in [0...levelParams.colorsNb]
			#console.log catsId
			id = Math.random() * catsId.length | 0
			pics.push(Pics[catsId[id]].slice(0))
			catsId.splice(id, 1)

		# on récupère une couleur de tableau puis une image dans ce tableau (celle qui sera à cliquer du coup)
		randomColorArrayId = Math.random() * levelParams.colorsNb | 0
		randomColorArray = pics[randomColorArrayId]
		randomColorPicId = Math.random() * randomColorArray | 0
		randomColorPic = randomColorArray[randomColorPicId]
		randomColorPic.neo = true 								# neo parce que l'élu dans Matrix
		randomPics.push(randomColorPic)

		pics.splice(randomColorArrayId, 1)

		# on récupère n photos dans p tableaux de couleurs
		randomPicsNb = levelParams.picsLength - 1
		#maxSamePic = randomPicsNb / 2 - 1
		maxSamePic = randomPicsNb - 1
		incSamePic = 0

		while incSamePic < randomPicsNb

			if randomPicsNb - incSamePic <= 3
				nbSamePic = randomPicsNb - incSamePic
				incSamePic = randomPicsNb
			else
				nbSamePic = 2 + Math.random() * (maxSamePic - incSamePic) | 0
				incSamePic += nbSamePic

			if randomPicsNb - incSamePic == 1
				incSamePic = randomPicsNb
				nbSamePic++

			randomPackId = Math.random() * pics.length | 0
			randomPicId = Math.random() * pics[randomPackId].length | 0
			randomPic = pics[randomPackId][randomPicId]
			randomPic.neo = false

			for i in [0...nbSamePic]
				randomPics.push(randomPic)
			
			pics[0].splice(randomPicId, 1)
			

		# tri aléatoire de l'ordre des images
		for i in [randomPics.length-1..1]
			j = Math.floor Math.random() * (i + 1)
			[randomPics[i], randomPics[j]] = [randomPics[j], randomPics[i]]


		# ajouter les images ds un autre tableau car pb de clone... je sais :(
		@randomPics = []
		for i in [0...randomPics.length]
			pic = {}
			pic.color = randomPics[i].color
			pic.img = randomPics[i].img
			pic.neo = randomPics[i].neo
			@randomPics.push pic

		###

	# -----------------------------------------------------------------------------o public

	reset: () =>

		@scale = 1

	click: (e) =>

		for i in [0...@randomPics.length]
			pic = @randomPics[i]

			if pic.x < e.pageX < pic.x + @picSize && pic.y < e.pageY < pic.y + @picSize
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










