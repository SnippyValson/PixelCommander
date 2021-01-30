import React from 'react';
import { HashRouter as Router, Switch, Route, RouteComponentProps } from 'react-router-dom'
import { StaticColorView } from './staticColor';
import { GradientView } from './gradient';
import { HueView } from './hue';
import { BreathView } from './breath';
import { AmbientView } from './ambient';
import { WarmDayLightView } from './warmDayLight';
import { AnimationView } from './animation';
import { MatrixView } from './matrix';
import { CustomView } from './custom';

import '../App.global.css';

interface IMatchParams {

}

interface IState {
    selectedSidebarItem: string;
}

interface IProps extends RouteComponentProps<IMatchParams> {

}

export class Home extends React.Component<IProps, IState> {

    constructor(props: IProps) {
        super(props);
        this.state = { selectedSidebarItem: 'static-color' }
    }

    componentDidMount() {
        
    }

    private onItemSideBarItemClicked(tag: string, event: React.MouseEvent<HTMLDivElement>): void {
        this.setState( {selectedSidebarItem: tag} );
        this.props.history.push(`${this.props.match.url}/${tag}`);
    }

    private checkSelected(tag: string): string {
        return this.state.selectedSidebarItem === tag ? 'sidebar-item-selected' : '';
    }

    render() {
        return  <div className="application-grid">
                    <div className="application-top-bar">
                        <div className="application-title">PIXEL COMMANDER</div>
                    </div>
                    <div className="application-side-bar">
                        <div className={`sidebar-item ${this.checkSelected('static-color')}`} onClick={ this.onItemSideBarItemClicked.bind(this, 'static-color') }>    
                            Static Color
                        </div>
                        <div className={`sidebar-item ${this.checkSelected('gradient')}`} onClick={ this.onItemSideBarItemClicked.bind(this, 'gradient') }>    
                            Gradient
                        </div>
                        <div className={`sidebar-item ${this.checkSelected('hue')}`} onClick={ this.onItemSideBarItemClicked.bind(this, 'hue') }>    
                            Hue
                        </div>
                        <div className={`sidebar-item ${this.checkSelected('breath')}`} onClick={ this.onItemSideBarItemClicked.bind(this, 'breath') }>    
                            Breath
                        </div>
                        <div className={`sidebar-item ${this.checkSelected('ambient')}`} onClick={ this.onItemSideBarItemClicked.bind(this, 'ambient') }>    
                            Ambient
                        </div>
                        <div className={`sidebar-item ${this.checkSelected('warm-daylight')}`} onClick={ this.onItemSideBarItemClicked.bind(this, 'warm-daylight') }>    
                            Warm Daylight
                        </div>
                        <div className={`sidebar-item ${this.checkSelected('animation')}`} onClick={ this.onItemSideBarItemClicked.bind(this, 'animation') }>    
                            Animation
                        </div>
                        <div className={`sidebar-item ${this.checkSelected('matrix')}`} onClick={ this.onItemSideBarItemClicked.bind(this, 'matrix') }>    
                            Matrix
                        </div>
                        <div className={`sidebar-item ${this.checkSelected('custom')}`} onClick={ this.onItemSideBarItemClicked.bind(this, 'custom') }>    
                            Custom
                        </div>
                    </div>
                    <div className="application-content">
                        <Router>
                            <Switch>
                                <Route path={`${this.props.match.url}/static-color`} component={StaticColorView}></Route>
                                <Route path={`${this.props.match.url}/gradient`} component={GradientView}></Route>
                                <Route path={`${this.props.match.url}/hue`} component={HueView}></Route>
                                <Route path={`${this.props.match.url}/breath`} component={BreathView}></Route>
                                <Route path={`${this.props.match.url}/ambient`} component={AmbientView}></Route>
                                <Route path={`${this.props.match.url}/warm-daylight`} component={WarmDayLightView}></Route>
                                <Route path={`${this.props.match.url}/animation`} component={AnimationView}></Route>
                                <Route path={`${this.props.match.url}/matrix`} component={MatrixView}></Route>
                                <Route path={`${this.props.match.url}/custom`} component={CustomView}></Route>
                            </Switch>
                        </Router>
                    </div>
                    <div className="application-bottom-bar"></div>
                </div>;
    }
}