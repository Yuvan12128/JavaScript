
function Calculate(){
    let input=Number(document.getElementById('input').value)
    let result=document.getElementById('result')
    if(input<=50){
        bill=input*0.75
        console.log(bill)
        result.innerHTML=bill
    }else if(input >=50 && input <=100){
        bill=(50*0.75)+((input-50)*1.00)
        result.innerHTML='Rs.'+bill
    }else if(input>=100 && input<=250){
        bill=(50*0.75)+(100*1.00)+((input-100)*1.30)
        result.innerHTML='Rs.'+bill
    }else if(input >=250){
        bill=(50*0.75)+(100*1.00)+(250+1.30)+((input-250)*1.50)
        result.innerHTML='Rs.'+bill;
    }
}