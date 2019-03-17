import React, { Component } from "react";
import { Table, Button } from "semantic-ui-react";
import web3 from "../ethereum/web3";
import Campaign from "../ethereum/campaign";

class RequestRow extends Component {
  state = {
    errorMessage: "",
    approvalLoading: false,
    finalizeloading: false
  };

  onApprove = async () => {
    this.setState({ approvalLoading: true, errorMessage: "" });
    const campaign = Campaign(this.props.address);

    try {
      const accounts = await web3.eth.getAccounts();
      await campaign.methods.approveRequest(this.props.id).send({
        from: accounts[0]
      });
    } catch (error) {
      this.setState({ errorMessage: error.message });
    }

    this.setState({ approvalLoading: false });
  };

  onFinalize = async () => {
    this.setState({ finalizeLoading: true, errorMessage: "" });
    const campaign = Campaign(this.props.address);
    try {
        const accounts = await web3.eth.getAccounts();
        await campaign.methods.finalizeRequest(this.props.id).send({
          from: accounts[0]
        });
    } catch (error) {
        this.setState({ errorMessage: error.message });
    }
    this.setState({ finalizeLoading: false });
  };

  render() {
    const { id, request, approversCount } = this.props;
    const { Row, Cell } = Table;
    const readyToFinalize = request.approvalCount > approversCount / 2;
    return (
      <Row
        disabled={request.isComplete}
        positive={readyToFinalize && !request.isComplete}
      >
        <Cell>{id}</Cell>
        <Cell>{request.description}</Cell>
        <Cell>{web3.utils.fromWei(request.value, "ether")}</Cell>
        <Cell>{request.recipient}</Cell>
        <Cell>
          {request.approvalCount}/{approversCount}
        </Cell>
        <Cell>
          {request.isComplete ? null : (
            <Button
              color="green"
              basic
              onClick={this.onApprove}
              loading={this.state.approvalLoading}
            >
              Approve
            </Button>
          )}
        </Cell>
        <Cell>
          {request.isComplete ? null : (
            <Button
              color="teal"
              basic
              onClick={this.onFinalize}
              loading={this.state.finalizeLoading}
            >
              Finalize
            </Button>
          )}
        </Cell>
      </Row>
    );
  }
}

export default RequestRow;
