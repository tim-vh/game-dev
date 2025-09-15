core.register_node("basic:stone", {
    description = "stone",
    tiles = {"stone.png"}
})

core.register_node("basic:water", {
    description = "water",
    tiles = {"water.png"}
})

core.register_node("basic:river_water", {
    description = "river water",
    tiles = {"river_water.png"}
})

core.register_alias("mapgen_stone", "basic:stone")
core.register_alias("mapgen_water_source", "basic:water")
core.register_alias("mapgen_river_water_source", "basic:river_water")
