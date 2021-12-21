import firebase from './firebase';

export async function signUp(name, email, password) {
    const response = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);
    if (response.user) {
        if (!response.user.emailVerified) {
            response.user.sendEmailVerification();
        }
        firebase.firestore().collection('users').doc(response.user.uid).set({
            id: response.user.uid,
            challengesSolved: 0,
            email: email,
            name: name,
            score: 0,
        });
    }
}

export function sendPasswordResetEmail(email) {
    return firebase.auth().sendPasswordResetEmail(email);
}

export async function signIn(email, password) {
    const response = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);
    if (response.user && !response.user.emailVerified) {
        response.user.sendEmailVerification();
    }
}

export function signOut() {
    return firebase.auth().signOut();
}
