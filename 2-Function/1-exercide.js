function min(val_1, val_2){
    return val_1<val_2?(val_1):(val_2)
}
// min(5, 8);
document.getElementById("min").addEventListener("click", ()=> {
    let val_1 = document.querySelector("#val_1");
    let val_2 = document.querySelector("#val_2").value;
    
    let result = min(val_1, val_2);
    
    document.querySelector("#result").innerHTML = `${result}`;
    
})