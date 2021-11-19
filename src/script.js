$(document).ready(function() {
  $('ul.tabs').tabs();
});
$('.carousel.carousel-slider').carousel({
  full_width: true,
  indicators: false,
});

var myFunction1 = function() {
  $('.carousel').carousel('set', 0);
}
var myFunction = function() {
  $('.carousel').carousel('set', 1);
}
var myFunction3 = function() {
  $('.carousel').carousel('set', 2);
}
var myFunction4 = function() {
    $('.carousel').carousel('set', 3);
  }
  //Angular Materialize
var app = angular.module('materializeApp', ['ui.materialize'])
  .controller('BodyController', ["$scope", function($scope) {
    $scope.cssLesson1 = [{
      icon: 'large material-icons',
      iconDisplay: 'message',
      title: 'Lecture',
      content: 'Pellentesque viverra fringilla neque. Pellentesque leo lacus, aliquet et lorem sed, tincidunt varius justo. Curabitur a gravida urna, in interdum neque. Maecenas ornare ullamcorper eros sed gravida. Aenean et ante id libero varius varius. Donec venenatis consectetur nunc, eu placerat libero consequat vitae. Ut quis libero vel nunc scelerisque rutrum in quis ligula. Curabitur a dolor ac mauris vestibulum interdum iaculis ac magna. Morbi aliquam turpis nec sem posuere mattis. Pellentesque mattis nec ex vitae viverra. Quisque a rhoncus ligula. Integer mollis faucibus ligula a rutrum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent a commodo lacus, at pretium augue. Nulla odio sapien, pellentesque in auctor nec, rutrum eget sem. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin et metus nibh. Proin accumsan dolor sollicitudin neque tempor pharetra eu nec lacus. Suspendisse feugiat facilisis suscipit. Donec eu tristique velit, ac condimentum tellus.'
    }, {
      icon: 'large material-icons',
      iconDisplay: 'schedule',
      title: 'Completion Time',
      content: 'This lesson will take approximately 1 hour'
    }, {
      icon: 'large material-icons',
      iconDisplay: 'assignment',
      title: 'Assignments',
      content: 'No assignments due.',
    }];

    $scope.cssLesson2 = [{
      icon: 'large material-icons',
      iconDisplay: 'message',
      title: 'Lecture',
      content: 'Pellentesque viverra fringilla neque. Pellentesque leo lacus, aliquet et lorem sed, tincidunt varius justo. Curabitur a gravida urna, in interdum neque. Maecenas ornare ullamcorper eros sed gravida. Aenean et ante id libero varius varius. Donec venenatis consectetur nunc, eu placerat libero consequat vitae. Ut quis libero vel nunc scelerisque rutrum in quis ligula. Curabitur a dolor ac mauris vestibulum interdum iaculis ac magna. Morbi aliquam turpis nec sem posuere mattis. Pellentesque mattis nec ex vitae viverra. Quisque a rhoncus ligula. Integer mollis faucibus ligula a rutrum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent a commodo lacus, at pretium augue. Nulla odio sapien, pellentesque in auctor nec, rutrum eget sem. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin et metus nibh. Proin accumsan dolor sollicitudin neque tempor pharetra eu nec lacus. Suspendisse feugiat facilisis suscipit. Donec eu tristique velit, ac condimentum tellus.'
    }, {
      icon: 'large material-icons',
      iconDisplay: 'schedule',
      title: 'Completion Time',
      content: 'This lesson will take approximately 2 hour'
    }, {
      icon: 'large material-icons',
      iconDisplay: 'assignment',
      title: 'Assignments',
      content: 'Create an inline style with a working class and id on the page.',
    }];
    $scope.cssLesson3 = [{
      icon: 'large material-icons',
      iconDisplay: 'message',
      title: 'Lecture',
      content: 'Pellentesque viverra fringilla neque. Pellentesque leo lacus, aliquet et lorem sed, tincidunt varius justo. Curabitur a gravida urna, in interdum neque. Maecenas ornare ullamcorper eros sed gravida. Aenean et ante id libero varius varius. Donec venenatis consectetur nunc, eu placerat libero consequat vitae. Ut quis libero vel nunc scelerisque rutrum in quis ligula. Curabitur a dolor ac mauris vestibulum interdum iaculis ac magna. Morbi aliquam turpis nec sem posuere mattis. Pellentesque mattis nec ex vitae viverra. Quisque a rhoncus ligula. Integer mollis faucibus ligula a rutrum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent a commodo lacus, at pretium augue. Nulla odio sapien, pellentesque in auctor nec, rutrum eget sem. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin et metus nibh. Proin accumsan dolor sollicitudin neque tempor pharetra eu nec lacus. Suspendisse feugiat facilisis suscipit. Donec eu tristique velit, ac condimentum tellus.'
    }, {
      icon: 'large material-icons',
      iconDisplay: 'schedule',
      title: 'Completion Time',
      content: 'This assignment will take approximately 3 hours.'
    }, {
      icon: 'large material-icons',
      iconDisplay: 'assignment',
      title: 'Assignments',
      content: 'Style your page and make it personal. You can style the page any way you would like.'
    }];
    $scope.cssLesson4 = [{
      icon: 'large material-icons',
      iconDisplay: 'message',
      title: 'Lecture',
      content: 'Pellentesque viverra fringilla neque. Pellentesque leo lacus, aliquet et lorem sed, tincidunt varius justo. Curabitur a gravida urna, in interdum neque. Maecenas ornare ullamcorper eros sed gravida. Aenean et ante id libero varius varius. Donec venenatis consectetur nunc, eu placerat libero consequat vitae. Ut quis libero vel nunc scelerisque rutrum in quis ligula. Curabitur a dolor ac mauris vestibulum interdum iaculis ac magna. Morbi aliquam turpis nec sem posuere mattis. Pellentesque mattis nec ex vitae viverra. Quisque a rhoncus ligula. Integer mollis faucibus ligula a rutrum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent a commodo lacus, at pretium augue. Nulla odio sapien, pellentesque in auctor nec, rutrum eget sem. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin et metus nibh. Proin accumsan dolor sollicitudin neque tempor pharetra eu nec lacus. Suspendisse feugiat facilisis suscipit. Donec eu tristique velit, ac condimentum tellus.'
    }, {
      icon: 'large material-icons',
      iconDisplay: 'schedule',
      title: 'Completion Time',
      content: 'This assignment will take approximately 2 hours.'
    }, {
      icon: 'large material-icons',
      iconDisplay: 'assignment',
      title: 'Assignments',
      content: 'For this assignment you will use the <style> tag to implement your styles to the HTML elements. Part two of the assignment will to be to create an external CSS stylesheet and import it to the page.'
    }];
    $scope.htmlLesson1 = [{
      icon: 'large material-icons',
      iconDisplay: 'message',
      title: 'Lecture',
      content: 'In this Lesson you will learn the basics of HTML5.'
    }, {
      icon: 'large material-icons',
      iconDisplay: 'schedule',
      title: 'Completion Time',
      content: 'This assignment will take approximately 3 hours.'
    }, {
      icon: 'large material-icons',
      iconDisplay: 'assignment',
      title: 'Assignments',
      content: 'Build a proper HTML5 template.'
    }];
    $scope.htmlLesson2 = [{
      icon: 'large material-icons',
      iconDisplay: 'message',
      title: 'Lecture',
      content: 'In this lesson you will be exploring HTML5 tags and creating content for your new web page.'
    }, {
      icon: 'large material-icons',
      iconDisplay: 'schedule',
      title: 'Completion Time',
      content: 'This assignment will take approximately 1 hours.'
    }, {
      icon: 'large material-icons',
      iconDisplay: 'assignment',
      title: 'Assignments',
      content: 'Explore different HTML tags such as <h1> and <p> which you will implement into a working web page to display content.'
    }];
    $scope.htmlLesson3 = [{
      icon: 'large material-icons',
      iconDisplay: 'message',
      title: 'Lecture',
      content: 'In this lesson you will learn how to add structure to your HTML5 page and organize your content.'
    }, {
      icon: 'large material-icons',
      iconDisplay: 'schedule',
      title: 'Completion Time',
      content: 'This assignment will take approximately 1 hours and 15 minutes.'
    }, {
      icon: 'large material-icons',
      iconDisplay: 'assignment',
      title: 'Assignments',
      content: 'Restructure your current page with the proper structuring techniques learned in this lesson.'
    }];
    $scope.htmlLesson4 = [{
      icon: 'large material-icons',
      iconDisplay: 'message',
      title: 'Lecture',
      content: 'In this lesson you will learn about the <td>, <th>, and <tr> tags for constructing tables.'
    }, {
      icon: 'large material-icons',
      iconDisplay: 'schedule',
      title: 'Completion Time',
      content: 'This assignment will take approximately 3 hours and 15 minutes.'
    }, {
      icon: 'large material-icons',
      iconDisplay: 'assignment',
      title: 'Assignments',
      content: 'Add a table in your web page with data of your choice.'
    }];
    $scope.javascriptLesson1 = [{
      icon: 'large material-icons',
      iconDisplay: 'message',
      title: 'Lecture',
      content: 'In this lecture we will go over the basics of JavaScript and this lesson will be an introduction to using JavaScript'
    }, {
      icon: 'large material-icons',
      iconDisplay: 'schedule',
      title: 'Completion Time',
      content: 'This assignment will take approximately 2 hours and 10 minutes.'
    }, {
      icon: 'large material-icons',
      iconDisplay: 'assignment',
      title: 'Assignments',
      content: 'Declare a few variables and log your new variable to the console.'
    }];
    $scope.javascriptLesson2 = [{
      icon: 'large material-icons',
      iconDisplay: 'message',
      title: 'Lecture',
      content: 'JavaScript supports a compact set of statements, specifically control flow statements, that you can use to incorporate a great deal of interactivity in your application.'
    }, {
      icon: 'large material-icons',
      iconDisplay: 'schedule',
      title: 'Completion Time',
      content: 'This assignment will take approximately 3 hours and 20 minutes.'
    }, {
      icon: 'large material-icons',
      iconDisplay: 'assignment',
      title: 'Assignments',
      content: 'Create a conditionional if statement and follow it with an else if statement. Once you are finished with your conditional statements you can end it with an else statement.'
    }];
    $scope.javascriptLesson3 = [{
      icon: 'large material-icons',
      iconDisplay: 'message',
      title: 'Lecture',
      content: 'Values can be passed to a function, and the function will return a value. In JavaScript, functions are first-class objects, because they can have properties and methods just like any other object. What distinguishes them from other objects is that functions can be called. In brief, they are Function objects.'
    }, {
      icon: 'large material-icons',
      iconDisplay: 'schedule',
      title: 'Completion Time',
      content: 'This assignment will take approximately 4 hours.'
    }, {
      icon: 'large material-icons',
      iconDisplay: 'assignment',
      title: 'Assignments',
      content: 'create a function named cats and when that function is called create a while loop to display "it is raining cats" once.'
    }];
    $scope.javascriptLesson4 = [{
      icon: 'large material-icons',
      iconDisplay: 'message',
      title: 'Lecture',
      content: 'You will be learning about arrays in this lesson which will take you through how to call a specific value from that array and how to define an array within an array.'
    }, {
      icon: 'large material-icons',
      iconDisplay: 'schedule',
      title: 'Completion Time',
      content: 'This assignment will take approximately 3 hours.'
    }, {
      icon: 'large material-icons',
      iconDisplay: 'assignment',
      title: 'Assignments',
      content: 'Create an array with values of your choice and then create a multi dimensional array on a seperate line.'
    }];
    $scope.phpLesson1 = [{
      icon: 'large material-icons',
      iconDisplay: 'message',
      title: 'Lecture',
      content: 'This is an introduction to PHP. In this course you will be introduced to creating dynamic pages and using MYSQL database to store data from your page.'
    }, {
      icon: 'large material-icons',
      iconDisplay: 'schedule',
      title: 'Completion Time',
      content: 'This assignment will take approximately 30 minutes.'
    }, {
      icon: 'large material-icons',
      iconDisplay: 'assignment',
      title: 'Assignments',
      content: 'Create a new PHP document and use echo to display text on your page.'
    }];
    $scope.phpLesson2 = [{
      icon: 'large material-icons',
      iconDisplay: 'message',
      title: 'Lecture',
      content: 'In this lesson you will be going over If/Else statements in PHP and how to implement them properly.'
    }, {
      icon: 'large material-icons',
      iconDisplay: 'schedule',
      title: 'Completion Time',
      content: 'This assignment will take approximately 2 hours.'
    }, {
      icon: 'large material-icons',
      iconDisplay: 'assignment',
      title: 'Assignments',
      content: 'Create a conditional statement using PHP and echo two different strings within each and make the statement either true or false.'
    }];
    $scope.phpLesson3 = [{
      icon: 'large material-icons',
      iconDisplay: 'message',
      title: 'Lecture',
      content: 'In this lesson you will discover how to use arrays in PHP.'
    }, {
      icon: 'large material-icons',
      iconDisplay: 'schedule',
      title: 'Completion Time',
      content: 'This assignment will take approximately 3 hours.'
    }, {
      icon: 'large material-icons',
      iconDisplay: 'assignment',
      title: 'Assignments',
      content: 'Create an array with at least four values of your choice.'
    }];
    $scope.phpLesson4 = [{
      icon: 'large material-icons',
      iconDisplay: 'message',
      title: 'Lecture',
      content: 'In this lesson you will play around with for loops and foreach loops.'
    }, {
      icon: 'large material-icons',
      iconDisplay: 'schedule',
      title: 'Completion Time',
      content: 'This assignment will take approximately 4 hours.'
    }, {
      icon: 'large material-icons',
      iconDisplay: 'assignment',
      title: 'Assignments',
      content: 'Create a for loop that counts backwards from 100 and stops at 0.'
    }];
  }]);
/*
//don't you worry about it *Cough Cough* Morty
var slideCSS = $('.carousel').carousel('set', 0);
var slideHTML5 =  $('.carousel').carousel('set', 1);
var slideJavascript =  $('.carousel').carousel('set', 2);
var slidePhp =  $('.carousel').carousel('set', 3);

while($('.carousel').carousel('set', 0)){
  $(function() {
    $('ul.tabs').tabs('select_tab', 'test1');
  });
}while($('.carousel').carousel(1)){
  $(function() {
    $('ul.tabs').tabs('select_tab', 'test2');
  });
}
*/