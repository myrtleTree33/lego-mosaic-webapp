/*****************************************************************************/
/* Test: Event Handlers */
/*****************************************************************************/
Template.Test.events({
  'click .takePhoto': function(event, template) {
    var cameraOptions = {
      width: 800,
      height: 600
    };
    MeteorCamera.getPicture(cameraOptions, function(err, data) {
      if (err) return;
      template.$('.photo').attr('src', data);
    });
    event.preventDefault();
  }
});

/*****************************************************************************/
/* Test: Helpers */
/*****************************************************************************/
Template.Test.helpers({
});

/*****************************************************************************/
/* Test: Lifecycle Hooks */
/*****************************************************************************/
Template.Test.onCreated(function () {
});

Template.Test.onRendered(function () {
});

Template.Test.onDestroyed(function () {
});
