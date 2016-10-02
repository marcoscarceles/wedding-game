module WeddingGame.Sprite {

    export class Player extends Phaser.Sprite {

        constructor(game: Phaser.Game, x: number, y: number) {

            super(game, x, y, 'marcos', 0);

            game.physics.arcade.enable(this);

            //  Player physics properties. Give the little guy a slight bounce.
            this.body.bounce.y = 0.2;
            this.body.gravity.y = 300;
            this.body.collideWorldBounds = true;

            //  Our two animations, walking left and right.
            this.animations.add('left', [0, 1, 2, 3], 10, true);
            this.animations.add('right', [5, 6, 7, 8], 10, true);

            this.anchor.setTo(0.5, 0);

            game.add.existing(this);

        }

        update() {

          var cursors = this.game.input.keyboard.createCursorKeys();


          //  Reset the players velocity (movement)
          this.body.velocity.x = 0;

          if (cursors.left.isDown)
          {
              //  Move to the left
              this.body.velocity.x = -150;

              this.animations.play('left');
          }
          else if (cursors.right.isDown)
          {
              //  Move to the right
              this.body.velocity.x = 150;

              this.animations.play('right');
          }
          else
          {
              //  Stand still
              this.animations.stop();

              this.frame = 4;
          }

          //  Allow the player to jump if they are touching the ground.
          if (cursors.up.isDown && this.body.touching.down)
          {
              this.body.velocity.y = -350;
          }

        }

    }

}
