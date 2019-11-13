document.getElementById('enter').addEventListener('click',deleteEtem)
 
 function deleteEtem(){
    let ID1 = document.getElementById('Num').value ;
    fetch('http://localhost:5500/students/'+ID1, {
            method: 'DELETE',
        })
        .then(Response =>
            Response.json())
        .then(result =>
            console.log(result));
 }