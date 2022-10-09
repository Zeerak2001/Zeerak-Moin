<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
<script>
function q2(){
    let name1 ="Zeerak";
    console.log("Hello "  +name1+  " Would you like to learn some python today?");
}

q2();

function q3(){
    let name2 = "Zeerak";
    console.log(name2.toUpperCase());
    console.log(name2.toLowerCase());
    console.log(name2.charAt(0).toUpperCase()+name2.substring(1).toLowerCase());
}

q3();

function q4(){
    console.log(`Cristiano Ronaldo once said: "I have never ignore my fans, Becuase once I was also a fan of football like them."`);
}

q4();

function q5(){
    let famous_person = "Cristiano Ronaldo";
    let message = '"I have never ignore my fans, Becuase once I was also a fan of football like them."';

    console.log(famous_person + " once said: " + message)
}

q5();

function q7_8(){
    console.log(5+3);
    console.log(5-3);
    console.log(5*3);
    console.log(5/3);
}

q7_8();


function q9(){
    let fav_num = 7;

    console.log("My favourite number is : " +fav_num);
}

q9();

//Question 10

/* Adding comments to my program to
describe what my program actually doing*/

function q11(){

    //declaring as global scope so I can get access in other functions

    names = ["Abubaker", "Yaqoob", "Hasnain"];

    console.log(names[0]);
    console.log(names[1]);
    console.log(names[2]);
}

q11();

function q12(){
    
    let message2 = " Would you like to learn some python today?"
    console.log("\n\nHello " +names[0]+ message2);
    console.log("Hello " +names[1]+ message2);
    console.log("Hello " +names[2]+ message2);

}

q12();

function q14_15_16_17(){
    list = ["Mr.Ahmed", "Mr.Shahid", "Mr.Khan"];
    let message3 = [`, We are inviting you to dinner at our home.`, `, we are inviting you to for dinner this saturday.`, `, there will be dinner at our home this saturday hope you will accept our invitation.`];

    console.log("\n\nHi " +list[0]+ message3[0]);
    console.log("Hope you are fine " +list[1]+ message3[1]);
    console.log("Hello " +list[2]+ message3[2]);

    console.log("\n\n" +list[1] + " Could not be able to attend our dinner\n\n");

    //For Question 15 changing list
    list[1] = "Mr.Hussain";

    console.log("Hi " +list[0]+ message3[0]);
    console.log("Hope you are fine " +list[1]+ message3[1]);
    console.log("Hello " +list[2]+ message3[2]);

    console.log("\n\nGuys great news! We have found bigger table for our dinner");

    list.unshift("Mr.Suleman");
    
    let index = 2;
    let element = "Mr.Yaqoob";
    list.splice(index, 0, element);

    list.push("Mr.Zulfiqar");

    console.log("\n\nHi " +list[0]+ message3[0]);
    console.log("Hope you are fine " +list[1]+ message3[1]);
    console.log("Hello " +list[2]+ message3[2]);
    console.log("Hi " +list[3]+ message3[0]);
    console.log("Hope you are fine " +list[4]+ message3[1]);
    console.log("Hello " +list[5]+ message3[2]);

    console.log("\n\nYou can only invite two peoples for dinner");

    for (let i = 0; i <3; i++) {

        removedEl = list.splice(i, i+1);  
        console.log("\nSorry " +removedEl+ " we can’t invite you to the dinner, due to shortage of space.");
        
      }

    console.log("\n\nList of guests who are still invited\n\n");  

    for(let j=0; j<list.length; j++){
        console.log("You are still invited "+list[j]);
    }

    //Removing remaining two guests    
    for(let k=0; k<list.length; k++){
        list.splice(k, 2);
    }

    console.log(list);

}

q14_15_16_17();


function q19(){
    console.log("Number of guests are coming to dinner is: " +list.length);
}

q19();

function q20(){

    let list2 = [{Player: "Ronaldo", Country: "Portugal", Sports: "Football"},
    {Player: "Messi", Country: "Argentina", Sports: "Football"},
    {Player: "Babar", Country: "Pakistan", Sports: "Cricket"}]

    console.log(list2);
}

q20();

function q21(){
    let student = [{name: "Abubaker", department: "SE", id: 201},
                {name: "Yaqoob", department: "arch", id: 111}];

    console.log(student);
}

q21();

