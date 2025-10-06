
core.override_item("grass_biome:grass", {
     groups = { crumbly=1, level = 1 }
})

core.override_item("basic:stone" , {
    groups = { cracky=2, level = 2 }
})

core.register_tool("tools:hammer", {
    inventory_image = "hammer.png",
    tool_capabilities = {
        groupcaps = {
            crumbly = {
                maxlevel = 1,
                uses = 20,
                times = { [1]=1   }
            },
            cracky = {
                maxlevel = 2,
                uses = 20,
                times = { [1]=1, [2]=1.5 }
            }
        },
    },
})

core.override_item("", {
    description = "Hands",

    wield_image = "hands.png",
    tool_capabilities = {
        groupcaps = {
            crumbly = { times = { [1]=1.5 }},
        },
    },
})