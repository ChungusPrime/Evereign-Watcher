export default class Table {

    HTML: HTMLDivElement;

    constructor ( headers: string[], Data: any, editable: boolean ) {

        this.HTML = document.createElement("div");

        // Create table
        let Table = document.createElement("table");
        Table.border = "1";

        // Create thead
        let thead = document.createElement("thead");
        let row = this.CreateRow(headers, false);

		if ( editable ) {
			row.appendChild(document.createElement("td"));
		}

        thead.appendChild(row);
        Table.appendChild(thead);

        // Create tbody
        let tbody = document.createElement("tbody");

        // Create a row for each object in the data array
        for ( const d of Data ) {
            let values: string[] = [];
            
            // If the key of the object is one of the headers, add it to the row
            for (const [k, v] of Object.entries(d)) {
                if ( headers.includes(k) ) {
                    values.push(v as string);
                }
            }

            let row = this.CreateRow(values, editable);

            tbody.appendChild(row);
        }

        // Add tbody to table
        Table.appendChild(tbody);

        this.HTML.appendChild(Table);

        return this;
    }

    CreateRow ( values: string[], editable: boolean ) {
  
		let tr = document.createElement("tr");
		
		for ( const value of values ) {
			let td = document.createElement("td");
			let text = document.createTextNode(value);
			td.appendChild(text);
			tr.appendChild(td);
		}
		
		if ( editable ) {
			let td = document.createElement("td");
			var button = document.createElement("BUTTON");
			button.textContent = "Edit";
			button.classList.value = "btn btn-sm btn-primary";
		
			button.addEventListener("click", function () {
                let ev = new CustomEvent('select-object', { detail: { type: "Classes", id: values[0]} });
                document.dispatchEvent(ev);
			});
		
			button.setAttribute("type", "button");
			td.appendChild(button);
			tr.appendChild(td);
		}
		
		return tr;
    }
  
}