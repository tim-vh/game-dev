core.register_chatcommand("start", {
    func = function(name, param)

        -- Genereer lava
        for x = -10, 10 do
            for z = -10, 200 do
                core.set_node({ x = x, y = 1, z = z }, { name = "default:lava_source" })
            end
        end

        local x = 0
        local y = 1
        local z = 1

        -- Genereer pad
        for i = 1, 20 do
            core.set_node({ x = x, y = y, z = z }, { name = "default:stone" })
            z = z + 1
        end

        -- Genereer trap
        for i = 1, 10 do
            core.set_node({ x = x, y = y, z = z }, { name = "default:stone" })
            z = z + 1
            y = y + 1
        end

        -- Genereer pad met gaten
        for i = 1, 10 do
            core.set_node({ x = x, y = y, z = z }, { name = "default:stone" })
            z = z + 3
        end

        -- Genereer pad met random gaten
        for i=1, 10 do
            local randomx = math.random(-2, 2)
            core.set_node({x = x + randomx, y = y, z = z }, {name = "default:stone"})
            z = z + 2
        end

        -- Genereer slangvormig pad
        for i = 1, 50 do
            if z % 5 == 0 then
                if x < 0 then
                    while x < 5 do
                        core.set_node({ x = x, y = y, z = z }, { name = "default:stone" })
                        x = x + 1
                    end
                else
                    while x > -5 do
                        core.set_node({ x = x, y = y, z = z }, { name = "default:stone" })
                        x = x - 1
                    end
                end
            end
            core.set_node({ x = x, y = y, z = z }, { name = "default:stone" })
            z = z + 1
        end

        -- Maak stone node op respawn punt
        core.set_node({ x = 0, y = 1, z = 0 }, { name = "default:stone" })

        -- Respawn speler
        local player = core.get_player_by_name(name)
        player:respawn()



        return true, "Game started!"
    end
})


core.register_on_respawnplayer(function(player)
    player:set_pos({ x = 0, y = 2, z = 0 })

    -- Kijk is de richting van het parkour
    player:set_look_horizontal(0)
    player:set_look_vertical(0)

    -- Zet Hp naar max
    player:set_hp(player:get_properties().hp_max)

    return true -- Disable default spawn algorithm
end)
