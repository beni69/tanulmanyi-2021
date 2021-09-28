//* IMPORTS
import { STATE } from "./constants";
import { levelSelect, loadSprites, sleep } from "./helpers";
import k from "./kaboom";
import GameScene from "./scenes/game";
import TransitionScene from "./scenes/transition";

//* LOADING ASSETS
k.loadBean();
// k.loadCP437();
k.loadFont("cp437", "fonts/CP437_9x16.png", 9, 16, {
    chars: " ☺☻♥♦♣♠•◘○◙♂♀♪♫☼►◄↕‼¶§▬↨↑↓→←∟↔▲▼ !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~⌂ÇüéâäàåçêëèïîìÄÅÉæÆôöòûùÿÖÜ¢£¥₧ƒáíóúñÑªº¿⌐¬½¼¡«»░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■",
});

k.loadRoot("https://i.imgur.com/");
k.loadSprite("bus", "4TiAbx1.png");
k.loadSprite("portal", "9airF23.png");
k.loadSprite("sign", "KY971lm.png");

loadSprites(k, [
    [],
    ["EHMl2b1.jpg", "l92VXsY.jpg", "O7lnO8X.jpg", "dOMFU7B.jpg", "47J8aDD.jpg"],
]);

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
