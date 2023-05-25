import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncotrolledRating";
import {UncontrolledOnOff} from "./components/UnControlledOnOff/UncontrolledOnOff";
import {OnOff} from "./components/OnOff/OnOff";

function App() {
    const [ratingValue,setRatingValue] = useState<RatingValueType>(0)
    const [accordionCollapsed,setAccordionCollapsed]=useState<boolean>(false)
    const [switchOn,setSwitchOn] = useState<boolean>(false)

    return (
        <div className={"App"}>
            {/*<UncontrolledAccordion titleValue={"Menu"} collapsed ={true}/>*/}
            {/*<UncontrolledAccordion titleValue={"Users"} collapsed={false}/>*/}

            {/*<Rating value={1} />*/}
            {/*<Rating value={2} />*/}
            {/*<Rating value={3} />*/}
            {/*<Rating value={4} />*/}
            {/*<Rating value={5} />*/}
            <UncontrolledRating  />

            <Accordion titleValue={"MENUUUU"}
                       collapsed={accordionCollapsed}
                       onChange={()=>{setAccordionCollapsed(!accordionCollapsed)}}
            />



            <Rating value={ratingValue} onClick={setRatingValue}/>

            <UncontrolledOnOff on={true} onChange={setSwitchOn}/>
            {switchOn.toString()}

            {/*<OnOff on={switchOn} onChange={ setSwitchOn }/>*/}








            {/*OnOff2_______________*/}
            {/*<OnOff2 active={true}/>*/}
            {/*<OnOff2 active={false}/>*/}

        </div>
    );
}

type PageTitlePropsType = {
    title:string
}
function PageTitle(props: PageTitlePropsType) {
    console.log("PageTitle rendering")
    return <h1>{ props.title }</h1>
}

export default App;
