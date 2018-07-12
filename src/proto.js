
_button = function (image, posx, posy, fun_call_back) {
	this.image = image
	this.posx = posx
	this.posy = posy
	this.fun_call_back = fun_call_back
	this = game.add.button(this.posx, this.posy, this.image, this.anim_on_click, this)
	this.visible = false
	this.anchor.setTo(.5, .5)
	this.scale.setTo(0, 0)
	this.flag = true
	this.sound_click = game.add.audio('click')
}

button.prototype.audio_click = function () {
	this.sound_click.play()
}

_button.prototype.show_button = function () {
	this.visible = true
	this.tween_scale_button = game.add.tween(this.scale).to({ x: 1, y: 1 }, 150, Phaser.Easing.Bounce.Out, true, 0)
}

_button.prototype.anim_on_click = function () {
	if (this.flag) {
		this.flag = false
		this.audio_click()
		this.tween_anim_on_click = game.add.tween(this.scale).to({ x: .8, y: .8 }, 150, Phaser.Easing.Bounce.Out, true, 0)
		this.tween_anim_on_click.onComplete.add(this.fun_call_back, this)
	}
}



example1 = function () { this.ob = game.add.sprite(100, 100, "cible_shadow") }
example1.prototype.can_play = true


//necessary to attribut of this in example1
example2 = function () { example1.call(this); this.another_param = 10 }
//necessary to method of example1
example2.prototype = Object.create(example1.prototype)

example2.prototype.show_param = function () {
	alert(this.ob.x)
	alert(this.another_param)
	alert(this.can_play)
}

