import type { CompList, EventCanceller, Key, Vec2 } from "kaboom";

interface control {
    keys: Key[];
    fn: (k: Key, cb: () => void) => EventCanceller;
    cb: () => void;
}

interface LevelConf {
    width: number;
    height: number;
    pos?: Vec2;
}
