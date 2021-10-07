const core = require("@actions/core");
const aws = require("aws-sdk");

const SQS_URL =
  "https://sqs.us-east-2.amazonaws.com/401669721536/simulation_jobs";

async function run() {
  try {
    const token = core.getInput("chaos_token", { required: true });
    const github = core.getInput("github", { required: true });
    const params = {
      QueueUrl: SQS_URL,
      MessageBody: `{ "token": "${token}", "github": ${github}}`,
    };

    const sqs = new aws.SQS();
    sqs.sendMessage(params, (err, resp) => {
      if (err) {
        throw err;
      } else {
        console.log(`resp ${JSON.stringify(resp, null, 2)}`);
      }
    });
  } catch (error) {
    core.setFailed(error.message);
  }
}

module.exports = run;

if (require.main === module) {
  run();
}
