//* IMPORTS
import { STATE } from "./constants";
import { levelSelect, loadSprites, sleep } from "./helpers";
import k from "./kaboom";
import { IMAGES } from "./levels";
import GameScene from "./scenes/game";
import TransitionScene from "./scenes/transition";

//* LOADING ASSETS
k.loadBean();
k.loadFont("cp437", "fonts/CP437_9x16.png", 9, 16, {
    chars: k.CP437_CHARS,
});

loadSprites(k, IMAGES);
k.loadSprite("bg-1", "/game/images/bg-1.png");
k.loadSprite("bg-2", "/game/images/bg-2.jpg");

k.loadRoot("https://i.imgur.com/");
k.loadSprite("bus", "4TiAbx1.png");
k.loadSprite("portal", "9airF23.png");
k.loadSprite("sign", "KY971lm.png");

//* SCENES
k.scene("game", GameScene);
k.scene("transition", TransitionScene);

//* STARTUP
if (STATE.get("_debug")) {
    k.debug.log("game started in debug mode");
    sleep(3000).then(() => k.debug.clearLog());
    //@ts-ignore
    globalThis.k = k;
    //@ts-ignore
    globalThis.lvl = levelSelect(k);
}

k.go("game", { lvl: 0 });

// move input focus to the game
k.focus();

console.log(`${k.width()}x${k.height()}`);
