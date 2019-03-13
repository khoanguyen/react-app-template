export interface IAppAction {
    type: string;
    moduleName: string
};

export abstract class ActionFactory {
    moduleName: string;

    constructor(moduleName: string) {
        this.moduleName = moduleName;
    }

    createAction<TAction extends IAppAction>(type: string, extend: any) : TAction {
        return {
            moduleName: this.moduleName,
            type: type,
            ...extend
        } as TAction;
    }
}