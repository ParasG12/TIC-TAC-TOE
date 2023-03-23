let music = new Audio("music.mp3")
let turnMusic = new Audio('ting.mp3')
let over = new Audio('gameover.mp3')
let turn = 'X'//function to check turnn
let gameOver = false;
 const changeTurn = ()=>{
     return turn=='X'?'0':'X'

 }
 //function to check win
 const checkWin = ()=>{
    let boxtext = document.getElementsByClassName('boxtext')
    let box = [
        [0,1,2,5,5,0],
        [3,4,5,5,15,0],
        [6,7,8,5,25,0],
        [0,3,6,-5,15,90],
        [1,4,7,5,15,90],
        [2,5,8,15,15,90],
        [0,4,8,5,15,45],
        [2,4,6,5,15,135]

    ]
    box.forEach((e)=>{
        if((boxtext[e[0]].innerText==boxtext[e[1]].innerText) && (boxtext[e[1]].innerText==boxtext[e[2]].innerText) && (boxtext[e[0]].innerText!='') ){
            let won = boxtext[e[0]].innerText;
            gameOver = true;
            console.log("winner is " + won)
            document.getElementsByClassName('info')[0].innerText=`the winner is ${won}`
            document.getElementsByClassName('imgBox')[0].querySelector('.img').style.width="200px"
           
            // if(document.querySelector('.boxtext').style.width =='20vw'){
            //     document.querySelector('.line').style.width="40vw"

            // }
            // else{
            document.querySelector('.line').style.width="20vw"
            // }
            document.querySelector('.line').style.transform = `translate(${e[3]}vw ,${e[4]}vw) rotate(${e[5]}deg)`



        }


    })

}
//main logic
let boxes = Array.from(document.getElementsByClassName('box'))


boxes.forEach((element)=>{
    let boxText = element.querySelector('.boxtext')
    element.addEventListener('click',()=>{
        if(boxText.innerText==""){
            boxText.innerText=turn
             turn = changeTurn()
            turnMusic.play()

            checkWin()
            if(!gameOver){
                document.getElementsByClassName('info')[0].innerText=`turn for ${turn}`
            }
            
          


        }
       

    })

    
  
})
let reset = document.getElementById('reset')
reset.addEventListener('click',()=>{
    let box = Array.from(document.getElementsByClassName('box'))
    box.forEach((element)=>{
        let boxtext = element.querySelector('.boxtext')
        boxtext.innerText=''


    })
    turn = 'X'
    document.getElementsByClassName('info')[0].innerText="Turn for X"
     gameOver=false
     document.getElementsByClassName('imgBox')[0].querySelector('.img').style.width="0"
     document.querySelector('.line').style.width="0";



})