/*import Table from "./table";
import Panel from "./panel";
import * as types from "../types";

import TraitEditor from "./TraitEditor";
import AttributeEditor from "./AttributeEditor";
import ItemEditor from "./ItemEditor";

export default class ClassScreen extends Panel {
    
    public Headers: string[] = ['id', 'name'];
    public Data: types.MasterDataObject
    public Title: string;
    public Event: CustomEvent;

    // HTML Elements
    public Container: HTMLDivElement;
    public DataTable: Table;
    public CreatePanel: HTMLElement;

    constructor ( title: string, data: any ) {

        super();

        this.Title = title;
        this.Data = data;

        console.log(this.Data);

        // Create main container
        this.Container = document.createElement("div");
        this.Container.setAttribute('id', this.Title);

        // Create nav bar button
        let ToggleButton = document.createElement("button");
        ToggleButton.textContent = `${title} (${this.Data.classes.length})`;
        ToggleButton.classList.value = "btn btn-sm btn-primary m-1";
        ToggleButton.addEventListener("click", () => document.dispatchEvent(this.Event));
        document.getElementById('navbar')?.appendChild(ToggleButton);

        // Create custom event to show this screen
        this.Event = new CustomEvent('show', { detail: this });

        // Create table to store data for this screen
        this.DataTable = new Table(this.Headers, this.Data.classes, true);

        this.Container.appendChild(this.DataTable.HTML);
        let PanelContainer = document.getElementById('tables-container') as HTMLElement;
        PanelContainer.appendChild(this.Container);
    }

    EditClass ( id: string ): string {

        let Class = this.Data.classes.find( (object) => object.id == id ) as types.Class;

        console.log(Class);

         Attribute Editor 

        const TraitEditorHTML = new TraitEditor(this.Data.traits, Class.traits);
        const AttributeEditorHTML = new AttributeEditor(this.Data.attributes, Class.attributes);
        const ItemEditorHTML = new ItemEditor(this.Data.items, Class.equipment);

        const EditPanelHTML = ` <form id="edit-object-form" style="display: flex; flex-direction: column;">
            <input type="hidden" name="object_type" value="Class">
            <label>ID</label>
            <input class="form-control" type="text" name="id" value="${Class.id}">
            <br>
            <label>Name</label>
            <input class="form-control" type="text" name="name" value="${Class.name}">
            <br>
            <label>Description</label>
            <textarea class="form-control" name="description">${Class.description}</textarea>
            <hr>
            ${AttributeEditorHTML.HTML}
            <hr>
            ${TraitEditorHTML.HTML}
            <hr>
            ${ItemEditorHTML.HTML}
            <hr>
            <label>Resource</label>
            <input class="form-control" type="text" name="resource" value="${Class.resource}">
            <hr>
            <button type="button" class="btn btn-primary btn-sm" id="update-object-button">Update</button>
        </form>`;
        return EditPanelHTML;
    }

    CreateClass ( id: string ): string {
        let CreatePanelHTML = ` <form>
            <input type="text" class="id" name="id">
            <input type="text" class="name" name="name">
            <textarea class="description" name="description"></textarea>
        </form>`;
        return CreatePanelHTML;
    }

}*/