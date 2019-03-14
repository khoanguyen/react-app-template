import { IAppAction, ActionFactory } from "../../store/base-action";
import Services from "../../lib/services";

const moduleName = "Home";

export const HOME_ACTIONS = {
    HOME_RANDOMIZE: 'HOME_RANDOMIZE'
}

export interface IHomeActionFactory {
    /**
     * Returns Randomize action
     * @param factor 
     */
    randomize(factor: number): IRandomizeAction;
}

class HomeActionFactory extends ActionFactory implements IHomeActionFactory {
    constructor() {
        super(moduleName);
    }
   
    randomize(factor: number): IRandomizeAction {
        Services.logger.info("Randomizing a new number");
        return this.createAction(HOME_ACTIONS.HOME_RANDOMIZE, { factor });
    }
}

const HomeActions: IHomeActionFactory = new HomeActionFactory();
export default HomeActions;

//#region Actions
export interface IRandomizeAction extends IAppAction {
    factor: number;
}
//#endregion


