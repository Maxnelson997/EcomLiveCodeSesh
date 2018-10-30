const express = require('express');
const port = process.env.PORT || 8080;
const app = express();

// app.use(express.static(__dirname + '/dist/'));
// app.get(/.*/, function (req, res) {
//   res.sendFile(__dirname + '/dist/index.html');
// })

app.get('/api/store', function(req, res) {
  const stickers = [
    {
      _id: 0,
      category: 'JavaScript',
      remaining: 4,
      imageUrl: 'https://via.placeholder.com/80x80'
    },
    {
      _id: 1,
      category: 'Python',
      remaining: 2,
      imageUrl: 'https://via.placeholder.com/80x80'
    },
    {
      _id: 2,
      category: 'Ruby',
      remaining: 6,
      imageUrl: 'https://via.placeholder.com/80x80'
    }
  ]
  
  res.send({
    stickers
  })
})


app.listen(port);

console.log("server started");