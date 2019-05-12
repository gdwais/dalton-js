module.exports = {
    connectionString: 'postgres://localhost:5432/dalton-db',
    PORT: 5750,
    redis: 'redis://127.0.0.1:6379',
    jobQueue: {
        concurrency: 20,
        timoutMin: 5,
        timoutMax: 60
    },
    mockJobs: [ {
        priority: 'high',
        attempts: 5,
        payload: {
            id: 1,
            foo: 'bar'
        }
    }, {
        priority: 'normal',
        attempts: 5,
        payload: {
            id: 2,
            foo: 'bar'
        }
    }, {
        priority: 'low',
        attempts: 5,
        payload: {
            id: 3,
            foo: 'bar'
        }
    }, {
        priority: 'critical',
        attempts: 5,
        payload: {
            id: 4,
            foo: 'bar'
        }
    }

    ]
};