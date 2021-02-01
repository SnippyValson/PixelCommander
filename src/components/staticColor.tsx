import React from 'react';
import '../App.global.css';
import style from './staticColor.style.css';

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
        return  <div className={`${style.layout}`}>
                    <div className={`${style.topRow}`}>
                        <div className={`${style.colorChooser} application-card`}>
                            Static chooser.
                        </div>
                        <div className={`${style.colorParams} application-card`}>
                            Color params.
                        </div>
                    </div>
                    <div className={`${style.bottomRow}`}>
                        <div className={`${style.logs} application-card`}>

                        </div>
                    </div>
                </div>
    }
}
