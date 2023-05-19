package service.api.dao.email;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import service.config.exceptionhandling.exceptions.EntityNotFound;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class EmailServiceImpl implements EmailService {

    private final EmailRepository emailRepository;

    @Override
    public EmailDTO findById(String id) {

        return emailRepository.findById(id)
                .map(EmailDTO::of)
                .orElseThrow(EntityNotFound::new);
    }

    @Override
    public List<EmailDTO> findByExample(Example<Email> example) {

        return emailRepository.findAll(example)
                .stream()
                .map(EmailDTO::of)
                .toList();
    }

    @Override
    public Page<EmailDTO> findAll(Pageable pageable) {

        return emailRepository.findAll(pageable)
                .map(EmailDTO::of);
    }

    @Override
    public List<EmailDTO> findAll() {

        return emailRepository.findAll()
                .stream()
                .map(EmailDTO::of)
                .toList();
    }

    @Override
    public EmailDTO save(EmailDTO dto) {

        return Optional.of(emailRepository.save(dto.toEntity()))
                .map(EmailDTO::of)
                .orElseThrow();
    }

    @Override
    public List<EmailDTO> saveAll(List<EmailDTO> dtoList) {

        return emailRepository.saveAll(
                        dtoList.stream()
                                .map(EmailDTO::toEntity)
                                .toList()
                )
                .stream()
                .map(EmailDTO::of)
                .toList();
    }

    @Override
    public void delete(String id) {

        emailRepository.deleteById(id);
    }
}
