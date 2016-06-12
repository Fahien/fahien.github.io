---
layout: spacefloat
title: SpaceFloat Screen Management
category: Informatics
tags: game, libgdx, screen, screen management, spacefloat
image: spacefloat.png
---
SpaceFloat is divided in well-defined screens encapsulated in the ScreenEnumerator, so it's very simple to retrieve a singleton of a screen:

`ScreenEnumerator.INFO.getScreen();`.

```java
public enum ScreenEnumerator {
	INFO(new InfoScreen()),
	MAIN(new MainScreen()),
	LOADING(new LoadingScreen());

	private SpaceFloatScreen screen;

	ScreenEnumerator(SpaceFloatScreen screen) {
		this.screen = screen;
	}

	public SpaceFloatScreen getScreen() {
		return screen;
	}
}
```
The SpaceFloatGame class, subclass of [Game](https://github.com/libgdx/libgdx/wiki/Extending-the-simple-game#the-game-class), is responsible of the application life-cycle, including the current screen. A screen is initialized within the method `setScreen(ScreenEnumerator)` which, if the screen is not yet initialized, will invoke `injectDependencies(SpaceFloatScreen)` to inject all required dependencies.

```java
public void setScreen(ScreenEnumerator screenEnumerator) {
	SpaceFloatScreen screen = screenEnumerator.getScreen();
	if (!screen.isInitialized()) injectDependencies(screen);
	setScreen(screen);
}

private void injectDependencies(SpaceFloatScreen screen) {
	screen.setAssetManager(assetManager);
	screen.setFont(font);
	screen.setEngine(engine);
	screen.setGame(this);
	screen.setInitialized(true);
}
```
