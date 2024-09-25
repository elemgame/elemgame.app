import {Application, Container, Assets, Sprite} from 'pixi.js';

(async () => {
  const app = new Application();
  await app.init({background: '#1099bb', resizeTo: window});
  document.body.appendChild(app.canvas);
  const container = new Container();
  app.stage.addChild(container);
  const texture = await Assets.load('https://w3s.link/ipfs/bafybeic35ewutcllflyfbxghbzjvwq4xdyfhioutag5j64idmn43yqvhbq/elemgame.jpg');
  for (let i = 0; i < 25; i++) {
    const logo = new Sprite(texture);
    logo.x = (i % 5) * 40;
    logo.y = Math.floor(i / 5) * 40;
    container.addChild(logo);
  }
  container.x = app.screen.width / 2;
  container.y = app.screen.height / 2;
  container.pivot.x = container.width / 2;
  container.pivot.y = container.height / 2;
  app.ticker.add((time) => {
    container.rotation -= 0.01 * time.deltaTime;
  });
})();