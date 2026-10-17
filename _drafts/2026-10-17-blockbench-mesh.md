---
title:  "Luanti entity mesh"
date:   2026-010-17 11:23:00 +0200
categories: luanti
excerpt: Maak een enity mesh met blockbench
header:
  teaser: /assets/teasers/luanti-parkour.png
---

## Maak een model in blockbench

Maak een nieuw model in blockbench. Klik op het '+' icoon op het rechter paneel om nieuwe elementen aan het model toe te voegen. Voeg textures toe door in het linker paneel op 'Create texture' te klikken. Wanneer het model af is kan het geexporteerd worden zodat het in luanti gebruikt kan worden. Klik op File > Export > Export glTF Model. Sla de textures op in de textures map van de mod. Sla de gltf file op in de models map van de mod. Zet de Model Export Scale op 1.6.

## Entity aanmaken op basis van de model

```lua
core.register_entity("basicentity:modelentity", {
    initial_properties = {
        visual = "mesh",
        mesh = "model.gltf",
        textures = { 
            "texture1.png",
            "texture2.png",
            "texture3.png"
        },
        visual_size = {x = 1, y = 1, z = 1},
        collide_with_objects = true,
        physical = true,
    },
    on_activate = function(self, staticdata, dtime_s) 
        self.object:set_velocity(vector.new(1, 0, 0))
    end
})
```

Zet `visual` op 'mesh', geeft bij `mesh` het gltf model op. Bij `textures` moeten  alle textures voor het model worden toegevoegd.

## Entity laten spawnen

```lua
core.register_chatcommand("spawn", {
    func = function(name, param)
        local player = core.get_player_by_name(name)
        local position = player:get_pos()

        position = vector.add(position, vector.new(2, 0.5, 0))
        core.add_entity(position, "basicentity:modelentity")
    end,
})
```