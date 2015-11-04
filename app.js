(function(){

    
    var app = angular.module('gemStore', ['store-directives']);



    app.controller('StoreController',['$http','$log', function($http,$log){
	var store = this;
	store.products = [];

	$http.get("store-products.json").success(function(data){
	    console.log(data);
	    store.products = data;    
	});
    }]);



    app.controller('ReviewController', function(){
	this.review = {};

	this.addReview = function(product){

	    //this.review = {createdOn : Date.now()};
	    product.reviews.push(this.review);
	   
	    console.log(product);
	    this.review = {};
	};
    });


    
})()
