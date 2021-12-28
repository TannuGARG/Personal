"use strict"
var pizza=200;
var burger=70;
var pasta=150;
var maggi=50;
var chicken=80;
var french=50;
// declare price of each item
var total_bill=0;
var flag=0;
var price=0;
var no_of_Kg;

var added =document.querySelector("#addtocart");
var out=document.querySelector("#clear");
var bill=document.querySelector("#pay");
var write=document.querySelector("#area");
added.addEventListener("click",data);
out.addEventListener("click",getout);
bill.addEventListener("click",calculate);
function data(){
    var order=document.querySelector("#items").value;
    no_of_Kg=parseInt(document.querySelector("#quan").value);
    

    if (no_of_Kg<0 || no_of_Kg==""){
        alert("enter valid quantity");
    }
    else if(no_of_Kg==0){
        alert("enter some quantity");


    }
    else{
        
        switch (order){
            case "Paneer_Pizza":
                var price=no_of_Kg*pizza;
                total_bill+=Number(price);
                console.log(total_bill)

                write.value+= order +" "+ no_of_Kg+ " total= "+ price +"Rs\r";
                no_of_Kg="";
                break;
            case "Cheese_Burger":
                var price1=no_of_Kg*burger;
                total_bill+=price1;
                console.log(total_bill)
                write.value+= order +" "+ no_of_Kg+ " total= "+ price1 +"Rs\r";
                no_of_Kg=0;
                break;
            case "White_Pasta":
                var price2 = no_of_Kg*pasta;
                total_bill+=(no_of_Kg*pasta);
                write.value+= order +" "+ no_of_Kg+ " total= "+ price2 +"Rs\r";
                no_of_Kg=0;
                break;
            case "Maggii":
                var price3 =no_of_Kg*maggi;
                total_bill+=price3;
                write.value+= order + " "+no_of_Kg+ " total= "+ price3 +"Rs\r";
                no_of_Kg=0;
                break;
                
            case "Chicken_Wings":
                var price4=no_of_Kg*chicken;
                total_bill+=price4;
                write.value+= order +" "+ no_of_Kg+ " total= "+ price4 +"Rs\r";
                no_of_Kg=0;
                break;
            case "French_Fries":
                var price5=(no_of_Kg*french);
                total_bill+=price5;
                console.log(total_bill)
                write.value+= order  + " "+ no_of_Kg+ " total= "+ price5+"Rs\r";
                no_of_Kg=0;
                break;
    

        }
        
        }


    }
    

function getout(){
    // total_bill=0;
    write.value=" ";
}
function calculate(){
    write.value+="-----------------------------------------------------------------------\r";
    write.value+= "yours total bill is " + total_bill + "Rs\r";
    write.value+="-----------------------------------------------------------------------\r";
    write.value+="Thanks for visit us";
    
}


