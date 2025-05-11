export default class EditFormView {
  getElement() {
    const element = document.createElement('div');
    element.innerHTML = '<form class="edit-form">Форма редактирования</form>';
    return element;
  }
}
