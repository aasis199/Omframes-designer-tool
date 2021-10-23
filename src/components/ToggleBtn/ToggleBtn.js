import React,{useState} from 'react'
import $ from 'jquery';

export default function ToggleBtn() {
    return (
        <div className=" p-2">
            <label class="switch">
                       <input type="checkbox" ></input>
                        <span class="slider round"></span>
            </label>
        </div>
    )
}
