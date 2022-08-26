const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())
app.use(express.json())
coordinate = [0,0];
app.post('/api/send', async (req, res) => {
	try {
		//console.log(req.body);
    //let lat = req.body.lat;
    //let lon = req.body.lon;
    //sendCoordinate(lat,lon);
    coordinate[0] = req.body.lat;
    coordinate[1] = req.body.lon;

		res.json({ status: 'ok', lat: req.body.lat, lon: req.body.lon })
     
	} catch (error) {
		console.log(error)
		res.json({ status: 'error'})
	}
})


// getting the get request from the user
//function sendCoordinate(lat,lon){
app.get('/api/receive', async (req, res) => {
	try {
    
    //console.log(lat, lon)
		  res.json({ status: 'ok', lat: coordinate[0], lon : coordinate[1] })
    
	} catch (error) {
		console.log(error)
		res.json({ status: 'error', error: 'some error occured' })
	}
})
//}



//console.log(lat)

app.listen(process.env.PORT || 1337, () => {
	console.log('Server started on 1337')
})