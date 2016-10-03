var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var WeddingGame;
(function (WeddingGame) {
    var State;
    (function (State) {
        var Boot = (function (_super) {
            __extends(Boot, _super);
            function Boot() {
                _super.apply(this, arguments);
            }
            Boot.prototype.preload = function () {
                this.load.image('preload-bar', 'assets/images/preload-bar.png');
            };
            Boot.prototype.create = function () {
                this.game.stage.backgroundColor = 0xFFFFFF;
                // Assign global settings here
                this.game.state.start('preload');
            };
            return Boot;
        })(Phaser.State);
        State.Boot = Boot;
    })(State = WeddingGame.State || (WeddingGame.State = {}));
})(WeddingGame || (WeddingGame = {}));
var WeddingGame;
(function (WeddingGame) {
    var State;
    (function (State) {
        var Preload = (function (_super) {
            __extends(Preload, _super);
            function Preload() {
                _super.apply(this, arguments);
            }
            Preload.prototype.preload = function () {
                this.preloadBar = this.add.sprite(0, 148, 'preload-bar');
                this.load.setPreloadSprite(this.preloadBar);
                this.load.image('menu-background', 'assets/images/menu-background.png');
                // Load remaining assets here
                this.load.image('sky', 'assets/images/sky.png');
                this.load.image('ground', 'assets/images/platform.png');
                this.load.spritesheet('marcos', 'assets/images/marcos.png', 32, 48);
            };
            Preload.prototype.create = function () {
                this.game.state.start('menu');
            };
            return Preload;
        })(Phaser.State);
        State.Preload = Preload;
    })(State = WeddingGame.State || (WeddingGame.State = {}));
})(WeddingGame || (WeddingGame = {}));
var WeddingGame;
(function (WeddingGame) {
    var State;
    (function (State) {
        var Menu = (function (_super) {
            __extends(Menu, _super);
            function Menu() {
                _super.apply(this, arguments);
            }
            Menu.prototype.create = function () {
                var _this = this;
                this.background = this.add.sprite(80, 0, 'menu-background');
                this.input.onDown.addOnce(function () {
                    _this.game.state.start('main');
                });
            };
            return Menu;
        })(Phaser.State);
        State.Menu = Menu;
    })(State = WeddingGame.State || (WeddingGame.State = {}));
})(WeddingGame || (WeddingGame = {}));
var WeddingGame;
(function (WeddingGame) {
    var State;
    (function (State) {
        var Main = (function (_super) {
            __extends(Main, _super);
            function Main() {
                _super.apply(this, arguments);
            }
            Main.prototype.create = function () {
                //  We're going to be using physics, so enable the Arcade Physics system
                this.game.physics.startSystem(Phaser.Physics.ARCADE);
                //  A simple background for our game
                this.game.add.sprite(0, 0, 'sky');
                //  The platforms group contains the ground and the 2 ledges we can jump on
                this.platforms = this.game.add.group();
                //  We will enable physics for any object that is created in this group
                this.platforms.enableBody = true;
                // Here we create the ground.
                var ground = this.platforms.create(0, this.game.world.height - 64, 'ground');
                //  Scale it to fit the width of the game (the original sprite is 400x32 in size)
                ground.scale.setTo(2, 2);
                //  This stops it from falling away when you jump on it
                ground.body.immovable = true;
                //  Now let's create two ledges
                var ledge = this.platforms.create(400, 400, 'ground');
                ledge.body.immovable = true;
                ledge = this.platforms.create(-150, 250, 'ground');
                ledge.body.immovable = true;
                // The player and its settings
                this.player = new WeddingGame.Sprite.Player(this.game, 32, this.game.world.height - 150);
            };
            Main.prototype.update = function () {
                //  Collide the player and the stars with the platforms
                var hitPlatform = this.game.physics.arcade.collide(this.player, this.platforms);
            };
            return Main;
        })(Phaser.State);
        State.Main = Main;
    })(State = WeddingGame.State || (WeddingGame.State = {}));
})(WeddingGame || (WeddingGame = {}));
var WeddingGame;
(function (WeddingGame) {
    var State;
    (function (State) {
        var Engagement = (function (_super) {
            __extends(Engagement, _super);
            function Engagement() {
                _super.apply(this, arguments);
            }
            Engagement.prototype.preload = function () {
                this.game.forceSingleUpdate = true;
                this.load.image('eng-bg', 'assets/images/engagement-background.png');
                this.load.image('eng-mc', 'assets/images/engagement-marcos.png');
                this.load.image('eng-am', 'assets/images/engagement-arantxa.png');
                this.load.image('eng-fg', 'assets/images/engagement-foreground.png');
            };
            Engagement.prototype.create = function () {
                var elements = this.game.add.group();
                var bg = elements.create(0, 0, 'eng-bg');
                var fg = elements.create(0, 0, 'eng-fg');
                var amSprite = elements.create(800, 0, 'eng-am');
                var mcSprite = elements.create(800, 0, 'eng-mc');
                elements.bringToTop(fg);
                this.am = this.game.add.tween(amSprite).to({ x: 0 }, 2000, "Quart.easeOut", true);
                this.mc = this.game.add.tween(mcSprite).to({ x: 0 }, 2000, "Quart.easeOut");
                this.am.chain(this.mc);
            };
            return Engagement;
        })(Phaser.State);
        State.Engagement = Engagement;
    })(State = WeddingGame.State || (WeddingGame.State = {}));
})(WeddingGame || (WeddingGame = {}));
var WeddingGame;
(function (WeddingGame) {
    var Sprite;
    (function (Sprite) {
        var Player = (function (_super) {
            __extends(Player, _super);
            function Player(game, x, y) {
                _super.call(this, game, x, y, 'marcos', 0);
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
                this.cursors = game.input.keyboard.createCursorKeys();
            }
            Player.prototype.update = function () {
                //  Reset the players velocity (movement)
                this.body.velocity.x = 0;
                if (this.cursors.left.isDown) {
                    //  Move to the left
                    this.body.velocity.x = -150;
                    this.animations.play('left');
                }
                else if (this.cursors.right.isDown) {
                    //  Move to the right
                    this.body.velocity.x = 150;
                    this.animations.play('right');
                }
                else {
                    //  Stand still
                    this.animations.stop();
                    this.frame = 4;
                }
                //  Allow the player to jump if they are touching the ground.
                if (this.cursors.up.isDown && this.body.touching.down) {
                    this.body.velocity.y = -350;
                }
            };
            return Player;
        })(Phaser.Sprite);
        Sprite.Player = Player;
    })(Sprite = WeddingGame.Sprite || (WeddingGame.Sprite = {}));
})(WeddingGame || (WeddingGame = {}));
/// <reference path="../vendor/phaser-official/typescript/phaser.d.ts"/>
/// <reference path='State/Boot.ts'/>
/// <reference path='State/Preload.ts'/>
/// <reference path='State/Menu.ts'/>
/// <reference path='State/Main.ts'/>
/// <reference path='State/Engagement.ts'/>
/// <reference path='Sprite/Player.ts'/>
var WeddingGame;
(function (WeddingGame) {
    var Game = (function (_super) {
        __extends(Game, _super);
        function Game() {
            _super.call(this, 800, 600, Phaser.AUTO, 'game-div');
            this.state.add('boot', WeddingGame.State.Boot);
            this.state.add('preload', WeddingGame.State.Preload);
            this.state.add('menu', WeddingGame.State.Menu);
            this.state.add('main', WeddingGame.State.Main);
            this.state.add('engagement', WeddingGame.State.Engagement);
            this.state.start('boot');
        }
        return Game;
    })(Phaser.Game);
    WeddingGame.Game = Game;
})(WeddingGame || (WeddingGame = {}));
window.onload = function () {
    var game = new WeddingGame.Game();
};
//# sourceMappingURL=main.js.map