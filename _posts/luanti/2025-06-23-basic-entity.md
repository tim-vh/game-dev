---
layout: single
title:  "Luanti basic entity toevoegen"
date:   2025-06-23 11:00:00 +0200
categories: Luanti
---

In deze tutorial leer je hoe je een Minetest-mod maakt die een basisentiteit registreert en een chatcommand toevoegt om deze te spawnen.

## Mod toevoegen

Voeg een nieuwe map toe in de de map `mods` van luanti, bijvoorbeeld `basic-entity-mod`. Open de map in VsCode en voer het commando `Luanti Tools: New Mod Project` uit.

## Entity registreren

Voeg de volgende code toe aan init.lua om een entity te registreren:

```lua
core.register_entity("basicentity:block", {
    initial_properties = {
        visual = "cube",
        textures = {"entity.png","entity.png", "entity.png", "entity.png", "entity.png", "entity.png"},
        visual_size = {x = 1, y = 1, z = 1},
        collide_with_objects = true,
        physical = true,
    },
    on_activate = function(self, staticdata, dtime_s) 
        self.object:set_velocity(vector.new(1, 0, 0))
    end
})
```

De entiteit wordt geregistreerd met core.register_entity. De initial_properties bepalen hoe de entiteit eruitziet en zich gedraagt:

- visual: De visuele vorm van de entiteit (hier een kubus).
- textures: De textures die op de kubus worden toegepast.
- physical: Zorgt ervoor dat de entiteit fysiek is en kan botsen met objecten.

De on_activate functie wordt uitgevoerd wanneer de entiteit wordt gespawnd. Hier wordt de snelheid ingesteld met self.object:set_velocity.

## Entity spawnen met een chatcommando

Om de enity in de game te kunnen spawnen kan de volgende code worden gebruikt:

```lua
core.register_chatcommand("spawn", {
    func = function(name, param)
        local player = core.get_player_by_name(name)
        local position = player:get_pos()

        position = vector.add(position, vector.new(2, 0.5, 0))
        core.add_entity(position, "basicentity:block")
    end,
})
```

Met core.register_chatcommand wordt een chatcommand toegevoegd. Wanneer een speler `/spawn` typt, wordt de entiteit gespawnd op een positie vlakbij de speler.

![Luanti minimal game](/assets/images/luanti/luanti-basic-entity.png)

Voorbeeldcode: [https://github.com/tim-vh/game-dev/tree/main/examples/luanti/basic-enity-mod](https://github.com/tim-vh/game-dev/tree/main/examples/luanti/basic-enity-mod)