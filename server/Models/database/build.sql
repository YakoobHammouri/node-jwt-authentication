BEGIN;


DROP TABLE IF EXISTS users CASCADE;


CREATE TABLE users(id SERIAL PRIMARY KEY,
                                     name TEXT NOT NULL,
                                               email VARCHAR(200),
                                                     password TEXT NOT NULL,
                                                                   phone NUMERIC NOT NULL,
                                                                                 role VARCHAR(200));


COMMIT;