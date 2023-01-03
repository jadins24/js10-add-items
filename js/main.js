let increase=document.getElementById("add")
let decrease=document.getElementById("sub")

increase.addEventListener("click",increaseValue)

function increaseValue(){
    let value=document.getElementById("value").value;
    value++;
    document.getElementById("value").value=value;
  }
  decrease.addEventListener("click",decreaseValue)
  function decreaseValue(){
    let value=document.getElementById("value").value;
    value--;
    document.getElementById("value").value=value;
  }