
//var parameter ={
//  e: Phaser.Easing.Bounce.Out,
//  i: 0, //number repeat
//  y: true, //yoyo
//  a: 0, // alpha
//  t: 500, //time
//  d:100, // delay
//  r: 45, //rotation
//  dx:100, //distance
//  dy:200,
//  sx:1, //scale
//  sy:1,
//}
var _tw = (p,n) => { //transition,game,parameter
	//game.add.tween(p.o).to({ alpha: p.a }, p.t, p.e, true, p.d, 2,true);
	if (p.e == null) {
		p.e = Phaser.Easing.Linear.None
	}	
	if (p.i == null) {
		p.i = 0
	}
	if (p.y == null) {
		p.y = false
	}
	if (p.a != null) { // alpha
		tw[n]=game.add.tween(p.o).to({ alpha: p.a }, p.t, p.e, true, p.d, p.i, p.y);
	}
	if (p.r != null) { //rotation
		tw[n] = game.add.tween(p.o).to({ angle: p.r }, p.t, p.e, true, p.d, p.i, p.y);
	}
	if (p.sx != null) { //scale
		tw[n]= game.add.tween(p.o.scale).to({ x: p.sx, y: p.sy }, p.t, p.e, true, p.d, p.i, p.y);
	}
	if (p.dx != null) { //displacement
		tw[n] = game.add.tween(p.o).to({ x: p.dx, y: p.dy }, p.t, p.e, true, p.d, p.i, p.y);
	}

	tw[n].c = () => {
		if (p.c != null) {
			let time_adapted = p.d + p.t + p.ctime
			wait(p.callback, time_adapted)
		}
	}

	tw[n].p = () => { //pause
		tw[n].pause()
	}
	tw[n].r = () => { //resume
		tw[n].resume()
	}
}







var _tr = (p) => { //transition,game,parameter
	if (p.e == null) {
		p.e = Phaser.Easing.Linear.None
	}
	if (p.i == null) {
		p.i = 0
	}

	this.s = () => { // start tween
		if (p.a != null) { // alpha
			this.tw = game.add.tween(p.o).to({ alpha: p.a }, p.t, p.e, true, p.d, p.i);
		}
		if (p.onstart != null) { // alpha
			wait(p.onstart, p.d)
		}
		if (p.r != null) { //rotation
			this.tw = game.add.tween(p.o).to({ angle: p.r }, p.t, p.e, true, p.d, p.i);
		}
		if (p.sx != null) { //scale
			this.tw = game.add.tween(p.o.scale).to({ x: p.sx, y: p.sy }, p.t, p.e, true, p.d, p.i);
		}
		if (p.dx != null) { //displacement
			this.tw = game.add.tween(p.o).to({ x: p.dx, y: p.dy }, p.t, p.e, true, p.d, p.i);
		}
		if (p.y != null) {
			this.tw.yoyo(true, p.dyo)
		}

		this.c = () => {
			if (p.c != null) {
				let time_adapted = p.d + p.t + p.ctime
				wait(p.callback, time_adapted)
			}
		}


	}

	this.p = () => { //pause
		this.tw.pause()
	}
	this.r = () => { //resume
		this.tw.resume()
	}
	this.s() //start the tween
	this.c()
}


