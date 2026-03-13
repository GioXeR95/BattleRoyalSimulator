# BattleRoyalSimulator
This project will allow people to create their own battle royal games.

# The idea
Currently the software is just an idea.
We plan to use NodeJs to make a singlepage webapp.
The simulator should allow to import custom rules about the "world" ambient.

The game will work in 3 parts for each day:
- Day
- Night
- Resume

The world should define Events with different types:
- Fight
- Gather Resource
- Friendly
- Ambiental

Each Event will also specify how many player will be involved and the stat required for the Challenge (if one is needed)

A Player will be defined with:
- Name
- Image (url)
- Body (Strenght)
- Mind (Intelligence)
- Luck
- HP (Probably)
- Status (Alive/Injured...)
- Inventory (containing Items unique per Type count or keep the best)
- Relationship (with other Players)

The Strenght, Mind and Luck are the stats used for the Challenges.
The stats can be incresed with Items.

An Item will be defined with:
- Name
- Type (*)
- Increment
- Description (?)

Type should be defined as:
- Type
- Stat
