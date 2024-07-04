const express = require('express');
const axios = require('axios');
const app = express();

require('dotenv').config();
const port = process.env.PORT || 3000;
const weatherApi = process.env.WEATHER_API;

app.get('/api/hello', async (req, res) => {
  const visitorName = req.query.visitor_name || 'Mark';
  const clientIP = req.headers['x-forwarded-for']?.split(',').shift() || req.socket?.remoteAddress;

  try {

    // Get location from external API
    const locationFromIP = await axios.get(`http://ip-api.com/json/${clientIP}`);
    const locationName = locationFromIP.data.city;

    //Get Temperature from external API
    const weatherDetails = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${locationName}&units=metric&appid=${weatherApi}`);
    const temperature = weatherDetails.data.main.temp;

    res.json({
      client_ip: clientIP, //The IP address of the requester
      location: locationName, //The city of the requester
      greeting: `Hello, ${visitorName}!, the temperature is ${temperature} degrees Celsius in ${locationName}.`
    });

  } catch (error) {
    res.status(500).json({ error: 'error getting information' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});