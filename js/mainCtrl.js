angular.module('quoteBook')
  .controller('mainCtrl', ['$scope', 'dataService', '$cookies', '$cookieStore',
    function($scope, dataService, $cookies, $cookieStore) {



      // console.log($cookies.getObject("quote"));
      // $cookies.putObject("quote", quotes[i]);

      $scope.test = "I dont want to dance";
      $scope.quotes = dataService.getQuotes();
      //$scope.cook = dataService.setookies($cookies.putObject('author', putObject())
      $scope.settext = $cookies.putObject('text', (dataService.setookiestxt()));
      $scope.setauthor = $cookies.putObject('author', (dataService.setookies()));
      $scope.getText = $cookies.getObject('text');
      $scope.getAuthor = $cookies.getObject('author');


      console.log($scope.getAuthor, $scope.getText);

      $scope.deleteMe = function(textToDelete) {
        dataService.removeData(textToDelete);
      }
      $scope.addQuote = function() {
        var newQuote = {
          text: $scope.newQuoteText,
          author: $scope.newQuoteAuthor
        }
        if (dataService.addData(newQuote)) {
          $scope.newQuoteText = '';
          $scope.newQuoteAuthor = '';
        }
      }

    }
  ]);
