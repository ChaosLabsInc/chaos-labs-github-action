# Init Chaos Cloud Simulation

This action send message to AWS SQS.

## Inputs

### `chaos_token`

**Required** The token provided by Chaos Labs

### `github`

**Required** github context data used to identify the event, branch and actor.

## Example usage

```yaml
- uses: aws-actions/configure-aws-credentials@v1
  with:
    aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}
    aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
    aws-region: us-east-2

- uses: ChaosLabsInc/chaos-labs-github-action@v0.0.1
  with:
    chaos_token: "${{secrets.CHAOS_TOKEN}}"
    github: ${{ toJSON(github) }}
```
