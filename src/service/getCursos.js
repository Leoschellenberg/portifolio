import firebase from "@firebase/app";
import "./firebase";

const database = firebase.firestore();

export default function renderCursos() {
    database.collection("cursos").get().then((querySnapshot) => {
        const arrayItems = querySnapshot.docs.map((doc) => { return doc.data() });
        render(arrayItems)
    });

}

function render(array) {
    let newArray = array.map((item) => {
        return (
            `
            <li>${item.nome}<span>${item.instituicao}</span></li>
            `
        )
    });
    document.getElementById("card-cursos").innerHTML = newArray;
}