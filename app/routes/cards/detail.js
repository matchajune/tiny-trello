import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    return this.get('store').findRecord('card', params.card_id);
  },
  actions: {
    updateCard(modal) {
      var cardId = modal.get('id');
      var title = modal.get('title');
      var list = modal.get('list');
      var desc = modal.get('description');
      this.get('store').findRecord('card', cardId)
        .then(card => {
          modal.set('title', title);
          modal.set('list', list);
          modal.set('description', desc);
          modal.save().then(() => this.transitionTo('cards'));
        }).catch((e) => {
          console.log(e);
        });
    },
    deleteCardAfterConfirm(modal) {
      if (confirm("Are you sure?")) {
        modal.destroyRecord()
          .then(() => this.transitionTo('cards'))
          .catch(e => console.log(e));
      }
    }
  }
});
