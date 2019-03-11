import React from 'react';
import ReactDOM from 'react-dom';
import { Student } from './model';
import $ from 'jquery';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './modules/home/home';



interface IAppProps {
    studentName?: string;
}

interface IAppState {
    student?: Student | null;
}

class App extends React.Component<IAppProps, IAppState> {

    studentName: React.RefObject<HTMLInputElement>;

    constructor(props: any) {
        super(props)

        this.studentName = React.createRef();

        this.state = {
            student: this.props.studentName ? new Student(this.props.studentName) : null
        };

        this._onSay = this._onSay.bind(this);
    }

    /**
     * @private
     */
    _onSay() {
        const l_input = this.studentName.current;

        if (l_input) {
            const $input: JQuery<HTMLInputElement> = $(l_input);

            this.setState({
                student: l_input.value ? new Student(l_input.value) : null
            });
        }
    }

    render() {
        const student = this.state.student;

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
