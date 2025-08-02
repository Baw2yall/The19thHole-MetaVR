export default class GolfBallLauncher {
  onInit() {
    this.target = this.findEntityByName("GolfTarget")
    this.score = 0
  }
  onEvent(event) {
    if (event.type === "hit" && event.target === this.target) {
      this.score++
      this.emit("scoreUpdate", { value: this.score })
      this.target.getComponent("LightBurst").trigger()
    }
  }
}
