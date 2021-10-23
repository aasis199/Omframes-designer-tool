import Button from '@material-ui/core/Button';
import React, {useState} from 'react';
import { IndexStyle } from './indexStyle';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Env from '../Env/Env';
import Tabletop from '../Tabletop/Tabletop';

export default function Index({startFraming}) {

    return (
        <IndexStyle>
            <Router>
            <Route path="/tabletop-design" component={Tabletop}/>
            <Route path="/design" component={Env}/>
                <div className="container p-0">
                    <div className="text-center row mt-5 justify-content-around">
                        <h1 className="fs-25">What would you like to frame?</h1>
                        <p className="fs-12">Choose below or <a href="https://www.omframehouse.com.np/">contact us</a> if you need any help</p>
                        <div className="col-lg-5 col-xs-11 col-md-6 custom_size border mt-1 p-2">
                            <div className="images">
                                <img src="https://omframehouse.com.np/static/images/quality/7.png" className="w-100 p-3"/>
                            </div>
                            <h9 className="fs-14">Customize a frame at any size.</h9><br/>
                            <Button autofocus variant='contained' href="/design" align="center">Start Framing</Button>
                        </div>
                        <div className="col-lg-5 col-xs-11 col-md-6 tabletop_size border mt-1 p-2" >
                            <div className="images">
                                <img src="https://omframehouse.com.np/media/Tabletop%20Photo%20Frame.png" className="w-100 p-3"/>
                            </div>
                            <h9 className="fs-14">Customize a frame for Tabletop Picture Frames.</h9><br/>
                            <Button autofocus variant='contained' href="/tabletop-design" align="center">Start Framing</Button>
                        </div>
                    </div>
                </div>
            </Router>
        </IndexStyle>
    )
}
