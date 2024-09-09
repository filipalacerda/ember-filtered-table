import { action } from '@ember/object';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class FormTest extends Component {
  @tracked name = '';
  @tracked email = '';
  @tracked phoneNumber = '';

  @tracked showErrorMessage = false;

  @action
  onChangeName(e) {
    this.name = e.target.value;
  }

  @action
  onChangeEmail(e) {
    this.email = e.target.value;
  }

  @action
  onChangePhoneNumber(e) {
    this.phoneNumber = e.target.value;
  }

  @action
  onSubmit(event) {
    event.preventDefault();

    if (!this.name || !this.email || !this.phoneNumber) {
      this.showErrorMessage = true;
    } else {
      this.showErrorMessage = false;
    }
  }

  get formattedPhoneNumber() {
    return this.phoneNumber.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
  }

  get showData() {
    return this.name && this.email && this.phoneNumber;
  }
}
