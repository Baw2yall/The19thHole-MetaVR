export default class LightBurst {
  trigger() {
    this.entity.components.light.intensity = 10
    setTimeout(() => {
      this.entity.components.light.intensity = 1
    }, 1000)
  }
}
