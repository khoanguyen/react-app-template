import React from 'react';
import ReactDOM from 'react-dom';
import { Student } from './model';
import $ from 'jquery';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './modules/home/home';

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
