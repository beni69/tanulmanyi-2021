import { BASE_CONTROLS } from "../controls";
import { fpsCounter, initControls, isDebug, resetSpeed } from "../helpers";
import k from "../kaboom";
import { BASE_LVLCONF } from "../levels";

export const TransitionScene = (cb: () => any) => {
    // do some animations
    console.log("transition");

    // reset speed
    resetSpeed();

    k.layers(["bg", "game", "player", "ui"], "game");

    k.addLevel(
        [
            "                                ",
            "                                ",
            "                          @     ",
            "================================",
        ],
        {
            ...BASE_LVLCONF,
            "@": () => [
                k.sprite("portal"),
                k.area({}),
                k.origin("bot"),
                "portal",
            ],
            "1": () => [k.text("welcome!")],
        }
    );

    const bus = k.add([
        k.sprite("bus", { flipX: true }),
        k.layer("player"),
        k.pos(k.width() / 2, 1),
        k.scale(0.69),
        k.area({}),
        k.body(),
    ]);

    initControls([...BASE_CONTROLS], bus);

    bus.action(() => k.camPos(bus.pos));

    bus.collides("portal", () => cb());

    isDebug() && fpsCounter(k);
};
export default TransitionScene;
