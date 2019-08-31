const app = require('./app');
const PORTA = 3002;
app.listen(PORTA,()=> console.log(`App ouvindo a porta ${PORTA}`));