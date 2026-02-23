---
layout: single
title:  "Luanti biome toevoegen"
date:   2025-08-09 11:00:00 +0200
categories: luanti
excerpt: Voeg een eigen biome toe aan je Luanti-game.
header:
  teaser: /assets/teasers/luanti-biome.png
---

Voeg een eigen biome toe aan je Luanti-game. In deze tutorial maak je een grasland-biome en een bijbehorende grass node.

## Mod toevoegen

Voeg een nieuwe map toe in de de map `mods` van luanti, bijvoorbeeld `grass_biome`. Open de map in VsCode en voer het commando `Luanti Tools: New Mod Project` uit.

## Node toevoegen
Voeg eerst een nieuwe node toe voor gras. Maak in de `textures` map van je mod een afbeelding aan, bijvoorbeeld `grass.png`. Registreer daarna de node in je `init.lua`:

```lua
core.register_node("grass_biome:grass", {
    description = "grass",
    tiles = {"grass.png"},
})
```

## Biome registreren
Registreer vervolgens een nieuwe biome die gebruikmaakt van de grass node als bovenste laag. Voeg deze code toe aan je `init.lua`:

```lua
core.register_biome({
    name = "grasslands",
    node_top = "grass_biome:grass",
    depth_top = 1,
    heat_point = 50,
    humidity_point = 50,
    weight = 1
})
```

- name: De naam van de biome.
- node_top: De node die gebruikt wordt als bovenste laag van de biome, hier de grass node.
- depth_top: Hoe dik de bovenste laag is.
- heat_point en humidity_point: Bepalen waar de biome voorkomt.
- weight: Hoe vaak deze biome voorkomt.

## Resultaat

Als je de game opnieuw opstart zul je nu gebieden zien waar de bovenste laag uit gras bestaat.

Voorbeeldcode: [https://github.com/tim-vh/game-dev/tree/main/examples/luanti/mods/grass_biome](https://github.com/tim-vh/game-dev/tree/main/examples/luanti/mods/grass_biome)

![Luanti biome](/assets/images/luanti/luanti-biome.png)