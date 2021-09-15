//* IMPORTS
import kaboom from "kaboom";
import { fpsCounter, isDebug } from "./helpers";

const k = kaboom({ touchToMouse: true });

if (isDebug()) fpsCounter(k);

//* CONSTANTS
const MOVE_SPEED = 320;

//* LOADING ASSETS
// load the default sprite "bean"
//@ts-ignore
k.loadBean();

// create player
const player = k.add([k.sprite("bean"), k.pos(120, 80), k.area({}), k.body()]);

// add a platform
k.add([
    k.pos(0, 480),
    k.rect(width(), 48),
    k.outline(4),
    k.solid(),
    k.area({}),
    k.color(127, 200, 255),
]);

//* CONTROLS
k.keyPress("up", () => player.grounded() && player.jump());
k.keyPress("space", () => player.jump());
k.keyDown("right", () => player.move(MOVE_SPEED, 0));
k.keyDown("left", () => player.move(-MOVE_SPEED, 0));
k.keyPress("down", () => (player.weight = 3));
k.keyRelease("down", () => (player.weight = 1));
k.mouseDown(() => player.move(MOVE_SPEED, 0));

// move input focus to the game
k.focus();
