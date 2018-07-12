var create_main = () => {
	//pour reseter les drapeaux au lancement du jeu
	flag.heart =false
	o.background_start_p = {
		image: "background_start",
		x: w2,
		y: h2,
		a: 1,
		flag: true,
		g: game,
	}
	o.background_start_left_p = {
		image: "background_start_left",
		x: w2,
		y: h2,
		a: 1,
		flag: true,
		g: game
	}
	o.background_start_right_p = {
		image: "background_start_right",
		x: w2,
		y: h2,
		a: 1,
		flag: true,
		g: game
	}

	o.background_main_p = {
		image: "background_main",
		x: 0,
		y: 0,
		a: 1,
		anchorx : 0,
		anchory : 0,
		flag: true,
		g: game
	}
	o.background_main = new _obj(o.background_main_p)
	o.mask = [];
	o.mask = {
		0: new Phaser.Rectangle(0, 0, 760, 150),
		1: new Phaser.Rectangle(0, 0, 760, 150),
	}

	o.mask[0].width = 0;
	o.mask[1].width = 1;
	//o.mask.centerX = 400
	o.arrow = [];
	o.arrow = {
		0: game.add.image(0, 0, 'arrow0'),
		1: game.add.image(w2 + 380, 0, 'arrow1'),
	}
	o.arrow[0].anchor.x = 0;
	o.arrow[0].anchor.y = .5;
	o.arrow[0].alpha = .2;
	o.arrow[0].visible = false;
	o.arrow[0].cropEnabled = true;
	o.arrow[0].crop(o.mask[0]);
	o.arrow[1].anchor.x = 0.5;
	o.arrow[1].anchor.y = .5;
	o.arrow[1].scale.x = 0;
	o.arrow[1].alpha = 0;
	o.arrow[1].visible = true;

	o.shadow_p0 = {
		g: game,
		image:"shadow",
		x: 10,
		y: 10,
		v:true,
	}
	o.shadow_p1 = {
		g: game,
		image:"shadow",
		x: 10,
		y: 10,
		v:true,
	}
	o.shadow_0 = new _obj(o.shadow_p0)
	o.shadow_1 = new _obj(o.shadow_p1)

	o.paper_p0 = {
		image: "paper",
		x: w2 * .5,
		y: -h2,
		a: 1,
		flag: false,
		g: game,
		physics: true,
		gravity: true,
		//pour tester les collisions immovable doit être à false
		immovable: true,
		moves: false,
		name : 0,
	}
	o.paper_p1 = {
		image: "paper",
		x: w2 * 1.5,
		y: -h2,
		a: 1,
		flag: false,
		g: game,
		physics: true,
		gravity: true,
		//pour tester les collisions immovable doit être à false
		immovable: true,
		moves: false,
		name : 1,
	}
	o.paper = {
		0: new _obj(o.paper_p0),
		1: new _obj(o.paper_p1),
	}


	o.paper[0].gameover = false // pour alerter quand il dépasse le milieu de la table
	o.paper[0].flag_pre_sensor = false
	o.paper[0].flag_press_engaged = false
	o.paper[1].flag_press_engaged = false
	o.paper[1].flag_pre_sensor = false
	o.paper[0].flag_dont_move = false
	o.paper[1].flag_dont_move = false
	o.paper[0].flag_test_duration = false
	o.paper[1].flag_test_duration = false

	o.filter_gray_p = {
		image: "gray_filter",
		x: 0,
		y: 0,
		a: 1,
		flag: true,
		g: game,
		anchorx : 0,
		anchory : 0,
	}
	o.filter_gray = new _obj(o.filter_gray_p)

	o.sensor_p = {
		image: "line_collision",
		x: w2,
		y: 3655,
		a: 1,
		flag: true,
		anchorx: .5,
		anchory: 0,
		g: game,
		physics: true,
		immovable: true,
	}
	o.sensor = new _obj(o.sensor_p)


	o.pre_sensor_p = {
		image: "line_collision",
		x: w2,
		y: 2270 + 620,
		a: 1,
		flag: true,
		g: game,
		physics: true,
		immovable: true,
	}

	o.click_p = {
		image: "cursor_palpitant",
		x: w2 * 1.5,
		y: h2,
		a: 1,
		flag: true,
		g: game,
	}
	o.click = new _obj(o.click_p)
	o.click_tw = {
		o: o.click, //object
		t: 200, //time
		d: 0, //delay
		//a: 1, //alpha
		e: Phaser.Easing.Linear.None, //Easing
		i: true,
		//r: 85, //rotation
		sx: 2, //scalex
		sy: 2, //scaley
		//dx :400, //displacementx
		//dy :200, //displacementy 
		y: true, //yoyo,
		dyo: 200, //delay yoyo
		i: -1,
	}

	//tw.click.yoyo(200,true)
	//tw[0] = _tr(o.click_tw)

	o.points_p0 = {
		g: game,
		x: w2 * .5,
		y: -200,
		message: "984",
		taille: 110,
		police: 'police',
		anchorx: .5,
		anchory: .5,
	}
	o.fil_p0 = {
		image: "line",
		x: w2 * .5,
		y: -200,
		a: 1,
		flag: true,
		g: game,
		physics: true,
		gravity: true,
		moves: false,
		bounce: 1.0,
		anchorx: .5,
		anchory: 1,
	}
	o.points_p1 = {
		g: game,
		x: w2 * 1.5,
		y: -200,
		message: "984",
		taille: 110,
		police: 'police',
		anchorx: .5,
		anchory: .5,
	}
	o.fil_p1 = {
		image: "line",
		x: w2 * 1.5,
		y: -200,
		a: 1,
		flag: true,
		g: game,
		physics: true,
		gravity: true,
		moves: false,
		bounce: 1.0,
		anchorx: .5,
		anchory: 1,
	}
	//o.points = {
	//    0: new _text(o.points_p0),
	//    //1: new _obj(o.points_p1),
	//}

	o.paper[0].points = new _text(o.points_p0)
	o.paper[0].fil = new _obj(o.fil_p0)
	o.paper[1].points = new _text(o.points_p1)
	o.paper[1].fil = new _obj(o.fil_p1)


	//o.points[0].anchor.y = 1
	//o.points[0].fil = new _obj(o.fill_p0)
	//o.points[0].fil.anchor.y = 1
	//o.points[0].fil.body.moves = true
	//o.group_points_0 = game.add.group()
	//o.group_points_0.add(o.points[0])
	//o.group_points_0.add(o.points[0].fill)
	o.background_top_p = {
		image: "background_top",
		x: w2,
		y: h2,
		a: 1,
		flag: true,
		g: game,
	}
	o.background_top = new _obj(o.background_top_p)
	o.flash_p0 = {
		image: "flash",
		x: w2 * .5,
		y: 230,
		a: 0,
		flag: true,
		g: game,
		anchory: 0,
	}
	o.flash_p1 = {
		image: "flash",
		x: w2 * 1.5,
		y: 230,
		a: 0,
		flag: true,
		g: game,
		anchory: 0,
	}

	o.flash = []
	o.flash = {
		0: new _obj(o.flash_p0),
		1: new _obj(o.flash_p1),
	}
	o.flash[0].alpha = 0
	o.flash[1].alpha = 0
	o.flash_tw_p0 = {
		o: o.flash[0], //object
		t: 30, //time
		d: 0, //delay
		a: 1, //alpha
		//e: Phaser.Easing.Elastic.Out, //Easing
		//r: 85, //rotation
		//sx :2, //scalex
		//sy :4, //scaley
		//dx :400, //displacementx
		//dy :200, //displacementy 
		y: true, //yoyo,
		dyo: 30, //delay yoyo
		//i: 0,
	}
	o.flash_tw_p1 = {
		o: o.flash[1], //object
		t: 30, //time
		d: 0, //delay
		a: 1, //alpha
		//e: Phaser.Easing.Elastic.Out, //Easing
		//r: 85, //rotation
		//sx :2, //scalex
		//sy :4, //scaley
		//dx :400, //displacementx
		//dy :200, //displacementy 
		y: true, //yoyo,
		dyo: 30, //delay yoyo
	}
	//f.show_flash(o.flash_tw_p)
	o.looser_p0 = {
		image: "looser0",
		x: w2,
		y: h2,
		a: 0,
		flag: true,
		g: game,
	}
	o.looser_p1 = {
		image: "looser1",
		x: w2 ,
		y: h2,
		a: 0,
		flag: true,
		g: game,
	}

	o.looser = []
	o.looser = {
		0: new _obj(o.looser_p0),
		1: new _obj(o.looser_p1),
	}
	o.looser[0].alpha = 0
	o.looser[1].alpha = 0
	o.looser_tw=[]
	o.looser_tw[0] = {
		o: o.looser[0], //object
		t: t.looser, //time
		d: 0, //delay
		a: 1, //alpha
		e: Phaser.Easing.Exponential.Out, //Easing
		//r: 85, //rotation
		//sx :2, //scalex
		//sy :4, //scaley
		//dx :400, //displacementx
		//dy :200, //displacementy 
		//y: true, //yoyo,
		//dyo: 30, //delay yoyo
		//i: 0,
	}

	o.looser_tw[1] = {
		o: o.looser[1], //object
		t: t.looser, //time
		d: 0, //delay
		a: 1, //alpha
		e: Phaser.Easing.Exponential.Out, //Easing
		//r: 85, //rotation
		//sx :2, //scalex
		//sy :4, //scaley
		//dx :400, //displacementx
		//dy :200, //displacementy 
		//y: true, //yoyo,
		//dyo: 30, //delay yoyo
		//i: 0,
	}
	o.searching_opponent_p = {
		image: "searching_opponent",
		x: 0,
		y: 0,
		//a: 0,
		flag: true,
		g: game,
		anchorx:0,
		anchory:0,

	}
	o.circle_search_opponent_p = {
		image: "circle_search_opponent",
		x: w2*.5,
		y: 800,
		flag: true,
		g: game,

	}


	o.searching_opponent = new _obj(o.searching_opponent_p)
	//o.circle_search_opponent = new _obj(o.circle_search_opponent_p)
	//game.add.tween(o.circle_search_opponent).to({ angle: 359 }, 800, Phaser.Easing.Linear.None,true,0,-1,true);
	o.searching_opponent.alpha = 0

	o.searching_opponent.number = random(0, 2)

	o.searching_opponent_tw = {
		o: o.searching_opponent, //object
		//t: 500t.searching_opponent, //time
		t: t.searching_opponent,
		d: 0, //delay
		a: 1, //alpha
		e: Phaser.Easing.Linear.None, //Easing
		//r: 85, //rotation
		//sx :2, //scalerx
		//sy :4, //scaley
		//dx :400, //displacementx
		//dy :200, //displacementy 
		y: true, //yoyo,
		dyo: t.searching_opponent, //delay yoyo
		i: o.searching_opponent.number,
	}
	o.pre_sensor = new _obj(o.pre_sensor_p)

	let ecart = o.sensor.y - o.pre_sensor.y-10
	let minima = random(70, 180)
	o.opponent_actions = []

	//obstacles aléatoires avec ecart =distance à partir de laquelle on peut presser et maxima => distance pour la dernière touche
	f.random_division = (maxima, minimus) => {
		let [n, total, m = n] = [maxima, 0];
		const [min, arr, range = min + min / (Math.random(0, 1) * 3)] = [minimus, []];

		do {
			let r = Math.random() * (range - min) + min; // random number in our range
			n -= r; // subtract `min` from `n`
			o.opponent_actions.push(Math.round(n > min ? r : m - total)); // push `r` or remainder 
			total += o.opponent_actions[o.opponent_actions.length - 1]; // keep track of total
		} while (n > min);
	}
	f.random_division(ecart, minima)

	o.sensor_opponent_p = []
	o.sensor_opponent = []
	let summed_actions = 0

	for (let i = 0; i < o.opponent_actions.length; i++) {
		summed_actions += o.opponent_actions[i]

		o.sensor_opponent_p[i] = {
			image: "line_collision",
			x: w2,
			y: o.pre_sensor.y + summed_actions,
			a: 1,
			flag: false,
			g: game,
			physics: true,
			immovable: true,
		}
		o.sensor_opponent[i] = new _obj(o.sensor_opponent_p[i])
	}

	interface.player_p = {
		g: game,
		x: w2 * 1.5,
		y: 165,
		message: "dev - l4",
		taille: 100,
		police: 'police_yellow',
	}

	interface.player_roll_p = {
		image: "roll",
		x: w2 * 1.5,
		y: w *.01982,
		a: 1,
		flag: true,
		g: game,
	}

	interface.player_points_p = {
		g: game,
		x: w2 * 1.5,
		y: 100,
		message: "50",
		taille: 50,
		police: 'police_red',
	}
	let random_name = random(0,name_opponent.length-1)
	interface.enemy_p = {
		g: game,
		x: w2 * .5,
		y: 165,
		message: name_opponent[random_name],
		taille: 100,
		police: 'police_yellow',
	}

	interface.enemy_roll_p = {
		image: "roll",
		x: w2 * .5,
		y: 45,
		a: 1,
		flag: true,
		g: game,
	}

	interface.enemy_points_p = {
		g: game,
		x: w2 * .5,
		y: 100,
		message: random(50,90000),
		taille: 50,
		police: 'police_red',
	}

	interface.decount_p = {
		g: game,
		x: w2,
		y: 1015,
		message: "ready",
		taille: 250,
		police: 'police',
		v: false,
	}

	interface.puissance_p0 = {
		g: game,
		image:"puissance",
		x: w2-100,
		y: 100,
		v:false,
	}

	interface.puissance_p1 = {
		g: game,
		image:"puissance",
		x: w-100,
		y: 100,
	}


	interface = {
		0: new _text(interface.enemy_p),
		1: new _text(interface.player_p),
		roll:{
			0:new _obj(interface.enemy_roll_p),
			1:new _obj(interface.player_roll_p),
		},
		points:{
			0:new _text(interface.enemy_points_p),
			1:new _text(interface.player_points_p),

		},
		puissance:{
			0:new _obj(interface.puissance_p0),
			1:new _obj(interface.puissance_p1),
		},
		decount : new _text(interface.decount_p),



		//	_0: new _obj(interface.enemy_roll_p),
		//	roll_1: new _obj(interface.player_roll_p),
		//	points_0: new _text(interface.enemy_points_p),
		//	points_1: new _text(interface.player_points_p),
		//	puissance_0 : new _obj(interface.puissance_p0),
		//	puissance_1 : new _obj(interface.puissance_p1),
	}
	interface[0].visible = false
	interface.roll[0].visible = false
	interface.points[0].visible = false
	interface.decount.count = 3
	//on définit la puissance de l'enemy
	if (interface.points[0].text > 0 && interface.points[0].text < 1000) {
		interface.puissance[0].frame=0
	}	

	if (interface.points[0].text >= 1000 && interface.points[0].text < 50000) {
		interface.puissance[0].frame=1
	}	
	if (interface.points[0].text >= 50000 && interface.points[0].text < 100000) {
		interface.puissance[0].frame=2
	}	
	if (interface.points[0].text >= 100000 && interface.points[0].text < 500000) {
		interface.puissance[0].frame=3
	}	
	if (interface.points[0].text >= 50000 && interface.points[0].text < 900000) {
		interface.puissance[0].frame=4
	}	

	var restart =()=>{game.state.start("game_main");interface.restart.visible=false}

	interface.restart_p = {
		g: game,
		image:"restart",
		x: w2*1.5,
		y: h2+400,
		v:false,
		callback : restart,
	}

	interface.restart = new _bu(interface.restart_p)
	game.add.tween(interface.restart.scale).to({x:1.2,y:1.2},800,Phaser.Easing.Linear.None,true,0,-1,true);

	o.cloud = []
	o.cloud_p = {
		image: "cloud",
		x: w2 * .5,
		y: 165,
		flag: true,
		sx: 1,
		sy: 1,
		g: game,
	}
	o.cloud_length = 19
	for (let i = 0; i < o.cloud_length; i++) {
		o.cloud[i] = new _obj(o.cloud_p)
		o.cloud[i].alpha = .8
		o.cloud[i].visible = false
		o.cloud[i].de(w2 * .5 + random(-200, 500), 165 + random(-90, 90))
		o.cloud[i].sc(random(5, 10) / 10, o.cloud[i].scale.x)

	}
	o.cloud_tw = []
	for (let i = 0; i < o.cloud_length; i++) {
		o.cloud_tw[i] = {
			o: o.cloud[i], //object
			t: t.cloud, //time
			d: 500, //delay
			a: 0, //alpha
			e: Phaser.Easing.Linear.None, //Easing
			r: 35, //rotation
			sx: 0,
			sy: 0,
			c: true,
			ctime: 1000,
			//ccdx: o.cloud[i].x + random(-300, 300), //displacementx
			//dy: o.cloud[i].y + random(-50, 50), //displacementy 
			//y: true, //yoyo,
			//dyo: 30, //delay yoyo
			//i: 0,
		}
	}

	//peut être supprimé
	o.particle_p = {
		image: "particle",
		x: w2,
		y: h,
		flag: true,
		g: game,
	}

	o.particle = [];
	for (var i = 0; i < 7; i++){
		o.particle[i]=new _obj(o.particle_p);
	}

	localStorage.setItem("score", interface.points[1].text)
	localStorage.getItem("name")
	//interface[1].text = nn
	//o.background_start_left = new _obj(o.background_start_left_p)
	//o.background_start_right = new _obj(o.background_start_right_p)
	//o.background_start = new _obj(o.background_start_p)

	o.transition_background_start={
		o:o.background_start,
		t:500,
		d:500,
		dy:-4000,
	}
	o.transition_background_start_right={
		o:o.background_start_right,
		t:1500,
		d:500,
		dx:2*w,
	}
	o.transition_background_start_left={
		o:o.background_start_left,
		t:1500,
		d:500,
		dx:-w,
	}
	//game.add.tween(o.background_start).to({ y: -4000 }, 900, Phaser.Easing.Linear.None, true, 500);

	//_tr(o.transition_background_start_right,4)
	//_tr(o.transition_background_start_left,5)


	//o.shadow_1 = game.add.sprite(100,100,"cursor_palpitant") 

}
