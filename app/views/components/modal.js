import Component from '../../component';
import template from '../layouts/modal.html';

const ModalView = Component.extend({
  template,

  events: {
    'click h1': 'handleClick'
  },

  handleClick: function(ev) {
    console.log('whatever');
  }
});

export default Component.register('modal-view', ModalView);
