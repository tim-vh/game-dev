---
layout: single
title:  "Luanti biome decorations"
date:   2025-09-29 13:22:00 +0200
categories: luanti
excerpt: Voeg decoraties toe aan een biome
header:
  teaser: /assets/teasers/luanti-biome-decorations.png
---

Voeg decoraties toe aan een biome in je Luanti-game. In deze tutorial maak je een eenvoudige plant-decoration die verschijnt op gras. Hoe je de gras-biome toevoegt kun je vinden in de [Luanti biome](/luanti/2025/08/09/luanti-biome.html) tutorial.

## Mod toevoegen

Voeg een nieuwe map toe in de map `mods` van luanti, bijvoorbeeld `grass_decoration`. Open de map in VsCode en voer het commando `Luanti Tools: New Mod Project` uit. Omdat deze mod gebruik maakt van de `grass_biome` mod voegen we een dependency toe in de mod.config file:

```
depends = grass_biome
```

## Texture toevoegen

Maak in de `textures` map van je mod een afbeelding aan, bijvoorbeeld `plant.png`. Dit wordt de texture van je plant-decoration.

## Node toevoegen

Registreer een nieuwe node voor de plant in je `init.lua`:

```lua
core.register_node("grass_decoration:plant", {
    drawtype = "plantlike",
    tiles = {"plant.png"},
    walkable = false
})
```

- drawtype: Zorgt ervoor dat de de node als een plant-type wordt weergegeven.
- tiles: De texture die je eerder hebt toegevoegd.
- walkable: false zorgt dat je door de plant heen kunt lopen.

## Decoration toevoegen

Registreer nu een decoration die de plant plaatst op gras in de juiste biome:

```lua
core.register_decoration({
    deco_type = "simple",
    place_on = {"grass_biome:grass"},
    biomes = {"grasslands"},
    fill_ratio = 0.1,
    decoration = "grass_decoration:plant",
})
```

- deco_type: Het type decoratie, hier 'simple'.
- place_on: Op welke node de decoratie mag verschijnen, bijvoorbeeld gras.
- biomes: In welke biomes de decoratie voorkomt.
- fill_ratio: Hoeveel decoraties er gemiddeld per blok worden geplaatst.
- decoration: De node die als decoratie wordt geplaatst.


## Resultaat

Als je de game opnieuw opstart zul je nu zien dat er planten zijn toegevoegd op het gras van de gras-biome.

Voorbeeldcode: [https://github.com/tim-vh/game-dev/tree/main/examples/luanti/mods/grass_decoration](https://github.com/tim-vh/game-dev/tree/main/examples/luanti/mods/grass_decoration)

![Luanti biome](/assets/images/luanti/luanti-biome-decorations.png)