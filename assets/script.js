// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

let checkBox1 = document.querySelector('#lowercase');
let checkBox2 = document.querySelector('#uppercase');
let checkBox3 = document.querySelector('#numbers');
let checkBox4 = document.querySelector('#characters');
let checkBoxs = [checkBox1.checked,checkBox2.checked,checkBox3.checked,checkBox4.checked]
let alpha = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
let special = ['@','%','+','/','!','#','$','^','?',':',',','(',')','{','}','[',']','~','-','_','.']
//Silder input
let slider = document.getElementById("myRange");
let output = document.getElementById("value");
slider.oninput = function() {
  output.innerHTML = this.value;
  return sliderValue = output.innerHTML;
};
// code I used to tell if one array equaled annother
function arraysEqual(a, b) {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length !== b.length) return false;

  for (var i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

//Writing the Password
function writePassword() {
  var passwordText = document.querySelector("#password");
// all the possible variations of the 4 buttons
  let realPassword = []
  let arrayCheck1 = [false,false,false,false]
  let arrayCheck2 = [true,false,false,false]
  let arrayCheck3 = [false,true,false,false]
  let arrayCheck4 = [false,false,true,false]
  let arrayCheck5 = [false,false,false,true]
  let arrayCheck6 = [true,true,false,false]
  let arrayCheck7 = [false,true,true,false]
  let arrayCheck8 = [false,false,true,true]
  let arrayCheck9 = [true,true,true,false]
  let arrayCheck10 = [false,true,true,true]
  let arrayCheck11 = [true,false,false,true]
  let arrayCheck12 = [true,true,false,true]
  let arrayCheck13 = [true,false,true,true]
  let arrayCheck14 = [false,true,false,true]
  let arrayCheck15 = [true,false,true,false]
  let arrayCheck16 = [true,true,true,true]
  let checkBoxs = [checkBox1.checked,checkBox2.checked,checkBox3.checked,checkBox4.checked]
  if (arraysEqual(arrayCheck1,checkBoxs)) {
    alert("Please select at least one option.")
  }

  function randomlLetter() {
    let rlLetter = Math.floor(Math.random() * 26)
    realPassword.push(alpha[rlLetter])
}
  function randomuLetter() {
    let ruLetter = Math.floor(Math.random() * 26)
    let test = alpha[ruLetter]
    realPassword.push(test.toUpperCase())
  }

  function randomNumber() {
    let rNumber = Math.floor(Math.random() * 10)
    realPassword.push(rNumber)
  }

  function randomSpecial() {
    let rSpecial = Math.floor(Math.random() * 22)
    realPassword.push(special[rSpecial])
  }

  sliderTest = sliderValue

  if (arraysEqual(arrayCheck2,checkBoxs)) {
    while (sliderTest > 0) {
        randomlLetter()
      sliderTest--
    }
  }

  if (arraysEqual(arrayCheck3,checkBoxs)) {
    while (sliderTest > 0) {
        randomuLetter()
      sliderTest--
    }
  }

  if (arraysEqual(arrayCheck4,checkBoxs)) {
    while (sliderTest > 0) {
        randomNumber()
      sliderTest--
    }
  }

  if (arraysEqual(arrayCheck5,checkBoxs)) {
    while (sliderTest > 0) {
        randomSpecial()
      sliderTest--
    }
  }

  if (arraysEqual(arrayCheck6,checkBoxs)) {
    while (sliderTest > 0) {
      let rNum = Math.floor(Math.random() * 2)
      if (rNum == 0) {
        randomlLetter()
      }
      if (rNum == 1) {
        randomuLetter()
      }
      sliderTest--
    }
  }

  if (arraysEqual(arrayCheck7,checkBoxs)) {
    while (sliderTest > 0) {
      let rNum = Math.floor(Math.random() * 2)
      if (rNum == 0) {
        randomuLetter()
      }
      if (rNum == 1) {
        randomNumber()
      }
      sliderTest--
    }
  }

  if (arraysEqual(arrayCheck8,checkBoxs)) {
    while (sliderTest > 0) {
      let rNum = Math.floor(Math.random() * 2)
      if (rNum == 0) {
        randomNumber()
      }
      if (rNum == 1) {
        randomSpecial()
      }
      sliderTest--
    }
  }

  if (arraysEqual(arrayCheck9,checkBoxs)) {
    while (sliderTest > 0) {
      let rNum = Math.floor(Math.random() * 3)
      if (rNum == 0) {
        randomlLetter()
      }
      if (rNum == 1) {
        randomuLetter()
      }
      if (rNum == 2) {
        randomNumber()
      }
      sliderTest--
    }
  }

  if (arraysEqual(arrayCheck10,checkBoxs)) {
    while (sliderTest > 0) {
      let rNum = Math.floor(Math.random() * 3)
      if (rNum == 0) {
        randomuLetter()
      }
      if (rNum == 1) {
        randomNumber()
      }
      if (rNum == 2) {
        randomSpecial()
      }
      sliderTest--
    }
  }

  if (arraysEqual(arrayCheck11,checkBoxs)) {
    while (sliderTest > 0) {
      let rNum = Math.floor(Math.random() * 2)
      if (rNum == 0) {
        randomlLetter()
      }
      if (rNum == 1) {
        randomSpecial()
      }
      sliderTest--
    }
  }

  if (arraysEqual(arrayCheck12,checkBoxs)) {
    while (sliderTest > 0) {
      let rNum = Math.floor(Math.random() * 3)
      if (rNum == 0) {
        randomlLetter()
      }
      if (rNum == 1) {
        randomuLetter()
      }
      if (rNum == 2) {
        randomSpecial()
      }
      sliderTest--
    }
  }

  if (arraysEqual(arrayCheck13,checkBoxs)) {
    while (sliderTest > 0) {
      let rNum = Math.floor(Math.random() * 3)
      if (rNum == 0) {
        randomlLetter()
      }
      if (rNum == 1) {
        randomNumber()
      }
      if (rNum == 2) {
        randomSpecial()
      }
      sliderTest--
    }
  }

  if (arraysEqual(arrayCheck14,checkBoxs)) {
    while (sliderTest > 0) {
      let rNum = Math.floor(Math.random() * 2)
      if (rNum == 0) {
        randomuLetter()
      }
      if (rNum == 1) {
        randomSpecial()
      }
      sliderTest--
    }
  }

  if (arraysEqual(arrayCheck15,checkBoxs)) {
    while (sliderTest > 0) {
      let rNum = Math.floor(Math.random() * 2)
      if (rNum == 0) {
        randomlLetter()
      }
      if (rNum == 1) {
        randomNumber()
      }
      sliderTest--
    }
  }

  if (arraysEqual(arrayCheck16,checkBoxs)) {
    while (sliderTest > 0) {
      let rNum = Math.floor(Math.random() * 4)
      if (rNum == 0) {
        randomlLetter()
      }
      if (rNum == 1) {
        randomuLetter()
      }
      if (rNum == 2) {
        randomNumber()
      }
      if (rNum == 3) {
        randomSpecial()
      }
      sliderTest--
    }
  }
  var password = realPassword.join('');
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);