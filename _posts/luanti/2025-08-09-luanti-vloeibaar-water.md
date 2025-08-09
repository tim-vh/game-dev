---
layout: single
title:  "Luanti vloeibaar water"
date:   2025-08-09 11:11:00 +0200
categories: Luanti
---

## Texture toevoegen

Voeg een afbeelding toe aan de `textures` map van je mod, bijvoorbeeld `water.png`. Dit wordt de texture van je waterblok.

## Water node registreren

Registreer het waterblok in je `init.lua` bestand:

```lua
core.register_node("mymod:water", {
    description = "water",
    tiles = {"water.png"},
    is_ground_content = false,
    drawtype = "liquid",
    walkable = false,
    pointable = false,
    diggable = false,
    buildable_to = true,
    liquidtype = "source",
    liquid_alternative_flowing = "mymod:water",
	liquid_alternative_source = "mymod:water"
})
```

- drawtype = "liquid" zorgt ervoor dat het blok als vloeistof wordt weergegeven.
- liquidtype = "source" maakt het een bronblok.
- Met walkable = false kun je erdoorheen lopen.
- Met buildable_to = true kun je andere blokken in het water plaatsen.

## Resultaat
Start je game opnieuw. Waterblokken gedragen zich nu als vloeibaar water.