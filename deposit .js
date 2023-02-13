//add eevent-listener in  deposit button
//get from from deposit field
//convert deposit value from from string to number
//clear the deposit value after getting the value
//get the previous value 
//get the previous total and convert from string to number type
//calculate the new deposit total and set the value to tye deposit total
//set the total deposit amount

document.getElementById('btn-deposit').addEventListener('click',()=>{
    console.log("Button has depositted");
    const deposit_field=document.getElementById("deposit-fleld");
    const deposit_StringValue=deposit_field.value
    console.log(deposit_StringValue)
    const newDepositAmount=parseFloat(deposit_StringValue);
    deposit_field.value='';
    if(isNaN(newDepositAmount)){
        alert("Please enter valid number to deposit");
        return;
    }
   
    const depositTotal=document.getElementById('deposit-total');
    const previousDepositTotalString=depositTotal.innerText;
    const depositTotalAmount=parseFloat(previousDepositTotalString);
    const newDepositTotal=depositTotalAmount+newDepositAmount
    depositTotal.innerText=newDepositTotal

    const TotaldepositBalance=document.getElementById('total-deposit');
    const TotalDepositBalanceString=TotaldepositBalance.innerText;
    const totalDepositAmount=parseFloat(TotalDepositBalanceString);
    console.log(totalDepositAmount);
    console.log(typeof totalDepositAmount);
    TotaldepositBalance.innerText=newDepositAmount+totalDepositAmount
})