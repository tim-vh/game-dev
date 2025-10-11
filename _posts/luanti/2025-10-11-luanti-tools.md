---
layout: single
title:  "Luanti tools"
date:   2025-10-11 09:00:00 +0200
categories: luanti
excerpt: Tools toevoegen aan een game
header:
  teaser: /assets/teasers/luanti-tool.png
---

Leer hoe je tools toevoegt aan je Luanti-game. In deze tutorial maak je een eigen tool, voeg je textures toe en pas je groepen aan voor verschillende items. Ook zie je hoe je de handen van de speler kunt aanpassen. Deze tutorial gebruikt de mods gemaakt in de vorige tutorials:
- [Luanti minimal game](/luanti/2025/04/14/luanti-minimal-game)
- [Luanti biome](/luanti/2025/08/09/luanti-biome.html)

## Mod toevoegen

Maak een nieuwe map aan in de `mods` folder van Luanti, bijvoorbeeld `tools`. Open deze map in VsCode en gebruik het commando `Luanti Tools: New Mod Project` om een nieuwe mod te starten. Je kunt eventueel dependencies toevoegen in de `mod.config` als je andere mods nodig hebt.

## Texture toevoegen

Plaats een afbeelding van je tool, bijvoorbeeld `hammer.png`, in de `textures` map van je mod. Deze afbeelding wordt gebruikt als icoon in de inventaris en als wield-image.

## Tool toevoegen

Registreer een nieuwe tool in je mod, bijvoorbeeld een hamer. Je geeft aan welke texture gebruikt wordt en welke groepen de tool kan beïnvloeden. In het voorbeeld hieronder kan de hamer zowel crumbly als cracky nodes breken.

```lua
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
```

- `inventory_image`: De texture die je eerder hebt toegevoegd.
- `tool_capabilities`: Hier geef je aan welke groepen de tool kan beïnvloeden en hoe snel.

## Groups toevoegen

Je kunt groepen aanpassen van bestaande items zodat ze door bepaalde tools bewerkt kunnen worden. In het voorbeeld hieronder krijgt gras de groep `crumbly` en steen de groep `cracky`.

```lua
core.override_item("grass_biome:grass", {
     groups = { crumbly=1, level = 1 }
})

core.override_item("basic:stone" , {
    groups = { cracky=2, level = 2 }
})
```

- `groups`: Hiermee geef je aan tot welke groep een item behoort en welk level het heeft.

## Handen override

Je kunt de standaard handen van de speler aanpassen zodat ze bijvoorbeeld een andere texture krijgen of andere eigenschappen hebben. In het voorbeeld hieronder krijgen de handen een eigen beschrijving en wield-image.

```lua
core.override_item("", {
    description = "Hands",

    wield_image = "hands.png",
    tool_capabilities = {
        groupcaps = {
            crumbly = { times = { [1]=1.5 }},
        },
    },
})
```

- `wield_image`: De texture van de handen.
- `tool_capabilities`: Hier kun je instellen wat de handen kunnen bewerken en hoe snel.

## Resultaat

Als je de game opnieuw opstart kan je nu grass 'minen' met je handen. Om de hamer te krijgen kun je de volgende commando's uitvoeren ( dit kan met de '/' toets):
```
/grantme give
```

```
/giveme tools:hammer
```

Voorbeeldcode: [https://github.com/tim-vh/game-dev/tree/main/examples/luanti/mods/tools](https://github.com/tim-vh/game-dev/tree/main/examples/luanti/mods/tools)

![Luanti biome](/assets/images/luanti/luanti-tool.png)