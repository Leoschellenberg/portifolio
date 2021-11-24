import firebase from "@firebase/app";
import "./firebase";


const database = firebase.firestore();
const works = [];

database.collection("trabalhos").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        var item = {
            cargo: doc.data().cargo,
            empresa: doc.data().empresa,
            descricao: doc.data().descricao,
            data_entrada: doc.data().data_entrada.toDate(),
            data_saida: doc.data().data_saida.toDate()
        }
        works.push(item)
    });
});

console.log(works)

export default works;