var oneDollarButton = document.querySelector("#costOneDollar");
var twoDollarButton = document.querySelector("#costTwoDollar");
var fiveDollarButton = document.querySelector("#costFiveDollar")
var totalMoneyText = document.querySelector("#totalMoney");
var moneyPerSecondText = document.querySelector("#moneyPerSecondText");
var costClickMoney1 = document.querySelector("#costClickMoney");
var moneyPerClickText = document.querySelector("#moneyPerClick");

var moneyPerSecond = 1;
var totalMoney = 0;

//how much money per click
var moneyPerClick = 1;
costClickMoney1.addEventListener("click", function(){
    moneyPerClick++;
});


//get money when click on total money text
totalMoneyText.addEventListener("click", function(){
    totalMoney += moneyPerClick;
});

//adding money for 1$
var one$Cost = 2;
oneDollarButton.addEventListener("click", function(){
    if(totalMoney - one$Cost >= 0){
        moneyPerSecond++;
        one$Cost += 2;
        oneDollarButton.textContent = one$Cost + "$";
        totalMoney -= one$Cost;
        console.log(moneyPerSecond)
    }
});

//adding money for 2$
var two$Cost = 4;
twoDollarButton.addEventListener("click", function(){
    if(totalMoney >= moneyPerSecond){
        moneyPerSecond += 2;
        two$Cost += 4;
        twoDollarButton.textContent = two$Cost + "$";
        totalMoney -= two$Cost;
        console.log(moneyPerSecond);
    }
});

//adding money for 5$
var five$Cost = 10;
fiveDollarButton.addEventListener("click", function(){
    if(totalMoney >= five$Cost){
        five$Cost += 10;
        moneyPerSecond += 5;
        fiveDollarButton.textContent = five$Cost + "$";
        totalMoney -= 5;
    }
});



//print total money
setInterval(function(){
    //print total money
    totalMoney += moneyPerSecond / 10;
   totalMoneyText.textContent = totalMoney;

   //print money per second
   moneyPerSecondText.textContent = moneyPerSecond;

   //print money per click
   moneyPerClickText.textContent = moneyPerClick;
}, 100);


