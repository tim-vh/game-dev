---
layout: single
title:  "Luanti minimal game"
date:   2025-04-14 09:34:27 +0200
categories: luanti
excerpt: Maak een basis game in Luanti die werkt met de standaard mapgen.
header:
  teaser: /assets/teasers/luanti-minimal-game.png
---

Maak een basis game in Luanti die werkt met de standaard mapgen.

## Benodigdheden

-   [Luanti game ](https://www.luanti.org/en/downloads/)
-   [Visual studio code](https://https://code.visualstudio.com/) (of een andere code editor)

## Data directory openen

Om een game of een mod toe te voegen aan Luanti moeten we bestanden en mappen toevoegen aan de Luanti 'User data directory'. Om dit de doen gaan we deze directory openen met Visual studio code. De locatie van deze map kun je vinden door Luanti op te starten en te gaan naar het tabblad 'About'. Klik vervolgens op de knop 'Open User Data Directory'.

![Open data directory](/assets/images/luanti/luanti-open-user-data-directory.png)

Kijk (of kopieer) wat het pad is van de directoy, bijvoorbeeld `C:\Users\Gebruiker\AppData\Roaming\Minetest`. Open vervolgens Visual studio code en open de map (File > Open folder...). In de file explorer zie je dan de volgende bestandsstructuur:

![Open data directory](/assets/images/luanti/luanti-vscode-user-directory.png)

## Game toevoegen

Voeg een map 'games' toe als deze er nog niet is. Voeg daarna in de map 'games' een map toe met als naam de naam van de game, bijvoorbeeld 'minimal'. Plaats hierin een bestand met de naam 'game.conf' en zit hierin de volgende inhoud:

```
name = Minimal
author = 
description = 
```

Start luanti opnieuw op en kijk of de game is toegevoegd aan de onderin in de 'Start Game' tab. 

## Mod toevoegen

voeg een map 'mods' toe aan de map van de game. Voeg daarna in de map 'mods' een map toe met als naam de naam van de mod, bijvoorbeeld 'basic'. Plaats hierin een bestand met de naam 'mod.conf' en zit hierin de volgende inhoud:

```
name = basic
description = 
depends = 
```

Voeg daarna een bestand 'init.lua' toe aan de map van de mod. Hierin kan de code voor de mod worden toegevoegd. Voeg daarna een map 'textures' toe aan de mod map. Hierin kunnen we "afbeeldingen" plaatsen voor de mod.


## Nodes registeren

De standaard map generators hebben drie verschillende nodes nodig. Dit zijn een 'stone', een 'water' en 'river water' node. Voeg in de `textures` map van de mod voor elk node type een texture toe, bijvoorbeeld een .png afbeelding. 

Registreer vervolgens de nodes in de `init.lua` file:

```lua
core.register_node("basic:stone", {
    description = "stone",
    tiles = {"stone.png"},
})

core.register_node("basic:water", {
    description = "water",
    tiles = {"water.png"},
})

core.register_node("basic:river_water", {
    description = "river water",
    tiles = {"river_water.png"},
})
```

> ℹ️ Let op dat de prefix (in dit geval `basic:`) dezelfde naam moet hebben als de naam van de mod.

Voeg vervolgens aliassen toe zodat mapgen weet welke nodes die kan gebruiken:

```lua
core.register_alias("mapgen_stone", "basic:stone")
core.register_alias("mapgen_water_source", "basic:water")
core.register_alias("mapgen_river_water_source", "basic:river_water")
```

Nu kun je een nieuwe game starten in Luanti

Voorbeeldcode: [https://github.com/tim-vh/game-dev/tree/main/examples/luanti/games/minimal](https://github.com/tim-vh/game-dev/tree/main/examples/luanti/games/minimal)

![Luanti minimal game](/assets/images/luanti/luanti-minimal-game.png)