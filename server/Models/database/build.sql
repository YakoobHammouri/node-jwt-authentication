BEGIN;


      DROP TABLE IF EXISTS users
      CASCADE;


CREATE TABLE users
(
      id SERIAL PRIMARY KEY,
      gid uuid NOT NULL,
      name TEXT NOT NULL,
      email VARCHAR(200),
      password TEXT NOT NULL,
      phone NUMERIC NOT NULL,
      role VARCHAR(200),
      isLogin bit ,
      AddTime timestamp
      with time zone NOT NULL 
      DEFAULT now
      (), 
      last_Login_Time timestamp
      with time zone
);


      COMMIT;