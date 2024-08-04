---
sidebar_position: 3
---

# Easy Testing with Message Flow

Message Flow provides a simple yet powerful way to load test your system. Here's how you can use our testing features to ensure your setup can handle the load you expect.

## Setting Up Your Test

1. Navigate to the "Testing" tab in your topic dashboard.
2. You'll see a form with the following fields:

    - **Test Payload**: Enter the JSON payload you want to use for testing.
    - **Number of Messages**: Specify how many messages you want to send.
    - **Throughput**: Define how quickly you want these messages sent (messages per second) to the outbound API(s) you've defined. This can be accomplished by configuring the poll interval value, message velocity, etc.

[//]: # (![Test Setup]&#40;../static/img/test-setup.png&#41;)

## Example Test Configuration

Here's an example of how you might set up a test:

```json
{
  "testPayload": {
    "user": "testUser",
    "action": "purchase",
    "item": "widget",
    "quantity": 5
  },
  "numberOfMessages": 10000,
  "throughput": 10000
}