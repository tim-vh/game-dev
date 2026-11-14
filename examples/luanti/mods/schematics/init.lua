local modpath = core.get_modpath(core.get_current_modname())
local schematic_path = modpath .. "/schems/house.mts"

core.register_chatcommand("place", {
    func = function(name, param)

        local pos = { x = 10, y = 9, z = 10 }

        core.place_schematic(
                pos,
                schematic_path,
                0
            )

        return true, "Schematic placed"
    end
})

core.register_chatcommand("create", {
    func = function(name, param)
        local pos1 = { x = 1, y = 9, z = 1 }
        local pos2 = { x = 10, y = 19, z = 10 }
        local filename = core.get_worldpath() .. '/test.mts'

        core.create_schematic(pos1, pos2, nil, filename, nil)

        return true, "Schematic created"
    end
})