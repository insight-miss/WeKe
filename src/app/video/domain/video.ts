export class Video {

  videoUrl: String;
  photoUrl: String;
  nickname: String;


  constructor(videoUrl: String, photoUrl: String, nickname: String) {
    this.videoUrl = videoUrl;
    this.photoUrl = photoUrl;
    this.nickname = nickname;
  }
}
