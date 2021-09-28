import { isDebug } from "./helpers";

export const MOVE_SPEEDS = [320, 640], // [0] normal speed [1] sprint speed
    STATE = new Map<string, any>([
        ["_debug", isDebug()],
        ["speed", MOVE_SPEEDS[0]],
    ]);
