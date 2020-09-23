import React,{useState} from 'react';

import DropDown from './DropDown';


function DropDownContainer(props){
    
    const [dropDown, setDropDown] = useState(generateList());

    function generateList(){
        const data =  [];
        props.data.forEach((d, index)=>{ 
            return data.push(
                <DropDown 
                    title={d.title} 
                    desc={d.desc} 
                    key={index} 
                    active={false}
                    setActive={setActiveChild}
                    id={index}
                />
                )
            });
        return data;
    }

    // function resetActiveChild(){
    //     const data = dropDown;
    //     data.forEach(d => d.active = false);
    //     return data;
    // }

    function setActiveChild(index){
        const data = generateList();
        const {title, desc, id} = data[index].props;
        data[index] = <DropDown title={title} desc={desc} key={id} id={id}  setActive={setActiveChild} active={true}/>
        setDropDown(data);
    }


    
    return(
        <div className='drop-down-container'>
        {dropDown}
        </div>
    )
}

export default DropDownContainer;