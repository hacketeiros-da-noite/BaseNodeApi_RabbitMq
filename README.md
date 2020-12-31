
# Base Node API with Worker RabbitMq

A base model api to make more fast and easy create Api with node language that listen a rabbitmq queues too

### Technologies
	
    Node.js
    RabbitMq
    Express
    Sequelize
    Eslint
    Prettier
    Sucrase
    Nodemon
    Pm2
    PostgreSQL

### Other Infos
- RocketSeat Api stack
- Service Pattern
- Workers

![Base Node Api](https://media.giphy.com/media/xUPGGuzpmG3jfeYWIg/giphy.gif)


NOTE: This is a template repo, so you can use it to create a new repository based on our BaseApi
### How to use

 - Click in "Use this template" button next to "Clone or download" button.
 - Configure your new repository.
 - Create it!
 - Good luck and have fun!

### Run the solution
- This solution uses pm2 to run the services.
- The configuration of pm2 are in src/config/ecosystem.config.js
- To run i create scripts in package.json and to make more easy just have to run the command: npm start
- The start command innitialize worker and apis of config

### RabbitMq Consumers
- The configs of rabbitMq are in src/config/rabbitmq
- The queues to listen are in src/config/RabbitmqQueues
- Just have to ajuste this configs to listen the queue

### Contribuitors
* [Renan Winter](https://www.github.com/rwspatin)
