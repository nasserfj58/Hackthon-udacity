

ViewModel=function() {
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
