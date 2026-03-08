---
title:  "Luanti paaseieren game"
date:   2026-03-08 09:31:27 +0200
categories: luanti
excerpt: Zoek paaseieren in luanti
header:
  teaser: /assets/teasers/TODO.png
---

## Item registreren

```lua
core.register_craftitem("easter:white_egg",{
    description = "Egg",
    inventory_image = "white_egg.png",
})
```

## Item in het spel plaatsen

```lua
core.after(10, function()

    core.spawn_item(vector.new(1, 10, 1),"easter:white_egg")
    
    core.chat_send_all("eggs spawned!")
end)
```

## Item op een random plek plaatsen

```lua
core.after(10, function()
    local x = math.random(-100, 100)
    local y = 20
    local z = math.random(-100, 100)

    core.spawn_item(vector.new(x, y, z),"easter:white_egg")
    
    core.chat_send_all("eggs spawned!")
end)
```

## Meerdere items plaatsen

```lua
core.after(10, function()
    for i = 1, 500, 1 do
        local x = math.random(-100, 100)
        local y = 20
        local z = math.random(-100, 100)

        core.spawn_item(vector.new(x, y, z),"easter:white_egg")
    end
    
    core.chat_send_all("eggs spawned!")
end)
```

## Scores toevoegen

- Scores mod toevoegen aan game
- Voeg de scores mod toe aan depends in mod.conf

```lua
core.register_craftitem("easter:white_egg",{
    description = "Egg",
    inventory_image = "white_egg.png",
    on_pickup = function(itemstack, picker, pointed_thing, time_from_last_punch)
        if picker:is_player() then
            scores.change_score(picker:get_player_name(), 1)
        end

        return core.item_pickup(itemstack, picker, pointed_thing, time_from_last_punch)
    end,

    on_drop = function (itemstack, dropper, pos)        
        if dropper:is_player() then
            scores.change_score(dropper:get_player_name(), -1)
        end

        return core.item_drop(itemstack, dropper, pos)
    end
})
```

## Spel verder uitbreiden

Voeg meerdere soorten items toe

Items die meer punten scoren
Items die zeldzamer zijn
Items met speciale effecten