const { spawn } = require("node:child_process");

const runWorkspace = (workspace) =>
  spawn(`npm run dev --workspace ${workspace}`, {
    stdio: "inherit",
    shell: true,
  });

const client = runWorkspace("melkino");
const server = runWorkspace("server");

const stop = () => {
  if (!client.killed) client.kill();
  if (!server.killed) server.kill();
};

process.on("SIGINT", stop);
process.on("SIGTERM", stop);

client.on("exit", (code) => {
  if (code && code !== 0) {
    if (!server.killed) server.kill();
    process.exitCode = code;
  }
});

server.on("exit", (code) => {
  if (code && code !== 0) {
    if (!client.killed) client.kill();
    process.exitCode = code;
  }
});
