//* IMPORTS
import { isDebug, sleep } from "./helpers";
import k from "./kaboom";
import GameScene from "./scenes/game";
import TransitionScene from "./scenes/transition";

const DEBUG = isDebug();

//* LOADING ASSETS
//@ts-ignore
k.loadBean();
k.loadRoot("https://i.imgur.com/");
k.loadSprite("sus", "VIX8Yyh.png");
k.loadSprite("bus", "4TiAbx1.png");
k.loadSprite("portal", "9airF23.png");

//* SCENES
k.scene("game", GameScene);
k.scene("transition", TransitionScene);

//* STARTUP
if (DEBUG) {
    k.debug.log("game started in debug mode");
    sleep(3000).then(() => k.debug.clearLog());
}

k.go("game", { lvl: 0 });

// move input focus to the game
k.focus();

console.log(`${k.width()}x${k.height()}`);
