import type { KaboomCtx } from "kaboom";

export const isDebug = () =>
    new URLSearchParams(window.location.search).get("debug") === "true";

// gamer moment
export const fpsCounter = (k: KaboomCtx) => {
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
