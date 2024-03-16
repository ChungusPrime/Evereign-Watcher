/*import './main.scss';
import * as types from '../types';
import ClassScreen from './ClassScreen';

let Data: types.MasterDataObject;
let ClassPanel: ClassScreen;

let EditModal = document.getElementById('edit-modal') as HTMLElement;
let CreateModal = document.getElementById('create-modal') as HTMLElement;
let ModalOverlay = document.getElementById('modal-overlay') as HTMLElement;

Setup();

async function Setup () {
    const response = await fetch("/master_data");
    Data = await response.json();
    ClassPanel = new ClassScreen("Classes", Data);
}

// Edit Modal
document.addEventListener('select-object', ( event: any ) => {
    let ModalContent = EditModal.getElementsByClassName('modal-content');
    ModalContent[0].innerHTML = ClassPanel.EditClass(event.detail.id);
    ModalOverlay.style.display = "flex";
    EditModal.style.display = "flex";
});

document.getElementById("close-edit-modal")?.addEventListener("click", () => ModalOverlay.style.display = "none");


document.addEventListener("click", async ( event ) => {

    if ( event.target instanceof Element ) {
        console.log(event.target.id);
        if ( event.target.id == "update-object-button" ) UpdateObject();
    }

});

async function UpdateObject () {

    let form = document.getElementById("edit-object-form") as HTMLFormElement;
	let data = new FormData(form);

    let obj = {};
	for (let [key, value] of data) {
		if (obj[key] !== undefined) {
			if (!Array.isArray(obj[key])) {
				obj[key] = [obj[key]];
			}
			obj[key].push(value);
		} else {
			obj[key] = value;
		}
	}

    const res = await fetch("/update_object", {
        headers: {
            "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(obj),
	});

	const content = await res.json();
	console.log(content);
}

/*
Vue testing gone wrong
import { createApp } from 'vue';
import Watcher from './components/Watcher.vue';
const app = createApp(Watcher);
app.mount('#app');
*/