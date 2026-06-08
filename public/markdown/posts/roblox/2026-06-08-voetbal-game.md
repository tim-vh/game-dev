---
layout: single
title:  "Roblox voetbal game"
date:   2026-06-08 14:19:00 +0200
categories: roblox
excerpt: Maak een voetbal game
header:
  teaser: /assets/teasers/roblox-voetbal-game.png
---

Deze tutorial laat stap-voor-stap zien hoe je een eenvoudige voetbalgame maakt in Roblox Studio: een bal die spelers kunnen wegschieten, een goal en een bewegend obstakel.

## Parts toevoegen

Maak met parts een goal en een bal:

![voetbal parts toevoegen](/assets/images/roblox/voetbal-parts.png)

## Bal wegschieten

### Speler invoer toevoegen

Voeg een 'local script' toe in de map 'StarterGui' met de volgende code:

```lua
local UserInputService = game:GetService("UserInputService")

UserInputService.InputBegan:Connect(function(input)
	if input.KeyCode == Enum.KeyCode.F then
		print("schiet") -- hier komt straks de code om de bal weg te schieten
	end
end)
```

### Remote event toevoegen

Voeg een 'remote event' toe in de map 'ReplicatedStorage' met de naam `SchietRemoteEvent`. Voeg daarna een script toe in de map 'ServerScriptService' met de volgende code:

```lua
local SchietRemoteEvent = game.ReplicatedStorage:WaitForChild("SchietRemoteEvent")
local bal = workspace.Bal

SchietRemoteEvent.onServerEvent:Connect(function()
	local direction = Vector3.new(100,0,0)
	bal:ApplyImpulse(direction * 2)
end)
```

### Event activeren door speler invoer

Pas het script in de map 'StarterGui' aan zodat het remote event wordt geactiveerd en de bal wordt weggeschoten:

```lua
local UserInputService = game:GetService("UserInputService")
local SchietRemoteEvent = game.ReplicatedStorage:WaitForChild("SchietRemoteEvent") -- haal het SchietRemoteEvent op

UserInputService.InputBegan:Connect(function(input)
	if input.KeyCode == Enum.KeyCode.F then
		print("schiet")
		SchietRemoteEvent:FireServer() -- activeer het event op de server
	end
end)
```

## Bal resetten

Pas het script in de map 'ServerScriptService' op de volgende manier aan:

```lua
local SchietRemoteEvent = game.ReplicatedStorage:WaitForChild("SchietRemoteEvent")
local bal = workspace.Bal
local balBeginpositie = bal.Position -- sla de beginpositie van de bal op

SchietRemoteEvent.onServerEvent:Connect(function()
	local direction = Vector3.new(100,0,0)
	bal:ApplyImpulse(direction * 2)
	wait(3) -- wacht 3 seconden
	bal.Position = balBeginpositie -- breng de bal naar de beginpositie
	bal.AssemblyLinearVelocity = Vector3.new(0,0,0) -- zet de snelheid van de bal op 0
	bal.AssemblyAngularVelocity = Vector3.new(0,0,0) -- zet de draaisnelheid van de bal op 0
end)
```

## Obstakel toevoegen

Voeg een part toe voor het goal:

![voetbal obstakel toevoegen](/assets/images/roblox/voetbal-obstakel.png)

Klik op het 'plusje' achter het obstakel part en voeg een script toe met de volgende code:

```lua
local obstakel = script.Parent
local paalLinks = workspace.PaalLinks
local paalRechts = workspace.PaalRechts
local speed = 0.5
local obstakelX = obstakel.Position.X
local obstakelY = obstakel.Position.Y


while wait() do
	if obstakel.Position.Z > paalRechts.Position.Z then
		speed = -0.5
	elseif obstakel.Position.Z < paalLinks.Position.Z then
		speed  = 0.5
	end

	obstakel.Position = Vector3.new(obstakelX, obstakelY, obstakel.Position.Z + speed)
end
```
