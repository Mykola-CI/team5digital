document.addEventListener('DOMContentLoaded', function () {
    // Get the current URL path
    const currentPath = window.location.pathname;

    // Detect the base path dynamically
    let basePath = '/'; // Default for production and local environments
    if (window.location.hostname === 'mykola-ci.github.io') {
        basePath = '/team5dev/'; // Use '/team5dev/' for GitHub Pages development environment
    }

    // Extract language code from the URL path
    let currentLanguage = currentPath.startsWith(basePath)
        ? currentPath.split('/')[basePath === '/' ? 1 : 2] // Adjust index based on basePath
        : '';

    // Validate if the extracted language is one of the supported options
    const supportedLanguages = ['en', 'es', 'ua'];
    if (!supportedLanguages.includes(currentLanguage)) {
        currentLanguage = 'en'; // Default to 'en' if no valid language code is found
    }

    // Select all language picker dropdowns
    const languageSelectors = document.querySelectorAll('.language-select');

    languageSelectors.forEach((selector) => {
        // Set the dropdown value to the current language
        selector.value = currentLanguage;

        // Add event listener for changing language
        selector.addEventListener('change', function () {
            const selectedLanguage = this.value;

            // Redirect to the selected language's subdirectory
            if (selectedLanguage === 'en') {
                window.location.href = `${basePath}`; // Redirect to base path for English
            } else {
                window.location.href = `${basePath}${selectedLanguage}/`; // Redirect to subdirectory for other languages
            }
        });
    });
});
