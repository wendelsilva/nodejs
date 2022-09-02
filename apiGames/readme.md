# API de Games
Esta API é utilizada para Games

## Endpoints
### GET /games
Esse endpoint é utilizada para retornar todos os games do banco de dados.
#### Parametros
Nenhum
#### Respostas
##### OK! 200
Caso essa resposta aconteça você vai receber a listagem de todos os games.
```JSON
[
	{
		"id": 23,
		"title": "Call of Duty MW",
		"year": "2020",
		"price": "60"
	},
	{
		"id": 65,
		"title": "Sea of Thieves",
		"year": 2018,
		"price": 40
	},
	{
		"id": 2,
		"title": "Minecraft",
		"year": 2012,
		"price": 20
	}
]

```
##### Falha na autenticação! 401
Casso essa resposta aconteça isso significa que aconteceu alguma falha durante o processo de autenticação. Motivos: Token inválido, Token expirado 