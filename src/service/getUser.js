import firebase from "@firebase/app";
import "./firebase";


const database = firebase.firestore();
const user = [];

database.collection("user").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        var item = {
            nome: doc.data().nome,
            sobrenome: doc.data().sobrenome,
            cargo_atual: doc.data().cargo_atual,
            nascimento: doc.data().nascimento.toDate()
        }
        user.push(item)
    });
});

export default user;