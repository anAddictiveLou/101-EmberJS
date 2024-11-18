import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

// Ember will create an instance of the class whenever our component is invoked.
export default class RentalImage extends Component {
  // @tracked decorator tells Ember to monitor this variable for updates.
  // Whenever this variable's value changes, Ember will automatically re-render any templates that depend on its value.
  @tracked isLarge = false;

  // @action decorator indicates to Ember that we intend to use this method from our template
  @action toggleSize() {
    this.isLarge = !this.isLarge;
  }
}
