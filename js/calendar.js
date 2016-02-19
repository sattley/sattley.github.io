angular.module('calendarApp', []).controller(
'MainController', ['$filter', function($filter) {
  var self = this;
  self.date = new Date();
  self.isDateSet = false;
  self.day = self.date.getDate();
  
  // month checker
  this.validateMonth = function(monthToCheck) {
    if(monthToCheck === 0) {
      monthToCheck = 11;
    } else if(monthToCheck === 12) {
      monthToCheck = 0;
    }
    return monthToCheck;
  }
  
  self.increaseDate = function() {
    // self.date.setDate(self.date.getDate() + 1);
    self.setDaysOfMonth(new Date(self.date.setMonth(self.date.getMonth() + 1)));
  }
  
  self.decreaseDate = function() {
    // self.date.setDate(self.date.getDate() - 1);
    self.setDaysOfMonth(new Date(self.date.setMonth(self.date.getMonth() - 1)));
  }
  
  self.setDaysOfMonth = function(date) {
    month = date.getMonth();
    month += 1;
    self.daysOfMonth = [];
    dayCt = new Date(date.getFullYear(),month,0).getDate();
    for(i = 0; i < dayCt; i++) {
      self.daysOfMonth.push(i + 1);
    } 
  }
  
  self.setActiveDay = function(day) {
    self.day = day;
    self.date.setDate(day);
  }
  
  if(!self.isDateSet) {
    self.setDaysOfMonth(self.date);
    self.isDateSet = true;
  }
  
  
  
}]);