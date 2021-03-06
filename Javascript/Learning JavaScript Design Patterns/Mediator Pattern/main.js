/*
 a mediator is a behavioral design pattern that allows us to expose a unified 
 interface through which the different parts of a system may communicate.
 */

 var mediator = {};

 var orgChart = {
 	addNewEmployee: function() {

 		// getEmployeeDetail provides a view that users interact with
 		var employeeDetail = this.getEmployeeDetail();

 		// when the employee details is complete, the mediator (the 'orgchart' object)
 		// decides what should happen next
 		employeeDetail.on("complete", function(employee) {

 			// set up additional objects that have additional events, which are used
 			// by the mediator to do additional things
 			var managerSelector = this.selectManager(employee);
 			managerSelector.on("save", function(employee) {
 				employee.save();
 			});
 		});
 	},

 	// ...
 }

 /*
	Event Aggregator and Pub/Sub together
 */

 var MenuItem = MyFrameworkView.extend({
 
  events: {
    "click .thatThing": "clickedIt"
  },
 
  clickedIt: function(e){
    e.preventDefault();
 
    // assume this triggers "menu:click:foo"
    MyFramework.trigger("menu:click:" + this.model.get("name"));
  }
 
});
 
// ... somewhere else in the app
 
var MyWorkflow = function(){
  MyFramework.on("menu:click:foo", this.doStuff, this);
};
 
MyWorkflow.prototype.doStuff = function(){
  // instantiate multiple objects here.
  // set up event handlers for those objects.
  // coordinate all of the objects into a meaningful workflow.
};