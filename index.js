//https://mikedeboer.github.io/node-github/#api-issues-get
//https://developer.github.com/v3/issues/
//https://developer.github.com/v3/pulls/

module.exports = robot => {


    robot.on('issues.closed', async (event, context) => {
        const params = context.issue({body: 'Issue was closed!'})

        // Post a comment on the issue
        return context.github.issues.createComment(params);
    });

/*
    robot.on('issues.opened', async (event, context) => {
        // `context` extracts information from the event, which can be passed to
        // GitHub API calls. This will return:
        //   {owner: 'yourname', repo: 'yourrepo', number: 123, body: 'Hello World!}
        const label = context.issue({labels: ['bug']});
        return context.github.issues.addLabels(label);
    });
*/

    robot.on('issue_comment.created', async (event, context) => {
        let test = (await context.github.issues.getComments(context.issue({id: '308904398'}))).data;
        console.log(test)
        //const title = context.issues.get({body: issue.title});
        //return context.github.issues.createComment(title); 
    });



    robot.on('issues.opened', async (event, context) => {
        // `context` extracts information from the event, which can be passed to
        // GitHub API calls. This will return:
        //   {owner: 'yourname', repo: 'yourrepo', number: 123, body: 'Hello World!}
        let issue = (await context.github.issues.get(context.issue())).data;
        console.log(issue)
        const title = context.issue({body: issue.title});
        return context.github.issues.createComment(title);
    });
    
 
    robot.on('issues.labeled', async (event, context) => {
        // `context` extracts information from the event, which can be passed to
        // GitHub API calls. This will retx`urn:
        //   {owner: 'yourname', repo: 'yourrepo', number: 123, body: 'Hello World!}
        const params = context.issue({body: 'Nice label!'})
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
