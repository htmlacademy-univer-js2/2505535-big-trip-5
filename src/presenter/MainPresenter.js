import EditFormView from '../view/edit-form-view.js';
import FiltersView from '../view/filters-view.js';
import SortView from '../view/sort-view.js';
import CreateFormView from '../view/create-form-view.js';
import WaypointView from '../view/waypoint-view.js';

export default class AppPresenter {
  constructor() {
    // Контейнер для рендеринга (укажите ваш селектор)
    this.container = document.querySelector('.trip-events');
  }

  init() {
    // Создаём компоненты
    const editForm = new EditFormView();
    const filters = new FiltersView();
    const sort = new SortView();
    const createForm = new CreateFormView();
    const waypoints = [
      new WaypointView(), // 1-я точка
      new WaypointView(), // 2-я точка
      new WaypointView()  // 3-я точка
    ];

    // Очищаем контейнер (опционально)
    this.container.innerHTML = '';

    // Рендерим в нужном порядке
    this.container.append(
      editForm.getElement(),  // Форма редактирования — первая
      filters.getElement(),
      sort.getElement(),
      createForm.getElement(),
      ...waypoints.map(waypoint => waypoint.getElement()) // 3 точки маршрута
    );
  }
}
