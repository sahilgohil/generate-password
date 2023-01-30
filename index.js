const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordEL1 = document.getElementById("pass-1");
let passwordEL2 = document.getElementById("pass-2");



function generateRandomNum()
{
    let num = Math.floor(Math.random() * characters.length)
    return num;
}

function generatePassword()
{  
    let password = ""
    
        for(let i=0;i<15;i++)
        {
            password += characters[generateRandomNum()]
        }
    return password
}
function generate()
{
    let pass1 = generatePassword()
    let pass2 = generatePassword()
    passwordEL1.textContent = pass1
    passwordEL2.textContent = pass2
}



