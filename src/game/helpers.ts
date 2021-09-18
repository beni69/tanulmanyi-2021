import type { KaboomCtx, Key } from "kaboom";
import { MOVE_SPEEDS, STATE } from "./constants";
import type { control, kbControl, mouseControl, player } from "./types";

export const isDebug = () =>
    new URLSearchParams(window.location.search).get("debug") === "true";

// gamer moment
export const fpsCounter = (k: KaboomCtx) => {
    const fpsCounter = k.add([
        k.text("fps", { size: 50 }),
        k.layer("ui"),
        k.fixed(),
    ]);

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

// kill me pls
export const initControls = (ctrl: control[], p: player) =>
    ctrl.forEach(c =>
        (c as kbControl).keys?.length
            ? (c as kbControl).fn((c as kbControl).keys as unknown as Key, () =>
                  c.cb(p)
              )
            : (c as mouseControl).fn(() => c.cb(p))
    );

export const sleep = (n: number) => new Promise(res => setTimeout(res, n));

export const resetSpeed = () => STATE.set("speed", MOVE_SPEEDS[0]);
