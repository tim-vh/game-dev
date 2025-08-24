---
layout: single
title:  "Simpele speler besturing in scratch"
date:   2025-04-21 10:46:00 +0200
categories: scratch
tags: Scratch besturing
excerpt: Laat de speler bewegen met de pijltjestoetsen.
header:
  teaser: /assets/images/scratch/scratch-simpele-besturing.png
---

Laat de speler bewegen met de pijltjestoetsen.

## Naar rechts bewegen

Voeg een gebeurtenis toe en richt de speler naar 90 graden (rechts). Laat de speler vervolgens 10 stappen nemen.

```scratch
wanneer [pijltje rechts v] is ingedrukt
richt naar (90) graden
neem (10) stappen
```

## Andere richtingen toevoegen

Om naar rechts te bewegen:

```scratch
wanneer [pijltje rechts v] is ingedrukt
richt naar (-90) graden
neem (10) stappen
```

Om omhoog te bewegen:
```scratch
wanneer [pijltje omhoog v] is ingedrukt
richt naar (0) graden
neem (10) stappen
```

Om omlaag te bewegen:
```scratch
wanneer [pijltje omlaag v] is ingedrukt
richt naar (180) graden
neem (10) stappen
```

## Draaistijl aanpassen

Om ervoor te zorgen dat de sprite niet op z'n kop komt te staan voegen we als laatste de volgende code toe:

```scratch
wanneer op @greenFlag wordt geklikt
maak draaistijl [link-rechts v]
```

## Voorbeeld

<iframe src="https://scratch.mit.edu/projects/1163135045/embed" allowtransparency="true" width="485" height="402" frameborder="0" scrolling="no" allowfullscreen></iframe>
[Bekijk op scratch](https://scratch.mit.edu/projects/1163135045/editor/)