module WeddingGame.Sprite {

    export class Player extends Phaser.Sprite {

        cursors: any;

        constructor(game: Phaser.Game, x: number, y: number) {

            super(game, x, y, 'arantxa', 0);

            game.physics.arcade.enable(this);

            //  Player physics properties. Give the little guy a slight bounce.
            this.body.bounce.y = 0.2;
            this.body.gravity.y = 300;
            this.body.collideWorldBounds = true;

            //  Our animations
            this.animations.add('front', [0, 1, 2, 3], 10, true);
            this.animations.add('right', [4, 5, 6, 7], 10, true);
            this.animations.add('back', [8, 9, 10, 11], 10, true);
            this.animations.add('left', [12, 13, 14, 15], 10, true);

            this.anchor.setTo(0.5, 0);

            game.add.existing(this);

            this.cursors = game.input.keyboard.createCursorKeys();
        }

        update() {

          //  Reset the players velocity (movement)
          this.body.velocity.x = 0;

          if (this.cursors.left.isDown)
          {
              //  Move to the left
              this.body.velocity.x = -150;

              this.animations.play('left');
          }
          else if (this.cursors.right.isDown)
          {
              //  Move to the right
              this.body.velocity.x = 150;

              this.animations.play('right');
          }
          else
          {
              //  Stand still
              this.animations.stop();

              this.frame = 0;
          }

          //  Allow the player to jump if they are touching the ground.
          if (this.cursors.up.isDown && this.body.touching.down)
          {
              this.body.velocity.y = -350;
          }

        }

    }

}
