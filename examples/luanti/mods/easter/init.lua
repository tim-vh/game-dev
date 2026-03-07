
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


core.register_craftitem("easter:red_egg",{
    description = "Egg",
    inventory_image = "red_egg.png",
    on_pickup = function(itemstack, picker, pointed_thing, time_from_last_punch)
        if picker:is_player() then
            scores.change_score(picker:get_player_name(), 3)
        end

        return core.item_pickup(itemstack, picker, pointed_thing, time_from_last_punch)
    end,

    on_drop = function (itemstack, dropper, pos)        
        if dropper:is_player() then
            scores.change_score(dropper:get_player_name(), -3)
        end

        return core.item_drop(itemstack, dropper, pos)
    end
})

core.register_craftitem("easter:blue_egg",{
    description = "Egg",
    inventory_image = "blue_egg.png",
    on_pickup = function(itemstack, picker, pointed_thing, time_from_last_punch)
        if picker:is_player() then
            scores.change_score(picker:get_player_name(), 10)
        end

        return core.item_pickup(itemstack, picker, pointed_thing, time_from_last_punch)
    end,

    on_drop = function (itemstack, dropper, pos)        
        if dropper:is_player() then
            scores.change_score(dropper:get_player_name(), -10)
        end

        return core.item_drop(itemstack, dropper, pos)
    end
})

core.after(1, function()
    core.clear_objects({mode = "quick"})
end)

core.after(10, function()
    for i = 1, 500, 1 do
        local x = math.random(-400, 400)
        local y = 20
        local z = math.random(-400, 400)

        local egg_type = math.random(1, 10)

        if egg_type == 1 then
            core.spawn_item(vector.new(x, y, z),"easter:blue_egg")
        elseif egg_type < 5 then
            core.spawn_item(vector.new(x, y, z),"easter:red_egg")
        else
            core.spawn_item(vector.new(x, y, z),"easter:white_egg")
        end
    end
    
    core.chat_send_all("eggs spawned!")
end)