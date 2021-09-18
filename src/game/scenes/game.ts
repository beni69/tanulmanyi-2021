import { PLAYER_CONTROLS } from "../controls";
import { fpsCounter, initControls, isDebug } from "../helpers";
import k from "../kaboom";
import { BASE_LVLCONF, LEVELS } from "../levels";

export const GameScene = ({ lvl }: { lvl: number }) => {
    console.log(`level ${lvl}`);

    k.layers(["bg", "game", "player", "ui"], "game");

    const level = k.addLevel(LEVELS[lvl][0], {
        ...BASE_LVLCONF,
        ...LEVELS[lvl][1],
    });

    // create player
    const player = k.add([
        k.sprite("bean"),
        k.layer("player"),
        k.pos(k.width() / 2, 0),
        k.area({}),
        k.body(),
    ]);

    player.collides("bus", bus => {
        k.go("transition", () => k.go("game", { lvl: ++lvl }));
    });

    // start listening for the controls
    initControls(PLAYER_CONTROLS, player);

    k.keyPress("enter", () => {
        k.burp();
        k.shake(8);
    });

    //* make the camera follow the player
    player.action(() => k.camPos(player.pos));

    isDebug() && fpsCounter(k);
};
export default GameScene;
