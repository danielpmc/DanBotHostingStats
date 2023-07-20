createListPrem.python = (serverName, userID) => ({
    "name": serverName,
    "user": userID,
    "nest": 5,
    "egg": 22,
    "docker_image": "ghcr.io/parkervcp/yolks:python_3.9",
    "startup": "if [[ -d .git ]] && [[ \"{{AUTO_UPDATE}}\" == \"1\" ]]; then git pull; fi; if [[ ! -z \"{{PY_PACKAGES}}\" ]]; then pip install -U --prefix .local {{PY_PACKAGES}}; fi; if [[ -f /home/container/${REQUIREMENTS_FILE} ]]; then pip install -U --prefix .local -r ${REQUIREMENTS_FILE}; fi; /usr/local/bin/python /home/container/{{PY_FILE}}",
    "limits": {
        "memory": 0,
        "swap": -1,
        "disk": 0,
        "io": 500,
        "cpu": 0
    },
    "environment": {
        "USER_UPLOAD": "0",
        "AUTO_UPDATE": "0",
        "REQUIREMENTS_FILE": "requirements.txt",
        "PY_FILE": "main.py"
    },
    "feature_limits": {
        "databases": 2,
        "allocations": 1,
        "backups": 10
    },
    "deploy": {
        "locations": botswebdbPREM,
        "dedicated_ip": false,
        "port_range": []
    },
    "start_on_completion": false
})
