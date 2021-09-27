const axios = require('axios');
const core = require('@actions/core');
const github = require('@actions/github');

// Secrets set in Github Repo
const CHAOS_TOKEN = core.getInput('CHAOS_TOKEN');
const CHAOS_ID = core.getInput('CHAOS_ID');
const CHAOS_ENDPOINT = core.getInput('CHAOS_ENDPOINT');

async function run() {
    const url = `https://chaoslabs.co/ci/?&CHAOS_ID=${CHAOS_ID}&CHAOS_TOKEN=${CHAOS_TOKEN}`;
    console.log("Built url: ", url);
    try {
        const response = await axios.get(url);
        console.log("Got results from API server.... ")
        console.log(response)
    } catch (e) {
        console.log("Chaos simulation failed... ", e);
    }
}

run();