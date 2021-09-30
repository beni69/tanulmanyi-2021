import { MOVE_SPEEDS, STATE } from "../constants";
import { PLAYER_CONTROLS } from "../controls";
import { addDialog, fpsCounter, initControls, sleep } from "../helpers";
import k from "../kaboom";
import { BASE_LVLCONF, LEVELS } from "../levels";
import type { LvlConf, Sign } from "../types";

export const GameScene = ({ lvl }: { lvl: number }) => {
    lvl ||= 0;
    console.log(`level ${lvl}`);

    // reset speed
    STATE.set("speed", MOVE_SPEEDS[0]);

    k.layers(["bg", "game", "player", "ui"], "game");

    const LEVEL: LvlConf = {
        ...BASE_LVLCONF,
        ...LEVELS[lvl][1],
    };

    const level = k.addLevel(LEVELS[lvl][0], LEVEL);

    k.add([
        k.sprite(LEVEL.background.name),
        k.scale(
            k.width() / LEVEL.background.width,
            k.height() / LEVEL.background.height
        ),
        k.origin("topleft"),
        k.layer("bg"),
        k.fixed(),
    ]);

    k.get("sign").forEach(s => (s as Sign).pushOutAll());

    // create player
    const player = k.add([
        k.sprite("bean"),
        k.layer("player"),
        k.pos(k.width() / 2, 0),
        k.area({}),
        k.body(),
        "player",
    ]);

    // signs
    const dialog = addDialog(k, player);
    //@ts-ignore
    STATE.get("_debug") && (globalThis.d = dialog);
    console.log({ d: dialog });

    player.collides("sign", s => dialog.say(s.msg));

    player.collides("bus", bus =>
        k.go("transition", () => k.go("game", { lvl: ++lvl }))
    );

    // wait before listening for controls
    sleep(500).then(() => initControls(PLAYER_CONTROLS, player, dialog));

    k.keyPress("enter", () => {
        k.burp();
        k.shake(8);
    });

    //* make the camera follow the player
    player.action(() => k.camPos(player.pos));

    STATE.get("_debug") && fpsCounter(k);
};
export default GameScene;
