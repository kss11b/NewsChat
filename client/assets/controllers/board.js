app.controller('boardController', ['$scope','userFactory', 'boardFactory', '$routeParams', '$location', '$cookies', '$http', function($scope,userFactory, boardFactory, $routeParams, $location, $cookies, $http) {
  userFactory.session(function(res){
    if(!res){
      $location.url('/')
    }
    else{
    $scope.current_user = userFactory.current_user
  }
  })
  $scope.getBoard = function(){

    var techNewsurl='https://newsapi.org/v1/articles?source=hacker-news&sortBy=latest&apiKey=f76904152bf944798a8a79a3be817402'
    var businessNewsurl='https://newsapi.org/v1/articles?source=business-insider&sortBy=latest&apiKey=f76904152bf944798a8a79a3be817402'
    var sportsNewsurl='https://newsapi.org/v1/articles?source=espn&sortBy=top&apiKey=f76904152bf944798a8a79a3be817402'
    var scienceNewsurl='https://newsapi.org/v1/articles?source=national-geographic&sortBy=top&apiKey=f76904152bf944798a8a79a3be817402'
    var politicsNewsurl='https://newsapi.org/v1/articles?source=cnn&sortBy=top&apiKey=f76904152bf944798a8a79a3be817402'
    var entertainmentNewsurl='https://newsapi.org/v1/articles?source=entertainment-weekly&sortBy=top&apiKey=f76904152bf944798a8a79a3be817402'

    $http.get(techNewsurl).then(function(res){
      console.log(res.data.articles)
      $scope.techNews = res.data.articles
      })

    $http.get(businessNewsurl).then(function(res){
      console.log(res.data.articles)
      $scope.businessNews = res.data.articles
        })
    $http.get(scienceNewsurl).then(function(res){
      console.log(res.data.articles)
      $scope.scienceNews = res.data.articles
        })
    $http.get(entertainmentNewsurl).then(function(res){
      console.log(res.data.articles)
      $scope.entertainmentNews = res.data.articles
        })
    $http.get(sportsNewsurl).then(function(res){
      console.log(res.data.articles)
      $scope.sportsNews = res.data.articles
        })
    $http.get(politicsNewsurl).then(function(res){
      console.log(res.data.articles)
      $scope.politicsNews = res.data.articles
            })
    boardFactory.board_id = $cookies.get('current_board');
    if(!boardFactory.board_id){
      $location.url('dash')
    }
    else{
      boardFactory.getBoard(function(res){
        socket.emit('newItem')
        $scope.board = res.data

        if($scope.board.topic == 'Politics'){
          $scope.news = $scope.politicsNews
        }
        if($scope.board.topic == 'Science'){
          $scope.news = $scope.scienceNews
        }
        if($scope.board.topic == 'Entertainment'){
          $scope.news = $scope.entertainmentNews
        }
        if($scope.board.topic == 'Sports'){
          $scope.news = $scope.sportsNews
        }
        if($scope.board.topic == 'Tech'){
          $scope.news = $scope.techNews
        }
        if($scope.board.topic == 'Business'){
          $scope.news = $scope.businessNews
          console.log($scope.news)
        }
        console.log(res.data)
          })
    }
  }
  $scope.post = function(newPost){
    newPost.board = boardFactory.board_id
    newPost.poster = userFactory.current_user._id
    newPost.username = userFactory.current_user.username
    boardFactory.post(newPost, function(res){
      console.log(res.data)
      if(!res.data.errors){
        socket.emit('newItem')
      }
    })
    $scope.newPost = {}
  }

$scope.getBoard()
socket.on('updatePosts', $scope.getBoard);


}])
