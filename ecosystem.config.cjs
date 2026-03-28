module.exports = {
  apps: [
    {
      name: 'pablo-site',
      script: './server.mjs',
      cwd: __dirname,
      exec_mode: 'fork',
      instances: 1,
      autorestart: true,
      watch: false,
      time: true,
      env: {
        HOST: '0.0.0.0',
        PORT: '32253',
      },
    },
  ],
}
