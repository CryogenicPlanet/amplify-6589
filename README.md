# Reproduction repository for https://github.com/aws-amplify/amplify-js/issues/6589

Issue https://github.com/aws-amplify/amplify-js/issues/6589

## Update Endpoint

```javascript
const message = await Analytics.updateEndpoint({
  attributes: {
    // Custom attributes that your app reports to Amazon Pinpoint. You can use these attributes as selection criteria when you create a segment.
    hobbies: ["piano", "hiking"],
  },
  metrics: {
    // Custom metrics that your app reports to Amazon Pinpoint.
    minutesListened: 30,
  },
  /** Indicates whether a user has opted out of receiving messages with one of the following values:
   * ALL - User has opted out of all messages.
   * NONE - Users has not opted out and receives all messages.
   */
  optOut: "ALL",
  // Customized userId
  userId: "test",
  // User attributes
  userAttributes: {
    interests: ["football", "basketball", "AWS"],
    // ...
  },
});
```

## Event Attribute

![Event Attribute](https://i.imgur.com/nta1zXO.png)

## Segment Attribute

![Segment Attributes](https://i.imgur.com/5VNtk18.png)
