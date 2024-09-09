import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class CounterComponent extends Component {
  @tracked count = 0;
  @tracked multiple = 1;

  @action
  change(amount) {
    this.count = this.count + amount;
  }

  @action
  double() {
    this.multiple = this.multiple * 2;
  }

  get total() {
    return this.count * this.multiple;
  }
}
