
# Totvs Challenge Core

## NODE - Express
#### Technologies

 - Node
 - Express
 - Mongo
 - Mongoose
 - CORS
 - JWT
 - SWAGGER
 - Mocha
 - Chai

**Swagger:**
```
http://localhost:3000/swagger.json
```
---
### Endpoints:
**POST** */users/signin*
{
	"email": "dev@totvs.com.br",
	"password": "123123"
}

response:
```
{
	"user": {
		"id": "5e8fe59320ddaa001966aeec",
		"name": "Dev Totvs",
		"email": "dev@totvs.com.br"
	},
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```



**GET** */defaultings*
headers:
	x-token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
response:
```
{
	"defaultings": {
	"docs": [
		{
			"price": 30,
			"_id": "5e8fe59320ddaa001966aeea",
			"name": "a",
			"dueDate": "2020-04-10T03:18:43.852Z",
			"__v": 0
		},
		{
			"price": 30,
			"_id": "5e8fe59320ddaa001966aeeb",
			"name": "b",
			"dueDate": "2020-04-10T03:18:43.852Z",
			"__v": 0
		}
	],
	"total": 2,
	"limit": 10,
	"page": 1,
	"pages": 1
	}
}
```


---
## Project setup
```
docker-compose build
docker-compose run api npm install
```

### run
```
1º - $ docker-compose run api node configurations/seeds.js
2º - $ docker-compose up
```

### Tests
```
docker-compose run api npm test
```
