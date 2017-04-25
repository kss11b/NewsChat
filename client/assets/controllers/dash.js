app.controller('dashController', ['$scope','userFactory', 'boardFactory', '$routeParams', '$location', '$cookies', function($scope,userFactory, boardFactory, $routeParams, $location, $cookies) {

  userFactory.session(function(res){
    if(!res){
      $location.url("/")
    }
    else{
    $scope.current_user = userFactory.current_user
  }
  })

  $scope.logout = function(){
    userFactory.logout()
    $cookies.remove('user_id');
    $location.url("/")
  }

  $scope.index = function(){
    console.log('ctrlr index')
    boardFactory.index(function(res){
      console.log(res.data)
      $scope.boards = res.data
      $cookies.remove('current_board');
    })
  }

  $scope.board = function(newBoard){
    newBoard.admin = userFactory.current_user._id
    boardFactory.board(newBoard, function(res){
      $scope.index()
      console.log(res.data)
    })
  }
  $scope.delete = function(id){
    boardFactory.delete(id, function(res){
      $scope.index()
      console.log(res.data)
    })
  }
  $scope.move = function(id){
    boardFactory.move(id, function(res){
      $location.url('board')
    })
  }

  $scope.index()
  }])
