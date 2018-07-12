var boot = {
	preload: function () {
		// on definit ici car game subit un scale et les valeurs w2 ,h2 sont faussées après global.js
		w2 = game.world.centerX;
		h2 = game.world.centerY;
		//	this.game.load.image("loading","assets/loading.png");
		//	this.game.load.image("loading_back","assets/loading_back.png");
	},
	create: function () {

		//to scale the game
		this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		this.game.scale.pageAlignHorizontally = true;
		this.game.scale.pageAlignVertically = true;
		//red color to see the background of the game itself
		// you must change the background in the index.html to have the same color in the background game 
		// > change the yellow in red it's only to see how the game is scalling
		this.game.stage.backgroundColor = '#36302d';
		this.game.scale.refresh();
		this.game.state.start('preloader');
	}
};

var preloader = {
	preload: function () {
		//loadingBar
		//var loadingBar_back = this.add.sprite(game.width/2,h2,"loading_back");
		//loadingBar_back.anchor.setTo(0.5,0.5);
		//var loadingBar = this.add.sprite(game.width/2,h2,"loading");
		//loadingBar.anchor.setTo(0.5,0.5);
		//this.load.setPreloadSprite(loadingBar);
		//tuto
		this.game.load.image("background_start", "assets/background_start.png");
		this.game.load.image("background_start_left", "assets/background_start_left.png");
		this.game.load.image("background_start_right", "assets/background_start_right.png");
		this.game.load.image("background_main", "assets/background_main.png");
		this.game.load.image("background_top", "assets/background_top.png");
		this.game.load.image("roll", "assets/roll.png");
		this.game.load.image("gray_filter", "assets/gray_filter.png");
		this.game.load.image("paper_pink", "assets/paper_pink.png");
		this.game.load.image("paper", "assets/paper.png");
		this.game.load.image("shadow", "assets/shadow.png");
		this.game.load.image("paper_winner", "assets/paper_winner.png");
		this.game.load.image("heart", "assets/heart.png");
		this.game.load.image("line_collision", "assets/line_collision.png");
		this.game.load.image("cursor_palpitant", "assets/cursor_palpitant.png");
		this.game.load.image("line", "assets/line.png");
		this.game.load.image("flash", "assets/flash.png");
		this.game.load.image("yellow", "assets/yellow.png");
		this.game.load.image("arrow0", "assets/arrow0.png");
		this.game.load.image("arrow1", "assets/arrow1.png");
		this.game.load.image("searching_opponent", "assets/searching_opponent.png");
		this.game.load.image("looser0", "assets/looser0.png");
		this.game.load.image("looser1", "assets/looser1.png");
		this.game.load.image("cloud", "assets/cloud.png");
		this.game.load.image("particle", "assets/particle.png");
		this.game.load.image("circle_search_opponent", "assets/circle_search_opponent.png");
		this.game.load.image("restart", "assets/restart.png");
		//spritesheet
		this.game.load.spritesheet("puissance", "assets/puissance.png",75,90);
		//font bitmapFont
		this.game.load.bitmapFont('police_red', 'fonts/font_red.png', 'fonts/font.fnt');
		this.game.load.bitmapFont('police_yellow', 'fonts/font_yellow.png', 'fonts/font.fnt');
		this.game.load.bitmapFont('police', 'fonts/font.png', 'fonts/font.fnt');
	},
	create: function () {
		//this.game.time.events.add(1000, function () { this.game.state.start("game_main"); }, this);
		this.game.time.events.add(1000, function () { this.game.state.start("game_first_screen"); }, this);



	}
};

var game_first_screen = {
	create: function () {
		this.game.time.events.add(100, function () { this.game.state.start("game_main"); }, this);
	},
};
var game_main = {
	create: function () {
		game.physics.arcade.gravity.y = 1000;
		f.start_game()
		o.background_main.scale.y = game.height/2270 
		co(game.height)
		//o.background_main.scale.x = o.background_main.scale.y *.65 
		o.background_top.scale.y = game.height/2270 
		o.background_top.scale.y = game.height/2270 
		o.searching_opponent.scale.y = game.height/2270 
		o.filter_gray.scale.y = game.height/2270 
		o.looser[0].scale.y = game.height/2270 
		o.looser[1].scale.y = game.height/2270 
		o.pre_sensor.y = o.pre_sensor.y + game.height/2270
		wait(() => { e.arrow(game) }, 3000)
		//game.input.onDown.add(() => { game.camera.shake(0.003, 100) }, this);

	},

	update: function () {



		if(flag.start_game){
			if (o.paper[0].flag) { o.paper[0].body.moves = true }
			//f.collide(o.paper[0], o.sensor_opponent[0])

			f.collide(o.paper[0], o.paper[0].fil, f.decision)
			f.collide(o.paper[1], o.paper[1].fil, f.decision)
			f.get_duration(game.input.activePointer, o.paper[1])
			f.check()
			//arrête et redémarre l'enemi sur les obstacles
			// on met -2 car si o.length = 3 c'est à dire 0 1 2 donc l'avant dernier = 3-2
			for (let i = 0; i < o.opponent_actions.length-2; i++) {
				f.stop_opponent(o.sensor_opponent[i])
			}
			f.stop_opponent_on_the_last(o.sensor_opponent[o.sensor_opponent.length-1])
			f.check_pre_sensor()
			f.follow_pointer(o.click)
			if (o.paper[0].flag == false) {
				f.follow_text(o.paper[0])
			}
			f.anim_scale_pointer()
			f.follow_text()
			e.arrow_update(o.arrow[0])
			e.arrow_update(o.arrow[1])
			f.shadow_follow(o.paper[0],o.shadow_0)
			f.shadow_follow(o.paper[1],o.shadow_1)
		}
	},
	render: function () {
		//f.debug(o.paper[1])
		//f.debug(o.points[0].fil)
		f.debug(o.sensor)
		f.debug(o.pre_sensor)

	},
}

var how_to = {
	create: function () {
	},
};
