module WeddingGame.State {
  export class Main extends Phaser.State {

    platforms: Phaser.Group;
    arantxa: WeddingGame.Sprite.Player;
    marcos: WeddingGame.Sprite.Player;
    atom: Phaser.Sprite;
    layer: Phaser.TilemapLayer;

    create() {

      //  We're going to be using physics, so enable the Arcade Physics system
      this.game.physics.startSystem(Phaser.Physics.ARCADE);

      //  A simple background for our game
      this.add.sprite(0, 0, 'faculty-bg');

      // The players and their settings
      this.arantxa = new Sprite.Player(this.game, 32, this.world.centerY, 'arantxa');
      this.marcos = new Sprite.Player(this.game, this.world.width-32, this.world.centerY, 'marcos', true);

      //Items
      this.atom = this.add.sprite(this.world.centerX, this.world.bottom - 300, 'atom');
      this.atom.anchor.setTo(0.5, 0.5);
      this.atom.scale.setTo(0.5, 0.5);
      this.game.physics.arcade.enable(this.atom);

      //Map
      var map = this.add.tilemap('faculty-map');
      map.addTilesetImage('tiny-quest', 'faculty-tiles');
      this. layer = map.createLayer('main');
      this.layer.resizeWorld();
      map.setCollisionBetween(49, 62);

    }

    update() {
      //  Collide the player and the stars with the platforms
      this.game.physics.arcade.collide(this.arantxa, this.layer);
      this.game.physics.arcade.collide(this.marcos, this.layer);
      this.game.physics.arcade.collide(this.arantxa, this.marcos);

      this.game.physics.arcade.overlap(this.arantxa, this.atom, this.collectAtom, null, this);
      this.game.physics.arcade.overlap(this.marcos, this.atom, this.collectAtom, null, this);

      this.atom.angle += 3;
    }

    collectAtom() {
      this.atom.kill();
    }
  }
}
