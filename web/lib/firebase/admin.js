import admin from 'firebase-admin';

try {
    admin.initializeApp({
        credential: admin.credential.cert({
            clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
            privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
            projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
        }),
        databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
    });
} catch (err) {
    if (!/already exists/.test(err.message)) {
        console.log('Failed to initialize Firebase Admin', err.stack);
    }
}

export default admin;
