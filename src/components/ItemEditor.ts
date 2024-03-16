//import { Item } from "../types";

export default class ItemEditor {

    public Items: any;
    public HTML: string;

    constructor ( Items: any, ClassItems: string ) {

        this.HTML = `<div style="display: flex; flex-direction: column;">`;

        this.HTML += `<label>Starting Items</label>`;

        JSON.parse(ClassItems).forEach( (item: any) => {

            this.HTML += `<div style="display: flex;">`;
            this.HTML += `<select name="items" style="width: 85%;">`;
            this.HTML += `<option value=""></option>`;

            Items.forEach( (data: any) => {
                if ( item.item == data.id ) {
                    this.HTML += `<option value="${data.id}" selected>${data.name}</option>`;
                } else {
                    this.HTML += `<option value="${data.id}">${data.name}</option>`;
                }
            });

            this.HTML += `</select>`;
            this.HTML += `<input type="number" name="item_amounts" value="${item.quantity}" style="width: 15%;">`;
            this.HTML += "</div>";
        });

        this.HTML += `<button type="button">Add Item</button>`;

        this.HTML += `</div>`;

        return this;
    }

}