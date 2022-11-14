import Content from './content'

class VideoContent extends Content {
  constructor(title: string) {
    super(title)
    this.type = "video"
  }
}

export default VideoContent
