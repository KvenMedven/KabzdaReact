import React from 'react';

type OnOffPropsType = {
    active:boolean
}

const OnOff = (props:OnOffPropsType) => {



    const wrapper = {
        display: 'flex'
    };

    const onStyle = {
        width: '30px',
        height: '30px',
        backgroundColor: props.active ? 'green' : 'transparent',
    };

    const offStyle = {
        width: '30px',
        height: '30px',
        display: 'inline-block',
        backgroundColor: !props.active ? 'red' : 'transparent',
    };
    const circleStyle = {
        width: '30px',
        height: '30px',
        borderRadius: '50%',
        backgroundColor: props.active ? 'green' : 'red',
    };

    return (
        <div style={wrapper}>
            <div className={"On"} style={onStyle}>On</div>
            <div className={"Off"} style={offStyle}>Off</div>
            <div className={'Circle'} style={circleStyle}></div>

        </div>
    );
};

export default OnOff;