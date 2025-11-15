let input =Number(document.getElementById('input').value)
let answer=document.getElementById('answer')
function convert(){
    let value=input/2.54
    answer.innerHTML=value.toFixed(3)+' Inches'
}