const SqlProvider =require('../config/SqlProvider');


class Event {
  constructor(id,name,hours, date, place, img) {
    this.id = id;
    this.name = name;
    this.hours = hours;
    this.date = date;
    this.place = place;
    this.img = img;
  }

 AddEvent(){}
 DeleteEvent(){}



}

class News {
  constructor(id,name) {
    this.id=id;
    this.name = name;
   
  }
  AddNews(){}
  DeleteNews(){}
}
