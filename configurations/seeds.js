var seeder = require('mongoose-seed');

seeder.connect('mongodb://db:27017/totvs', () => {
  seeder.loadModels([
    'api/models/user.js',
    'api/models/defaulting.js'
  ]);

  seeder.clearModels(['user', 'defaulting'], () => {
    seeder.populateModels(data, () => {
      seeder.disconnect();
    });
  });
});

var data = [
  {
    'model': 'user',
    'documents': [
      {
        'name': 'Dev Totvs',
        'email': 'dev@totvs.com.br',
        'password': '123123'
      }
    ]
  },
  {
    'model': 'defaulting',
    'documents': [
      {
        'name': 'Adrea Martins',
        'price': 30.0,
        'dueDate': new Date(new Date(2020, 0, 1).getTime() + Math.random() * (new Date().getTime() - new Date(2020, 0, 1).getTime()))
      },
      {
        'name': 'Paulo Cesar',
        'price': 54.5,
        'dueDate': new Date(new Date(2020, 0, 1).getTime() + Math.random() * (new Date().getTime() - new Date(2020, 0, 1).getTime()))
      },
      {
        'name': 'Amanda Pereira',
        'price': 150.10,
        'dueDate': new Date(new Date(2020, 0, 1).getTime() + Math.random() * (new Date().getTime() - new Date(2020, 0, 1).getTime()))
      },
      {
        'name': 'Jorge Caio',
        'price': 1.050,
        'dueDate': new Date(new Date(2020, 0, 1).getTime() + Math.random() * (new Date().getTime() - new Date(2020, 0, 1).getTime()))
      },
      {
        'name': 'Maria Aparecida',
        'price': 50.0,
        'dueDate': new Date(new Date(2020, 0, 1).getTime() + Math.random() * (new Date().getTime() - new Date(2020, 0, 1).getTime()))
      },
      {
        'name': 'Carlos Almeida',
        'price': 50.0,
        'dueDate': new Date(new Date(2020, 0, 1).getTime() + Math.random() * (new Date().getTime() - new Date(2020, 0, 1).getTime()))
      },
      {
        'name': 'Jussara Oliveira',
        'price': 54.50,
        'dueDate': new Date(new Date(2020, 0, 1).getTime() + Math.random() * (new Date().getTime() - new Date(2020, 0, 1).getTime()))
      },{
        'name': 'João Abel',
        'price': 450.0,
        'dueDate': new Date(new Date(2020, 0, 1).getTime() + Math.random() * (new Date().getTime() - new Date(2020, 0, 1).getTime()))
      }
      ,{
        'name': 'Mário Dantas',
        'price': 53.0,
        'dueDate': new Date(new Date(2020, 0, 1).getTime() + Math.random() * (new Date().getTime() - new Date(2020, 0, 1).getTime()))
      }
      ,{
        'name': 'Chica Almeida',
        'price': 500.0,
        'dueDate': new Date(new Date(2020, 0, 1).getTime() + Math.random() * (new Date().getTime() - new Date(2020, 0, 1).getTime()))
      },
      {
        'name': 'Wagner de Sousa',
        'price': 1.050,
        'dueDate': new Date(new Date(2020, 0, 1).getTime() + Math.random() * (new Date().getTime() - new Date(2020, 0, 1).getTime()))
      },
      {
        'name': 'João Alencar',
        'price': 50.0,
        'dueDate': new Date(new Date(2020, 0, 1).getTime() + Math.random() * (new Date().getTime() - new Date(2020, 0, 1).getTime()))
      },
      {
        'name': 'Roberto Carlos da Silva',
        'price': 50.0,
        'dueDate': new Date(new Date(2020, 0, 1).getTime() + Math.random() * (new Date().getTime() - new Date(2020, 0, 1).getTime()))
      },
      {
        'name': 'Luiz Mendo',
        'price': 54.50,
        'dueDate': new Date(new Date(2020, 0, 1).getTime() + Math.random() * (new Date().getTime() - new Date(2020, 0, 1).getTime()))
      },
      ,{
        'name': 'Maraisa das Dores',
        'price': 450.0,
        'dueDate': new Date(new Date(2020, 0, 1).getTime() + Math.random() * (new Date().getTime() - new Date(2020, 0, 1).getTime()))
      }
      ,{
        'name': 'Eduardo Chaves',
        'price': 53.0,
        'dueDate': new Date(new Date(2020, 0, 1).getTime() + Math.random() * (new Date().getTime() - new Date(2020, 0, 1).getTime()))
      }
      ,{
        'name': 'Estevam Araujo',
        'price': 500.0,
        'dueDate': new Date(new Date(2020, 0, 1).getTime() + Math.random() * (new Date().getTime() - new Date(2020, 0, 1).getTime()))
      }
    ]
  }
];
