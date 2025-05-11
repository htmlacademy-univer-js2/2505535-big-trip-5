export default class WaypointView {
  getElement() {
    const element = document.createElement('div');
    element.innerHTML = '<div class="waypoint">Точка маршрута</div>';
    return element;
  }
}
