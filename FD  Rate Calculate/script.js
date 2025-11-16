
function button(){
    let input=Number(document.getElementById('input').value)
    let result=document.getElementById('result')
    let rate=0;
    if(input<3){
        rate=5.8
    }else if(input >=7 && input <=9){
        rate=6.5
    }else {
        rate=7
    }
    result.innerHTML='your interest rate is '+rate+' %'
}