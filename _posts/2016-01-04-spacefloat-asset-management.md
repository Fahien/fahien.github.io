---
layout: spacefloat
title: SpaceFloat Asset Management
category: Informatics
tags: asset, asset management, game, libgdx, loading screen, spacefloat
image: spacefloat.png
---
SpaceFloat uses an instance of the [AssetManager](https://github.com/libgdx/libgdx/wiki/Managing-your-assets) provided by libGDX to manage assets. This instance follow the lifecycle of the SpaceFloatGame instance and it is injected into the Screens as a dependence.

```java
public class SpaceFloatGame extends Game {

	private AssetManager assetManager;

	public SpaceFloatGame() {
		assetManager = new AssetManager();
	}

	// ...

	@Override
	public void dispose() {
		assetManager.dispose();
	}
}
```
## The Loading Screen

A fundamental use case of the asset manager is in the **LoadingScreen**. With this technique you can load all assets within a directory while showing progress.

```java
public class LoadingScreen extends SpaceFloatScreen {
	private static final String TEXTURE_DIRECTORY = "textures/";
	private AssetManager assetManager;
	private float progress;

	@Override
	public void show() {
		super.show();
		assetManager = getAssetManager();
		FileHandle[] files = Gdx.files.local(TEXTURE_DIRECTORY).list();
		for(FileHandle file : files) {
			assetManager.load(file.path(), Texture.class);
		}
	}

	@Override
	public void render(float delta) {
		assetManager.update();
		progress = assetManager.getProgress();
		logger.info("Loading assets: " + progress);
		if (progress < 1.0f) return;
		SpaceFloat.GAME.setScreen(ScreenEnumerator.MAIN);
	}
}
```
