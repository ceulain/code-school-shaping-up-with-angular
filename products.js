(function() {
    var app = angular.module('store-directives', []);

    app.directive('productGallery', function(){
    	return {
            restrict : 'E',
            templateUrl : 'product-gallery.html',
            controller : function(){
		this.current = 0;
		this.setCurrent = function(imageNumber){
		    this.current = imageNumber || 0;
		};
	    },
            controllerAs : 'gallery'
	};
    });


    app.directive("productTabs", function(){
	return {
	    restrict : 'E',
	    templateUrl : 'product-tabs.html',
	    controller : function(){
		this.tab = 1;
		this.setTab = function(tab){
		    this.tab = tab;
		};
		
		this.isSet = function(set){
		    return this.tab === set;  
		};
	    },
	    controllerAs : "tab"
	};

    });


})();
