# Create TFC Workspace

This action is used to create Terraform Cloud workspaces.

## Inputs

The action expects the following inputs:

| Variable        | Required | Description                                                                               |
| --------------- | -------- | ----------------------------------------------------------------------------------------- |
| `tfcToken`      | Yes      | A Terraform Cloud API token with access to manage the workspace                           |
| `orgName`       | Yes      | The name of the Terraform Cloud organization in which the new workspace should be created |
| `workspaceName` | Yes      | The name of the Terraform Cloud workspace                                                 |

## Outputs

The action generates no outputs.

## Example Usage

Create a workspace:

```yaml
- uses: cbsinteractive/create-tfc-workspace-action@v3
  with:
    tfcToken: ${{ secrets.tfc_token }}
    orgName: ${{ secrets.tfc_organization }}
    workspaceName: some-workspace-name
```

This example assumes several variables stored as GitHub [encrypted secrets][].

[encrypted secrets]: https://docs.github.com/en/actions/reference/encrypted-secrets
