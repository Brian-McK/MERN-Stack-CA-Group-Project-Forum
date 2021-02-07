const router = require(`express`).Router()

const carsModel = require(`../models/cars`)

// read all records
router.get(`/cars/`, (req, res) => 
{   
    carsModel.find((error, data) => 
    {
        res.json(data)
    })
})


// Read one record
router.get(`/cars/:id`, (req, res) => 
{
    carsModel.findById(req.params.id, (error, data) => 
    {
        res.json(data)
    })
})


// Add new record
router.post(`/cars/`, (req, res) => 
{
    carsModel.create(req.body, (error, data) => 
    {
        res.json(data)
    })
})


// Update one record
router.put(`/cars/:id`, (req, res) => 
{
    carsModel.findByIdAndUpdate(req.params.id, {$set: req.body}, (error, data) => 
    {
        res.json(data)
    })        
})


// Delete one record
router.delete(`/cars/:id`, (req, res) => 
{
    carsModel.findByIdAndRemove(req.params.id, (error, data) => 
    {
        res.json(data)
    })       
})

module.exports = router