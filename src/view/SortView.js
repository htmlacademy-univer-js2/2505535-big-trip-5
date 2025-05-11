export default class SortView {
  getElement() {
    const element = document.createElement('div');
    element.innerHTML = '<div class="sort">Сортировка</div>';
    return element;
  }
}
