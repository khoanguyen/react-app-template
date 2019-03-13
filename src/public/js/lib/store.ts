import { Store, createStore, applyMiddleware, combineReducers } from "redux";
import appReducer from "../store/app-reducer";
import { IAppAction } from "../store/base-action";


export interface IStoreService {
    readonly currentStore: Store<{}, IAppAction>;
    combineReducer(reducerWrap: { [key: string]: (state: any, action: IAppAction) => any }): void;
}

class DefaultStoreService implements IStoreService {
    private _currentStore: Store<{}, IAppAction>;
    private _currentReducerMap: { [key: string]: (state: any, action: IAppAction) => any }

    get currentStore(): Store<{}, IAppAction> {
        return this._currentStore;
    }

    constructor() {        
        this._currentReducerMap = {
            app: appReducer
        };

        //this._currentStore = createStore(combineReducers(this._currentReducerMap), applyMiddleware(ReduxThunk));
        this._currentStore = createStore(combineReducers(this._currentReducerMap));
    }

    combineReducer(reducerWrap: { [key: string]: (state: any, action: IAppAction) => any }): void {

        if (!reducerWrap) return;

        const l_newWrap = {
            ...(this._currentReducerMap),
            ...reducerWrap
        }
        this._currentReducerMap = l_newWrap;
        this._currentStore.replaceReducer(combineReducers(this._currentReducerMap));
    }

}

const storeService: IStoreService = new DefaultStoreService();

export default storeService;