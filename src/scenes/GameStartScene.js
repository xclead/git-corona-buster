import Phaser from "phaser"
export default class gameStartScene extends Phaser.Scene {
	constructor() {
		super("start-scene")
	}

	init(data) {
		this.startButton = undefined
	}

	preload() {
		this.load.image("background", "images/bg_layer1.png")
		this.load.image("gamestart", "images/gamestart.png")
		this.load.image("start-button", "images/start-btn.png")
	}
	create() {
		this.add.image(200, 320, "background")
		this.add.image(200, 200, "gamestart")
		this.startButton = this.add.image(200, 400, "start-button").setInteractive().setScale(0.5)
		this.startButton.once(
			"pointerup",
			() => {
				this.scene.start("corona-buster-scene")
			},
			this
		)
	}

	update(time) {}
}
