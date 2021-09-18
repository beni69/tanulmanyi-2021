import type { LevelConf } from "kaboom";
import k from "./kaboom";

export const LEVELS: [string[], any][] = [
        [
            [
                "  1  2                  ",
                "     3     4            ",
                "                     @  ",
                "========================",
            ],
            {
                "1": () => [k.text("hello!")],
                "2": () => [k.text("mozogj a nyilakkal"), k.scale(0.75)],
                "3": () => [k.text("vagy kattints"), k.scale(0.7)],
                "4": () => [k.text("erre ->"), k.scale(0.9)],
            },
        ],
        [
            [
                "                ",
                "                ",
                " 0 1            ",
                "================",
            ],
            {
                "0": () => [k.text("hello"), k.origin("bot")],
                "1": () => [k.sprite("sus"), k.origin("bot")],
            },
        ],
    ],
    BASE_LVLCONF: LevelConf = {
        width: 128,
        height: 64,
        "=": () => [
            k.rect(128, 48),
            k.outline(4),
            k.solid(),
            k.area({}),
            k.color(127, 200, 255),
        ],
        "@": () => [
            k.sprite("bus"),
            k.area({}),
            k.body(),
            k.scale(0.69),
            k.origin("bot"),
            "bus",
        ],
    } as unknown as LevelConf;
