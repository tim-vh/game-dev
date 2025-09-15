core.register_node("basic:stone", {
    description = "stone",
    tiles = {"stone.png"},
    is_ground_content = true,
    groups = {cracky=3, stone=1}
})

core.register_node("basic:water", {
    description = "water",
    tiles = {"water.png"},
    is_ground_content = true,
    groups = {}
})

core.register_node("basic:river_water", {
    description = "river water",
    tiles = {"river_water.png"},
    is_ground_content = true,
    groups = {}
})

core.register_alias("mapgen_stone", "basic:stone")
core.register_alias("mapgen_water_source", "basic:water")
core.register_alias("mapgen_river_water_source", "basic:river_water")
