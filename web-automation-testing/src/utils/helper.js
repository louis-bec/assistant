module.exports = {
    setupTestData: () => {
        // Function to set up test data
        return {
            user: {
                id: 1,
                name: 'Test User',
                email: 'testuser@example.com'
            },
            post: {
                id: 1,
                title: 'Test Post',
                content: 'This is a test post.'
            }
        };
    },

    apiCall: async (url, options) => {
        // Function to make API calls
        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    }
};