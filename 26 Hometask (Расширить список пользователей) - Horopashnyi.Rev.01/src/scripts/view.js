import $ from 'jquery';

export default class TodoView{
    constructor(elId){
        this.$el = $(elId);

        this.onElementClick = this.onElementClick.bind(this);

        this.$el.on('click', 'li', this.onElementClick);
    }

    onElementClick(event){
        const id = $(event.target).data('id');
        console.log(id, $(this))
        this.onClick(id);
    }

    render(data){
        this.$el.html(
            `<ul>
            ${data.map(this.renderItem).join('\n')}
            </ul>`
        )
    }

    renderItem(el){
        return `<li data-id="${el.id}">${el.name}</li>`;
    }
}   