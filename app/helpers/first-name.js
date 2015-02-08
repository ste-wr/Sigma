import Ember from 'ember';

export function firstName() {
    var userData = JSON.parse(Ember.$.cookie('user'));
    return new Ember.Handlebars.SafeString("<span class='cap'>"+userData.firstname+"</span>");
}

export default Ember.Handlebars.makeBoundHelper(firstName);