package service.config.exceptionhandling.exceptions;

public class UserNotFound extends RuntimeException {

    public UserNotFound() {
        super("User not found");
    }
}
