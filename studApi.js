
let express = require('express')
let app = express()
const bodyParser = require('body-parser');
let port =5500
let pagesize=5;
let students= [];
let contant='students.json';
let fs = require('fs');

app.use(bodyParser.json());

fs.readFile(contant, 'utf-8', (err, data) => {
    if (err) {
        console.log(err.message);
    } else {
        students =JSON.parse(data)
    }
});


app.get("/students", (req, res) =>{
    let page1=req.query.page;
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
  start=(page1-1)*pagesize;
  end=start+ pagesize;
  res.send(students.slice(start,end));
  });
 

 app.get("/students/:id", (req, res) =>{
    let id=req.params.id;
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    let myStu = students.find(item => item.id == id);
    console.log(myStu);
  res.send(myStu);
  });

  app.post('/students', (req, res) => {
   const newStu = {
     id: students.length + 1,
     first_name: req.body.first_name,
     last_name: req.body.last_name,
     grade: req.body.grade
   }
   students.push(newStu);
   console.log(newStu);
    res.send(newStu)
  });

  app.delete("/students/:id", (req, res) =>{
    let id=req.params.id;
    students.map((item, index) => {
        if (item.id === id) {
           students.splice(index, 1); 
           console.log(item);
           return  res.send(item); 
    }
  });
  });
 app.listen(5500);
