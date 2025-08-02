export default class MusicPlayer {
  playURL(url) {
    this.entity.components.audio.url = url
    this.entity.components.audio.play()
  }
}
