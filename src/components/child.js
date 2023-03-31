import React from "react";

const Child = (props)=> {
    console.log(props);
    return (
        <div>
        {props.isUserLoggedIn?(<>
           {props.users.map((user)=>{
           return(<p>
                {user.fname} {user.lname} , age: {user.age}
            </p>)
           })} </>):<p>user isn't logged in</p>}
        </div>
    )
}
export default Child;