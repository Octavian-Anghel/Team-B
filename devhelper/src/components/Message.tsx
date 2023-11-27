import { database } from '../firebase-config';
import { collection, getDocs, query, where } from 'firebase/firestore';
class MessageComponent {
    private lastSent: Date | null = null;
    private motivationalQuotes: string[] = [
        "Every journey begins with a single step.",
        "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
        // Add more quotes
    ];

    async getUserEmail(userId: string): Promise<string | null> {
        const usersCollection = collection(database, 'User Data');
        const userQuery = query(usersCollection, where("uid", "==", userId));
        const userSnapshot = await getDocs(userQuery);
        const user = userSnapshot.docs.map(doc => doc.data())[0]; // Get the first (and should be only) user that matches
        return user?.email || null;
    }

    getMotivationalMessage(): string {
        const randomIndex = Math.floor(Math.random() * this.motivationalQuotes.length);
        return this.motivationalQuotes[randomIndex];
    }

    // async sendMotivationalMessage(userId: string): Promise<void> {
    //     const message = this.getMotivationalMessage();
    //     const userEmail = await this.getUserEmail(userId);
    //     message;
    //     userEmail;
    //     //find a way to send emails here to users
    // }

    // scheduleMotivationalMessages(userId: string): void {
    //     setInterval(() => {
    //         this.sendMotivationalMessage(userId);
    //     }, 24 * 60 * 60 * 1000); // Set to repeat every 24 hours
    // }
}

export { MessageComponent };
