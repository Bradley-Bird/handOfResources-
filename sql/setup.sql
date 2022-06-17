-- Use this file to define your SQL tables
-- The SQL IN this file will be executed WHEN you run `npm run setup-db`
--DROP

DROP TABLE IF EXISTS aliens;

DROP TABLE IF EXISTS lpotl_cast;
DROP TABLE IF EXISTS ff7;
--CREATE

CREATE TABLE aliens ( id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY, type VARCHAR, description VARCHAR );
CREATE TABLE lpotl_cast ( id BIGINT GENERATED ALWAYS AS IDENTITY, name VARCHAR, about VARCHAR);
CREATE TABLE ff7 (id BIGINT GENERATED ALWAYS AS IDENTITY, name VARCHAR, about VARCHAR);

--INSERT
--ALIENS
INSERT INTO aliens( type, description ) VALUES ('Flatwoods monster', 'Tall humanoid with a spade-shaped head'), ('Greys', 'Grey-skinned humanoids, usually 3 to 4 feet tall, hairless, with large heads, black almond-shaped eyes, nostrils without a nose, slits for mouths, no ears and 3-4 fingers including thumb. Greys have been the predominant extraterrestrial beings of alleged alien contact since the 1960s.'), ('Hopkinsville goblin', 'Small, greenish-silver humanoids.'), ('Little green men', 'Diminutive green humanoids. Even though a few abductions have referred to green skin, no report has ever involved anything that would fit the classic cultural stereotype of "Little Green Men". They are included here only for cultural reference.'), ('Nordic aliens', 'umanoids with stereotypical "Nordic features" (tall, blonde hair, blue eyes) and have featured in several cases of contact. It is said they are from Ancient Earth but presenting themselves as ETs in the past, they moved from living on the surface to live underground around the Himalayas area after a natural event.'), ('Reptilians and Reptiloids', 'Tall, scaly humanoids. Reptilian humanoid beings date back at least as far as Ancient Egypt, with the crocodile-headed river god Sobek. The Reptilian conspiracy theory has been advocated by David Icke');
--LPTOL
INSERT INTO lpotl_cast( name, about ) VALUES ('Ben Kissel', 'Podcaster and comedian best known as one of the co-hosts of the popular true crime and paranormal podcast The Last Podcast on the Left. He has also appeared as a political commentator on Fox News and HLN.'), ('Henry Thomas Zebrowski, Jr', 'An American actor, podcast host, and comedian, known for his work on the Adult Swim series Your Pretty Face Is Going to Hell, NBC series Heroes Reborn, and the podcast The Last Podcast on the Left. He also starred in an episode of Netflix Presents: The Characters.'), ('Marcus Parks', 'Podcast host, musician and producer best known for hosting The Last Podcast on the Left and No Dogs in Space. ');
--FF7
INSERT INTO ff7 (name, about ) VALUES ('Cloud Strife', 'Former First Class SOLDIER. After defecting from Shinra, Cloud began work as a mercenary for hire in Midgar. With his trusty broadsword in hand, he always gets the job done.'), ('Tifa Lockhart', 'A member of the anti-Shinra militant group Avalanche. Tifa manages Seventh Heaven, a bar located in the Sector 7 slums. A student of Zangan-style martial arts, she can clobber opponents with her fleet-footed combat techniques.'), ('Aerith Gainsborough', 'A flower peddler living \'s life force, she offers magical support to her comrades.'), ('Barret Wallace', 'A faction leader of the anti-Shinra militant group Avalanche. Barret is filled with a burning hatred for Shinra, a company he claims is destroying the plane. His right arm has been modified into a firearm, allowing him to attack his enemies at long range');