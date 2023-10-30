export interface ResourceOptions {
    accessVideos: () => void;
    reviewHelpfulLinks: () => void;
    doQuizzes: () => void;
    startExercises: () => void;
    accessLanguageLibraryGlossary: () => void;
}

export interface Dashboard {
    viewLanguageResources: () => ResourceOptions;
    setGoal: () => void;
    trackProgress: () => void;
}