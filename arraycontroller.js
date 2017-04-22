app.controller("arrayCntrl",function($scope){
	       //simple array
           $scope.students = [12,22,33,44];
           //object array/key value pair
           $scope.studentinfo=[{'firstname':'shilpa','lastname':'gurav'}];
           //string array
           $scope.studentinfostring = '[{"firstname":"shilpa","lastname":"gurav"}]';
           $scope.person=JSON.parse($scope.studentinfostring);
});