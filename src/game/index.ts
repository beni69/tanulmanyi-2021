//* IMPORTS
import kaboom from "kaboom";
import { fpsCounter, initControls, isDebug } from "./helpers";
import type { control, LevelConf } from "./types";

const k = kaboom({ touchToMouse: true, debug: isDebug() });

//* CONSTANTS
const MOVE_SPEEDS = [320, 640];

let SPEED = MOVE_SPEEDS[0];

//* LOADING ASSETS
// load the default sprite "bean"
//@ts-ignore
k.loadBean();
k.loadRoot("https://i.imgur.com/");
k.loadSprite("sus", "VIX8Yyh.png");

const LAYERS = k.layers(["bg", "game", "player", "ui"], "game");

//* LEVELS
const LEVELS = [
        [
            "                ",
            "                ",
            "                ",
            "================",
        ],
        [
            "                ",
            "                ",
            " 0 1            ",
            "================",
        ],
    ],
    BASE_LVLCONF: LevelConf = { width: 256, height: 64 };

k.scene("game", (lvl: number) => {
    console.log("hello");

    k.addLevel(LEVELS[lvl], {
        ...BASE_LVLCONF,
        "=": () => [
            k.rect(256, 48),
            k.outline(4),
            k.solid(),
            k.area({}),
            k.color(127, 200, 255),
        ],
        "0": () => [k.text("hello"), k.origin("bot")],
        "1": () => [k.sprite("sus"), k.origin("bot")],
    });
    //
    // create player
    const player = k.add([
        k.sprite("bean"),
        k.layer("player"),
        k.pos(120, 80),
        k.area({}),
        k.body(),
    ]);

    //* CONTROLS
    const CONTROLS: control[] = [
        {
            keys: ["up", "w", "space"],
            fn: k.keyPress,
            cb: () => player.grounded() && player.jump(),
        },
        {
            keys: ["right", "d"],
            fn: k.keyDown,
            cb: () => player.move(SPEED, 0),
        },
        {
            keys: ["left", "a"],
            fn: k.keyDown,
            cb: () => player.move(-SPEED, 0),
        },
        {
            keys: ["down", "s"],
            fn: k.keyPress,
            cb: () => (player.weight = 3),
        },
        {
            keys: ["down", "s"],
            fn: k.keyRelease,
            cb: () => (player.weight = 1),
        },
        // sprinting logic
        {
            //@ts-ignore
            keys: ["shift"],
            fn: k.keyDown,
            cb: () => (SPEED = MOVE_SPEEDS[1]),
        },
        {
            //@ts-ignore
            keys: ["shift"],
            fn: k.keyRelease,
            cb: () => (SPEED = MOVE_SPEEDS[0]),
        },
    ];
    initControls(CONTROLS);

    k.keyPress("enter", () => {
        k.burp();
        k.shake(8);
    });
    k.mouseDown(() => player.move(SPEED, 0));

    //* CAMERA
    // make the camera follow the player
    player.action(() => k.camPos(player.pos));
});

go("game", 1);

// move input focus to the game
k.focus();

if (isDebug()) {
    k.debug.log("game started in debug mode");
    fpsCounter(k);
}
