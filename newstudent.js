document.getElementById('enter').addEventListener('click',add)
function add (){
    let first_name1 = document.getElementById("first").value,
    last_name1 = document.getElementById("last").value,
    grade1 = document.getElementById("grade").value;
    const myHeaderS = new Headers();
    myHeaderS.append('Content-Type', 'application/json');
    fetch('http://localhost:5500/students', {
        method: 'POST',
        headers: myHeaderS,
        body: JSON.stringify({
            first_name: first_name1,
            last_name: last_name1,
            grade: grade1
        })
    })
     .then (response => response.json())
    .then(data => console.log(data) );


}
