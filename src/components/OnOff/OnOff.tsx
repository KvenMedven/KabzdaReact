import React, {useState} from 'react';

type PropsType={
    on:boolean
    onChange:(props:boolean)=>void
}



export const OnOff = (props:PropsType) => {





    const onStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display:"inline-block",
        padding:"2px",
        background: props.on ? "green" : "transparent"
    }
    const offStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display:"inline-block",
        marginLeft:"2px",
        padding:"2px",
        background: props.on ? "transparent" : "red"
    }

    const indicatorStyle = {
        width: "10px",
        height: "10px",
        borderRadius:"10px",
        border:"1px solid black",
        display:"inline-block",
        marginLeft:"5px",
        padding:"2px",
        background: props.on ? "green" : "red"
    }

    return (
        <div>
            <div style={onStyle} onClick={() => {props.onChange(true)}}>On</div>
            <div style={offStyle} onClick={() => {props.onChange(false)}}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    );
};
