let index = 0
let passwordone= ""
let passwordtwo= ""
let password1 = document.getElementById("leftbtn")
let password2 = document.getElementById("rightbtn")
let input = document.getElementById("placehere")
let generatedpassword1 = ""
let generatedpassword2 = ""


const characters = [
"A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R",
"S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j",
"k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", 
"2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*",
"(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

function findindex(){
   index = Math.floor(Math.random() * characters.length)
return characters[index]
}


function loop(){
   for (let i =0; i<10; i++){
passwordone += findindex()
   }
   return passwordone
}
function loop2(){
   for (let i =0; i<10; i++){
passwordtwo += findindex()
   }
   return passwordtwo
}
function refresh(){

 generatedpassword1 = loop()
 generatedpassword2 = loop2()
}
function clear(){
   passwordone = ""
   passwordtwo = ""
}
function attributepassword(){
   clear()
   refresh()
   password1.textContent = generatedpassword1
   password2.textContent = generatedpassword2
   console.log(password1.textContent)
   console.log(password2.textContent)
}
var copytext = ""
function assign1(){
input.innerHTML = generatedpassword1
copytext = generatedpassword1;

// copytext.select();
// copytext.selectionRange(0, 99999);
// console.log(copytext)

navigator.clipboard.writeText(copytext)
alert("You have copied the password:" + copytext)

}
function assign2(){
input.innerHTML = generatedpassword2
copytext = generatedpassword2;

// copytext.select();
// copytext.selectionRange(0, 99999);
// console.log(copytext)

navigator.clipboard.writeText(copytext)
alert("You have copied the password:" + copytext)

}