function q23(){
        let car = 'corolla';
            if(car == 'corolla'){
                console.log(true);
            }
            else{
                console.log(false);
            }
        let color = 'white';
            if(color == 'red'){
                console.log(true);
            }
            else{
                console.log(false);
            }  
        let model = '2022';
            if(model == '2022'){
                console.log(true);
            }
            else{
                console.log(false);
            }
        let self_start = 'No';
            if(self_start == 'No'){
                console.log(true);
            }
            else{
                console.log(false);
            }
        let sunroof = 'yes';
            if(sunroof == 'no'){
                console.log(true);
            }
            else{
                console.log(false);
            }
        let high_speed = '200km/h';
            if(high_speed == '250km/h'){
                console.log(true);
            }
            else{
                console.log(false);
            }
        let registered = 'yes';
            if(registered == 'yes'){
                console.log(true);
            }
            else{
                console.log(false);
            } 
        let fuel_avg = '15km/L';
            if(fuel_avg == '20km/L'){
                console.log(true);
            }
            else{
                console.log(false);
            } 
        let mileage = '20000km';
            if(mileage == '20000km'){
                console.log(true);
            }
            else{
                console.log(false);
            } 
        let cost = 55.0000;
            if(sunroof == 50.0000){
                console.log(true);
            }
            else{
                console.log(false);
            }    
}

q23();


function q24(){
    let friends = ["Abubaker", "Hasnain", "Yaqoob", "Shaheer"];
    let num1 = 15;
    let car = "civic";
    let gender = ["male", "female"];

    if(friends[1] == "Hasnain"){
        console.log("\n\nHe is on second in my friendlist");
    }
    else{
        console.log("\n\nHe is not on second");
    }

    if(friends[2] == "Abubaker"){
        console.log("\n\nHe is on 3rd in my friend");
    }
    else{
        console.log("No, he is on top in my friendlist");
    }

    if(num1==15 && num1>=10){
        console.log("Number is: " +num1);
    }

    if(car == car.toLowerCase()){
        console.log(car);
    }
    else{
        console.log("corolla");
    }

    if(gender[0] == "male" || gender[1] == "female"){
        console.log("Eligible");
    }
    else{
        console.log("Not eligible");
    }

}

q24();

function q25(){
    let alien_color = "green";

    if(alien_color == "green"){
        console.log("The player just earned 5 points");
    }
    else{    
    }

    if(alien_color == "red"){
        console.log("The player just earned 5 points");
    }
    else{    
    }
}

q25();

function q26(){
    let alien_color2 = "red";

    if(alien_color2 == "red"){
        console.log("The player just earned 10 points");
    }
    else{
        console.log("The player earned nothing");
    }

    if(alien_color2 == "pink"){
        console.log("The player just earned 10 points");
    }
    else{
        console.log("The player earned nothing");
    }
}

q26();

function q27(){

    let alien_1 = "green";
   
    if(alien_1 == "green"){
        console.log("player earned 5 points");
    }
    else if(alien_1 == "yellow"){
        console.log("player earned 10 points");
    }
    else{
        console.log("player earned 15 points");
    }

    alien_1 = "yellow";
   
    if(alien_1 == "green"){
        console.log("player earned 5 points");
    }
    else if(alien_1 == "yellow"){
        console.log("player earned 10 points");
    }
    else{
        console.log("player earned 15 points");
    }

    alien_1 = "red";
   
    if(alien_1 == "green"){
        console.log("player earned 5 points");
    }
    else if(alien_1 == "yellow"){
        console.log("player earned 10 points");
    }
    else{
        console.log("player earned 15 points");
    }
}

q27();

function q28(){
    let age = 66;

    if(age < 2){
        console.log("The person is baby");
    }
    else if(age == 2 || age < 4){
        console.log("The person is toddler");
    }
    else if(age == 4 || age < 13){
        console.log("The person is kid");
    }
    else if(age == 13 || age < 20){
        console.log("The person is teenager");
    }
    else if(age == 20 || age < 65){
        console.log("The person is adult");
    }
    else if(age == 65 || age > 65){
        console.log("The person is elder");
    }
}

q28();


function q29(){

    let fav_fruits = ["Banana", "Apple", "Grapes"];

    for(let i=0; i< fav_fruits.length; i++){
        if(fav_fruits[i] == "Banana"){
            console.log("You really like Banana");
        }
        else if(fav_fruits[i] == "Apple"){
            console.log("Apple is your favourite fruit");
        }
        else if(fav_fruits[i] == "Grapes"){
            console.log("You like grapes");
        }
        else if( fav_fruits[i] == "Pineapple"){
            console.log("This is not your favourite fruit");
        }
        else{
            console.log("You don't like fruits");
        }
    }
}

