# Chaos Cloud Simulation

This action kicks off Chaos Labs Simulation enginre on latest push to repo.

## Inputs

### `chaos_token`

**Required** The token provided by Chaos Labs

### `github`

**Required** github context data used to identify the event, branch and actor.

## Example usage

1. add `AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`, `CHAOS_TOKEN` to your github secrets in the repo.
2. add the following yaml into your git repo under `.github/workflows/chaos-integration.yml`:

```yaml
name: chaod simulation integration

on: [push, workflow_dispatch]

jobs:
  start_simulation:
    runs-on: ubuntu-latest
    steps:
      - uses: aws-actions/configure-aws-credentials@v1
        with:
          aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}
          aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
          aws-region: us-east-2

      - uses: ChaosLabsInc/chaos-labs-github-action@v0.1.1
        with:
          chaos_token: "${{secrets.CHAOS_TOKEN}}"
          github: ${{ toJSON(github) }}
```

that's it! you're ready to go.
