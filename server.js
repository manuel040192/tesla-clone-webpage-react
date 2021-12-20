const express = require("express")
const app = express()
const PORT = process.env.PORT || 3000
const path = require('path')
                    
app.listen(3000, () => console.log('Server running on port {PORT}'))

app.use(express.static(path.join(__dirname, 'public')))

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})
