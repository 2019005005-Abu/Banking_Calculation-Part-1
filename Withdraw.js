document.getElementById("btn-withdraw").addEventListener("click",()=>{
   const WithdrawTotalInput= document.getElementById('withdraw-input');
   const WithdrawTotalValueString=WithdrawTotalInput.value;
   const withdrawTotalAmount=parseFloat(WithdrawTotalValueString);
   console.log(typeof withdrawTotalAmount);
   WithdrawTotalInput.value='';


   if(isNaN(withdrawTotalAmount)){
    alert("Please give number to withdraw");
    return;
   }

   const withdrawPreviousAmount=document.getElementById("withdraw-amount");
   const withdreawPreviousString=withdrawPreviousAmount.innerText;
   const WithdrawPrevAmount=parseFloat(withdreawPreviousString);
   console.log(typeof WithdrawPrevAmount);
     
   const newWithdrawTotalAmount=WithdrawPrevAmount+withdrawTotalAmount;
   withdrawPreviousAmount.innerText=newWithdrawTotalAmount
//    if(newWithdrawTotalAmount>TotalDepositAmount){
//     alert("You are unable to withdraw money Please deposit ");
//     return;
//   }
   
   const TotalDepositAmountElement=document.getElementById('total-deposit');
   const TotalDepositString=TotalDepositAmountElement.innerText;
   const TotalDepositAmount=parseFloat(TotalDepositString);
  const totalwithdrawAmount=TotalDepositAmount-newWithdrawTotalAmount;
  TotalDepositAmountElement.innerText=totalwithdrawAmount;
  






   


   

   
})