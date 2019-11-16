//TODO:
//Replace ${AWS_ACCOUNT_ID} with your Aws account Id
//Replace ${AWS_REGION} with your Aws region (i.e. us-east-1, eu-west-1, etc.)
//Replace ${SQS_QUEUE_NAME} with your Sqs Queue Name

module.exports = {
    Records: [{
        messageId: '144831c7-baeb-44a8-a90e-8b6687fc642d',
        receiptHandle: 'AQEBLpAn7r5KYL8eMKctZ5ySPrM0VjrTFicjCXyPTebjhMTFSNde8S5gaFStMXvlsce5Bu1A+6EqKftwopVC0Ao55PI5yWfzY2BNxt2e+75PuseXjefUKzSloyCRIp7JK0VjjdCd9KDsiSc+FxVuZCOj5fbBeRshxIdsnCnFHSTRUyPW9ZcqasS5il18R7r8o7rJQEUfrvVapKGfVoXNRMhohnP1djGX2g9qmcdQ/cS2u+/Izz8Na81FAbKjk5jin7s86nh4G6+YeB09kevapoRRS6pzKgXRCpmCQJI1qABvvMUx2IPF02IkJe3o/DiqUQNcaIAw71LtSMrDhDutmfcjQuuErrnekyH5qRGg5MePHpVv/ltPyIrJ+Xt/XJcqHWsn',
        body: '{"key1":"value1","key2":"value2"}',
        attributes: {},
        messageAttributes: {},
        md5OfBody: 'f83a2b3e6aac86aa4d5c02bdb0da806d',
        eventSource: 'aws:sqs',
        eventSourceARN: 'arn:aws:sqs:${AWS_REGION}:${AWS_ACCOUNT_ID}:${QUEUE_NAME}',
        awsRegion: '${AWS_REGION}'
    }]
};
