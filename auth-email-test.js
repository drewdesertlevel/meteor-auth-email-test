if (Meteor.is_client) {
  Template.hello.greeting = function () {
    return "Welcome to auth-email-test.";
  };

  Template.hello.events = {
    'click input' : function () {
      // template data, if any, is available in 'this'
      if (typeof console !== 'undefined')
        console.log("You pressed the button");
    }
  };
}

if (Meteor.is_server) {
  Meteor.startup(function () {
    Meteor.users.remove({});
    Meteor.createUser({
      username: 'possibilities',
      email: 'mikebannister@gmail.com'
    });
  });
}
