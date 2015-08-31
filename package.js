Package.describe({
  name: 'robertlowe:meteor-phaser',
  summary: 'Phaser.io packaged for meteor',
  version: '2.4.3',
  git: 'https://github.com/gnomathibus/meteor-phaserio.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles('phaser/build/phaser.js', 'client', {bare: true});
});

