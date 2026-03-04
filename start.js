
let dt = new Date();
setTimeout( ()=>{ FXN(dt)} , 2000);

function FXN(){

    let currDt = new Date();

    console.log("CALLED AFTER 2 SEC ", currDt - dt);
}