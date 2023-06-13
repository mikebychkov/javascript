package service.security.user;

import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import service.config.exceptionhandling.exceptions.UserNotFound;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Log4j2
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    @Override
    public User findById(String id) {
        return userRepository.findById(id).orElseThrow(UserNotFound::new);
    }

    @Override
    public User findByIdOrNew(String id) {
        return userRepository.findById(id)
                .map(User::new)
                .map(u -> {
                    u.setPassword(null);
                    return u;
                }).orElse(new User());
    }

    @Override
    public User findByUsername(String username) {
        return userRepository.findByUsername(username).orElseThrow(UserNotFound::new);
    }

    @Override
    public List<User> findAll() {
        return userRepository.findAll();
    }

    @Override
    public User save(User user) {

        String id = Optional.ofNullable(user.getId()).filter(s -> !s.isBlank()).orElse(null);

        if (id != null && user.getPassword().isBlank()) {
            User dbuser = findById(user.getId());
            user.setPassword(dbuser.getPassword());
        } else {
            user.setId(null);
            user.setPassword(passwordEncoder.encode(user.getPassword()));
        }

        return userRepository.save(user);
    }

    @Override
    public UserDTO save(UserDTO dto) {

        User newUser = User.builder()
                .id(dto.getId())
                .username(dto.getUsername())
                .email(dto.getEmail())
                .password(dto.getPassword())
                .roles("ROLE_USER")
                .build();

        return Optional.of(save(newUser))
                .map(UserDTO::of)
                .get();
    }

    @Override
    public void deleteById(String id) {
        userRepository.deleteById(id);
    }
}
