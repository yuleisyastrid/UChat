var config = {
    apiKey: "<API_KEY>",
    authDomain: "<PROJECT_ID>.firebaseapp.com",
    databaseURL: "https://<DATABASE_NAME>.firebaseio.com",
    projectId: "<PROJECT_ID>",
    storageBucket: "<BUCKET>.appspot.com",
    messagingSenderId: "<SENDER_ID>",
  };
  firebase.initializeApp(config);

  angular.module('starter.controllers', [])
  .controller("registro", function($scope){

    $scope.user={}

    $scope.registro=function(x) {
      $scope.user=x;
      firebase.auth().createUserWithEmailAndPassword($scope.user.email, $scope.user.password).catch(function(error){
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage)
      alert("usuario registrado");
        });
      };
  })

.controller("registro",function($scope){

  });