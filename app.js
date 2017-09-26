angular.module('tutorialApp', [])
  .controller('ArticlesCtrl', function($scope){
    $scope.articles = [
      { id: 1, name: "Pizza Vegetaria", price: 5 },
      { id: 2, name: "Pizza Salami",    price: 5.5 },
      { id: 2, name: "Pizza Funghi",    price: 5.5 },
      { id: 2, name: "Pizza Quattro stagioni",    price: 5.5 },
      { id: 3, name: "Pizza Thunfisch", price: 6 },
      { id: 3, name: "Pizza Thunfisch 2", price: 6 }
    ];
  });
