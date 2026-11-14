---
title: "Luanti schematics"
date: 2026-11-14 09:00:00 +0200
categories: luanti
excerpt: Maak en gebruik schematics in luanti
header:
    teaser: /assets/teasers/luanti-schematics.png
---

Leer hoe je schematics maakt en gebruikt in luanti.

## Plaats schematics in de wereld

Om een schematic te plaatsen gaan we een nieuwe mod maken. 

### Mod toevoegen

Open de data directory van luanti en voeg in de map 'mods' een map toe met als naam 'schematics'. Plaats hierin een bestand met de naam 'mod.conf' en zet hierin de volgende inhoud:

```
name = schematics
description = 
depends = 
```

Voeg daarna een bestand 'init.lua' toe aan de map van de mod. Hierin kan de code voor de mod worden toegevoegd.

### Chat commando toevoegen

Het schematic gaan we plaatsen door het uitvoeren van een chat commando. Dit kan door de volgende code toe te voegen aan init.lua:

```lua
core.register_chatcommand("place", {
    func = function(name, param)

        return true, "Schematic placed"
    end
})
```

Door nu in het spel het commando `/place` uit te voeren kunnen we deze code testen. Voor nu krijg je als het werkt de tekst 'schematic placed' te zien als je het commando uitvoert.

### Schematic toevoegen

Download het volgende schematic van een huis: [house.mts](https://github.com/tim-vh/game-dev/tree/main/examples/luanti/mods/schematics/schems/house.mts). Maak een map 'schems' aan in de map van de mod en plaats daar het bestand in.

### Schematic plaatsen

Als eerst moeten we in de code de locatie van het schematic bepalen. Dit kan met de volgende code:

```lua
local modpath = core.get_modpath(core.get_current_modname())
local schematic_path = modpath .. "/schems/house.mts"
```

plaats deze code bovenaan het script in init.lua.

Vervolgens kunnen we met `core.place_schematic()` het schematic in de game plaatsen. Zet de volgende code in de code voor het uitvoeren van het chat commando:

```lua
    local pos = { x = 10, y = 9, z = 10 }

    core.place_schematic(
            pos,
            schematic_path,
            0
        )
```

Deze code doet het volgende:

- pos: de plek waar het schematic wordt geplaatst, in dit geval op x = 10, y = 9, z = 10
- schematic_path: het pad naar het bestand van het schematic
- 0: rotatie, 0 is geen rotatie. Gebruik '90' , '180', '270' of 'random' om het schematic te laten draaien

## Schematic maken

Om een schematic te maken gaan we weer een chatcommando toevoegen:

```lua
core.register_chatcommand("create", {
    func = function(name, param)

        return true, "Schematic created"
    end
})
```

Deze keer gebruiken we het commando 'create'. Plaats in het commando de volgende code om een schematic te maken:

```lua
        local pos1 = { x = 1, y = 9, z = 1 }
        local pos2 = { x = 10, y = 19, z = 10 }
        local filename = core.get_worldpath() .. '/test.mts'

        core.create_schematic(pos1, pos2, nil, filename, nil)
```

Hiermee maken we een schematic die begint op positie x = 1, y = 9, z = 1 en die 10 x 10 x 10 blokken groot is. Het bestand wordt opgeslagen in de map van de wereld die op dat moment gespeeld is. Deze is bijvoorbeeld in de luanti map te vinden in 'worlds/world1' met de naam test.mts.

Het complete voorbeeld is hier te vinden: [https://github.com/tim-vh/game-dev/blob/main/examples/luanti/mods/schematics/init.lua](https://github.com/tim-vh/game-dev/blob/main/examples/luanti/mods/schematics/init.lua)