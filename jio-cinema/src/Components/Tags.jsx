import { useState } from "react";

function Tags(){

    let [lists,setLists] = useState(["For you", "premium","laughtet chefs","bigg boss","news","bbk","movies","kids and family","cricket","aus vs ind","studios","free shows","top 10"])
    return(
        <>
        <ul className="tags">
       {lists.map((list)=>{
        return <li className="list">{list}</li>
       })}
    
        </ul>
        <div className="space">
            <img className="side1-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIM0-w43ChyvBSM5cXykYx5NV-Yl0WEX6Aqw&s" alt="" />
            <img className="main-img" src="https://www.rollingstone.com/wp-content/uploads/2024/05/SMP24V2.jpg?w=1581&h=1054&crop=1" alt="" />
            <img className="side2-img" src="https://www.tallengestore.com/cdn/shop/products/Avatar_9ea2c3a8-930b-4c06-866f-7e417ddde0d7_large.jpg?v=1634645786" alt="" />
        </div>
        </>
    )
}

export default Tags;