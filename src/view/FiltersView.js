export default class FiltersView {
  getElement() {
    const element = document.createElement('div');
    element.innerHTML = '<div class="filters">Фильтры</div>';
    return element;
  }
}
