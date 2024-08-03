---
sidebar_position: 2
---

# Getting Started with Message Flow

Welcome to Message Flow! Let's walk through the key features with some visual aids.

## Creating Your First Topic

[//]: # (![Creating a Topic]&#40;../static/img/create-topic.png&#41;)

To create your first topic:
1. Log into your Message Flow dashboard
2. Click on "New Topic" in the navigation bar
3. Fill in the topic details, including name and description
4. Set up your initial configuration

## Configuring Message Distribution

[//]: # (![Message Distribution]&#40;../static/img/message-distribution.png&#41;)

After creating your topic, you can configure how messages are distributed:
1. Select your topic from the dashboard
2. Navigate to the "Distribution" tab
3. Add target APIs and set polling frequencies
4. Save your configuration

## Sending Your First Message

[//]: # (![Sending a Message]&#40;../static/img/send-message.png&#41;)

Now that your topic is set up, let's send a message:
1. Use your preferred HTTP/2 client
2. Authenticate using your JWT token
3. Send a POST request to our API endpoint
4. Include your topic name and message payload

Congratulations! You've now set up and used the core features of Message Flow.