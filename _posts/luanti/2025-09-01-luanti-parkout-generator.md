---
layout: single
title:  "Luanti parkour generator"
date:   2025-09-01 11:47:00 +0200
categories: luanti
excerpt: Genereer een parkour in Luanti.
header:
  teaser: /assets/images/luanti/luanti-parkour.png
---

Maak een mod in Luanti die automatisch een parkour genereert wanneer je het chatcommando `start` gebruikt.

## Benodigdheden

-   [Visual Studio Code](https://code.visualstudio.com/)
-   [Luanti Tools extension](https://marketplace.visualstudio.com/items/?itemName=GreenXenith.minetest-tools)

## Mod toevoegen

Voeg een nieuwe map toe in de `mods` map van je game, bijvoorbeeld `parkour`. Open deze map in VSCode en voer het commando `Luanti Tools: New Mod Project` uit.

Maak een `mod.conf` bestand aan met de volgende inhoud:

```
name = parkour
description = Genereert een parkour
depends = default
optional_depends =
```

## Chatcommando toevoegen

Voeg in `init.lua` het volgende chatcommando toe. Hiermee kun je het parkour genereren door `/start` in te typen in de chat.

```lua
core.register_chatcommand("start", {
    func = function(name, param)
        -- Parkour genereren (zie volgende stap)
        return true, "Game started!"
    end
})
```

## Parkour genereren

Vervang de commentaarregel `-- Parkour genereren` door onderstaande code. Dit voorbeeld maakt een eenvoudig pad van stenen blokken:

```lua
local x = 0
local y = 1
local z = 1

for i=1, 20 do
    core.set_node({x = x, y = y, z = z}, {name = "default:stone"})
    z = z + 1
end
```

Je kunt variaties toevoegen, zoals trappen of gaten, bijvoorbeeld:

### Trap omhoog
```lua
for i=1, 10 do
    core.set_node({x = x, y = y, z = z}, {name = "default:stone"})
    z = z + 1
    y = y + 1
end
```

### Pad met gaten
```lua
for i=1, 10 do
    core.set_node({x = x, y = y, z = z}, {name = "default:stone"})
    z = z + 3
end
```

### Pad met random gaten
```lua
for i=1, 10 do
    local randomx = math.random(-2, 2)
    core.set_node({x = x + randomx, y = y, z = z }, {name = "default:stone"})
    z = z + 2
end
```

### Slangvormig pad
```lua
for i=1, 50 do
    if z % 5 == 0 then
        if x < 0 then
            while x < 5 do
                core.set_node({x = x, y = y, z = z}, {name = "default:stone"})
                x = x + 1
            end
        else
            while x > -5 do
                core.set_node({x = x, y = y, z = z}, {name = "default:stone"})
                x = x - 1
            end
        end
    end
    core.set_node({x = x, y = y, z = z}, {name = "default:stone"})
    z = z + 1
end
```

## Lava genereren

Wil je het parkour uitdagender maken? Voeg lava toe onder het pad door de volgende code toe te voegen aan het begin van het `start` chatcommando:

```lua
for x=-10,10 do
    for z=-10,200 do
        core.set_node({x = x, y = 1, z = z}, {name = "default:lava_source"})
    end
end
```

## Speler respawnen

Laat de speler bij het begin van het parkour respawnen:

```lua
core.register_on_respawnplayer(function(player)
    player:set_pos({x = 0, y = 2, z = 0})

    -- Kijk is de richting van het parkour
    player:set_look_horizontal(0)
    player:set_look_vertical(0)

    -- Zet Hp naar max
    player:set_hp(player:get_properties().hp_max)
    
    return true -- Disable default spawn algorithm
end)
```

Om de speler direct te respawnen na het starten van het parkour kun je de volgende code toevoegen aan het `start` chatcommando:

```lua
core.set_node({x = 0, y = 1, z = 0 }, {name = "default:stone"})
local player = core.get_player_by_name(name)
player:respawn()
```

## Start je parkour

Start je game in Luanti, typ `/start` in de chat en probeer het parkour uit!

> 💡Tip: Het genereren van het parkour werkt het beste als de wereld helemaal vlak is. Om een vlakke wereld te krijgen kun je  de `flat` mapgen kiezen of een mod installeren die de wereld plat maakt.

Voorbeeldcode: [https://github.com/tim-vh/game-dev/tree/main/examples/luanti/mods/parkour](https://github.com/tim-vh/game-dev/tree/main/examples/luanti/mods/parkour)

![Luanti parkour](/assets/images/luanti/luanti-parkour.png)