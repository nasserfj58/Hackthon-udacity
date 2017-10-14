Traveler = function(username,email,password,photoPath,socialm,Fname,Lname,intrsts){
  var self = this;
  self.Fname = ko.observable(Fname);
  self.email = ko.observable(email);
  self.Lname = ko.observable(Lname);
  self.photoPath = ko.observable(photoPath);
  self.password = ko.observable(password);
  self.username = ko.observable(username);
  self.intrests = ko.observableArray(intrsts);
}

Trip = function(date,destnation,description,budjet,activities,travelers,createdBy){
  var self = this;
  self.date = ko.observable(date);
  self.destnation = ko.observable(destnation);
  self.description = ko.observable(description);
  self.budjet = ko.observable(budjet);
  self.activities = ko.observable(activities);
  self.createdBy = ko.observable(createdBy);
  self.travelers = ko.observableArray(travelers);

}

ViewModel = function() {
  var self = this;
  //this.map = ko.observable(new map(-25.363,131.044));
  self.locations=ko.observableArray();
  //self.autoLocationComplete=

  this.setNewMarker = function(){

 };
 this.render = function(vm) {
      ko.applyBindings(vm);
       //Here is my logic now

  //  self.map.render();


};
}
//var vm = new ViewModel();
//vm.render();
ko.applyBindings(new ViewModel());
//getLoactionInfo();
