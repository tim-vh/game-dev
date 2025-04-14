---
layout: single
title:  "Luanti minimal game"
date:   2025-04-14 09:34:27 +0200
categories: Luanti
---

Maak een basis game in Luanti die werkt met de standaar mapgen.

## Benodigdheden

-   [Visual studio code](https://https://code.visualstudio.com/)
-   [Luanti Tools extension](https://marketplace.visualstudio.com/items/?itemName=GreenXenith.minetest-tools)

## Game toevoegen

Voeg een nieuwe map toe in de `/games/` map van luanti bijvoorbeeld `mygame`. Open de map in VsCode en voer het commando (met F1 toets) `Luanti Tools: New Game Project` uit.

## Mod toevoegen

Voeg een nieuwe map toe in de de map `mods` van de aangemaakt game, bijvoorbeeld `mymod`. Open de map in VsCode en voer het commando `Luanti Tools: New Mod Project` uit.

## Nodes registeren

De standaard map generators hebben drie verschillende nodes nodig. Dit zijn een 'stone', een 'water' en 'river water' node. Voeg in de `textures` map van de mod voor elk node type een texture toe, bijvoorbeeld een .png afbeelding. 

Registreer vervolgens de nodes in de `init.lua` file:

```lua
core.register_node("mymod:stone", {
    description = "stone",
    tiles = {"stone.png"},
    is_ground_content = true,
    groups = {cracky=3, stone=1}
})

core.register_node("mymod:water", {
    description = "water",
    tiles = {"water.png"},
    is_ground_content = true,
    groups = {}
})

core.register_node("mymod:river_water", {
    description = "river water",
    tiles = {"river_water.png"},
    is_ground_content = true,
    groups = {}
})
```

Voeg vervolgens aliassen toe zodat mapgen weet welke nodes die kan gebruiken:

```lua
core.register_alias("mapgen_stone", "mymod:stone")
core.register_alias("mapgen_water_source", "mymod:water")
core.register_alias("mapgen_river_water_source", "mymod:river_water")
```

Nu kun je een nieuwe game starten in Luanti

![Luanti minimal game](/assets/images/luanti-minimal-game.png)