---
layout: single
title:  "Luanti biome toevoegen"
date:   2025-08-09 11:00:00 +0200
categories: luanti
excerpt: Voeg een eigen biome toe aan je Luanti-game.
header:
  teaser: /assets/images/luanti/luanti-biome.png
---

Voeg een eigen biome toe aan je Luanti-game. In deze tutorial maak je een grasland-biome en een bijbehorende grass node.

## Node toevoegen
Voeg eerst een nieuwe node toe voor gras. Maak in de `textures` map van je mod een afbeelding aan, bijvoorbeeld `grass.png`. Registreer daarna de node in je `init.lua`:

```lua
core.register_node("mymod:grass", {
    description = "grass",
    tiles = {"grass.png"},
    is_ground_content = true,
    diggable = true,
    on_punch = function(pos, node, puncher, pointed_thing)
        core.node_dig(pos, node, puncher)
    end
})
```

## Biome registreren
Registreer vervolgens een nieuwe biome die gebruikmaakt van de grass node als bovenste laag. Voeg deze code toe aan je `init.lua`:

```lua
core.register_biome({
    name = "grasslands",
    node_top = "mymod:grass",
    depth_top = 1,
    heat_point = 50,
    humidity_point = 50,
    weight = 1
})
```

- name: De naam van de biome.
- node_top: De bovenste laag van de biome, hier je grass node.
- depth_top: Hoe dik de bovenste laag is.
- heat_point en humidity_point: Bepalen waar de biome voorkomt.
- weight: Hoe vaak deze biome voorkomt.

## Resultaat

Als je de game opnieuw opstart zul je nu gebieden zien waar de bovenste laag uit gras bestaat.
