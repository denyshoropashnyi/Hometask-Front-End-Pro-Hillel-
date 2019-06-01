import ToDoModel from "./model";

export default class ToDoCollection{
    constructor(url){
        this.url = url;
        this.list = [];

        console.log('collection',url);
    }
    fetch(){
        return fetch(this.url)
               .then(responce => responce.json())
               .then((data) => this.setData(data))
    }
    setData(list){
       return this.list = list.map(el => new ToDoModel(this.url, el));
        console.log(this.list)
    }
    get(id){
        return this.list.find( el => el.id == id);
    }
}