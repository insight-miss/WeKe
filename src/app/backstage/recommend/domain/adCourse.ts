export class AdCourse {

  id: number;
  courseName: string;
  imgSrc: string;
  kind: string;
  info: string;
  bleng: string;


  constructor(id: number, courseName: string, imgSrc: string, kind: string, info: string, bleng: string) {
    this.id = id;
    this.courseName = courseName;
    this.imgSrc = imgSrc;
    this.kind = kind;
    this.info = info;
    this.bleng = bleng;
  }
}

