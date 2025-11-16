
function Check(){
    let input= document.getElementById('input').value
    let result=document.getElementById('result')
    let reverse=input.split('').reverse().join('');
    if(input==reverse){
        result.innerHTML=input+' Palindrome'
    }else{
        result.innerHTML=input+" Not Palindroe"
    }
}