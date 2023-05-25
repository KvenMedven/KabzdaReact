import React, {useState} from "react";

type AccordionPropsType = {
    titleValue: string,
    collapsed: boolean
}

function UncontrolledAccordion(props: AccordionPropsType) {
    console.log("Accordion rendering")

    const [collapsed,setCollapsed] = useState(false);
        return <div>
            <AccordionTitle title={props.titleValue} onClick={()=>{setCollapsed(!collapsed)}}/>
            {!collapsed && <AccordionBody/>}
        </div>
}

type AccordionTitlePropsType = {
    title: string
    onClick:()=>void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle Rendering")
    return <h3 onClick={props.onClick}>{props.title}</h3>
}


function AccordionBody() {
    console.log("AccordionBody Rendering")
    return <div>
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    </div>
}


export default UncontrolledAccordion;