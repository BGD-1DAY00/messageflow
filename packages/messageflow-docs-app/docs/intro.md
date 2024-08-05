---
sidebar_position: 1
slug: /
---

# Welcome to Message Flow

Discover how to efficiently manage and distribute your messages with **Message Flow in just a few minutes**.

## Getting Started 🏃🏽

Get started by **creating a new topic** for your message flow.

Or **try Message Flow immediately** with our **quick start guide**.

### What you'll need 📝

- An account on Message Flow
- Your preferred HTTP/2 client
- (Optional) A tool to generate and manage JWT tokens

## Create a new topic

To begin using Message Flow:

1. Log into your Message Flow account
2. Navigate to the "Create Topic" section
3. Define your topic name and configuration
4. Receive your private key for JWT token generation

## Configure your message distribution

In the topic configuration, you can:

- Specify target APIs for message distribution
- Set polling frequency and message batch sizes
- Define message payload structure (currently supporting JSON)

## Send your first 🙋🏽 message :)

Use your HTTP/2 client to send a request to our API:

```bash
# Example using curl (replace with actual values)
curl --http2 https://api.messageflow.com/publish \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"topic": "your_topic_name", "payload": {"key": "value"}}'