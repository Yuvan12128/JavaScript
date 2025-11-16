
function Submit(){
   let input= Number(document.getElementById('input').value)
   let answer=document.getElementById('answer')

   ran= Math.round(Math.random()*10)
   if(ran==input){
    alert('you win.. you guess the currect Number')
   }else{
    answer.innerHTML=' '+ran+' '+'try again'
   }
}