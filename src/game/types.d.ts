import type {
    AreaComp,
    BodyComp,
    Character,
    EventCanceller,
    GameObj,
    Key,
    LayerComp,
    LevelConf,
    OriginComp,
    PosComp,
    ScaleComp,
    SpriteComp,
} from "kaboom";

type player = GameObj<SpriteComp | LayerComp | PosComp | AreaComp | BodyComp>;

type control = kbControl | mouseControl;
interface kbControl {
    keys: Key[];
    fn: (k: Key, cb: () => void) => EventCanceller;
    cb: controlCB;
    dismissSign?: boolean;
}
interface mouseControl {
    fn: (cb: () => void) => EventCanceller;
    cb: controlCB;
    dismissSign?: boolean;
}
type controlCB = (p: player) => void;

interface LvlConf extends LevelConf {
    background: { name: string; width: number; height: number };
}

type Sign = Character<
    | SpriteComp
    | AreaComp
    | ScaleComp
    | OriginComp
    | {
          msg: string;
      }
>;
