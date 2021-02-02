/* Import styles. */
import '../App.global.css';
import style from './staticColor.style.css';

import React from 'react';
import Switch from "react-switch";
import Select from 'react-select';

interface IState {
    
    /**
     * Indicates if colors have to cycled. 
     */
    cycle: boolean;

    /**
     * Indicates if the 'breathing' effect should be turned on. 
     */
    breath: boolean;
}

interface IProps {

}

export class StaticColorView extends React.Component<IProps, IState> {
    
    private transitions:any[];

    constructor(props: IProps) {
        super(props);
        this.transitions = [ { value:'fade', label: 'Fade' }, { value:'none', label: 'None' } ];
        this.handleCycleChanged = this.handleCycleChanged.bind(this);
        this.handleBreathChanged = this.handleBreathChanged.bind(this);
        this.state = { cycle: false, breath: true };
    }

    /**
     * Custom styles for the react-select component.
     * https://react-select.com/styles
     */
    customStyles = {
        control: (provided:any, state:any) => ({
          ...provided,
          minHeight: '30px',
          height: '30px',
          boxShadow: state.isFocused ? null : null,
        }),
        valueContainer: (provided:any, state:any) => ({
          ...provided,
          height: '30px',
          padding: '0 6px'
        }),
        input: (provided:any, state:any) => ({
          ...provided,
          margin: '0px',
        }),
        indicatorsContainer: (provided:any, state:any) => ({
          ...provided,
          height: '30px',
        }),
      };

    componentDidMount() {

    }

    handleCycleChanged = (cycle:boolean) => {
        this.setState( { cycle: cycle } )
    };

    handleBreathChanged = (breath:boolean) => {
        this.setState( { breath: breath } )
    };

    render() {
        return  <div className={`${style.layout}`}>
                    <div className={`${style.topRow}`}>
                        <div className={`${style.colorChooser} application-card`}>
                            <div className={`${style.titleBar}`}>
                                <label className={`${style.heading}`}>Color List</label>
                                <button className={`${style.addButton} ${style.rightItem}`}>+</button>
                            </div>
                            <div>
                                <ul>
                                    <li>Test</li>
                                    <li>Test</li>
                                    <li>Test</li>
                                    <li>Test</li>
                                    <li>Test</li>
                                </ul>
                            </div>               
                        </div>
                        <div className={`${style.colorParams} application-card`}>
                        <div>
                            <div className={`${style.titleBar}`}>
                                <label>Settings</label>
                            </div>
                            <div className={`${style.params}`}>
                                <div className={`${style.row}`}>
                                    <label>Cycle</label>
                                    <Switch height={20} width={40} uncheckedIcon={false} checkedIcon={false} onChange = {this.handleCycleChanged} checked={this.state.cycle} className={`${style.rightItem}`} />
                                </div>
                                <div className={`${style.row}`}>
                                    <label>Breath</label>
                                    <Switch height={20} width={40} uncheckedIcon={false} checkedIcon={false} onChange = {this.handleBreathChanged} checked={this.state.breath} className={`${style.rightItem}`}/>
                                </div>
                                <div className={`${style.row}`}>
                                    <label style={{ alignSelf:'center' }} >Transition</label>
                                    <Select styles={this.customStyles}  options={this.transitions}  className={`${style.rightItem} ${style.transitionChooser}`}/>
                                </div>
                                <div className={`${style.row}`}>
                                    <label style={{ alignSelf:'center' }} >Transition duration</label>
                                    <input style={{ width:'150px', height: '22px' }} className={`${style.rightItem}`}></input>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className={`${style.bottomRow}`}>
                        <div className={`${style.logs} application-card`}>
                            <div className={`${style.titleBar}`}>
                                <label className={`${style.heading}`}>Communication logs</label>
                                <button className={`${style.addButton} ${style.rightItem}`}>Clear</button>
                            </div>
                            <div>
                                <ul>
                                    <li>Test</li>
                                    <li>Test</li>
                                    <li>Test</li>
                                    <li>Test</li>
                                    <li>Test</li>
                                </ul>
                            </div>     
                        </div>
                    </div>
                </div>
    }
}
