import { action } from '@ember/object';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class FormTest extends Component {
  @tracked name = '';
  @tracked email = '';
  @tracked phoneNumber = '';

  @tracked showErrorMessage = false;

  @action
  onChangeField(e, fieldName) {
    this[fieldName] = e.target.value;
  }

  @action
  onChangeName(e) {
    this.name = e.target.value;
  }

  @action
  onChangeEmail(e) {
    this.email = e.target.value;
  }

  @action
  onSubmit(event) {
    event.preventDefault();

    if (!this.name) {
      this.showErrorMessage = true;
    } else {
      this.showErrorMessage = false;
    }

    console.log(this.model);
  }
}
