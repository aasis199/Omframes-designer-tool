import React, {useState } from 'react';
import { EnvStyle } from './Envstyle'; 
import "cropperjs/dist/cropper.css";
import Products from '../Products/Products';
import CustomizedDialogs from '../ImageCrop/ImageCrop';
import Button from '@restart/ui/esm/Button';

export default function Env() {

    return (
        <EnvStyle>
        <div className="container-fluid p-0">
            <div className="row">
                <div className="col-xs-12 col-lg-7 col-md-6 col-sm-12">
                    <div className="wall">
                        <div className="main middle">
                            <div className="if_frame init" id="if_frame" style={{
                                'width': '100%',
                                'border-image-slice': '100',
                                'border-style': 'solid',
                                'border-width': '20px',
                                'border-image-width': '20px',
                                'border-image-repeat': 'stretch', 
                                'border-image-source': 'url(https://omframehouse.com.np/static/frames_test/1.jpg)',
                                'box-shadow':'rgb(0 0 0 / -70%) 0px 2px 5px inset, rgb(0 0 0 / 30%) -2px 26px 30px', 
                                'z-index': '999',
                                'transform': 'translateZ(0px)',
                                'transition': 'transform 1s ease 0s',
                                'display': 'none' }} >
                                <div className="if_mat init_mat" id="if_mount" style={{
                                            'box-shadow': 'rgb(0 0 0 / 70%) 0px 2px 5px inset',
                                            'z-index': '99999',
                                            'transition': 'transform 1s ease 0s',
                                            'background': 'linear-gradient(-135deg, rgb(37, 37, 40) 0%, rgba(37, 37, 40, 0.9) 35%, rgba(37, 37, 40, 0.8) 100%)',
                                }}>
                                    <img
                                      id = 'cropImg'
                                      className="uploaded-image"
                                    />
                                </div>
                            </div> 
                        </div>
                    </div>
                </div>

                <div className="col-xs-12 col-lg-5 col-md-6 col-sm-12">                 
                        <Products />
                        <div className="" style={{'padding': '10px', 'height':'120px'}} >
                            <h3 className="fs-16 frame-name" id="frame_title">Plain Black Tabletop Picture Frame</h3>
                            <p className="fs-12 frame-desc" id="frame_desc">Versatile and Timeless - This smooth, satin finished frame pairs well with almost any artwork or photograph.</p>
                            {/* <p className="fs-12 col-1 d-flex">Price:<span id="frame_price">Rs.</span></p> */}
                        </div>

                        <div className="my-4" style={{'padding-left':'10px'}}>
                        <p className="fs-12">Outer Dimensions: <br/>Print Size: </p>
                        </div>

                        <CustomizedDialogs />
                </div>
            </div>
        </div>

        </EnvStyle>
    )
}
