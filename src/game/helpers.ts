import type { KaboomCtx } from "kaboom";
import type { control } from "./types";

export const isDebug = () =>
    new URLSearchParams(window.location.search).get("debug") === "true";

// gamer moment
export const fpsCounter = (k: KaboomCtx) => {
    const fpsCounter = k.add([
        k.text("fps"),
        k.layer("ui"),
        k.fixed(),
        k.stay(),
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

export const initControls = (ctrl: control[]) =>
    ctrl.forEach(c => c.keys.forEach(key => c.fn(key, c.cb)));
