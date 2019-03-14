import { HOME_ACTIONS, IRandomizeAction } from "./actions";
import { IAppAction } from "../../store/base-action";

export interface IHomeState {
    title: string
    randomNumber: number
}

const initial: IHomeState = {
    title: "App Title",
    randomNumber: Math.random()
}

const reducers: { [key: string]: (state: IHomeState, action: any) => IHomeState } = {
    [HOME_ACTIONS.RANDOMIZE]: randomize
}

/**
 * Home module reducer
 * @param state 
 * @param action 
 */
export default function homeReducer(state = initial, action: IAppAction) {
    if (reducers[action.type]) return reducers[action.type](state, action);
    return state;
}

/**
 * --------------Reducers--------------
 */

 /**
  * RANDOMIZE reducer
  * 
  * @param state 
  * @param action 
  */
function randomize(state: IHomeState, action: IRandomizeAction) : IHomeState {    
    return {
        ...state,
        randomNumber : Math.random() * action.factor
    }    
}