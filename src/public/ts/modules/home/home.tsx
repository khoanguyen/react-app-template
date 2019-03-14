import React, { Dispatch } from 'react';
import { RouteComponentProps, StaticContext } from 'react-router';
import { connect } from 'react-redux';
import Services from '../../lib/services';
import homeReducer, { IHomeState } from './reducers';
import HomeActions from './actions';

interface IHomeProps extends RouteComponentProps<any, StaticContext, any> {
    state: IHomeState
    dispatch: Dispatch<any>
}

class Home extends React.Component<IHomeProps, any> {    

    constructor(props: any) {
        super(props);
        
        this._onRandomizeClicked = this._onRandomizeClicked.bind(this);
    }

    private _onRandomizeClicked() {
        this.props.dispatch(HomeActions.randomize(1000));
    }

    render() {        
        const state = this.props.state;

        return <div>
            <h1>{state.title}</h1>
            <div>
                <label>Random Number: </label><b>{state.randomNumber}</b>
                <br />
             <button className='btn btn-primary my-btn' onClick={this._onRandomizeClicked}>Randomize</button>           
            </div>
        </div>;
    }
}

export default connect(
    (state: any) => {
        return { state: state.home };
    },
    dispatch => {
        return { dispatch };
    })(Home);

Services.store.combineReducer({ home: homeReducer });