q29();

function q30(){
    let usernames = ["admin", "zeerak123", "ab11","hamza123", "yaqoob11"];
    
    for(let i = 0; i<usernames.length; i++){
        if(usernames[i] == "admin"){
            console.log("Hello " +usernames[i]+ ", Would like to see status report?");
        }
        else{
            console.log("Hi " +usernames[i]+ " Thank you for logging again");
        }
    }
}

q30();

function q32(){
    let current_user = ["zeerak123","abubaker11", "hamza","hasnain","shaheer123"];
    let new_user = ["yaqoob11","hamza","ahmed123","abubaker11"];

    for(let i=0; i<4; i++){
        for( let j=0; j<current_user.length; j++){
            if(new_user[i] == current_user[j]){
                console.log("user " +new_user[i]+ " already exist");
            }
            else{
                console.log("Username is available");
            }
        }
    }
}

q32();

function q33(){
    let numbers = [1,2,3,4,5,6,7,8,9];

    for(let i=0; i<numbers.length; i++){
        if(numbers[i]== 1){
            console.log(+numbers[i]+"st");
        }
        else if(numbers[i] == 2){
            console.log(+numbers[i]+"nd");
        }
        else if(numbers[i] == 3){
            console.log(+numbers[i]+"rd");
        }
        else{
            console.log(numbers[i]+"th")
        }
    }
}

q33();

function q34(){
    let pizzas = ["Fajita", "Pepperoni", "Chicken Tikka"];

    for(let i=0; i<pizzas.length; i++){
        console.log("I like " +pizzas[i]+ " pizza");
    }

    console.log("Pizza is my favourite dish becuase of cheese over it and mostly I order Fajita flavour. So I really love pizza!");
}

q34();

function q35(){
    let animal_list = ["dog", "cat", "cow"];

    for(let i=0; i<animal_list.length; i++){
        if(animal_list[i] == "dog"){
            console.log("Dog could be a great pet");
        }
        else if(animal_list[i] == "cat"){
            console.log("cats are beatiful and good pet");
        }
        else{
            console.log("cow is also a great pet and source of milk");
        }
    }

    console.log("These animals are friendly and all can be pet");
}

q35();

function q36_make_shirt(){

    // for Question 36

    let size = prompt("What's the size of your T-shirt");
    let message = prompt("Type message to be printed on T-shirt");

    console.log("The size of your T-shirt is " +size+ " and the message is: " +message);

    //Modification for Question 37

    if(size == "large" || size == "medium"){
        message = "I love Javascript";
    }

    console.log("The size of your T-shirt is " +size+ " and the message is: " +message);
}

q36_make_shirt();


function q38(city, country){
    country = "Pakistan";
    return city+ " is in " + country;

}

console.log(q38("karachi"));
console.log(q38("Lahore"));
console.log(q38("Dehli"));

function q39_city_country(city, country){
    return city+", " +country;
}

console.log(q39_city_country("Karachi", "Pakistan"));
console.log(q39_city_country("Dehli", "India"));
console.log(q39_city_country("Dhaka", "Bangladesh"));

function q40_make_album(){

    let music_album = {};

   for(let i=0; i<1; i++){
     music_album.artist_name = prompt();
     music_album.music_album = prompt();

     music_album.artist_name.push(music_album);
     music_album.music_album.push(music_album);
   }
    

}

console.log(q40_make_album());


let magicians = ["Ronaldo", "Neymar", "Bale"];

function q41_2(magician_Name){
    for(let i=0; i<magician_Name.length; i++){
        console.log(magician_Name[i]);
    }
}

q41_2(magicians);

function q42_make_great(great){
    
    for(let i=0; i<great.length; i++){
        great[i] = "Great " + great[i]; 
        console.log(great[i]);
    }
}

q41_2(magicians);

//Question 43

q42_make_great(magicians);
magicians = ["Ronaldo", "Neymar", "Bale"];

function show_magicians(newlist, q42_make_great){

    function q42_make_great(great){
    
        for(let i=0; i<great.length; i++){
            great[i] = "Great " + great[i]; 
            console.log(great[i]);
        }
    }

    for(let i=0; i<newlist.length; i++){
        console.log(newlist[i]);
    }

    
}

show_magicians(magicians);

<script>

   


    
</body>
</html>

