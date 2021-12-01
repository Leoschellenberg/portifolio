import firebase from "@firebase/app";
import "./firebase";

const database = firebase.firestore();

export default function renderExp() {
    database.collection("formacao").get().then((querySnapshot) => {
        const arrayItems = querySnapshot.docs.map((doc) => { return doc.data() });
        render(arrayItems)
    });

}

function render(array) {
    let newArray = array.map((item) => {
        return (
            `
            <li class="faculdade">
                    <span class="faculdade-tipo">${item.tipo}</span>
                    <h3 class="faculdade-curso">${item.nome}</h3>
                    <span class="faculdade-instituicao">${item.instituicao}</span>
                </li>
            `
        )
    });
    let arr = "";
    newArray.map(function(item) {
        arr = arr + item
    })
    document.getElementById("lista-faculdate").innerHTML = arr;
}