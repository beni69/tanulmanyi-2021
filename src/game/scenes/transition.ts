import { MOVE_SPEEDS, STATE } from "../constants";
import { BASE_CONTROLS } from "../controls";
import { fpsCounter, initControls } from "../helpers";
import k from "../kaboom";
import { BASE_LVLCONF } from "../levels";

export const TransitionScene = (cb: () => any) => {
    // do some animations
    console.log("transition");

    // reset speed
    STATE.set("speed", MOVE_SPEEDS[0]);

    k.layers(["bg", "game", "player", "ui"], "game");

    k.addLevel(
        [
            "                        ",
            "                        ",
            "                  @     ",
            "========================",
        ],
        {
            ...BASE_LVLCONF,
            height: 32,
            "@": () => [
                k.sprite("portal"),
                k.area({}),
                k.origin("bot"),
                "portal",
            ],
            "1": () => [k.text("welcome!")],
        }
    );

    k.add([
        k.sprite(BASE_LVLCONF.background.name),
        k.scale(
            k.width() / BASE_LVLCONF.background.width,
            k.height() / BASE_LVLCONF.background.height
        ),
        k.origin("topleft"),
        k.layer("bg"),
        k.fixed(),
    ]);

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

    STATE.get("_debug") && fpsCounter(k);
};
export default TransitionScene;
