core.register_node("grass_biome:grass", {
    description = "grass",
    tiles = {"grass.png"},
})

core.register_biome({
    name = "grasslands",
    node_top = "grass_biome:grass",
    depth_top = 1,
    heat_point = 50,
    humidity_point = 50,
    weight = 1
})