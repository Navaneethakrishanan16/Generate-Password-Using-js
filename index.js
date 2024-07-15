function generateal(){
const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
pass=""
passw=""
for(let i=0; i<14; i++){
    let randompass=Math.floor(Math.random()*characters.length)
    pass+=characters[randompass]
    let randompassw=Math.floor(Math.random()*characters.length)
    passw+=characters[randompassw]
}

pP=document.getElementById("p-p")
pP.textContent=pass
pPw=document.getElementById("p-pw")
pPw.textContent=passw
}
