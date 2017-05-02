angular.module("books")
.controller("bookController",["$scope", "$http", "booksServices", "$state",
	function($scope, $http, booksServices, $state){
		$scope.idBook = $state.params.idBook;
		$scope.book = {};

		booksServices.getBook($scope.idBook).then(function(res){
			console.log(res);
			$scope.book = res;
		});
		$scope.prev = function(){
			$state.go('home');
		}
	}]);