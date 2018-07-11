---
layout: page
title: ProtoFast
image: protofast.png
---
During the preparations for the [libGDXJam](https://itch.io/jam/libgdxjam), the team composed of [Fahien](https://twitter.com/Fahien) and [pasto](https://sketchfab.com/pasto), so called **FaSTeam**, needed to test the effectiveness of its work by creating a prototype application which involves the use of [libGDX](https://libgdx.badlogicgames.com) and [Blender](https://www.blender.org). [ProtoFast](https://github.com/Fahien/protofast) is the codename of this project. The final product is a simple application which shows a three-dimensional model through a camera movable via mouse or touch screen. Practically, ProtoFast creates a list of models contained in the local `models/` folder. If there are no models in the local folder, it searches in the internal `models/` folder. The _showcase screen_ loads the first model from the list and renders it. You can load the next or previous model through the arrows.

## Screenshots

The models shown in the screenshots are made by pasto.

![Earth]({{ site.github.url }}/static/images/proto-earth.png)

![Spaceship]({{ site.github.url }}/static/images/proto-ship.png)

## License

ProtoFast is licensed under the [Apache 2 License](https://www.apache.org/licenses/LICENSE-2.0.html).
