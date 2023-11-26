import { MessageComponent } from '../components/Message';

// Mock the entire EmailService module
jest.mock('../components/emailservice', () => {
  return {
    __esModule: true,
    default: {
      sendEmail: jest.fn()
    }
  };
});

describe('MessageComponent', () => {
  let messageComponent: MessageComponent;

  beforeEach(() => {
    messageComponent = new MessageComponent();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should send a motivational message by email', async () => {
    // Mock the getUserEmail method
    messageComponent.getUserEmail = jest.fn().mockResolvedValue('test@example.com');

    await messageComponent.sendMotivationalMessage('testUserId');

    expect(messageComponent.getUserEmail).toHaveBeenCalledWith('testUserId');
    
    // Access the sendEmail method correctly through the default export
    expect(require('../components/emailservice').default.sendEmail).toHaveBeenCalledWith(
      'test@example.com',
      'Motivational Message',
      expect.any(String)
    );
  });

  it('should not send a motivational message if user email is not available', async () => {
    // Mock the getUserEmail method to return null
    messageComponent.getUserEmail = jest.fn().mockResolvedValue(null);

    await messageComponent.sendMotivationalMessage('testUserId');

    expect(messageComponent.getUserEmail).toHaveBeenCalledWith('testUserId');
    
    // Access the sendEmail method correctly through the default export
    expect(require('../components/emailservice').default.sendEmail).not.toHaveBeenCalled();
  });

  it('should schedule motivational messages with the correct interval', () => {
    jest.useFakeTimers();

    const sendMotivationalMessageSpy = jest.spyOn(messageComponent, 'sendMotivationalMessage');

    messageComponent.scheduleMotivationalMessages('testUserId');

    jest.advanceTimersByTime(24 * 60 * 60 * 1000);

    expect(sendMotivationalMessageSpy).toHaveBeenCalledTimes(1);

    jest.useRealTimers();
  });
});
