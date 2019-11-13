let arr1=[];
document.getElementById('enter').addEventListener('click',show)
function show(){
    document.getElementById('show1').innerHTML="";
    let page1 = document.getElementById('Num').value ;
    fetch('http://localhost:5500/students?page='+page1, {
           method: 'GET',
       })
       .then(response => response.json())
       .then(data => {
        for(let i=0; i<data.length;i++){
            document.getElementById('show1').innerHTML +=' <tr><th>'+ data[i].id+'</th><th>'+ data[i].first_name+'</th><th>'+ data[i].last_name+'</th><th>'+data[i].grade+'</th></tr>'
            arr1.push(data[i]);
        }
       }
   );
  
   }
