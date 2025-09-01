---
layout: single
title:  "Luanti parkour generator"
date:   2025-09-01 11:47:00 +0200
categories: luanti
excerpt: Genereer een parkour in Luanti.
header:
  teaser: /assets/images/luanti/TODO.png
---

## Voeg een nieuwe mod toe

```
name = parkour
description = 
depends = default
optional_depends = 
```

## Chatcommando toevoegen

```lua
core.register_chatcommand("start", {
    func = function(name, param)
        return true, "Game started!"
    end
})
```

## Genereer lava

```lua
    core.register_chatcommand("start", {
        func = function(name, param)

        -- Generate lava
        for x=-10,10
        do
            for z=-10,200
            do
                core.set_node({x = x, y = 1, z = z}, {name = "default:lava_source"})
            end

        end

        return true, "Game started!"
    end
})
```

## Speler respawnen

```lua
core.register_on_respawnplayer(function(player)
    player:set_pos({x = 0, y = 2, z = 0})
    
    player:set_look_horizontal(0)    
    player:set_look_vertical(0)

    player:set_hp(player:get_properties().hp_max)

    return true -- Disable default spawn algorithm
end)
```

```lua
    -- spawnpoint
    core.set_node({x = 0, y = 1, z = 0 }, {name = "default:stone"})

    local player = core.get_player_by_name(name)
    player:respawn()
```

## Parkour genereren

### Variabelen om positie pad bij te houden

```lua
local x = 0
local y = 1
local z = 1
```

### Pad rechtdoor

```lua
for i=1, 10 do
    core.set_node({x = x, y = y, z = z}, {name = "default:stone"})
    z = z + 1
end
```

### Trap

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
do
    core.set_node({x = x, y = y, z = z }, {name = "default:stone"})
    z = z + 3
end
```

### Pad met random gaten

```lua
for i=1, 10 do
do
    local randomx = math.random(-2, 2)
    core.set_node({x = x + randomx, y = y, z = z }, {name = "default:stone"})
    z = z + 2
end
```

### Slangvormig pas

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