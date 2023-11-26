let gameSeq=[];
let userSeq=[];
let btns=['yellow','red','green','purple'];
let started=false;
let level=0;
let highScore=0;
let h2=document.querySelector('h2');
document.addEventListener('keypress',function(){
    if(started==false){
        console.log("game started");
        started=true;
        levelUp();
    }
    });
    function levelUp(){
        userSeq=[];
        level++;
        h2.innerText=`Level ${level}`;
        let ranIdx=Math.floor(Math.random()*3);
        let ranCol=btns[ranIdx];
        let ranbtn=document.querySelector(`.${ranCol}`);
        // console.log(ranIdx);
        // console.log(ranCol);
        // console.log(ranbtn);
        gameSeq.push(ranCol);
        console.log(gameSeq);
        gameFlash(ranbtn);
    }
     function gameFlash(btn){
     btn.classList.add('gameFlash');
     setTimeout(function(){
        btn.classList.remove('gameFlash');
     },250);
    }
    function userFlash(btn){
        btn.classList.add('userFlash');
        setTimeout(function(){
           btn.classList.remove('userFlash');
        },250);
       }
    let allBtns=document.querySelectorAll('.btn');
    for(btn of allBtns){
         btn.addEventListener('click',btnPress);
    }
    function btnPress(){
        // console.log(this);
        let btn=this;
        userFlash(btn);
        userCol=btn.getAttribute("id");
        // console.log(userCol);
        userSeq.push(userCol);
        checkAns(userSeq.length-1);
    }
    function checkAns(idx){
        // console.log(`Current level is: ${level}`);
      
        if(userSeq[idx] === gameSeq[idx]){
            if(userSeq.length==gameSeq.length){
                 setTimeout(levelUp(),1000);
            }
        }else{
            
            if(highScore<level){
                highScore=level;
            }
            // h2.innerText=`Game Over! Your score was ${level}\n Press any key to start.`;
           
            h2.innerHTML=`Game Over! Your score was <b>${level}</b><br>Your High Score was ${highScore}<br> Press any key to start.`;
           
            document.querySelector('body').style.backgroundColor='red';
            setTimeout(function(){
                document.querySelector('body').style.backgroundColor='white';
            },150);
            // started=false;
            // level=0;
            // gameSeq=[];
            reset();
        }
    }
    function reset(){
       started=false;
       level=0;
       gameSeq=[];
       
    }
// let userSeq=[];
// let gameSeq=[];
// let btns=['yellow','red','green','purple'];
// let level=0;
// let highScore=0;
// let h2=document.querySelector('h2');
// let started=false;
// document.addEventListener('keypress',function(){
//     if(started==false){
//         console.log("game started");
//         started=true;
//         levelUp();
//     }
   
// });
// function levelUp(){
//     userSeq=[];
//     level++;
//     h2.innerText=`Level ${level}`;
//     let ranIdx=Math.floor(Math.random()*3);
//     let ranCol=btns[ranIdx];
//     let ranBtn=document.querySelector(`.${ranCol}`);
//     gameFlash(ranBtn);
//     gameSeq.push(ranCol);
//     console.log(gameSeq);
// }
// function gameFlash(btn){
//    btn.classList.add('gameFlash');
//    setTimeout(function(){
//     btn.classList.remove('gameFlash');
//    },250);
// }
// let allBtns=document.querySelectorAll('.btn');
// for(btn of allBtns){
//     btn.addEventListener('click',btnPress);
// }
// function btnPress(){
//     let btn=this;
//     userFlash(btn);
//     userCol=btn.getAttribute('id');
//     userSeq.push(userCol);
//     checkAns(userSeq.length-1);

// }
// function userFlash(btn){
//     btn.classList.add('userFlash');
//     setTimeout(function(){
//      btn.classList.remove('userFlash');
//     },250);
//  }
//  function checkAns(idx){
//     if(userSeq[idx]===gameSeq[idx]){
//         if(userSeq.length==gameSeq.length){
//              setTimeout(levelUp(),1000);
//         }
//     }else{
//         if(highScore<level){
//             highScore=level;
//         }
//         h2.innerHTML=`Game Over! Your scored <b>${level}</b><br>Your High Score was ${highScore}.<br>Press any key to start the game`;
//         document.querySelector('body').style.backgroundColor='red';
//         setTimeout(function(){
//             document.querySelector('body').style.backgroundColor='white';
//         },150);
//         reset();
//     }
//  }
//   function reset(){
//     started=false;
//     level=0;
//     gameSeq=[];
//   }