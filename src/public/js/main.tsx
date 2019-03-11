import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './modules/home/home';
import * as Services from './lib/services';

interface IAppProps {
}

interface IAppState {
}

class App extends React.Component<IAppProps, IAppState> {

    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div className='app-main'>
                {this.props.children}
            </div>
        );
    }
}

try {

    ReactDOM.render(
        <BrowserRouter>
            <App>
                <Switch>
                    <Route exact path="/" render={props => <Home {...props} />} />
                </Switch>
            </App>
        </BrowserRouter>,
        document.getElementById('divMainBody')
    );
    Services.Logger.log("App started");
} catch (error) {
    Services.Logger.error("Failed to start");
    Services.Logger.error(error);
}
