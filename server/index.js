const express = require('express'); //Line 1
const app = express(); //Line 2
const port = process.env.PORT || 5000; //Line 3

app.use(express.json());
app.use(express.urlencoded());


// create a GET route
app.get('/express_backend', (req, res) => { //Line 9
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' }); //Line 10
}); //Line 11

app.post('/move', (req,res) => {
  const game = [1,2,3]
  const squares = req.body;
  const lines = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
  ]
  let ret = null
  for(let i=0; i<lines.length;i++){
      const [a,b,c] = lines[i];
      if(squares[a] && squares[a] === squares[b] && squares[b] === squares[c]){
           ret = squares[a];
      }
  }
  
  let datax = {
    ret: ret,
  };

  res.json(JSON.parse(JSON.stringify(datax)));
});

// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`)); //Line 6
