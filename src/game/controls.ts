import { MOVE_SPEEDS, STATE } from "./constants";
import k from "./kaboom";
import type { control } from "./types";

const speed = () => STATE.get("speed") as number;

export const BASE_CONTROLS: control[] = [
        {
            keys: ["right", "d"],
            fn: k.keyDown,
            cb: p => p.move(speed(), 0),
        },
        {
            keys: ["left", "a"],
            fn: k.keyDown,
            cb: p => p.move(-speed(), 0),
        },
        {
            fn: k.mouseDown,
            cb: p => p.move(speed(), 0),
        },
    ],
    PLAYER_CONTROLS: control[] = [
        ...BASE_CONTROLS,
        {
            keys: ["up", "w", "space"],
            fn: k.keyPress,
            cb: p => p.grounded() && p.jump(),
        },

        {
            keys: ["down", "s"],
            fn: k.keyPress,
            cb: p => (p.weight = 3),
        },
        {
            keys: ["down", "s"],
            fn: k.keyRelease,
            cb: p => (p.weight = 1),
        },
        // sprinting logic
        // type conversion needed because kaboom d.ts doesnt have "shift" key but it still works
        {
            keys: ["shift"],
            fn: k.keyDown,
            cb: () => STATE.set("speed", MOVE_SPEEDS[1]),
        } as unknown as control,
        {
            keys: ["shift"],
            fn: k.keyRelease,
            cb: () => STATE.set("speed", MOVE_SPEEDS[0]),
        } as unknown as control,
    ];
