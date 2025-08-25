module.exports = {
    apps: [
        {
            name: "my-node-app",       // app name in pm2
            script: "./main.js",        // entry point (change if your file is server.js or main.js)
            cwd: "/var/www/myapp",        // working directory
            instances: 1,              // or "max" for all CPU cores
            exec_mode: "fork",         // "fork" or "cluster"
            watch: false,              // set true if you want auto-restart on code changes
            env: {
                NODE_ENV: "development"
            },
            env_production: {
                NODE_ENV: "production"
            }
        }
    ]
};