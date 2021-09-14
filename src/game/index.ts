//* IMPORTS
import kaboom from "kaboom";
const k = kaboom();

//* CONSTANTS
const MOVE_SPEED = 480;

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
k.keyPress("up", () => player.jump());
k.keyPress("space", () => player.jump());
k.keyDown("right", () => player.move(MOVE_SPEED, 0));
k.keyDown("left", () => player.move(-MOVE_SPEED, 0));

// move input focus to the game
k.focus();

// gamer moment
const fpsCounter = () => {
    const fpsCounter = k.add([k.text("fps")]);

    const times: number[] = [];
    let fps: number;

    k.render(() => {
        const now = window.performance.now();
        while (times.length > 0 && times[0] <= now - 1000) times.shift();

        times.push(now);
        fps = times.length;

        fpsCounter.text = `fps: ${fps}`;
    });
};
fpsCounter();
