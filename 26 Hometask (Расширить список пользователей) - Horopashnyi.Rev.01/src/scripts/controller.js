
import ToDoCollection from './collection';
import config from './config';
import TodoView from './view';
export default class ToDoController{
    constructor(){
        console.log('contorller constructor');

        this.collection = new ToDoCollection(config.contactsUrl);
        this.view = new TodoView('#list')

        this.view.onClick = (id) => this.rename(id); 

        this.collection
            .fetch()
            .then((data) => this.view.render(data));

    }

    rename(id){
        const model = this.collection.get(id);

        model.name = 'Hello world';
        model.save();
    }
}