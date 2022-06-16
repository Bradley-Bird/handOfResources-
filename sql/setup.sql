-- Use this file to define your SQL tables
-- The SQL IN this file will be executed WHEN you run `npm run setup-db`
--DROP

DROP TABLE IF EXISTS aliens;
--CREATE

CREATE TABLE aliens ( id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY, type VARCHAR, description VARCHAR );
--INSERT
INSERT INTO aliens( type, description ) VALUES ('Flatwoods monster', 'Tall humanoid with a spade-shaped head'), ('Greys', 'Grey-skinned humanoids, usually 3 to 4 feet tall, hairless, with large heads, black almond-shaped eyes, nostrils without a nose, slits for mouths, no ears and 3-4 fingers including thumb. Greys have been the predominant extraterrestrial beings of alleged alien contact since the 1960s.'), ('Hopkinsville goblin', 'Small, greenish-silver humanoids.'), ('Little green men', 'Diminutive green humanoids. Even though a few abductions have referred to green skin, no report has ever involved anything that would fit the classic cultural stereotype of "Little Green Men". They are included here only for cultural reference.'), ('Nordic aliens', 'umanoids with stereotypical "Nordic features" (tall, blonde hair, blue eyes) and have featured in several cases of contact. It is said they are from Ancient Earth but presenting themselves as ETs in the past, they moved from living on the surface to live underground around the Himalayas area after a natural event.'), ('Reptilians and Reptiloids', 'Tall, scaly humanoids. Reptilian humanoid beings date back at least as far as Ancient Egypt, with the crocodile-headed river god Sobek. The Reptilian conspiracy theory has been advocated by David Icke');