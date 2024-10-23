import Phaser from "phaser"
import gameStartScene from "./scenes/GameStartScene"
import gameOverScene from "./scenes/GameOverScene"
import CoronaBusterScene from "./scenes/CoronaBusterScene"

const config = {
	type: Phaser.AUTO,
	parent: "app",
	width: 400,
	height: 620,
	physics: {
		default: "arcade",
		arcade: {
			gravity: { y: 0 },
		},
	},
	scene: [gameStartScene, CoronaBusterScene, gameOverScene],
	scale: {
		mode: Phaser.Scale.FIT,
		autoCenter: Phaser.Scale.CENTER_BOTH,
	},
}

export default new Phaser.Game(config)
