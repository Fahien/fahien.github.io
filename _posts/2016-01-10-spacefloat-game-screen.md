---
layout: spacefloat
title: SpaceFloat Game Screen
category: Informatics
tags: ashley engine, game, game screen, libgdx, spacefloat
image: spacefloat.png
---
The Game Screen is the most important of SpaceFloat because it shows the 3D world with which the player can interact. It makes use of the powerful [Ashley Engine](https://github.com/libgdx/ashley) that helps significantly reduce the complexity of the system. This Screen creates all the systems it needs within its constructor.

```java
private ReactorController reactorController;
private BulletSystem bulletSystem;
private CameraSystem cameraSystem;
private RenderSystem renderSystem;

public GameScreen() {
	reactorController = new ReactorController();
	bulletSystem = new BulletSystem();
	cameraSystem = new CameraSystem();
	renderSystem = new RenderSystem();
}
```

Like all [SpaceFloat Screens](http://www.fahien.me/2015/12/29/spacefloat-screen-management/), when the **show method** is called, all the Game Screen dependencies have already been initialized, so it can inject the last dependencies into the systems, add these systems to the Engine and finally create the HUD.

```java
@Override
public void show() {
	injectSystemsDependencies();
	addSystemsToEngine(getEngine());
	createHud(getStage());
}

private void injectSystemsDependencies() {
	Camera mainCamera = getCamera();
	cameraSystem.setCamera(mainCamera);
	renderSystem.setCamera(mainCamera);
	ParticleSystem particleSystem = getParticleSystem();
	reactorController.setParticleSystem(particleSystem);
	renderSystem.setParticleSystem(particleSystem);
}

private void addSystemsToEngine(Engine engine) {
	engine.addSystem(reactorController);
	engine.addSystem(bulletSystem);
	engine.addSystem(cameraSystem);
	engine.addSystem(renderSystem);
}

public void createHud(Stage stage) {
	HudFactory factory = new HudFactory();
	stage.addActor(factory.getFpsActor());
	stage.addActor(factory.getVelocityActor());
	stage.addActor(factory.getAccelerationActor());
	stage.addActor(factory.getEnergyActor());
}
```

Eventually, the **update method** becomes nothing more simple:

```java
@Override
public void update(float delta) {
	super(delta);
	engine.update(delta);
}
```
