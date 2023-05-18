package service.security.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import service.config.exceptionhandling.exceptions.UserNotFound;
import service.security.user.User;
import service.security.user.UserRepository;

import java.util.Optional;

@Service
@RequiredArgsConstructor
@Log4j2
public class UserDetailsServiceImpl implements UserDetailsService  {

    private final UserRepository repository;

    @Override
    public User loadUserByUsername(String username) throws UsernameNotFoundException {

        Optional<User> user = repository.findByUsernameIgnoreCase(username);

        return user.orElseThrow(UserNotFound::new);
    }
}