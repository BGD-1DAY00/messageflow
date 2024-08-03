---
slug: "underutilization-of-apache-pulsar"
title: "Apache Pulsar: The Unsung Hero of Distributed Messaging"
authors: [saado]
sidebar_position: 2
date: 2024-08-03
tags: [apache pulsar, kafka, distributed systems, messaging, streaming]
---

# Apache Pulsar: The Unsung Hero of Distributed Messaging

I've been in the trenches of distributed systems for some time now, and I've seen technologies come and go. But there's one that's been flying under the radar that deserves some serious attention: Apache Pulsar. Seriously, you can't find many Youtube videos about it, and if you do its views are poor. It doesn't seem to get any enterprise attention for the most part???


## Pulsar: More Than Just a Messaging System

First off, let's get one thing straight: Pulsar isn't just another messaging system. It's a unified data platform that handles both queuing and streaming. This isn't just marketing fluff; it's a fundamental architectural difference that has far-reaching implications.

### The Architecture That Makes a Difference

Pulsar's architecture is based on a segment-centric design, not the partition-centric approach of Kafka. What does this mean in practice? It means Pulsar can handle both high-throughput streaming and traditional queuing workloads.

Here's where it gets interesting:

1. **Segmented Storage**: Pulsar breaks down topics into segments, which are distributed across bookies (Pulsar's storage nodes). This allows for more flexible scaling and better fault tolerance.

2. **Separation of Compute and Storage**: Unlike Kafka, where brokers handle both serving and storage, Pulsar separates these concerns. This isn't just an academic distinction; it allows you to scale serving and storage independently.

## Real-World Use Cases Where Pulsar Shines

Let's look at some concrete scenarios where Pulsar outperforms the competition:

### 1. Multi-Tenant Environments

If you're running a platform as a service or need to isolate different teams or applications, Pulsar's built-in multi-tenancy is a godsend. It's not just about namespaces; Pulsar provides true isolation at the tenant level, including separate authentication and authorization.

```java
// Creating a namespaced topic in Pulsar
String topic = "persistent://tenant/namespace/topic-name";
Producer<byte[]> producer = client.newProducer()
    .topic(topic)
    .create();
```

### 2. Geo-Replication at Scale
Global applications need global messaging. Pulsar's geo-replication isn't an afterthought; it's baked into the core design. You can set up async replication between clusters with a few config changes:
```yaml
replicationClusters:
  - us-west
  - us-east
  - eu-central
```
### 3. Long-Term Event Storage

Need to store events for years for compliance or analytics? Pulsar's tiered storage can offload older segments to cheaper storage like S3 or GCS automatically. This isn't just about cost savings; it's about maintaining performance even with massive datasets.

```yaml
managedLedgerOffloadDriver: aws-s3
offloadersDirectory: /pulsar/offloaders
s3ManagedLedgerOffloadBucket: your-bucket-name
s3ManagedLedgerOffloadRegion: us-west-2
```

### 4. Mixed Workload Handling
   Here's where Pulsar really flexes its muscles. Need both queuing for task distribution and streaming for real-time analytics? With Pulsar, that's not two systems; it's one:
```java 
// Exclusive subscription for queuing
consumer.subscribe(topic, "exclusive-sub", SubscriptionType.Exclusive);

// Shared subscription for streaming
consumer.subscribe(topic, "shared-sub", SubscriptionType.Shared);
```

## The Kafka Elephant in the Room

Look, Kafka is great. I've used it, I've scaled it, and it works. But it's not the end-all-be-all. Its partition-centric model can be a limitation in certain scenarios, especially when you need more flexible consumption patterns or true multi-tenancy.

## Bridging the Adoption Gap

So why isn't everyone jumping on the Pulsar bandwagon? A few reasons:

1. **Ecosystem Maturity**: Kafka's been around longer and has more integrations. But Pulsar is catching up fast. There is a growing spring project leveraging this technology :)!
2. **Operational Complexity**: Yes, Pulsar has more moving parts. But in my experience, this complexity pays off in flexibility.
3. **Mindset Shift**: Moving from a partition-centric to a segment-centric model requires rethinking some patterns. It's worth it, but it's not trivial.

## The Path Forward

If you're building or refactoring a system that needs messaging at scale, do yourself a favor and give Pulsar a serious look. Start with a PoC, maybe a non-critical workload. You might be surprised at how well it fits complex use cases.

And to the Pulsar community: keep pushing. We need more real-world case studies, more integrations with popular frameworks, and yes, more medium articles. Sometimes the best tech doesn't win just because it's the best; it wins because people know about it.

In the end, whether you choose Kafka or Pulsar should depend on your specific use case. But make sure it's an informed choice, not just a default one. Your future self (and your ops team) might thank you.