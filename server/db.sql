CREATE TABLE clients (
    id SERIAL PRIMARY KEY,
    name VARCHAR(128) NOT NULL,
    phone VARCHAR(32) NOT NULL,
    password VARCHAR(128) NOT NULL,
    city VARCHAR(128),
    address VARCHAR(256),
    summ INTEGER DEFAULT 0,
    activated BOOLEAN
);

CREATE TABLE clients_token (
    client_id INTEGER,
    refreshToken VARCHAR(128),
    FOREIGN KEY(client_id) REFERENCES clients(id)
);