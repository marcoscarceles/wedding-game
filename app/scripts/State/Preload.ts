module WeddingGame.State {
  export class Preload extends Phaser.State {

    preload() {
      this.load.spritesheet('marcos', 'assets/images/character-sprite-marcos.png', 64, 64, 16);
      this.load.spritesheet('arantxa', 'assets/images/character-sprite-arantxa.png', 64, 64, 16);

      this.game.load.image('faculty-bg', 'assets/images/science-faculty-1024.png');
      this.game.load.tilemap('faculty-map', 'assets/tilemaps/maps/tiny-quest-1024-768.json', null, Phaser.Tilemap.TILED_JSON);
      this.game.load.image('faculty-tiles', 'assets/tilemaps/tiles/tiny-quest.png');
      this.load.image('atom', 'assets/images/atom.png');
    }

    create() {
      this.game.state.start('menu');
    }
  }
}
