import type {
    AreaComp,
    BodyComp,
    EventCanceller,
    GameObj,
    Key,
    LayerComp,
    PosComp,
    SpriteComp,
} from "kaboom";

type player = GameObj<SpriteComp | LayerComp | PosComp | AreaComp | BodyComp>;

type control = kbControl | mouseControl;
interface kbControl {
    keys: Key[];
    fn: (k: Key, cb: () => void) => EventCanceller;
    cb: controlCB;
}
interface mouseControl {
    fn: (cb: () => void) => EventCanceller;
    cb: controlCB;
}
type controlCB = (p: player) => void;
