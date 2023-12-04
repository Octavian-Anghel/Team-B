import { MessageComponent } from '../components/Message'; 
describe('MessageComponent', () => {
    const messageComponent = new MessageComponent();

    test('getMotivationalMessage returns a string', () => {
        const message = messageComponent.getMotivationalMessage();
        expect(typeof message).toBe('string');
    });

    test('getMotivationalMessage returns random messages', () => {
        const message1 = messageComponent.getMotivationalMessage();
        const message2 = messageComponent.getMotivationalMessage();
        // Note: This test might occasionally fail due to the randomness, so it's not entirely reliable
        expect(message1).not.toBe(message2);
    });
});
