// si true montre la grille snap des enemis et render debug

var flag = {
	start_game: false,
	heart:false,//pour éviter de lancer 2 x cette animation
}

var f = {}

var o = {
	background_main: "obj",
}
var te = {

}
var b = {
	play: "",
	how_to: "",
	timer: "",
}
var e = {//effects

}

var interface = {

}
// a supprimer

var tw = {
	0:"something",
	1:"something",
};
var click_tw;
var t = {
	searching_opponent: 500,
	pointer_duration: 500,
	start_opponent: 3000,
	show_looser: 1000, //temps du délai de l'animation du looser
	show_heart : "",
	looser: 3000, //temps de l'animation pour l'apparition du looser
	cloud: 500,
	start_game: 1500 + 4000,
	wait_end_game : 3000,
}
t.show_heart = t.show_looser - 500

var h = 2270;
var w = 1480;

var h2 = h * .5;

var w2 = w * .5;
var w0 = Math.round(w * .19);
var w4 = Math.round(w * .75);


o.sensor_p = {
	image: "line_collision",
	x: w2,
	y: 3655,
	a: 1,
	flag: true,
	anchorx: .5,
	anchory: 0,
	//g: game,
	physics: true,
	immovable: true,
}
//o.sensor = new _obj(o.sensor_p)


o.pre_sensor_p = {
	image: "line_collision",
	x: w2,
	y: 2270 + 620,
	a: 1,
	flag: true,
	//g: game,
	physics: true,
	immovable: true,
}

