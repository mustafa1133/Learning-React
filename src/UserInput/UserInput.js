import React from 'react'

const UserInput= (props) =>{
return(
<div>
    <input type="text" onChange={props.changedname} value={props.currentname}/>
</div>
);
}

export default UserInput;