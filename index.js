module.exports.templateTags = [{
    name: 'parse',
    displayName: 'JSON Parse',
    description: 'Use JSON.parse()',
    args: [
        {
            displayName: 'str',
            description: 'String to parse',
            type: 'string'
        }
    ],
    async run (context, text) {
        return JSON.parse(text);
    }
}];
