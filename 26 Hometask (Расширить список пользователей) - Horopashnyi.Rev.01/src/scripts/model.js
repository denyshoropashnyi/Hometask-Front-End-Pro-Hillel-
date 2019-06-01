let urlWeakMap = new WeakMap;

export default class ToDoModel{
    get url(){
        return urlWeakMap.get(this);
    }

    set url(val){
        urlWeakMap.set(this, val);
    }

    constructor(collectionUrl, data){
        this.url = collectionUrl;
        Object.assign(this, data);

        // console.log('model constructor', this.url);
    }

    save(){
        if (this.id){
            this.update();
        } else{
            // this.create();
        }
    }

    update(){
        fetch(`${this.url}/${this.id}`, {
                method: "PUT",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this)
        })
    }
}