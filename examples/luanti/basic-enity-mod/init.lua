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

core.register_chatcommand("spawn", {
    func = function(name, param)
        local player = core.get_player_by_name(name)
        local position = player:get_pos()

        position = vector.add(position, vector.new(2, 0.5, 0))
        core.add_entity(position, "basicentity:block")
    end,
})
