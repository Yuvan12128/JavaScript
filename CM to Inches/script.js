
function convert(){
    let input =Number(document.getElementById('input').value)
    let answer=document.getElementById('answer')
    let value=input/2.54
    answer.innerHTML=value.toFixed(3)+' Inches'
}