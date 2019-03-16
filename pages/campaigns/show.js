import React, { Component } from "react";
import Layout from "../../components/Layout";
import Campaign from "../../ethereum/campaign";
import { Card, Grid } from "semantic-ui-react";
import web3 from "../../ethereum/web3";
import ContributeForm from "../../components/contribute-form";

class CampaignShow extends Component {
  static async getInitialProps(props) {
    const campaign = Campaign(props.query.address);
    const summary = await campaign.methods.getSummary().call();
    return {
      address: props.query.address,
      minimumContribution: summary[0],
      balance: summary[1],
      totalRequests: summary[2],
      approversCount: summary[3],
      managerAddress: summary[4]
    };
  }

  renderCards() {
    const {
      balance,
      managerAddress,
      minimumContribution,
      totalRequests,
      approversCount
    } = this.props;

    const items = [
      {
        header: managerAddress,
        meta: "Address of Manager",
        description:
          "The manager created this campaign and can create requests to withdraw money",
        style: { overflowWrap: "break-word" }
      },
      {
        header: minimumContribution,
        meta: "Minimum Contribution (Wei)",
        description:
          "You must contribute atleast the minimum contribution to become an approver",
        style: { overflowWrap: "break-word" }
      },
      {
        header: totalRequests,
        meta: "Number of Spending Requests",
        description:
          "A Request tries to withdraw money from the Campaign balance. Requests must be approved by a minimum number of approvers",
        style: { overflowWrap: "break-word" }
      },
      {
        header: approversCount,
        meta: "Number of Approvers",
        description: "Number of people who have donated to the Campaign",
        style: { overflowWrap: "break-word" }
      },
      {
        header: web3.utils.fromWei(balance, "ether"),
        meta: "Campaign Balance (ether)",
        description: "Balance left with the Campaign",
        style: { overflowWrap: "break-word" }
      }
    ];

    return <Card.Group items={items} />;
  }

  render() {
    return (
      <Layout>
        <h3>Campaign Details</h3>
        <Grid>
          <Grid.Column width={10}>{this.renderCards()}</Grid.Column>
          <Grid.Column width={6}>
            <ContributeForm address={this.props.address} />
          </Grid.Column>
        </Grid>
      </Layout>
    );
  }
}

export default CampaignShow;
