function result(){
    var num1, num2, work, result;

    num1=document.getElementById('n1').value;
    num1=parseInt(num1);

    num2=document.getElementById('n2').value;
    num2=parseInt(num2);

    work=document.getElementById('operator-1').value;
    switch (work){
        case"+":
            result=num1+num2;
            break
        case"-":
            result=num1-num2;
            break
        case"*":
            result=num1*num2;
            break
        case"/":
            result=num1/num2;
            break
    }

    document.getElementById('out').innerHTML=result;
}
