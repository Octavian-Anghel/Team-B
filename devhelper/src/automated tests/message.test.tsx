import { MessageComponent } from '../components/Message';

// Mock the Firebase Firestore functions
jest.mock('firebase/firestore', () => ({
  getFirestore: jest.fn(),
  collection: jest.fn(),
  getDocs: jest.fn(),
  query: jest.fn(),
  where: jest.fn(),
}));

describe('MessageComponent', () => {
  let messageComponent: MessageComponent;

  describe('getMotivationalMessage', () => {
    it('should return a motivational message', () => {
      const motivationalMessage = messageComponent.getMotivationalMessage();
      expect(messageComponent['motivationalQuotes']).toContain(motivationalMessage);
    });
  });
});
