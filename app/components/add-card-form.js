import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  actions: {
    hideForm() {
      this.set('showForm', false);
    },
    showForm() {
      this.set('showForm', true);
    },
    appendCardToListAndResetForm() {
      let card = this.get('store').createRecord('card', {
        title: this.title,
        list: this.list
      });
      card.save()
        .then(() => this.set('title', ''))
        .catch(e => console.log(e));
    }
  }
});