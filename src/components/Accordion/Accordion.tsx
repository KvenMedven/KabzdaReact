import React from "react";

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onChange:()=>void
}

function Accordion(props: AccordionPropsType) {
    console.log("Accordion rendering")
        return <div>
            <AccordionTitle title={props.titleValue}
                            collapsed={props.collapsed}

                            onChange={props.onChange}
            />
            {!props.collapsed && <AccordionBody/>}
        </div>


}

// function Accordion2(props: AccordionPropsType) {
//     console.log("Accordion rendering")
//     if (props.collapsed) {
//         return <div>
//             <AccordionTitle title={props.titleValue}/>
//         </div>
//     } else {
//         return (
//             <div>
//                 <AccordionTitle title={props.titleValue}/>
//                 <AccordionBody/>
//             </div>
//
//         )
//     }
//
// }

type AccordionTitlePropsType = {
    title: string
    collapsed: boolean
    onChange:()=>void

}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle Rendering")
    return <h3 onClick={props.onChange}>{props.title}</h3>
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


export default Accordion;