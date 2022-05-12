const express = require('express')

const app = express()

app.use(express.json())

const customers = [
    {firstName: 'John', age: 27},
    {firstName:'Steve',age:21},
    {firstName: 'Dwayne', age: 32},
    {firstName: 'Dolly', age: 27},
    {firstName: 'Henry', age: 17},
    {firstName: 'Amber',age:31},
    {firstName: 'Johny', age: 34},
    {firstName: 'Paul', age: 24},
]

app.get('/', (req,resp)=>{
    resp.send('Welcome to My Home')
})

app.get('/customers',(req,resp)=>{
    resp.send(customer)
})

app.get('/customers/:firstName',(req,resp)=>{
    
    const customer = customers.find(v=> v.firstName === req.params.firstName)
    if(!customer) resp.status(404).send('customer not found')
    resp.send(customer)
})

// app.post('/api/customers/addCustomer',(req,resp)=>{
//     const customer = {
//         id: customer.length+1,
//         title: req.body.title
//     }
//     customer.push(customer)
//     resp.send(customer)
// })

// app.put('/api/customers/:id',(req,resp)=>{
//     const customer = customer.find(v=> v.id === parseInt(req.params.id))
//     if(!customer) resp.status(404).send('customer not found')
    
//     customer.title = req.body.title
//     resp.send(customer)
// })

// app.delete('/api/customers/:id',(req,resp)=>{
//     const customer = customer.find(v=> v.id === parseInt(req.params.id))
//     if(!customer) resp.status(404).send('customer not found')
//     const index = customer.indexOf(customer)
//     customer.splice(index,1)
//     resp.send(customer)
// })

app.listen(8080)