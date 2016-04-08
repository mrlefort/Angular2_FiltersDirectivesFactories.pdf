var app = angular.module('examApp', []);


app.controller('ExamController', ["dataForTabel", function (dataForTabel) {
        var self = this;
//        var studentsInfo = {};
//        studentsInfo.allCourses = [
//            {courseId: 1000, courseName: "Basic Programming"},
//            {courseId: 1001, courseName: "Advanced Programming"},
//            {courseId: 1003, courseName: "DataBase Intro"}];
//        studentsInfo.students = [];
//        studentsInfo.students.push({studentId: 100, name: "Peter Hansen", grades: [{grade: "10"}, {grade: "12"}, {}]});
//        studentsInfo.students.push({studentId: 101, name: "Jan Olsen", grades: [{grade: "7"}, {grade: "10"}, {}]});
//        studentsInfo.students.push({studentId: 102, name: "Gitte Poulsen", grades: [{grade: "7"}, {grade: "7"}, {}]});
//        studentsInfo.students.push({studentId: 103, name: "John McDonald", grades: [{grade: "10"}, {}, {grade: "7"}]});
//
//        $scope.courses = studentsInfo.allCourses;
//        $scope.students = studentsInfo.students;

        self.studentsInfo = {};
        self.studentsInfo = dataForTabel.getStudents();
        console.log("controller damn" + self.studentsInfo);

    }]);

app.service("dataForTabel", function () {
    this.getStudents = function () {
        
        this.studentsInfo = {};
        this.studentsInfo.allcourses = [
            {courseId: 1000, courseName: "Basic Programming"},
            {courseId: 1001, courseName: "Advanced Programming"},
            {courseId: 1003, courseName: "DataBase Intro"}];
        this.studentsInfo.students = [];
        this.studentsInfo.students.push({studentId: 100, name: "Peter Hansen", grades: [{grade: "10"}, {grade: "12"}, {}]});
        this.studentsInfo.students.push({studentId: 101, name: "Jan Olsen", grades: [{grade: "7"}, {grade: "10"}, {}]});
        this.studentsInfo.students.push({studentId: 102, name: "Gitte Poulsen", grades: [{grade: "7"}, {grade: "7"}, {}]});
        this.studentsInfo.students.push({studentId: 103, name: "John McDonald", grades: [{grade: "10"}, {}, {grade: "7"}]});
        console.log("damn" + this.studentsInfo);
        return this.studentsInfo;

    };

});


app.filter("averageFilter", function () {
    return function (x) {
        var result = 0;
        for (var i = 0; i < x.grades.length; i++) {
            if (parseInt(x.grades[i].grade) > 0) {
                console.log("the grade " + parseInt(x.grades[i].grade));
                result += parseInt(x.grades[i].grade);
            } else {

                console.log("damn");
            }

        }
        return result / 2;
    };

});

app.directive("studentGrades", function () {
    var a = {
        replace: "true",
        templateUrl: "table.html"

    };
    return a;


});

app.controller ("MyController", function ($scope, $http) {
        

        $scope.getItems = function() {
         $http({method : 'GET',url : 'http://www.w3schools.com/angular/customers.php'})
            .success(function(data) {
                $scope.items = data.records;

             });
            
        };
    });