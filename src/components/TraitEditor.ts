/*import { Trait } from "../types";

export default class TraitEditor {

    public Traits: Trait[];
    public HTML: string;

    constructor ( Traits: Trait[], ClassTraits: string ) {

        this.HTML = `<div style="display: flex; flex-direction: column;">`;

        this.HTML += `<label>Traits</label>`;

        JSON.parse(ClassTraits).forEach( (trait: string) => {

            this.HTML += `<select name="traits">`;
            this.HTML += `<option value=""></option>`;

            Traits.forEach( (data: Trait) => {
                if ( trait == data.id ) {
                    this.HTML += `<option value="${data.id}" selected>${data.name}</option>`;
                } else {
                    this.HTML += `<option value="${data.id}">${data.name}</option>`;
                }
            });

            this.HTML += `</select>`;
        });

        this.HTML += `<button type="button">Add Trait</button>`;

        this.HTML += `</div>`;

        return this;
    }

}*/