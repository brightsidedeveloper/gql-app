DROP INDEX IF EXISTS idx_todos_user_id;
DROP TRIGGER IF EXISTS set_updated_at ON todos;
DROP TABLE IF EXISTS todos;