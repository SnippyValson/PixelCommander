import React from 'react';

interface IState {

}

interface IProps {

}

export class AmbientView extends React.Component<IProps, IState> {
    
    constructor(props: IProps) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        return  <div>
                    Ambient.
                </div>
    }
}
