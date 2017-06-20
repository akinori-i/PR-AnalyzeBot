
const yaml = require('js-yaml');
const visitor = require('probot-visitor');

module.exports = robot => {

/*
            Issue
*/

    robot.on('issues.opened', issue_opened);
    robot.on('issues.closed', issue_closed);
    robot.on('issues.labeled', issue_labeled);
    robot.on('issue_comment.created', issue_commentsCreate);

    async function issue_opened (event, context) {
        let issue = (await context.github.issues.get(context.issue())).data;
        console.log(issue)  // show issuesEvent
        //const title = context.issue({body: issue.title});
        //const url = context.issue({body: issue.html_url});
        //return context.github.issues.createComment(title);
        //return context.github.issues.createComment(url);
        const label = context.issue({labels: ['duplicate']});
        return context.github.issues.addLabels(label);
    }

    async function issue_closed (event, context) {
        const params = context.issue({body: 'Issue was closed!'})
        return context.github.issues.createComment(params);
    }

    async function issue_labeled (event, context) {
        const params = context.issue({body: 'Thank you for labeling!'})
        return context.github.issues.createComment(params);
    }
    async function issue_commentsCreate (event, context) {
        let comment = (await context.github.issues.getComments(context.issue())).data;
        //console.log(comment)
        //let issue = (await context.github.issues.get(context.issue())).data;
        //console.log(comment.body);
        //const title = context.issues.get({body: issue.title});
        //return context.github.issues.createComment(title); 
        const label = context.issue({labels: ['bug']});
        return context.github.issues.addLabels(label);
    }

/*
            Pull Request
*/

    robot.on('pull_request.opened', pullRequest_opened);

    async function pullRequest_opened (event, context) {
        const params = context.issue({body: 'Thank you for your PR!'})
        return context.github.issues.createComment(params);
    }

};