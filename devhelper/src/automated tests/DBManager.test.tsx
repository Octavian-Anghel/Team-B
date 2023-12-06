import { getUserEmail, deleteUser } from '../components/DBManager';
import { database } from '../firebase-config';
import { collection, query, where, getDocs, deleteDoc, doc } from 'firebase/firestore';

// Mock Firebase Firestore
jest.mock('../firebase-config', () => ({
    database: {}
}));

jest.mock('firebase/firestore', () => ({
    collection: jest.fn(),
    query: jest.fn(),
    where: jest.fn(),
    getDocs: jest.fn(),
    deleteDoc: jest.fn(),
    doc: jest.fn()
}));

describe('User Functions', () => {
    describe('getUserEmail', () => {
        it('should return an email for a valid user ID', async () => {
            const mockUserDoc = { data: () => ({ email: 'test@example.com' }) };
            (getDocs as jest.Mock).mockResolvedValue({
                docs: [mockUserDoc]
            });

            const email = await getUserEmail('validUserId');
            expect(email).toEqual('test@example.com');
        });

        it('should return null for an invalid user ID', async () => {
            (getDocs as jest.Mock).mockResolvedValue({
                docs: []
            });

            const email = await getUserEmail('invalidUserId');
            expect(email).toBeNull();
        });
    });

    describe('deleteUser', () => {
        it('should return true when a user is successfully deleted', async () => {
            (getDocs as jest.Mock).mockResolvedValue({
                empty: false,
                docs: [{ id: 'validUserId' }]
            });

            const result = await deleteUser('validUserId');
            expect(result).toBeTruthy();
        });

        it('should return false when no user is found', async () => {
            (getDocs as jest.Mock).mockResolvedValue({
                empty: true,
                docs: []
            });

            const result = await deleteUser('invalidUserId');
            expect(result).toBeFalsy();
        });
    });
});
