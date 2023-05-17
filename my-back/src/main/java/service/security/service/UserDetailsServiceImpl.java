package service.security.service;

import service.security.user.User;
import service.security.user.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserDetailsServiceImpl implements UserDetailsService  {

    private final UserRepository repository;

    @Override
    public User loadUserByUsername(String username) throws UsernameNotFoundException {

        Optional<User> user = repository.findByUsernameIgnoreCase(username);

        return user.orElseThrow(() -> new UsernameNotFoundException("User not found."));
    }
}