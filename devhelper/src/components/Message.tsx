class MessageComponent {
    private lastSent: Date | null = null;
    private motivationalQuotes: string[] = [
        "Every journey begins with a single step.",
        "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
        "Remember, even the most successful code once started as a developer's idea. Trust your process.",
        "In the world of programming, every expert was once a beginner who kept trying.",
        "Your code doesn't have to be perfect; it just needs to be yours. Authenticity beats perfection every time.",
        "Imposter syndrome is just a bug in your self-perception. Debug it with small successes and constant learning.",
        "The only true 'syntax error' in software development is believing you don't belong.",
        "Embrace each bug you find; it's proof that you're pushing your limits and learning.",
        "In the vast codebase of life, your contributions are unique and valuable. Never forget that.",
        "A successful developer is not one who never fails, but one who never stops learning from failures.",
        "Your worth is not measured by your commit history, but by your dedication to keep improving.",
        "Remember, even the most complex programs are built one line at a time. Keep coding, keep growing.",
        "Every developer has moments of doubt. What makes you great is pushing through them.",
        "Your journey in coding is unique. Don't compare your 'source code' to someone else's 'compiled program'.",
        "Feeling like an imposter means you're stepping out of your comfort zone, and that's where growth happens.",
        "The best developers are not those who know everything, but those who are open to anything.",
        "In software, as in life, the fear of failure often weighs more than failure itself. Dare to write that code.",
        "Every bug you encounter is a stepping stone to becoming a more resilient developer.",
        "Think of your career as a program - constantly iterating and improving over time.",
        "In the grand scheme of development, your perspective and ideas are as crucial as any line of code." 
    ];
    getMotivationalMessage(): string {
        const randomIndex = Math.floor(Math.random() * this.motivationalQuotes.length);
        return this.motivationalQuotes[randomIndex];
    }
}

export { MessageComponent };
