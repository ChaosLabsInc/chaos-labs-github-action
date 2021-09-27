const CHAOS_TOKEN = core.getInput('CHAOS_TOKEN');
const CHAOS_ID = core.getInput('CHAOS_ID');
const CHAOS_ENDPOINT = core.getInput('CHAOS_ENDPOINT');

async function run() {
    console.log('Hello index.js, world!');
    const url = `${CHAOS_ENDPOINT}/${CHAOS_ID}&key=${TENOR_TOKEN}`;
    const response = await fetch(url);
    const { results } = await response.json();
    console.log("Got results from API server.... ")
    console.log(results)
}

run();