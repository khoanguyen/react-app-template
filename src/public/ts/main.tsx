import './../less/main.less';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './modules/home/home';
import Services from './lib/services';
import { connect, Provider } from 'react-redux';

const store = Services.store.currentStore;

interface IAppProps {
}

interface IAppState {
}

class App extends React.Component<IAppProps, IAppState> {

    constructor(props: any) {
        super(props);
        document.title = props.state.app.name;
        
    }

    render() {
        return (
            <div className='app-main'>
                {this.props.children}
            </div>
        );
    }
}

const ConnectedApp = connect(state => {
    return {
        state
    }
}, dispatch => {
    return {
        dispatch
    }
})(App);

try {

    ReactDOM.render(
        <Provider store={store}>
            <BrowserRouter>
                <ConnectedApp>
                    <Switch>
                        <Route exact path="/" render={props => <Home {...props} />} />
                    </Switch>
                </ConnectedApp>
            </BrowserRouter>
        </Provider >,
        document.getElementById('divMainBody')
    );
    Services.logger.info("App started");
} catch (error) {
    Services.logger.error("Failed to start");
    Services.logger.error(error);
}
