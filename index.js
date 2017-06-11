module.exports = robot => {
    robot.on('issues.opened', async (event, context) => {
        // `context` extracts information from the event, which can be passed to
        // GitHub API calls. This will return:
        //   {owner: 'yourname', repo: 'yourrepo', number: 123, body: 'Hello World!}
        const params = context.issue({body: 'Thank you for your issue!'})

        // Post a comment on the issue
        return context.github.issues.createComment(params);
    });

    robot.on('issues.closed', async (event, context) => {
        const params = context.issue({body: 'Issue was closed!'})

        // Post a comment on the issue
        return context.github.issues.createComment(params);
    });

    robot.on('pull_request.opened', async (event, context) => {
        // `context` extracts information from the event, which can be passed to
        // GitHub API calls. This will return:
        //   {owner: 'yourname', repo: 'yourrepo', number: 123, body: 'Hello World!}
        const params = context.issue({body: 'Thank you for your PR!'})

        // Post a comment on the issue
        return context.github.issues.createComment(params);
    });
};
