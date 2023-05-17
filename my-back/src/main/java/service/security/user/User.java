package service.security.user;

import lombok.*;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import javax.persistence.Id;
import java.util.Arrays;
import java.util.Collection;
import java.util.Objects;

@Document("users")
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class User implements UserDetails {

    @Id
    private String id;

    @Indexed(unique = true)
    private String username;
    @Indexed(unique = true)
    private String email;
    private String password;
    private String roles;

    public User(String username, String email, String password) {
        this.username = username;
        this.password = password;
        this.email = email;
    }

    public User(User user) {
        this.id = user.getId();
        this.username = user.getUsername();
        this.email = user.getEmail();
        this.roles = user.getRoles();
        this.password = user.getPassword();
    }
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        User user = (User) o;
        return id.equals(user.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {

        return Arrays.stream(this.roles.split(",")).map(this::roleOf).toList();
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

    private GrantedAuthority roleOf(String role) {
        return new GrantedAuthority() {
            @Override
            public String getAuthority() {
                return role;
            }
            @Override
            public String toString() {
                return role;
            }
        };
    }
}
