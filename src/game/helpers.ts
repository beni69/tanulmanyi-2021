import type { KaboomCtx, Key } from "kaboom";
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
export const initControls = (ctrl: control[], p: player, d?: any) =>
    ctrl.forEach(c => {
        if ((c as kbControl).keys?.length) {
            (c as kbControl).fn((c as kbControl).keys as unknown as Key, () =>
                c.cb(p)
            );
            d &&
                c.dismissSign &&
                (c as kbControl).fn(
                    (c as kbControl).keys as unknown as Key,
                    () => d.dismiss()
                );
        } else {
            (c as mouseControl).fn(() => c.cb(p));
            d && c.dismissSign && (c as mouseControl).fn(() => d.dismiss());
        }
    });

export const sleep = (n: number) => new Promise(res => setTimeout(res, n));

export const addDialog = (k: KaboomCtx, p: player) => {
    let h = 160,
        pad = 16,
        bg = k.add([
            k.pos(0, k.height() - h),
            k.rect(k.width(), h),
            k.color(0, 0, 0),
            k.layer("ui"),
            k.z(100),
            k.fixed(),
        ]),
        txt = k.add([
            k.text("", { width: k.width(), size: 42 }),
            k.pos(0 + pad, k.height() - h + pad),
            k.layer("ui"),
            k.z(100),
            k.fixed(),
        ]),
        canvas = document.createElement("canvas");

    bg.hidden = true;
    txt.hidden = true;
    canvas.width = k.width();
    canvas.height = k.height();

    return {
        say(t: string) {
            txt.text = t;
            bg.hidden = false;
            txt.hidden = false;
        },
        dismiss() {
            if (
                !this.active() ||
                k
                    .get("sign")
                    .map(s => p.isColliding(s))
                    .includes(true)
            )
                return;
            txt.text = "";
            bg.hidden = true;
            txt.hidden = true;
        },
        active() {
            return !bg.hidden;
        },
        destroy() {
            bg.destroy();
            txt.destroy();
        },
        bg,
        txt,
    };
};

export const levelSelect = (k: KaboomCtx) => {
    return (n: string | number, ...args: any[]) =>
        typeof n === "string" ? k.go(n, ...args) : k.go("game", { lvl: n });
};

export const loadSprites = (k: KaboomCtx, arr: string[][]) =>
    arr.forEach((ar, i) =>
        ar.forEach((a, j) => {
            console.log(`loading ${i}-${j}: ${a}`);
            k.loadSprite(`${i}-${j}`, `/game/images/${a}`);
        })
    );
