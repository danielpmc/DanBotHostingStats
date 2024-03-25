createList.uptimekuma = (serverName, userID) => ({
    name: serverName,
    user: userID,
    nest: 19,
    egg: 70,
    docker_image: "ghcr.io/parkervcp/apps:uptimekuma",
    startup: 'if [[ -d .git ]] && [[ {{AUTO_UPDATE}} == "1" ]]; then npm run setup; fi; /usr/local/bin/node /home/container/server/server.js --port={{SERVER_PORT}}',
    limits: {
        memory: 0,
        swap: -1,
        disk: 10240,
        io: 500,
        cpu: 100,
    },
    environment: {
        GIT_ADDRESS: "https://github.com/louislam/uptime-kuma",
        JS_FILE: "server/server.js",
        AUTO_UPDATE: 1,
    },
    feature_limits: {
        databases: 2,
        allocations: 1,
        backups: 10,
    },
    deploy: {
        locations: botswebdbFREE,
        dedicated_ip: false,
        port_range: [],
    },
    start_on_completion: false,
});
