import React from 'react';

interface IState {

}

interface IProps {

}

export class CustomView extends React.Component<IProps, IState> {
    
    constructor(props: IProps) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        return  <div>
                    Custom.
                </div>
    }
}
