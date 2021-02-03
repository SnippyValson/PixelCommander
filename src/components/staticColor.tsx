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

    /**
     * The list of colors to be set on the neopixel.
     * If there are more than on color the cocors w
     */
    colors: string[];
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
        this.handleColorsChanged =this.handleColorsChanged.bind(this);
        this.state = { cycle: false, breath: true, colors: ['#FF0000', '#00FF00', '#0000FF'] };
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

    handleColorsChanged(color:string, index:number) {
        let colors = this.state.colors;
        colors[index] = color;
        this.setState({ colors: colors });
    }

    render() {
        return  <div className={`${style.layout}`}>
                    <div className={`${style.topRow}`}>
                        <div className={`${style.colorChooser} application-card`}>
                            <div className={`${style.titleBar}`}>
                                <label className={`${style.heading}`}>Color List</label>
                                <button className={`${style.addButton} ${style.rightItem}`}>+</button>
                            </div>
                            <ul style={{ marginRight: '10px' }} >
                                {
                                    /**
                                     * The idea here is to use the array map function to map the array elements into corresponding UI elements.
                                     * Eventhough it looks like this could be wapped into a reusable component, doing so will only make things complex.
                                     * Also it is necessary to set the state with updated colors or the color chooser doesn't work.
                                     */
                                    this.state.colors.map((c, i) => <div className={`${style.row}`}>
                                                                        <div style={{background:`${c}`, width : '100px', height: '25px', borderRadius: '5px', display: 'inline-block', marginRight: '10px'}}></div>
                                                                        <input className={`${style.rightItem}`} value={`${c}`} type={'color'} onChange={ e => {this.handleColorsChanged(e.target.value, i);}}></input>
                                                                    </div>)
                                }
                            </ul>
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
