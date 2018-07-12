
f.start_game = () => {

	f.prompt();
	create_main()
	//camera() // to zoom th game with keyboard up and down
	//f.random_division(330)
	co(o.opponent_actions)
	start_timer("a")
	//tw.searching_opponent = _tr(o.searching_opponent_tw)


	//here all the timer to start the succession of action
	var ev={//events
		t:[
			t.searching_opponent * (o.searching_opponent.number+1) * 2,
			t.cloud + o.cloud_tw[0].d,
			900,
			8000,

		]
	}
	//all events are sum to the previous
	ev.tc=[];
	let summed_actions = 0
	f.convert_events_time = () => {
		for (var i = 0; i < ev.t.length; i++){
			summed_actions += ev.t[i] 
			ev.tc.push(summed_actions)
		}
	}	

	f.convert_events_time()


	// animation pour chercher l'enemi
	f.start_searching_opponent = () => {
		//game.add.tween(o.searching_opponent).to({ alpha: 1 }, t.searching_opponent, Phaser.Easing.Linear.None, true,0,2);
		_tw(o.searching_opponent_tw,0)
		//wait(()=>{tw[0].pause()},800)
	}

	//animation pour faire apparaitre le nom de l'enemi
	f.start_cloud = () => {
		//o.circle_search_opponent.alpha = 0
		o.searching_opponent.alpha = 0
		for (let i = 0; i < o.cloud_length; i++) {
			wait(() => { o.cloud[i].visible = true }, o.cloud_tw[0].d)
			_tr(o.cloud_tw[i])
		}
		wait(() => { interface[0].visible = true }, o.cloud_tw[0].d)
		wait(() => { interface.roll[0].visible = true }, o.cloud_tw[0].d)
		wait(() => { interface.points[0].visible = true }, o.cloud_tw[0].d)
		wait(() => { interface.points[0].visible = true }, o.cloud_tw[0].d)
		wait(() => { interface.puissance[0].visible = true }, o.cloud_tw[0].d)
		//wait(start_timer, o.cloud_tw[0].d + 1000)
	}

	// compte à rebours pour lancer le jeu
	f.start_timer = ()=>{
		interface.decount.visible=true

		var decount=()=>{
			interface.decount.count = interface.decount.count -1	
			interface.decount.text = interface.decount.count 
		}

		var ready = ()=>{
			interface.decount.text = "ready"
			o.ready_tw = {
				o: interface.decount, //object
				t: 350, //time
				d: 100, //delay
				a: 0, //alpha
				e: Phaser.Easing.Bounce.In, //Easing
				r: 0, //rotation
				sx: 2.5,
				sy: 2.5,
				y:true,
			}
			_tr(o.ready_tw)
		}
		//wait(decount,700)
		//wait(decount,1400)
		wait(ready,100)
		wait(()=>{interface.decount.visible=false},800)
	}



	tw_click=game.add.tween(o.click.scale).to({ x: 2, y :2 }, 200, Phaser.Easing.Linear.None, true, 0, -1, true);

	//appel des differents events avec les time_converted spécifique
	f.start_searching_opponent()
	wait(f.start_cloud,ev.tc[0])
	wait(f.start_timer,ev.tc[1])

	wait(()=>{f.wait_start_game(o.paper[0], 0)},ev.tc[2])
	wait(()=>{f.wait_start_game(o.paper[1], 0)},ev.tc[2])
	wait(f.input, ev.tc[2])
	//wait(f.stop_opponent, t.start_game + t.start_opponent)
	//wait(() => { o.paper[0].body.moves = false; o.paper[0].flag_dont_move = true }, t.start_opponent)
	wait(f.check_distance, ev.tc[3])
	wait(()=>{interface.restart.visible=true}, ev.tc[3])
	//wait(() => { f.show_looser(o.looser_tw_1) }, ev.tc[3])
	flag.start_game=true

	//animation des papiers vers le joueur gagnant
	//wait(()=>{f.anim_paper_winner(interface.roll_0.x)},8000)
}
