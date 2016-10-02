module WeddingGame.State {
  export class Main extends Phaser.State {

    platforms: Phaser.Group;
    player: Phaser.Sprite;

    create() {

      //  We're going to be using physics, so enable the Arcade Physics system
      this.game.physics.startSystem(Phaser.Physics.ARCADE);

      //  A simple background for our game
      this.game.add.sprite(0, 0, 'sky');

      //  The platforms group contains the ground and the 2 ledges we can jump on
      this.platforms = this. game.add.group();

      //  We will enable physics for any object that is created in this group
      this.platforms.enableBody = true;

      // Here we create the ground.
      var ground = this.platforms.create(0, this.game.world.height - 64, 'ground');

      //  Scale it to fit the width of the game (the original sprite is 400x32 in size)
      ground.scale.setTo(2, 2);

      //  This stops it from falling away when you jump on it
      ground.body.immovable = true;

      //  Now let's create two ledges
      let ledge = this.platforms.create(400, 400, 'ground');

      ledge.body.immovable = true;

      ledge = this.platforms.create(-150, 250, 'ground');

      ledge.body.immovable = true;

      // The player and its settings
      this.player = new Sprite.Player(this.game, 32, this.game.world.height - 150);

    }

    update() {
      //  Collide the player and the stars with the platforms
      var hitPlatform = this.game.physics.arcade.collide(this.player, this.platforms);
    }
  }
}
