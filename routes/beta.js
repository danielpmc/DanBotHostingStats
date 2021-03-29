const Router = require("express").Router();

Router.get("/", (req, res) => {

    res.json({ error: false, msg: "DanBot Hosting beta API and Animal API" });

});


Router.get("/stats", (req, res) => {
  try {
    let data = {
      Node1: nodeData.fetch('node1'),
      Node2: nodeData.fetch('node2'),
      Node3: nodeData.fetch('Node3'),
      Node4: nodeData.fetch('Node4'),
      Node5: nodeData.fetch('Node5'),
      Node6: nodeData.fetch('Node6'),
      Node7: nodeData.fetch('Node7'),
      Node8: nodeData.fetch('Node8'),
      Node9: nodeData.fetch('Node9'),
      Node10: nodeData.fetch('Node10'),
      Node11: nodeData.fetch('Node11'),
      Node12: nodeData.fetch('Node12'),
      Node13: nodeData.fetch('Node13'),
      Node14: nodeData.fetch('Node14')
    }

    let status = {
      Node1: nodeStatus.fetch('node1'),
      Node2: nodeStatus.fetch('node2'),
      Node3: nodeStatus.fetch('node3'),
      Node4: nodeStatus.fetch('node4'),
      Node5: nodeStatus.fetch('node5'),
      Node6: nodeStatus.fetch('node6'),
      Node7: nodeStatus.fetch('node7'),
      Node8: nodeStatus.fetch('node8'),
      Node9: nodeStatus.fetch('node9'),
      Node10: nodeStatus.fetch('node10'),
      Node11: nodeStatus.fetch('node11'),
      Node12: nodeStatus.fetch('node12'),
      Node13: nodeStatus.fetch('node13'),
      Node14: nodeStatus.fetch('node14')
    }

    res.json({ error: false, data: data, status: status });
  } catch (e) {
    res.json({ error: true, message: e });
  }
});

Router.get("*", async function(req, res) {
  res.status(404).send({
    error: true,
    status: 404,
    message: "Endpoint not found"
  });
});

module.exports = Router;
