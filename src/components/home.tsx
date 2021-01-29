import React from 'react'
import '../App.global.css'

export class Home extends React.Component {

    componentDidMount() {

    }

    render() {
        return  <div className="application-grid">
                    <div className="application-top-bar">
                        <div className="application-title">PIXEL COMMANDER</div>
                    </div>
                    <div className="application-side-bar">
                        <div className="sidebar-item sidebar-item-selected">    
                            Static Color
                        </div>
                        <div className="sidebar-item">    
                            Gradient
                        </div>
                        <div className="sidebar-item">    
                            Hue
                        </div>
                        <div className="sidebar-item">    
                            Breath
                        </div>
                        <div className="sidebar-item">    
                            Ambient
                        </div>
                        <div className="sidebar-item">    
                            Warm Daylight
                        </div>
                        <div className="sidebar-item">    
                            Animation
                        </div>
                        <div className="sidebar-item">    
                            Matrix
                        </div>
                        <div className="sidebar-item">    
                            Custom
                        </div>
                    </div>
                    <div className="application-content">
                    </div>
                    <div className="application-bottom-bar"></div>
                </div>;
    }
}