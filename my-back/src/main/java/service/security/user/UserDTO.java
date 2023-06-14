package service.security.user;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
//@JsonInclude(JsonInclude.Include.NON_NULL)
public class UserDTO {

    private String id;

    @NotBlank(message = "Username not defined")
    private String username;

    @Email(message = "Must be a valid email address")
    private String email;

//    @NotBlank(message = "Password not defined")
    private String password;

    public UserDTO(User user) {
        this.id = user.getId();
        this.username = user.getUsername();
        this.email = user.getEmail();
    }

    public static UserDTO of(User user) {

        return new UserDTO(user);
    }
}
