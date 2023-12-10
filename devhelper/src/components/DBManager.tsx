import { database } from '../firebase-config';
import { collection, query, where, getDocs, deleteDoc, doc } from 'firebase/firestore';

export async function getUserEmail(userId: string): Promise<string | null> {
    const usersCollection = collection(database, 'User Data');
    const userQuery = query(usersCollection, where("uid", "==", userId));
    const userSnapshot = await getDocs(userQuery);
    const user = userSnapshot.docs.map(doc => doc.data())[0];
    return user?.email || null;
}

export async function deleteUser(userId: string): Promise<boolean> {
    try {
        const usersCollection = collection(database, 'User Data');
        const userQuery = query(usersCollection, where("uid", "==", userId));
        const userSnapshot = await getDocs(userQuery);

        if (userSnapshot.empty) {
            console.log('No user found with the given ID.');
            return false;
        }

        const userDoc = userSnapshot.docs[0];
        await deleteDoc(doc(database, 'User Data', userDoc.id));

        return true;
    } catch (error) {
        console.error('Error deleting user:', error);
        return false;
    }
}

