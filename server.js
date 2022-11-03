const app = require('./app')

const port = process.env.PORT || 3000
app.get("/", (req, res)=>{
res.sedn("<h1>Hello world</h1>")
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
