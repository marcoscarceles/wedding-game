/// <reference path="../vendor/phaser-official/typescript/phaser.d.ts"/>

/// <reference path='State/Boot.ts'/>
/// <reference path='State/Preload.ts'/>
/// <reference path='State/Menu.ts'/>
/// <reference path='State/Main.ts'/>
/// <reference path='State/Engagement.ts'/>

/// <reference path='Sprite/Player.ts'/>

module WeddingGame {
  export class Game extends Phaser.Game {
    constructor() {
      super(1024, 768, Phaser.AUTO, 'game-div');

      this.state.add('boot', State.Boot);
      this.state.add('preload', State.Preload);
      this.state.add('menu', State.Menu);
      this.state.add('main', State.Main);
      this.state.add('engagement', State.Engagement);

      this.state.start('boot');
    }
  }
}

window.onload = () => {
  var game = new WeddingGame.Game();
}
