package service.config.exceptionhandling.exceptions;

public class EntityNotFound extends RuntimeException {

    public EntityNotFound() {
        super("Entity not found");
    }

    public EntityNotFound(String message) {
        super( String.format("Entity not found: %s", message));
    }
}
