export const elements ={
    menuArea:document.getElementById("menu-area"),
    buttonsArea:document.getElementById("buttons-area"),
    outlet:document.getElementById("outlet")
};


export const calculatePrice=(price)=>{
    let newprice=price*15;
    newprice=newprice.toFixed(2);
    return newprice;
}