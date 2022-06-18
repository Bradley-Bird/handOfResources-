-- Use this file to define your SQL tables
-- The SQL IN this file will be executed WHEN you run `npm run setup-db`
--DROP

DROP TABLE IF EXISTS aliens;

DROP TABLE IF EXISTS lpotl_cast;

DROP TABLE IF EXISTS ff7;

DROP TABLE IF EXISTS food;

DROP TABLE IF EXISTS legends;
--CREATE

CREATE TABLE aliens ( id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY, type VARCHAR, description VARCHAR );

CREATE TABLE lpotl_cast ( id BIGINT GENERATED ALWAYS AS IDENTITY, name VARCHAR, about VARCHAR);

CREATE TABLE ff7 (id BIGINT GENERATED ALWAYS AS IDENTITY, name VARCHAR, about VARCHAR);

CREATE TABLE food (id BIGINT GENERATED ALWAYS AS IDENTITY, name VARCHAR, region VARCHAR);

CREATE TABLE legends (id BIGINT GENERATED ALWAYS AS IDENTITY, name VARCHAR, role VARCHAR, about VARCHAR);
--INSERT
--ALIENS
INSERT INTO aliens( type, description ) VALUES ('Flatwoods monster', 'Tall humanoid with a spade-shaped head'), ('Greys', 'Grey-skinned humanoids, usually 3 to 4 feet tall, hairless, with large heads, black almond-shaped eyes, nostrils without a nose, slits for mouths, no ears and 3-4 fingers including thumb. Greys have been the predominant extraterrestrial beings of alleged alien contact since the 1960s.'), ('Hopkinsville goblin', 'Small, greenish-silver humanoids.'), ('Little green men', 'Diminutive green humanoids. Even though a few abductions have referred to green skin, no report has ever involved anything that would fit the classic cultural stereotype of "Little Green Men". They are included here only for cultural reference.'), ('Nordic aliens', 'umanoids with stereotypical "Nordic features" (tall, blonde hair, blue eyes) and have featured in several cases of contact. It is said they are from Ancient Earth but presenting themselves as ETs in the past, they moved from living on the surface to live underground around the Himalayas area after a natural event.'), ('Reptilians and Reptiloids', 'Tall, scaly humanoids. Reptilian humanoid beings date back at least as far as Ancient Egypt, with the crocodile-headed river god Sobek. The Reptilian conspiracy theory has been advocated by David Icke');
--LPTOL
INSERT INTO lpotl_cast( name, about ) VALUES ('Ben Kissel', 'Podcaster and comedian best known as one of the co-hosts of the popular true crime and paranormal podcast The Last Podcast on the Left. He has also appeared as a political commentator on Fox News and HLN.'), ('Henry Thomas Zebrowski, Jr', 'An American actor, podcast host, and comedian, known for his work on the Adult Swim series Your Pretty Face Is Going to Hell, NBC series Heroes Reborn, and the podcast The Last Podcast on the Left. He also starred in an episode of Netflix Presents: The Characters.'), ('Marcus Parks', 'Podcast host, musician and producer best known for hosting The Last Podcast on the Left and No Dogs in Space. ');
--FF7
INSERT INTO ff7 (name, about ) VALUES ('Cloud Strife', 'Former First Class SOLDIER. After defecting from Shinra, Cloud began work as a mercenary for hire in Midgar. With his trusty broadsword in hand, he always gets the job done.'), ('Tifa Lockhart', 'A member of the anti-Shinra militant group Avalanche. Tifa manages Seventh Heaven, a bar located in the Sector 7 slums. A student of Zangan-style martial arts, she can clobber opponents with her fleet-footed combat techniques.'), ('Aerith Gainsborough', 'A flower peddler living in the Sector 5 slums, Aerith has been under Shinra surveillance all her life because of her unique background. Capable of sensing the planets life force, she offers magical support to her comrades.'), ('Barret Wallace', 'A faction leader of the anti-Shinra militant group Avalanche. Barret is filled with a burning hatred for Shinra, a company he claims is destroying the plane. His right arm has been modified into a firearm, allowing him to attack his enemies at long range');
--FOOD
INSERT INTO food (name, region) VALUES ('Tonkatsu', 'Japan'), ('Adobo', 'Phillipines'), ('Tagliatelle ai funghi', 'Italy'), ('Pastitsio', 'Greece'), ('Purica s Mlincima', 'Croatia'), ('Xiaolongbao', 'China'), ('Sarma', 'Turkiya'), ('Cochinita pibil', 'Mexico');
--LEGENDS
INSERT INTO legends (name, role, about) VALUES ('BELVETH', 'FIGHTER', 'A nightmarish empress created from the raw material of an entire devoured city, BelVeth is the end of Runeterra itself... and the beginning of a monstrous reality of her own design. Driven by epochs of repurposed history, knowledge, and memories from the world above, she voraciously feeds an ever-expanding need for new experiences and emotions, consuming all that crosses her path. Yet her wants could never be sated by only one world as she turns her hungry eyes toward the Voids old masters...'), ('ANNIE', 'MAGE', 'Dangerous, yet disarmingly precocious, Annie is a child mage with immense pyromantic power. Even in the shadows of the mountains north of Noxus, she is a magical outlier. Her natural affinity for fire manifested early in life through unpredictable, emotional outbursts, though she eventually learned to control these “playful tricks.” Her favorite includes the summoning of her beloved teddy bear, Tibbers, as a fiery protector. Lost in the perpetual innocence of childhood, Annie wanders the dark forests, always looking for someone to play with.'), ('GRAVES', 'MARKSMAN', 'Malcolm Graves is a renowned mercenary, gambler, and thief—a wanted man in every city and empire he has visited. Even though he has an explosive temper, he possesses a strict sense of criminal honor, often enforced at the business end of his double-barreled shotgun Destiny. In recent years, he has reconciled a troubled partnership with Twisted Fate, and together they have prospered once more in the turmoil of Bilgewaters criminal underbelly.'), ('ORNN', 'TANK', 'Ornn is the Freljordian spirit of forging and craftsmanship. He works in the solitude of a massive smithy, hammered out from the lava caverns beneath the volcano Hearth-Home. There he stokes bubbling cauldrons of molten rock to purify ores and fashion items of unsurpassed quality. When other deities—especially Volibear—walk the earth and meddle in mortal affairs, Ornn arises to put these impetuous beings back in their place, either with his trusty hammer or the fiery power of the mountains themselves.'), ('EZREAL', 'MARKSMAN', 'A dashing adventurer, unknowingly gifted in the magical arts, Ezreal raids long-lost catacombs, tangles with ancient curses, and overcomes seemingly impossible odds with ease. His courage and bravado knowing no bounds, he prefers to improvise his way out of any situation, relying partially on his wits, but mostly on his mystical Shuriman gauntlet, which he uses to unleash devastating arcane blasts. One thing is for sure—whenever Ezreal is around, trouble isnt too far behind. Or ahead. Probably everywhere.');