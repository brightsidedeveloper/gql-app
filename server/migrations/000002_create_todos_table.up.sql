CREATE TABLE todos (
    id         UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
    text       TEXT        NOT NULL,
    done       BOOLEAN     NOT NULL DEFAULT false,
    user_id    UUID        NOT NULL,

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

    -- Foreign key to users table (ensures user exists)
    CONSTRAINT fk_todos_user
        FOREIGN KEY (user_id) 
        REFERENCES users(id)
        ON DELETE CASCADE
);

-- Index for fast queries by user
CREATE INDEX idx_todos_user_id ON todos(user_id);

-- Auto-update updated_at (same trigger we already have)
CREATE TRIGGER set_updated_at
    BEFORE UPDATE ON todos
    FOR EACH ROW
    EXECUTE FUNCTION trigger_set_timestamp();