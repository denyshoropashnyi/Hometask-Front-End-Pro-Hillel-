import $ from 'jquery';

export default class ToDoView {
    constructor(elId) {
        this.$el = $(elId)
        this.$el.on('click', 'li', ((ev) => this.onElementClick(ev)))
        this.$el.on('click', '.btnDel', ((ev) => this.onBtnDelClick(ev)))
    }
    render(data) {
        this.$el.html(
            `<table>
                <thead>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>Action</th>
                </thead>
                <tbody>
                    ${data.map(this.renderItem).join('\n')}
                </tbody>
                <tfoot>
                </tfoot>
            </table>`
        )
    }
    renderItem(el) {
        return `<tr data-id="${el.id}">
                    <td>${el.name}</td>
                    <td>${el.phone}</td>
                    <td>${el.email}</td>
                    <td><button class="btnDel">Del</button></td>
                </tr>`
    }
    onElementClick(ev) {
        const id = $(ev.target).data('id')

        this.onClick(id);
        console.log('hurrah');
    }
    onBtnDelClick(ev) {
        const id = $(ev.target).parents('tr').data('id');

        this.onContactBtnDelClick(id);
    }
}