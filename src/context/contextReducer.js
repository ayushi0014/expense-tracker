import { database } from "../firebaseConfig";
import { setDoc, doc } from "firebase/firestore";
import { getAuth } from "firebase/auth";


const setData = async(transactions) => {
    let user = getAuth().currentUser
    const uid = user.uid

    if(uid){
        await setDoc(doc(database, "users", `${uid}`), {transactions});
    }
}

const contextReducer = (state, action) => {
    let transactions;
    switch (action.type) {
        case 'DELETE_TRANSACTION':
            transactions=state.filter((t)=>t.id!==action.payload);
            localStorage.setItem('transactions',JSON.stringify(transactions));
            setData(transactions)
            return transactions;
        case 'ADD_TRANSACTION':
            transactions=[action.payload,...state]
            localStorage.setItem('transactions',JSON.stringify(transactions));
            setData(transactions)
            return transactions
        default:
            return state;
    }
  
}

export default contextReducer
