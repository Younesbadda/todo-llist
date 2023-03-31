let btnAdd = document.querySelector("button")
var inputValue = document.getElementById("value-input");
var ul = document.getElementById("simpleList")
let ClearAll = document.querySelector(".clear")
let count = document.querySelector(".countspa")
var inputChex = document.createElement('input');

var activeAll = document.getElementById("active");
let completed = document.getElementById("completed")
let all = document.getElementById("all")
let checkk = document.querySelector(".check")




btnAdd.addEventListener("click", () =>{
  console.log(inputValue.value)
  var li = document.createElement('li');
  var label = document.createElement('label')
  var inputChex = document.createElement('input');
  var span = document.createElement('span')
  var spanVal = document.createElement("span")
 

    // ul.appendChild(li)

    // label.appendChild(inputChex)
    // // label.appendChild(spanVal)
    // li.appendChild(label)
    // inputChex.value = inputValue;
    
    if (inputValue.value === '') {
        alert("You must write something!");
    } else {
        ul.appendChild(li);
        li.appendChild(label)
        label.appendChild(inputChex)
        
        label.appendChild(spanVal)
        spanVal.appendChild(document.createTextNode(inputValue.value)) 
        li.appendChild(span)
        span.classList = "remove"
    
        count.innerHTML++
        inputValue.value = "";
        

        ClearAll.addEventListener("click", () =>{
            li.remove()
            count.innerHTML=0
        })
        // spanVal.appendChild(inputChex)
        // li.addEventListener('click', () =>{
        //     li.remove()
        //     count.innerHTML--
        // })
        
        
        inputChex.addEventListener("click", () => {
            console.log("bye")
            inputChex.classList = "check"
            completed.addEventListener("click", () => {
                console.log("younes")
                if(inputChex.classList.contains('check')){
                    li.style.display = 'none';
                }

            })
          
        })

        activeAll.addEventListener("click", () => {
            li.style.display = 'block';
   
        })

        all.addEventListener("click", () => {
            li.style.display = 'block';
   
        })

        
         
    }
    inputValue.value = "";
  
})

// add for click key enter
inputValue.addEventListener("keypress", function(event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      btnAdd.click();
    }
  });


// change the light the body
document.querySelector(".sun").addEventListener("click", () => {
    if (document.body.classList == 'night') {
        document.body.classList = 'light'
        document.querySelector('.sun').src = "/images/icon-moon.svg"
    }else{
        document.body.classList = 'night'
        document.querySelector('.sun').src = "/images/icon-sun.svg"
    }
    
})






// li.addEventListener("click", () => {
//     console.log("good")
// })



