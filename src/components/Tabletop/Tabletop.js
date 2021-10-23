import React, {useState } from 'react';
import $ from 'jquery';
import { TableStyle } from './TableStyle';
import Products from '../Products/Products';
import ProductsSmall from '../Products/ProductsSmall'
import CustomizedDialogsSmall from '../ImageCrop/ImageCropSmall';


export default function Tabletop(){

    return (
        <TableStyle>
        <div className="container-fluid p-0">
            <div className="row">
                <div className="col-xs-12 col-lg-7 col-md-6 col-sm-12">
                    <div className="wall ">
                        <div className="main middle">
                            <div className="overlay">
                                <div className="if_frame middle" id="if_frame"></div>
                                <div className="if_mount" id="if_mount">
                                    <img id = 'cropImg' class="uploaded_image middle"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-xs-12 col-lg-5 col-md-6 col-sm-12">                 
                        {/* <div className="d-none d-md-block mt-4" style={{'padding': '10px', 'height': '150px'}} >
                            <h3 className="fs-16 frame-name" id="frame_title">Plain Black Tabletop Picture Frame</h3>
                            <p className="fs-12 frame-desc" id="frame_desc">Versatile and Timeless - This smooth, satin finished frame pairs well with almost any artwork or photograph.</p>
                            <p className="fs-14">Outer Dimensions:</p>
                        </div> */}
                        <ProductsSmall />
                        <div className="" style={{'padding': '10px', 'height':'120px'}} >
                            <h3 className="fs-16 frame-name" id="frame_title">Plain Black Tabletop Picture Frame</h3>
                            <p className="fs-12 frame-desc" id="frame_desc">Versatile and Timeless - This smooth, satin finished frame pairs well with almost any artwork or photograph.</p>
                            <p className="fs-12 col-1 d-flex">Price:Rs.<span id="frame_price">490.0</span></p>
                        </div>

                        <div className="my-4" style={{'padding-left':'10px'}}>
                        <p className="fs-12">Outer Dimensions: 9 inch x 11 inch<br/>Print Size: 5 inch x 7 inch</p>
                        </div>

                        <CustomizedDialogsSmall />
                </div>
            </div>
        </div>

        </TableStyle>
    )
}