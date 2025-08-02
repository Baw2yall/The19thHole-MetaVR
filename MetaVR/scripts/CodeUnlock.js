export default class CodeUnlock {
  onInit() {
    this.correctCode = "1945"
    this.input = ""
  }
  onInteract(value) {
    this.input += value
    if (this.input === this.correctCode) {
      this.findEntityByName("VIPDoor").visible = false
    }
  }
}
