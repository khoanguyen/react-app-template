import React from 'react';
import { RouteComponentProps, StaticContext } from 'react-router';

interface IHomeProps extends RouteComponentProps<any, StaticContext, any> {

}

export default class Home extends React.Component<IHomeProps, any> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return <div>Home</div>;
    }
}