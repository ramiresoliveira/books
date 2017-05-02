angular.module('books')
.factory('booksServices', function($http){
	return {
		searchBooks: function(query, index){
			var promise = $http.get("https://www.googleapis.com/books/v1/volumes",{
				params: {
					q: query,
					maxResults: 10,
					startIndex: index
				}
			})
			.then(function(res){
				return res.data;
			})
			return promise;
		},
		getBook: function(idBook){

			var promise = $http.get("https://www.googleapis.com/books/v1/volumes/" + idBook)
			.then(function(res){
				return res.data;
			})
			return promise;
		}
	}
});