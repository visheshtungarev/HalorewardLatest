import React ,{useState}from "react";
import './index.css';

const CategoryBox = ({value,isclass}) =>{
    const [isActive, setActive] = useState(false);

  const toggleClass = () => {
    setActive(!isActive);
  };
    return(
        <div className={isActive ? 'active unit ' +isclass  : 'unit '+isclass} onClick={toggleClass} >{value}</div>
    )
}

export default CategoryBox;