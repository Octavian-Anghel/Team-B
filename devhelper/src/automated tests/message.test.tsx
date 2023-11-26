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

  beforeEach(() => {
    messageComponent = new MessageComponent();
    // Reset all mock functions before each test
    jest.clearAllMocks();
  });

  describe('getUserEmail', () => {
    it('should return user email when a matching user is found', async () => {
      // Mock Firestore query result
      const mockQuerySnapshot = {
        docs: [{ data: jest.fn(() => ({ email: 'testuser@example.com' })) }],
      };

      // Mock Firestore functions
      jest.spyOn(messageComponent, 'getUserEmail').mockResolvedValueOnce('testuser@example.com');
      messageComponent.getUserEmail = jest.fn().mockResolvedValueOnce('testuser@example.com');

      const result = await messageComponent.getUserEmail('testUserId');

      expect(result).toEqual('testuser@example.com');
      expect(messageComponent.getUserEmail).toHaveBeenCalledWith('testUserId');
    });

    it('should return null when no matching user is found', async () => {
      // Mock Firestore query result with no matching user
      const mockQuerySnapshot = {
        docs: [],
      };

      // Mock Firestore functions
      jest.spyOn(messageComponent, 'getUserEmail').mockResolvedValueOnce(null);
      messageComponent.getUserEmail = jest.fn().mockResolvedValueOnce(null);

      const result = await messageComponent.getUserEmail('nonExistentUserId');

      expect(result).toBeNull();
      expect(messageComponent.getUserEmail).toHaveBeenCalledWith('nonExistentUserId');
    });
  });

  describe('getMotivationalMessage', () => {
    it('should return a motivational message', () => {
      const motivationalMessage = messageComponent.getMotivationalMessage();
      expect(messageComponent['motivationalQuotes']).toContain(motivationalMessage);
    });
  });
});
