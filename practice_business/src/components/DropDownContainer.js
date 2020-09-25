import React,{useState} from 'react';

import DropDown from './DropDown';


function DropDownContainer(props){
    
    const [dropDown, setDropDown] = useState(generateList);


    function generateList(){
        const data =  [];
        props.data.forEach((d, index)=>{ 
            return data.push(
                <DropDown 
                    title={d.title} 
                    desc={d.desc} 
                    difficulty={d.difficulty}
                    key={index} 
                    active={false}
                    setActive={setActiveChild}
                    removeActive={removeActiveChild}
                    id={index}
                />
                )
            });
        return data;
    }


    function removeActiveChild(index){
        setDropDown(
            dropDown.map((drop) => {
                return drop.props.id === index 
                ? <DropDown title={drop.props.title} desc={drop.props.desc} key={drop.props.id} id={drop.props.id} difficulty={drop.props.difficulty}  setActive={setActiveChild} removeActive={removeActiveChild} active={false}/>
                : drop
            })
        )
    }


    function setActiveChild(index){
        setDropDown(
            dropDown.map((drop) => {
                return drop.props.id === index 
                ? <DropDown title={drop.props.title} desc={drop.props.desc} key={drop.props.id} id={drop.props.id} difficulty={drop.props.difficulty} setActive={setActiveChild} removeActive={removeActiveChild} active={true}/>
                : drop
            })
        )
    }


    
    return(
        <div className='drop-down-container'>
        {dropDown}
        </div>
    )
}

export default DropDownContainer;