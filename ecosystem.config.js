module.exports = {
    apps: [{
        name: "app",
        script: "./app.js",
        watch: true,
        exec_mode: "cluster",
        instances: 1,
        env: {
            "NODE_ENV": "development",
        },
        env_production: {
            "NODE_ENV": "production"
        }
    }, {
        name: 'kafka-consumer',
        script: "./chat/consumer.js",
        instances: 1,
        exec_mode: "cluster",
        watch: true,
    }]
}