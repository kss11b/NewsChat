app.factory('boardFactory', ['$http', '$cookies', function($http, $cookies) {
  var factory = {};

  factory.index = function(callback) {
    console.log("factory index")
      $http.get('/pull').then(function(res){
        factory.board_id = null
        callback(res);
      });
  }

  factory.board = function(newBoard, callback) {
    console.log(newBoard)
    $http.post('/board', newBoard).then(function(res){
        callback(res);


              });
      }
  factory.delete = function(id, callback) {
    console.log(id)
      $http.delete('/delete/' + id).then(function(res){
        callback(res)
      })
  }
  factory.move = function(id, callback) {
    $cookies.put("current_board", id);
        factory.board_id = $cookies.get('current_board');
        callback()
  }
  factory.getBoard = function(callback) {
    id = factory.board_id
    $http.get('/getBoard/' + id).then(function(res){
        callback(res)
    })
  }

  factory.post = function(newPost, callback) {
    $http.post('/post', newPost).then(function(res){
      callback(res)
    })
  }

  return factory;
}]);
