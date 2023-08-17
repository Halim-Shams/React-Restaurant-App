const jsonData = [
	{
		category: 'breakfast',
		image:
			'https://media.istockphoto.com/id/495071200/photo/eggs-benedict.jpg?s=612x612&w=0&k=20&c=0--8vpfcuaPMAfConA0l4t-cEDvi1HhJ48F_RvRqvKM=',
		name: 'Eggs Benedict',
		detail:
			'Classic breakfast dish with poached eggs, ham, and hollandaise sauce on an English muffin.',
		price: 9.99,
		isNew: false,
	},
	{
		category: 'breakfast',
		image:
			'https://media.istockphoto.com/id/486607254/photo/banana-cashew-pancakes-with-bananas-and-salted-caramel-sauce.jpg?s=612x612&w=0&k=20&c=HETOFJHWnR8JXh8E8ZezBNIoqzgPcubelG7A0ppRglg=',
		name: 'Pancakes',
		detail: 'Fluffy pancakes served with maple syrup and butter.',
		price: 6.99,
		isNew: true,
	},
	{
		category: 'breakfast',
		image:
			'https://media.istockphoto.com/id/115608454/photo/different-sorts-of-tea.jpg?s=612x612&w=0&k=20&c=8rerrqGYo42P3st0y6LjF14-lrqZD2eifKEKua6IECc=',
		name: 'Assorted Tea',
		detail:
			'A selection of different teas, including black tea, green tea, and herbal tea.',
		price: 3.99,
		isNew: false,
	},
	{
		category: 'breakfast',
		image:
			'https://media.istockphoto.com/id/639376412/photo/blueberry-raspberry-parfaits-in-mason-jars-still-life-against-wood.jpg?s=612x612&w=0&k=20&c=3eBFSWTyRnAsa0MPlsLbjaZAQQZJIao8zmc_9oKy-po=',
		name: 'Yogurt Parfait',
		detail: 'Layers of yogurt, granola, and fresh fruits.',
		price: 5.99,
		isNew: false,
	},
	{
		category: 'breakfast',
		image:
			'https://media.istockphoto.com/id/485040276/photo/herb-omelette-with-chives-and-oregano.jpg?s=612x612&w=0&k=20&c=gWzwd_-neHOmCgirxaaGCwEJElbuYPzY917oWPWp6kI=',
		name: 'Cheese Omelette',
		detail: 'Fluffy omelette filled with your choice of cheese.',
		price: 7.99,
		isNew: true,
	},
	{
		category: 'breakfast',
		image:
			'https://media.istockphoto.com/id/1262783745/photo/bbq-teriyaki-glazed-salmon-skewers-with-zucchini-tomatoes-and-rice.jpg?s=612x612&w=0&k=20&c=CIbtV5TJnHP8Qej176x-x8Itgnkwz_dgNhdrmWsoE44=',
		name: 'Kebab Platter',
		detail:
			'Assortment of grilled kebabs served with pita bread, hummus, and tzatziki sauce.',
		price: 10.99,
		isNew: true,
	},
	{
		category: 'lunch',
		image:
			'https://media.istockphoto.com/id/1481200114/photo/beef-chana-pulao-pakistan-style-beef-chickpea-pilaf.jpg?s=612x612&w=0&k=20&c=tj9wVpfquUAleCeQSfitAplLNEp93vFn3FAC_FLpShs=',
		name: 'Kabuli Pulao',
		detail:
			'Aromatic rice dish cooked with lamb or chicken, raisins, carrots, and spices.',
		price: 12.99,
		isNew: true,
	},
	{
		category: 'lunch',
		image:
			'https://media.istockphoto.com/id/1273064299/photo/turkish-ravioli-manti.jpg?s=612x612&w=0&k=20&c=FZPbGVw6BvUGmGYpUeLeE5fAF2mp9L7Alprj0a2BpRs=',
		name: 'Mantoo',
		detail:
			'Steamed dumplings filled with seasoned ground beef or lamb and topped with tomato sauce and yogurt.',
		price: 11.99,
		isNew: true,
	},
	{
		category: 'lunch',
		image:
			'https://media.istockphoto.com/id/1308224335/photo/caesar-salad-with-parmesan-cheese-grilled-chicken-meat-and-croutons.jpg?s=612x612&w=0&k=20&c=yeOvGmC64WkSXQJs3yZS0AKfKUBlJ8tqZgCUkz-Y5jg=',
		name: 'Caesar Salad',
		detail:
			'Fresh romaine lettuce, croutons, Parmesan cheese, and Caesar dressing.',
		price: 8.99,
		isNew: false,
	},
	{
		category: 'lunch',
		image:
			'https://media.istockphoto.com/id/1295796231/photo/cheese-burger-with-bacon-on-black-dark-background.jpg?s=612x612&w=0&k=20&c=TV5fZ_GZTJeIBp3xqWNgybVmrYC85UcVDTbJh3XOHN4=',
		name: 'Cheeseburger',
		detail:
			'Juicy beef patty topped with cheese, lettuce, tomato, and pickles.',
		price: 10.99,
		isNew: false,
	},
	{
		category: 'lunch',
		image:
			'https://media.istockphoto.com/id/1199809074/photo/italian-caprese-sandwiches-with-fresh-tomatoes-mozzarella-cheese.jpg?s=612x612&w=0&k=20&c=olpFKsE7q3x-HO6sAxuEnHkWRrr1cdTEbQN00hblHes=',
		name: 'Caprese Sandwich',
		detail:
			'Fresh mozzarella, tomato, basil, and balsamic glaze on ciabatta bread.',
		price: 7.99,
		isNew: true,
	},
	{
		category: 'lunch',
		image:
			'https://media.istockphoto.com/id/465960745/photo/bowl-of-greek-salad.jpg?s=612x612&w=0&k=20&c=0x-ePJWXQVcvI0wl_2MVCWcAJg0rvjSo5Sjll7NZzxA=',
		name: 'Greek Salad',
		detail:
			'Crisp lettuce, tomatoes, cucumbers, olives, feta cheese, and Greek dressing.',
		price: 9.99,
		isNew: false,
	},
	{
		category: 'evening',
		image:
			'https://media.istockphoto.com/id/1414575281/photo/a-delicious-and-tasty-italian-pizza-margherita-with-tomatoes-and-buffalo-mozzarella.jpg?s=612x612&w=0&k=20&c=v8mdiAa_5NaRYtIscClXe85lLzkx7loSd9_pJWt9G2o=',
		name: 'Margarita Pizza',
		detail:
			'Thin-crust pizza topped with tomato sauce, mozzarella cheese, and fresh basil.',
		price: 12.99,
		isNew: true,
	},
	{
		category: 'evening',
		image:
			'https://media.istockphoto.com/id/484811804/photo/crispy-chillie-sprinkled-chicken-wings-on-a-plate.jpg?s=612x612&w=0&k=20&c=7hV8O-hlKbeM-vFttMXXUuZSp17CYr3TjClVPTYDGjM=',
		name: 'Chicken Wings',
		detail:
			'Crispy chicken wings tossed in your choice of sauce: BBQ, buffalo, or teriyaki.',
		price: 9.99,
		isNew: true,
	},
	{
		category: 'snacks',
		image:
			'https://media.istockphoto.com/id/1311217847/photo/nacho-chips-with-a-cheese-dip-overhead-shot.jpg?s=612x612&w=0&k=20&c=GiTB5iGpkM9ZmGAWb0YqPS5iyppZcPxJZJaNBSW3kh4=',
		name: 'Nachos',
		detail:
			'Crispy tortilla chips topped with melted cheese, jalapeños, salsa, and guacamole.',
		price: 8.99,
		isNew: false,
	},
	{
		category: 'snacks',
		image:
			'https://media.istockphoto.com/id/1326497387/photo/quesadillas-with-pulled-pork.jpg?s=612x612&w=0&k=20&c=sEpGgJqbAhiYSquiSZcSovpYXuWQdpZv_qvXV-HEv9c=',
		name: 'Chicken Quesadilla',
		detail:
			'Grilled tortilla filled with seasoned chicken, cheese, and served with sour cream and salsa.',
		price: 9.99,
		isNew: true,
	},
	{
		category: 'snacks',
		image:
			'https://media.istockphoto.com/id/1217649756/photo/mozzarella-sticks.jpg?s=612x612&w=0&k=20&c=gGayhZqyguLXld38v8QdFqALpvSbex5zL8UQHnOrtek=',
		name: 'Mozzarella Sticks',
		detail: 'Breaded and fried mozzarella sticks served with marinara sauce.',
		price: 6.99,
		isNew: true,
	},
	{
		category: 'snacks',
		image:
			'https://media.istockphoto.com/id/1370470440/photo/twice-baked-potatoes-in-their-skins-with-cheese-and-bacon-crumbs-on-plates-on-a-wooden-table.jpg?s=612x612&w=0&k=20&c=8BYeMSRl5TvDt4gMiO8gwoxkzBlz_oXpYTqPPtl9wak=',
		name: 'Loaded Potato Skins',
		detail:
			'Crispy potato skins filled with cheese, bacon, and served with sour cream.',
		price: 7.99,
		isNew: false,
	},
];

export default jsonData;
