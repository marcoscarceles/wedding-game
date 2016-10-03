module WeddingGame.State {
  export class Preload extends Phaser.State {
    private preloadBar: Phaser.Sprite;

    preload() {
      this.preloadBar = this.add.sprite(0, 148, 'preload-bar');
      this.load.setPreloadSprite(this.preloadBar);

      this.load.image('menu-background', 'assets/images/menu-background.png');

      // Load remaining assets here
      this.load.image('sky', 'assets/images/sky.png');
      this.load.image('ground', 'assets/images/platform.png');
      this.load.spritesheet('marcos', 'assets/images/marcos.png', 32, 48);
    }

    create() {
      this.game.state.start('menu');
    }
  }
}
