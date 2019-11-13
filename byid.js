document.getElementById('enter').addEventListener('click',show)
function show(){
    let ID1 = document.getElementById('Num').value ;
    console.log(ID1);
    fetch('http://localhost:5500/students/'+ID1, {
           method: 'GET',
       })
       .then(response => response.json())
       .then(data => {
        document.getElementById('show1').innerHTML="";
        document.getElementById('show1').innerHTML +=' <input id ="first" type="text" value ="'+ data.first_name+'"></input><input id ="last" value = "'+ data.last_name+'"></input><input id="grade" value="'+data.grade+'"></input>'
        });
  
   }

   