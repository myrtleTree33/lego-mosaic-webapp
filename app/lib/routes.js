
Router.route('/', {
  name: 'home',
  controller: 'HomeController',
  where: 'client'
});

Router.route('test', {
  name: 'test',
  controller: 'TestController',
  where: 'client'
});