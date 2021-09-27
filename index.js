const fetch = require('node-fetch');
const core = require('@actions/core');
const github = require('@actions/github');

const CHAOS_TOKEN = core.getInput('CHAOS_TOKEN');
const CHAOS_ID = core.getInput('CHAOS_ID');
const CHAOS_ENDPOINT = core.getInput('CHAOS_ENDPOINT');

async function run() {
    console.log('Hello index.js, world!');
    const url = `${CHAOS_ENDPOINT}/ci/?&CHAOS_ID=${CHAOS_ID}&CHAOS_TOKEN=${CHAOS_TOKEN}`;
    const response = await fetch(url);
    const { results } = await response.json();
    console.log("Got results from API server.... ")
    console.log(results)
}

run();