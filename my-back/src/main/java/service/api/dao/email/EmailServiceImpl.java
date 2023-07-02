package service.api.dao.email;

import lombok.RequiredArgsConstructor;
import org.apache.commons.lang3.NotImplementedException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Service;
import service.api.service.EntityServiceImpl;
import service.config.exceptionhandling.exceptions.EntityNotFound;

import javax.validation.Valid;
import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Service
public class EmailServiceImpl extends EntityServiceImpl<EmailCard, EmailDTO> implements EmailService {

    private final EmailRepository emailRepository;

    @Autowired
    public EmailServiceImpl(EmailRepository emailRepository) {
        super(emailRepository);
        this.emailRepository = emailRepository;
    }

    @Override
    public EmailDTO save(EmailDTO dto) {

        validateEmail(dto);

        return super.save(dto);
    }

    private void validateEmail(@Valid EmailDTO dto) {

        List<EmailCard> rsl = emailRepository.findEmailsByIP(dto.getIp(), LocalDate.now());
        if (rsl.size() >= 5) {
            throw new RuntimeException("Email allowed count exceeded");
        }
    }

    @Override
    public List<EmailDTO> saveAll(List<EmailDTO> dtoList) {

        throw new UnsupportedOperationException();
    }


    //    private final EmailRepository emailRepository;
//
//    @Override
//    public EmailDTO findById(String id) {
//
//        return emailRepository.findById(id)
//                .map(EmailDTO::of)
//                .orElseThrow(EntityNotFound::new);
//    }
//
//    @Override
//    public List<EmailDTO> findByExample(Example<EmailCard> example) {
//
//        return emailRepository.findAll(example)
//                .stream()
//                .map(EmailDTO::of)
//                .toList();
//    }
//
//    @Override
//    public Page<EmailDTO> findAll(Pageable pageable) {
//
//        return emailRepository.findAll(pageable)
//                .map(EmailDTO::of);
//    }
//
//    @Override
//    public List<EmailDTO> findAll() {
//
//        return emailRepository.findAll()
//                .stream()
//                .map(EmailDTO::of)
//                .toList();
//    }
//
//    @Override
//    public EmailDTO save(EmailDTO dto) {
//
//        validateEmail(dto);
//
//        return Optional.of(emailRepository.save(dto.toEntity()))
//                .map(EmailDTO::of)
//                .orElseThrow();
//    }
//
//    private void validateEmail(@Valid EmailDTO dto) {
//
//        List<EmailCard> rsl = emailRepository.findEmailsByIP(dto.getIp(), LocalDate.now());
//        if (rsl.size() >= 5) {
//            throw new RuntimeException("Email allowed count exceeded");
//        }
//    }
//
//    @Override
//    public List<EmailDTO> saveAll(List<EmailDTO> dtoList) {
//
//        throw new UnsupportedOperationException();
//    }
//
//    @Override
//    public void delete(String id) {
//
//        emailRepository.deleteById(id);
//    }
//
//    @Override
//    public void deleteAll(List<String> ids) {
//
//        emailRepository.deleteAllById(ids);
//    }
}
