CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    username TEXT,
    password TEXT
);

CREATE TABLE IF NOT EXISTS clothing (
    id SERIAL PRIMARY KEY,
    user_id INTEGER,
    username TEXT,
    item_name TEXT,
    item_brand TEXT,
    item_size TEXT,
    item_color TEXT,
    item_catergories TEXT,
    image_file TEXT,
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
