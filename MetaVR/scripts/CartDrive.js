export default class CartDrive {
  onInit() {
    this.speed = 0.1
  }
  onUpdate(delta) {
    if (this.entity.isInteracted) {
      this.entity.position.z += this.speed * delta
    }
  }
}
