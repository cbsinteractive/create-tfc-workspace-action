module.exports = {
    printWidth: 80,
    semi: false,
    trailingComma: "all",
    tabWidth: 4,
    overrides: [
        {
            files: "*.md",
            options: {
                tabWidth: 2,
            },
        },
        {
            files: "*.yml",
            options: {
                tabWidth: 2,
            },
        },
    ],
}
