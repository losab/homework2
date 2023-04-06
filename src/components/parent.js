import React from "react"; 
import Child from "./child";
const Parent = ()=>{
    const isUserLoggedIn =false;
    const Users = [
    {fname:'Demna', lname:'Gvasalia', age:42, id:999},
    {fname:'Sandro',lname:'Kekelia', age:24, id:609}];
    return (
        <Child
        isUserLoggedIn = {isUserLoggedIn}
        users ={Users}
        />
    )
};
export default Parent;


