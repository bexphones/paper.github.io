_obj = function (p) {
	p.flag != null ? this.flag = p.flag : this.flag = "undefined"
	Phaser.Sprite.call(this, p.g, p.x, p.y, p.image);
	p.a != null ? this.alpha = p.a : this.alpha = 1
	p.v != null ? this.visible = p.v : this.visible = true
	p.name != null ? this.name = p.name : this.name = "undefined"
	p.anchorx != null ? this.anchor.x = p.anchorx : this.anchor.x = .5
	p.anchory != null ? this.anchor.y = p.anchory : this.anchor.y = .5
	p.sx != null ? this.scale.x = p.sx : this.scale.x = 1
	p.sy != null ? this.scale.y = p.sy : this.scale.y = 1
	if (p.physics != null) {
		p.g.physics.arcade.enable(this)
		if (p.gravity) {
			this.body.allowGravity = true
		} else {
			this.body.allowGravity = false
		}
		if (p.immovable) {
			this.body.immovable = true
		}
		if (p.moves != null) {
			this.body.moves = false
		}
		if (p.bounce != null) {
			this.body.bounce.set(p.bounce)
		}
		if (p.noscale == null) {
			//			this.scale.y = p.g.heigth/2270 
			//			this.scale.x = this.scale.y *.65 
			//			co(p.g.heigth,"here")
		}
	}
	p.g.add.existing(this)
}


_obj.prototype = Object.create(Phaser.Sprite.prototype);

_obj.prototype.constructor = _obj

//define x and y position
_obj.prototype.de = function (...arg) {
	this.x = arg[0]
	this.y = arg[1]
}

//define xscale and yscale 
_obj.prototype.sc = function (...arg) {
	this.scale.x = arg[0]
	this.scale.y = arg[1]
}
//define anchor  
_obj.prototype.an = function (...arg) {
	this.anchor.x = arg[0]
	this.anchor.y = arg[1]
}
