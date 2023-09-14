let task  = document.querySelector('.task') ; 
let btn = document.querySelector('.btn') ; 
 
let cnt = 1 ; 
let txt= 'a' ;   
task.onkeyup = function(){ 
     txt = task.value  ; 
} 
let one  , two ;  
localStorage.clear() ; 
 
btn.onclick  = function(){ 
 let newElement = document.createElement('div') ;  
 let del = document.createElement('button') ; 
 del.id=`del${cnt}`  
 del.textContent="Del" ; 
newElement.id=`delete${cnt}` ; 
document.body.append(newElement) ; 
localStorage[`task ${cnt}`  ]   =  txt  ;  
cnt++ ;  
 newElement.textContent=txt ; 
 newElement.append(del)  
 task.value=' ' ; 
 
 del.onclick = function(){
   let d =del.id ; 
     d = d[d.length-1]   
     newElement.remove() ; 
     localStorage.removeItem(`task ${d}`)
     if(localStorage.length === 0){
        alert('You are hero all tasks is completed today enjoy 🎉🎉🎉') ; 
     }
    }  
     
}   