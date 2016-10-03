module WeddingGame.State {
  export class Engagement extends Phaser.State {

    preload() {

      this.game.forceSingleUpdate = true;

      this.load.image('eng-bg', 'assets/images/engagement-background.png');
      this.load.image('eng-mc', 'assets/images/engagement-marcos.png');
      this.load.image('eng-am', 'assets/images/engagement-arantxa.png');
      this.load.image('eng-fg', 'assets/images/engagement-foreground.png');
    }

    mc : Phaser.Tween;
    am : Phaser.Tween

    create() {

      var elements = this.game.add.group();
      var bg = elements.create(0, 0, 'eng-bg');
      var fg = elements.create(0, 0, 'eng-fg');
      var amSprite = elements.create(800, 0, 'eng-am');
      var mcSprite = elements.create(800, 0, 'eng-mc');

      elements.bringToTop(fg);

      this.am = this.game.add.tween(amSprite).to( { x: 0 }, 2000, "Quart.easeOut", true);
      this.mc = this.game.add.tween(mcSprite).to( { x: 0 }, 2000, "Quart.easeOut");

      this.am.chain(this.mc);
    }

    // render() {
    //   am.start();
    // }
  }
}
