core.register_node("grass_decoration:plant", {
    drawtype = "plantlike",
    tiles = {"plant.png"},
    walkable = false
})

core.register_decoration({
    deco_type = "simple",
    place_on = {"grass_biome:grass"},
    biomes = {"grasslands"},
    fill_ratio = 0.1,
    decoration = "grass_decoration:plant",
})
