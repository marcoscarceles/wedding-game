module WeddingGame.State {
  export class Menu extends Phaser.State {
    background: Phaser.Sprite;

    create() {

      var style = { fontSize: '400%', fill: "#ffff00", align: "center" };

      var intro : string = `A & M QUEST

LONG LONG TIME AGO IN A SCORCHED LAND
NOT REALLY THAT FAR FAR AWAY
TWO SOULS WERE DESTINED
TO MEET EACH OTHER
BUT THEY'LL NEED A LITTLE HELP...

COLLECT ALL SPECIAL OBJECTS IN
THE SCREEN AND BRING THEM TOGETHER


PRESS ANY KEY TO CONTINUE
      `

      var text : Phaser.Text  = this.add.text(this.world.centerX, 768, intro, style);
      text.anchor.set(0.5,0);
      console.log(this.world.bottom);

      this.add.tween(text).to( { y: -100 }, 10000, "Linear", true);

      this.input.onDown.addOnce(() => {
        this.game.state.start('main');
      });
    }
  }
}
