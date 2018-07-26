export class Video {

  private _videoUrl: String;
  private _chapterName: String;
  private _photoUrl: String;
  private _nickname: String;


  get videoUrl(): String {
    return this._videoUrl;
  }

  set videoUrl(value: String) {
    this._videoUrl = value;
  }

  get chapterName(): String {
    return this._chapterName;
  }

  set chapterName(value: String) {
    this._chapterName = value;
  }

  get photoUrl(): String {
    return this._photoUrl;
  }

  set photoUrl(value: String) {
    this._photoUrl = value;
  }

  get nickname(): String {
    return this._nickname;
  }

  set nickname(value: String) {
    this._nickname = value;
  }

  constructor(videoUrl: String, chapterName: String, photoUrl: String, nickname: String) {
    this._videoUrl = videoUrl;
    this._chapterName = chapterName;
    this._photoUrl = photoUrl;
    this._nickname = nickname;
  }
}
