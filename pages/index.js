import React, { useState } from 'react';
import { AccountConnection, Card} from '@shopify/polaris';
import { url } from 'koa-router';

export default class Index extends React.Component {
  render() {
    return (
      <Card>
        <AccountConnectionExample />
      </Card>
    );
  }
}

function AccountConnectionExample() {
  const [connected, setConnected] = useState(false);
  const accountName = connected ? 'Jane Appleseed' : '';


  const buttonText = connected ? 'Disconnect' : 'Add to Slack';
  const details = connected ? 'Account connected' : 'No account connected';
  const terms = connected ? null : (
    <p>
    </p>
  );

  return (
    <AccountConnection
      accountName={accountName}
      connected={connected}
      title="Connect"
      action={{
        content: buttonText,
        url: ["https://slack.com/oauth/v2/authorize?scope=incoming-webhook&client_id=408772672325.1409638062519"],
        external: true
      }}
      details={details}
      termsOfService={terms}
    />
  );
}
