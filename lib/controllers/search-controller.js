angular.module("books")
.controller("searchController",["$scope", "$http", "booksServices", "$state",
	function($scope, $http, booksServices, $state){
		$scope.books = [];
		$scope.query = '';
		$scope.index = 0;
		$scope.pags = [];
		// $scope.idBook = $state.params.idBook;
		console.log($state.params);


		$scope.search = function(){
			booksServices.searchBooks($scope.query, $scope.index).then(function(res){
				console.log(res);
				$scope.books = res.items;
				var num = Math.round(res.totalItems/10);
				for (var i = 0; i <= num; i++) {

					$scope.pags.push({index : i*10});
				}
				console.log($scope.pags);
			});
		}
		if ($state.params.index) {
			$scope.index = $state.params.index;
		}
		if ($state.params.query) {
			$scope.query = $state.params.query;
			$scope.search();
		}
		$scope.shortText = function(text){
			if (text.length > 150) {
	            text = text.slice(0, 150) + '...';
	        }
	        return text;
		}

		$scope.navigate = function(idBook){
			// location.href = "/book/" + idBook;
			console.log(idBook);
			// $state.go("/book/" + idBook);
			$state.go('book', {idBook: idBook});
		}

		$scope.navigatePag = function(index){
			$state.go('home', {query: $scope.query, index: index});
		}
	}]);