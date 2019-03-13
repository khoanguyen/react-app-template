import { IAppState, initialAppState } from "./app-state";

export default function appReducer(state: IAppState, action: any) {
    return state || initialAppState;
}