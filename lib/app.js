angular.module("books", ["ui.router", "LocalStorageModule"])
	.config(function($stateProvider){

		$stateProvider
            .state("home", {
                url: "/?query&index",
                templateUrl: "/partials/search.html",
                controller: "searchController"
            });
		$stateProvider
            .state("book", {
                url: "/book/:idBook",
                templateUrl: "/partials/book.html",
                controller: "bookController"
            });
	});