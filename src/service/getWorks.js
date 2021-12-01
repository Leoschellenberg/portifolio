import firebase from "@firebase/app";
import "./firebase";

const database = firebase.firestore();

export default function renderWorks() {
    database.collection("trabalhos").orderBy("order", "desc").get().then((querySnapshot) => {
        const arrayItems = querySnapshot.docs.map((doc) => { return doc.data() });
        render(arrayItems)
    });

}

function render(array) {
    let newArray = array.map((item) => {
                return (
                        `
            <div class="empresa">
            <span class="empresa-ano">${item.data_entrada.toDate().toISOString().slice(0,4)} ${item.data_saida ? ' - ' + item.data_saida.toDate().toISOString().slice(0,4) : ''}</span>
            <h3 class="empresa-titulo">${item.empresa}</h3>
            <span class="empresa-titulo">${item.cargo}</span>
            <p class="empresa-texto">${item.descricao}</p>
            <ul class="empresa-habilidades">
            ${item.techs.map(function(obj){
                return `<li>${obj}</li>`
            })}
            </ul>
            </div>
            `
            )
    });
    document.getElementById("cards-exp").innerHTML = newArray;
}