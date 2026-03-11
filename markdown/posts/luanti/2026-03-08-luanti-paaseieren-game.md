---
title:  "Luanti paaseieren game"
date:   2026-03-08 09:31:27 +0200
categories: luanti
excerpt: Zoek paaseieren in luanti
header:
  teaser: /assets/teasers/luanti-easter.png
---

In deze tutorial bouwen we stap voor stap een simpel paaseierenspel in Luanti.
Je leert een nieuw item registreren, het in de wereld te laten verschijnen, willekeurige locaties gebruiken en
een scorebord toevoegen. Aan het einde vind je ideeën om het spel verder uit te breiden.

## Mod toevoegen

Voeg een nieuwe mod toe met de naam `easter` in de mods folder van luanti. Hiervoor kun je eventueel het commando `Luanti Tools: New Mod Project` gebruiken in visual studio code. Om de mod te gebruiken selecteer je in de Luanti game een wereld en klik je vervolgens op de `Select Mods` knop. Vink hier de mod `easter` aan door op `enabled` the klikken en klik daarna op de `Save` knop.

## Item registreren

Eerst registreren we een nieuw item in de luanti game. Plaats deze code in `init.lua` van je `easter` mod. Voeg een afbeelding `white_egg.png` toe in de `textures` map. Deze afbeelding wordt gebruikt om het item in de game te tonen.

```lua
core.register_craftitem("easter:white_egg",{
    description = "Egg",
    inventory_image = "white_egg.png",
})
```

Herstart het spel en controleer of je het item aan de game is toegevoegd. Dit kan door het het aan jezelf te geven met het `/give`/ command. Dit kan op de volgende manier:

- Geef jezelf rechten om het commando uit te voeren met `/grantme give` (of `grantme all` om alle rechten te krijgen)
- Geeft jezelf het item met `/giveme easter:white_egg`

Als het goed is heb je nu het item in je inventory.

## Item in het spel plaatsen

Met `core.spawn_item` kun je het ei op een vaste positie laten verschijnen. Met onderstaande code wordt er na 10 seconden dat het spel is gestart een ei toegevoegd op de locatie x: 1, y: 10, z:1.


```lua
core.after(10, function()

    core.spawn_item(vector.new(1, 10, 1),"easter:white_egg")
    
    core.chat_send_all("eggs spawned!")
end)
```

Start het spel opnieuw en controleer of het ei is toegevoegd op de aangegeven plek. Als je in het spel op de 'F5' toets druk kun je zien op welke locatie je bent. 

## Item op een random plek plaatsen

Om het zoeken spannend te maken gebruiken we willekeurige coördinaten. Met `math.random` kun je een willekeurig getal genereren tussen de opgegeven grenzen. In dit voorbeeld laten we een ei op een hoogte van 20 spawnen en willekeurig binnen een 200×200 blokken veld.

```lua
core.after(10, function()
    local x = math.random(-100, 100)
    local y = 20
    local z = math.random(-100, 100)

    core.spawn_item(vector.new(x, y, z),"easter:white_egg")
    
    core.chat_send_all("eggs spawned!")
end)
```

## Meerdere items plaatsen

Een ei is moeilijk te vinden dus is het handig als we er voor zorgen dat er meerdere eieren geplaatst worden. Dit kan met `for` waarmee we de eerdere code meerdere keren kunnen herhalen.

```lua
core.after(10, function()
    for i = 1, 500, 1 do
        local x = math.random(-100, 100)
        local y = 20
        local z = math.random(-100, 100)

        core.spawn_item(vector.new(x, y, z),"easter:white_egg")
    end
    
    core.chat_send_all("eggs spawned!")
end)
```

Door de `for` worden er nu 500 eieren toegevoegd aan het spel. Test de code uit door het spel opnieuw op te starten.

## Scores toevoegen

Gebruik de bestaande `scores` mod om punten bij te houden door deze mod via `Select mods` -> `Find more mods` te installeren. Voeg `scores` toe aan de depends-lijst in `mod.conf` van je mod:

```text
depends = scores
```

Vervolgen voeg je functies toe aan het ei zodat spelers punten krijgen wanneer ze het oppakken en verliezen wanneer ze het laten vallen:

```lua
core.register_craftitem("easter:white_egg",{
    description = "Egg",
    inventory_image = "white_egg.png",
    on_pickup = function(itemstack, picker, pointed_thing, time_from_last_punch)
        if picker:is_player() then
            scores.change_score(picker:get_player_name(), 1)
        end

        return core.item_pickup(itemstack, picker, pointed_thing, time_from_last_punch)
    end,

    on_drop = function (itemstack, dropper, pos)        
        if dropper:is_player() then
            scores.change_score(dropper:get_player_name(), -1)
        end

        return core.item_drop(itemstack, dropper, pos)
    end
})
```

De functie bij `on_pickup` wordt uitgevoegd wanneer een item wordt opgepakt. In de functie kijken we eerst of het item door een speler wordt opgepakt. Als dat zo is verhogen we de score met 1. Daarna wordt het opgepakte item toegevoegd aan de inventory van de speler. Bij `on_drop` wordt hetzelfde gedaan maar verliest de speler een punt.

## Items uit het spel verwijderen

Eventueel kun je alle items uit het spel verwijderen wanneer het is gestart door de volgende code toe te voegen:

```lua
core.after(1, function()
    core.clear_objects({mode = "quick"})
end)
```

## Spel verder uitbreiden

De basis staat nu, maar er zijn talloze manieren om je spel leuker en uitdagender te maken:

1. **Voeg meerdere soorten items toe**
   - Denk aan gekleurde eieren of gouden eieren.
   - Gebruik verschillende textures en beschrijvingen.
2. **Items die meer punten scoren**
   - Laat zeldzamere eieren twee of drie punten geven.
   - Pas de `on_pickup` callback aan om verschillende waarden te gebruiken.
3. **Items die zeldzamer zijn**
   - Gebruik `math.random` om bepaalde eieren vaker of minder vaak toe te voegen.
4. **Items met speciale effecten**
   - Verander het aantal levens (hp) van de speler met `picker:set_hp(picker:get_hp() - 1)`
   - Pas de snelheid van de speler aan met `picker:set_physics_override({ speed = 2 })`.
   - Pas aan hoe hoog een speler kan springen met `picker:set_physics_override({ jump = 2 })`.
   - Pas de zwaartekracht voor een speler aan met `picker:set_physics_override({ gravity = 0.5 })`.
   - Om effecten weer terug te draaien na een bepaalde tijd kun je `core.after` gebruiken.

Veel plezier met bouwen en laat de spelers weten waar de beste verstopplekken zijn!

Voorbeeldcode: [https://github.com/tim-vh/game-dev/tree/main/examples/luanti/mods/easter](https://github.com/tim-vh/game-dev/tree/main/examples/luanti/mods/easter)

![Luanti easter eggs](/assets/images/luanti/luanti-easter.png)