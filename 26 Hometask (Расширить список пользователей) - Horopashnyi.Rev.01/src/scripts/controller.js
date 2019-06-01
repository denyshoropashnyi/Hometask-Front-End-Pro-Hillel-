import ToDoCollection from './collection';
import ToDosModel from './model';
import config from './config';
import ToDoView from './view';
export default class ToDoController{
    constructor(){
        console.log('controller constructor')
        this.model = new ToDosModel
        this.collection = new ToDoCollection(config.contactsUrl)
        this.view = new ToDoView('#list')

        this.view.onClick = (id) => this.rename(id);
        this.view.onContactBtnDelClick = (id) => this.delete(id);

        this.collection.fetch()
        .then((data)=> this.view.render(data));
    }
    rename(id){
        const model = this.collection.get(id);
        
        model.name = "hello world";
        model.save();
    }
    delete(id){
        const model = this.collection.get(id);
        model.deleted(id);
    }
}