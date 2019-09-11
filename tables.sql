CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    username TEXT,
    password TEXT
);

CREATE TABLE IF NOT EXISTS journals (
    id SERIAL PRIMARY KEY,
    user_id INTEGER,
    username TEXT,
    journal_date DATE,
    skin_rating INTEGER,
    journal_notes TEXT,
    image_file TEXT,
    create_at TIMESTAMP DEFAULT now()
);

CREATE TABLE IF NOT EXISTS routines (
    id SERIAL PRIMARY KEY,
    user_id INTEGER,
    cleanser TEXT,
    toner TEXT,
    moisturizer TEXT,
    treatment TEXT,
    sunblock TEXT,
    create_at TIMESTAMP DEFAULT now()
);

-- //FOR MANY TO MANY TABLES
-- CREATE TABLE IF NOT EXISTS users_clothing (
--     id SERIAL PRIMARY KEY,
--     user_id INTEGER,
--     clothing_id INTEGER,
--     FOREIGN KEY (user_id) REFERENCES users (id),
--     FOREIGN KEY (clothing_id) REFERENCES clothing (id)
-- );

-- CREATE TABLE IF NOT EXISTS outfits (
--     id SERIAL PRIMARY KEY,
--     user_id INTEGER,
--     item_id INTEGER
    -- FOREIGN KEY () REFERENCES  (id),
    -- FOREIGN KEY () REFERENCES  (id)
