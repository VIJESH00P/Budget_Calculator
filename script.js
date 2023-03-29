let balance = 0;

let budget = 0;

let expTitle= '';

let expAmount = 0;

let totalExpense = 0;

let temp ='';

let table = '';

counter=0;

document.querySelector("#open-popup").addEventListener("click",function(){
   document.querySelector(".popup").classList.add("active");
 });
 document.querySelector(".popup .close-btn").addEventListener("click",function(){
   document.querySelector(".popup").classList.remove("active");
 });
 function budgetAdd(){

  budget = budget1.value;
  budget = parseFloat(budget).toFixed(2);
  balance=budget

  if(budget <= 0 ){
          alert("value cannot be empty or negative")
  }
  else{
      document.getElementById("budget_amount").innerHTML=`${budget}`;
      document.getElementById("balance_amount").innerHTML=`${budget}`
  }

}
function addExpense(){
  

  expTitle = expense_title.value;
  expAmount = expense_amount.value;

      if(budget < 0){
          alert("add the budget amount");
      }

      else{

          if(expAmount <= 0){
              alert("Value cannot be empty or negative");

          }
          else{
              expAmount = parseFloat(expAmount);
              balance -= expAmount;
              balance = parseFloat(balance).toFixed(2)
              totalExpense += expAmount;
              temp = table
              table =`<tr>
              <td class="ps-5 pe-5" style="font-size: 15px;border: 2px solid black;font-weight: 700;">${expTitle}</td>
              <td class="ps-5 pe-5" style="font-size: 15px; border: 2px solid black;font-weight: 700;">${expAmount}</td>
              <td class="ps-5 pe-5" name=${expAmount} onclick="del(this)" style="font-size: 25px; border: 2px solid black;" ><i class="fa-solid fa-trash"></i></td>
              </tr>`;
              table += temp
              console.log(temp);
              document.getElementById('table_exp').innerHTML = table;
              
              document.getElementById("expense_amount_1").innerHTML = `${totalExpense}`;
              document.getElementById("balance_amount").innerHTML = `${balance}`  
          }
      }
}

function del(r){

  var i = r.parentNode.parentNode.rowIndex;
  document.getElementById("table_exp").deleteRow(i);
  let delData = r.getAttribute("name");
  totalExpense -= delData;
  balance = budget;
  balance -= totalExpense;
  document.getElementById("balance_amount").innerHTML = `${balance}`;
  document.getElementById("expense_amount_1").innerHTML = `${totalExpense}`;
}
Footer
