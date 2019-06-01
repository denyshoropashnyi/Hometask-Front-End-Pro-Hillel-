import $ from 'jquery';

export default class ToDoView{
    constructor(elId){
        this.$el = $(elId)
        this.$el.on('click', 'li', ((ev) => this.onElementClick(ev)))
    }
    render(data){
        this.$el.html(
            `<ul>
            ${data.map(this.renderItem).join('\n')}
            </ul>
            `
        )
    }
    renderItem(el){
        return `<li data-id="${el.id}">${el.name}</li>`
    }
    onElementClick(ev){
        const id = $(ev.target).data('id')

        this.onClick(id);
    }
}