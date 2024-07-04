# HNG Stage One Task - Backend Track

## Task Description

This task involves setting up a basic web server, deploying it, and exposing an API endpoint that returns specific information about the requester.

### Endpoint

[GET] `<example.com>/api/hello?visitor_name="Mark"`

#### Response:

```json
{
  "client_ip": "127.0.0.1", // The IP address of the requester
  "location": "London", // The city of the requester
  "greeting": "Hello, Mark!, the temperature is 25 degrees Celsius in London"
}
```

### Dependencies

- Axios
- Express
- Nodemon

### APIs Used

- Ip-api: For getting the geographical location based on the IP address.
- Openweathermap API: For getting the weather information.

## Setup Instructions

### 1. Clone the Repository

```sh
git clone <repository-url>
cd <repository-directory>
```

### 2. Install Dependencies

```sh
npm install

```

### 4. Deploy to Vercel
### 4. Query API