import React from 'react';

interface IState {

}

interface IProps {

}

export class StaticColorView extends React.Component<IProps, IState> {
    
    constructor(props: IProps) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        return  <div>
                    Static Color.
                </div>
    }
}
