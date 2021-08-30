CREATE TABLE `migrations` (
	`id` int PRIMARY KEY AUTO_INCREMENT,
	`migration` varchar(191) NOT NULL,
	`batch` int NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = latin1;

CREATE TABLE `password_resets` (
	`id` int PRIMARY KEY AUTO_INCREMENT,
	`email` varchar(191) NOT NULL,
	`token` varchar(191) NOT NULL,
	`created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE = InnoDB DEFAULT CHARSET = latin1;

CREATE TABLE `users` (
	`id` int PRIMARY KEY AUTO_INCREMENT,
	`name` varchar(191) NOT NULL,
	`login` varchar(31) NOT NULL UNIQUE,
	`email` varchar(64) NOT NULL UNIQUE,
	`email_verified_at` timestamp NULL,
	`password` varchar(191) NOT NULL,
	`remember_token` varchar(100) DEFAULT NULL,
	`permissao` enum('ADMINISTRADOR', 'USUARIO', 'INATIVO') NOT NULL,
	`created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
	`updated_at` timestamp NULL DEFAULT NULL
) ENGINE = InnoDB DEFAULT CHARSET = latin1;

create table failed_jobs (
	`id` int PRIMARY KEY AUTO_INCREMENT,
	`uuid`  varchar(191) UNIQUE,
	`connection`  TEXT,
	`queue` TEXT,
	`payload` TEXT,
	`exception` TEXT,
	`failed_at`  timestamp NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE = InnoDB DEFAULT CHARSET = latin1;

create table colony_actions (
	`id` int PRIMARY KEY,
	`descricao` varchar(63) NOT NULL,
	`dia_semana_id` int NOT NULL,
	`sequencial` int NOT NULL,
	`created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
	`updated_at` timestamp NULL DEFAULT NULL
) ENGINE = InnoDB DEFAULT CHARSET = latin1;

create table plunder_saves (
	`id` int PRIMARY KEY AUTO_INCREMENT,
	`classe_atk` enum('CULTIVATOR','RAIDER','HERDER') NOT NULL,
	`classe_def` enum('CULTIVATOR','RAIDER','HERDER') NOT NULL,
	`diff_level` int NOT NULL,
	`carga` int NOT NULL,
	`has_scout` boolean NOT NULL,
	`scout_meat` int,
	`scout_plant` int,
	`scout_soil` int,
	`scout_sand` int,
	`scout_honeydew` int,
	`meat_result` int NOT NULL,
	`plant_result` int NOT NULL,
	`soil_result` int NOT NULL,
	`sand_result` int NOT NULL,
	`honeydew_result` int,
	`client` VARCHAR(31) NOT NULL,
	`created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
	`updated_at` timestamp NULL DEFAULT NULL
) ENGINE = InnoDB DEFAULT CHARSET = latin1;

INSERT INTO colony_actions(id,descricao,dia_semana_id,sequencial)  VALUES (1,'Building',1,0);
INSERT INTO colony_actions(id,descricao,dia_semana_id,sequencial)  VALUES (2,'Evolution + Evolution Speedups',1,1);
INSERT INTO colony_actions(id,descricao,dia_semana_id,sequencial)  VALUES (3,'Building',1,2);
INSERT INTO colony_actions(id,descricao,dia_semana_id,sequencial)  VALUES (4,'Use Any Speedup',1,3);
INSERT INTO colony_actions(id,descricao,dia_semana_id,sequencial)  VALUES (5,'Building + Evolution',1,4);
INSERT INTO colony_actions(id,descricao,dia_semana_id,sequencial)  VALUES (6,'Building + Building Speedup',1,5);
INSERT INTO colony_actions(id,descricao,dia_semana_id,sequencial)  VALUES (7,'Building + Evolution + Hatching Troops',1,6);
INSERT INTO colony_actions(id,descricao,dia_semana_id,sequencial)  VALUES (8,'Building + Evolution + Hatching Troops',1,7);
INSERT INTO colony_actions(id,descricao,dia_semana_id,sequencial)  VALUES (9,'Building + Building Speedup',2,0);
INSERT INTO colony_actions(id,descricao,dia_semana_id,sequencial)  VALUES (10,'Building',2,1);
INSERT INTO colony_actions(id,descricao,dia_semana_id,sequencial)  VALUES (11,'Hatching Speedup',2,2);
INSERT INTO colony_actions(id,descricao,dia_semana_id,sequencial)  VALUES (12,'Building + Hatching Troops',2,3);
INSERT INTO colony_actions(id,descricao,dia_semana_id,sequencial)  VALUES (13,'Building Speedup + Evolution Speedup + Hatching Speedup',2,4);
INSERT INTO colony_actions(id,descricao,dia_semana_id,sequencial)  VALUES (14,'Building + Evolution + Hatching Speedup',2,5);
INSERT INTO colony_actions(id,descricao,dia_semana_id,sequencial)  VALUES (15,'Building + Evolution + Hatching Troops',2,6);
INSERT INTO colony_actions(id,descricao,dia_semana_id,sequencial)  VALUES (16,'Building',2,7);
INSERT INTO colony_actions(id,descricao,dia_semana_id,sequencial)  VALUES (17,'Building + Building Speedup',3,0);
INSERT INTO colony_actions(id,descricao,dia_semana_id,sequencial)  VALUES (18,'Evolution + Evolution Speedup + Creature Remains',3,1);
INSERT INTO colony_actions(id,descricao,dia_semana_id,sequencial)  VALUES (19,'Hatching Speedup',3,2);
INSERT INTO colony_actions(id,descricao,dia_semana_id,sequencial)  VALUES (20,'Building + Evolution + Creature Remains',3,3);
INSERT INTO colony_actions(id,descricao,dia_semana_id,sequencial)  VALUES (21,'Building + Hatching Troops',3,4);
INSERT INTO colony_actions(id,descricao,dia_semana_id,sequencial)  VALUES (22,'Building Speedup + Evolution Speedup + Hatching Speedup + Creature Remains',3,5);
INSERT INTO colony_actions(id,descricao,dia_semana_id,sequencial)  VALUES (23,'Building + Evolution + Hatching Speedup',3,6);
INSERT INTO colony_actions(id,descricao,dia_semana_id,sequencial)  VALUES (24,'Building Speedup + Evolution Speedup + Hatching Speedup + Creature Remains',3,7);
INSERT INTO colony_actions(id,descricao,dia_semana_id,sequencial)  VALUES (25,'Building + Building Speedup',4,0);
INSERT INTO colony_actions(id,descricao,dia_semana_id,sequencial)  VALUES (26,'All Special Ant Development',4,1);
INSERT INTO colony_actions(id,descricao,dia_semana_id,sequencial)  VALUES (27,'Building Speedup + Evolution Speedup + Hatching Speedup',4,2);
INSERT INTO colony_actions(id,descricao,dia_semana_id,sequencial)  VALUES (28,'All Special Ant Development',4,3);
INSERT INTO colony_actions(id,descricao,dia_semana_id,sequencial)  VALUES (29,'Use Any Speedup',4,4);
INSERT INTO colony_actions(id,descricao,dia_semana_id,sequencial)  VALUES (30,'All Special Ant Development',4,5);
INSERT INTO colony_actions(id,descricao,dia_semana_id,sequencial)  VALUES (31,'Building + Evolution + Hatching Speedup',4,6);
INSERT INTO colony_actions(id,descricao,dia_semana_id,sequencial)  VALUES (32,'All Special Ant Development',4,7);
INSERT INTO colony_actions(id,descricao,dia_semana_id,sequencial)  VALUES (33,'Use Any Speedup',5,0);
INSERT INTO colony_actions(id,descricao,dia_semana_id,sequencial)  VALUES (34,'Building Speedup + Evolution Speedup + Hatching Speedup',5,1);
INSERT INTO colony_actions(id,descricao,dia_semana_id,sequencial)  VALUES (35,'Building + Evolution + Hatching Speedup',5,2);
INSERT INTO colony_actions(id,descricao,dia_semana_id,sequencial)  VALUES (36,'Hatching Speedup',5,3);
INSERT INTO colony_actions(id,descricao,dia_semana_id,sequencial)  VALUES (37,'Building + Evolution + Hatching Speedup',5,4);
INSERT INTO colony_actions(id,descricao,dia_semana_id,sequencial)  VALUES (38,'Building + Hatching Troops',5,5);
INSERT INTO colony_actions(id,descricao,dia_semana_id,sequencial)  VALUES (39,'Evolution + Hatching Troops',5,6);
INSERT INTO colony_actions(id,descricao,dia_semana_id,sequencial)  VALUES (40,'Use Any Speedup',5,7);
INSERT INTO colony_actions(id,descricao,dia_semana_id,sequencial)  VALUES (41,'Use Any Speedup',6,0);
INSERT INTO colony_actions(id,descricao,dia_semana_id,sequencial)  VALUES (42,'Evolution + Evolution Speedup',6,1);
INSERT INTO colony_actions(id,descricao,dia_semana_id,sequencial)  VALUES (43,'Building + Building Speedup',6,2);
INSERT INTO colony_actions(id,descricao,dia_semana_id,sequencial)  VALUES (44,'Use Hatching Speedup',6,3);
INSERT INTO colony_actions(id,descricao,dia_semana_id,sequencial)  VALUES (45,'Building + Evolution + Hatching Speedup',6,4);
INSERT INTO colony_actions(id,descricao,dia_semana_id,sequencial)  VALUES (46,'Building + Evolution + Hatching Speedup',6,5);
INSERT INTO colony_actions(id,descricao,dia_semana_id,sequencial)  VALUES (47,'Building + Hatching Troops',6,6);
INSERT INTO colony_actions(id,descricao,dia_semana_id,sequencial)  VALUES (48,'Evolution + Hatching Troops',6,7);
INSERT INTO colony_actions(id,descricao,dia_semana_id,sequencial)  VALUES (49,'Building + Building Speedup',7,0);
INSERT INTO colony_actions(id,descricao,dia_semana_id,sequencial)  VALUES (50,'All Insect Development + Use Any Speedup',7,1);
INSERT INTO colony_actions(id,descricao,dia_semana_id,sequencial)  VALUES (51,'Building + Evolution + Hatching Speedup',7,2);
INSERT INTO colony_actions(id,descricao,dia_semana_id,sequencial)  VALUES (52,'All Insect Development + Evolution + Evolution Speedup',7,3);
INSERT INTO colony_actions(id,descricao,dia_semana_id,sequencial)  VALUES (53,'Use Any Speedup',7,4);
INSERT INTO colony_actions(id,descricao,dia_semana_id,sequencial)  VALUES (54,'All Insect Development + Hatching Speedup',7,5);
INSERT INTO colony_actions(id,descricao,dia_semana_id,sequencial)  VALUES (55,'Building + Evolution + Hatching Speedup',7,6);
INSERT INTO colony_actions(id,descricao,dia_semana_id,sequencial)  VALUES (56,'All Insect Development + Use Any Speedup',7,7);