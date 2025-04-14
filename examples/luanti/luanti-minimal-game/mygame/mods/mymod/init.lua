core.register_node("mymod:stone", {
    description = "stone",
    tiles = {"stone.png"},
    is_ground_content = true,
    groups = {cracky=3, stone=1}
})

core.register_node("mymod:water", {
    description = "water",
    tiles = {"water.png"},
    is_ground_content = true,
    groups = {}
})

core.register_node("mymod:river_water", {
    description = "river water",
    tiles = {"river_water.png"},
    is_ground_content = true,
    groups = {}
})

core.register_alias("mapgen_stone", "mymod:stone")
core.register_alias("mapgen_water_source", "mymod:water")
core.register_alias("mapgen_river_water_source", "mymod:river_water")
