---
layout: single
title:  "Luanti minimal game"
date:   2025-04-14 09:34:27 +0200
categories: luanti
excerpt: Maak een basis game in Luanti die werkt met de standaard mapgen.
header:
  teaser: /assets/images/luanti/luanti-minimal-game.png
---

Maak een basis game in Luanti die werkt met de standaard mapgen.

## Benodigdheden

-   [Visual studio code](https://https://code.visualstudio.com/)
-   [Luanti Tools extension](https://marketplace.visualstudio.com/items/?itemName=GreenXenith.minetest-tools)

## Game toevoegen

Voeg een map `/games/` toe aan de luanti map als deze nog niet bestaat. Voeg daarna een nieuwe map toe in de `/games/` map van luanti bijvoorbeeld `minimal`. Open de map in VsCode en voer het commando (met F1 toets) `Luanti Tools: New Game Project` uit.
s
## Mod toevoegen

Voeg een nieuwe map toe in de de map `mods` van de aangemaakt game, bijvoorbeeld `basic`. Open de map in VsCode en voer het commando `Luanti Tools: New Mod Project` uit.

## Nodes registeren

De standaard map generators hebben drie verschillende nodes nodig. Dit zijn een 'stone', een 'water' en 'river water' node. Voeg in de `textures` map van de mod voor elk node type een texture toe, bijvoorbeeld een .png afbeelding. 

Registreer vervolgens de nodes in de `init.lua` file:

```lua
core.register_node("basic:stone", {
    description = "stone",
    tiles = {"stone.png"},
    is_ground_content = true,
    groups = {cracky=3, stone=1}
})

core.register_node("basic:water", {
    description = "water",
    tiles = {"water.png"},
    is_ground_content = true,
    groups = {}
})

core.register_node("basic:river_water", {
    description = "river water",
    tiles = {"river_water.png"},
    is_ground_content = true,
    groups = {}
})
```

Voeg vervolgens aliassen toe zodat mapgen weet welke nodes die kan gebruiken:

```lua
core.register_alias("mapgen_stone", "basic:stone")
core.register_alias("mapgen_water_source", "basic:water")
core.register_alias("mapgen_river_water_source", "basic:river_water")
```

Nu kun je een nieuwe game starten in Luanti

Voorbeeldcode: [https://github.com/tim-vh/game-dev/tree/main/examples/luanti/games/minimal](https://github.com/tim-vh/game-dev/tree/main/examples/luanti/games/minimal)

![Luanti minimal game](/assets/images/luanti/luanti-minimal-game.png)