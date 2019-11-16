'use strict';

const Initialize = require('./initialize');

function getQuery(event)
{
    let query = {};

    if (event.Records) {
        event.Records.forEach(function (element, index, array) {
            query = JSON.parse(element.body);
        });
    } else {
        query = event.queryStringParameters;
    }

    return query;
}

exports.handler = async (event, context, callback) => {
    let query = getQuery(event);

    return Initialize.run()
        .then(function () {
            const response = {
                statusCode: 200,
                body: {
                    'message': 'success',
                    'query': query
                }
            };

            callback(null, response);
        });
};
